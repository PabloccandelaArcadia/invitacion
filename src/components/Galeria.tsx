"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ═══════════════════════════════════════════════════════════════
 * 📸 COMPONENTE GALERÍA
 * Grid de fotos con animaciones suaves
 * Lightbox opcional para ver fotos en grande
 * ═══════════════════════════════════════════════════════════════
 */

interface Foto {
  id: number;
  src: string;
  alt: string;
}

interface GaleriaProps {
  /** Array de fotos (usar imágenes de /public) */
  fotos?: Foto[];
  /** Título de la sección */
  titulo?: string;
}

// Fotos de ejemplo con placeholders
const fotosDefault: Foto[] = [
  { id: 1, src: "/gallery/foto1.jpg", alt: "Momento especial 1" },
  { id: 2, src: "/gallery/foto2.jpg", alt: "Momento especial 2" },
  { id: 3, src: "/gallery/foto3.jpg", alt: "Momento especial 3" },
  { id: 4, src: "/gallery/foto4.jpg", alt: "Momento especial 4" },
  { id: 5, src: "/gallery/foto5.jpg", alt: "Momento especial 5" },
  { id: 6, src: "/gallery/foto6.jpg", alt: "Momento especial 6" },
];

export default function Galeria({
  fotos = fotosDefault,
  titulo = "Momentos Especiales",
}: GaleriaProps) {
  const [selectedFoto, setSelectedFoto] = useState<Foto | null>(null);

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Decoraciones sutiles */}
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-[#9575cd]/10 blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-64 h-64 rounded-full bg-[#ce93d8]/10 blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        {/* Título */}
        <motion.div variants={titleVariants} className="text-center mb-12">
          <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase 
                        tracking-[0.3em] text-[#d4af37] mb-2">
            Galería
          </p>
          <h2 className="font-[family-name:var(--font-great-vibes)] text-4xl md:text-5xl 
                         text-[#5e35b1]">
            {titulo}
          </h2>
        </motion.div>

        {/* Grid de fotos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {fotos.map((foto, index) => (
            <motion.div
              key={foto.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedFoto(foto)}
              className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer
                          shadow-lg group ${
                            index === 0 || index === 5
                              ? "md:col-span-2 md:row-span-2"
                              : ""
                          }`}
            >
              {/* Placeholder decorativo - VIOLETA */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e1bee7] via-[#ce93d8] to-[#9575cd]">
                {/* Patrón decorativo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/30 text-6xl">✿</div>
                </div>
                
                {/* Número de foto */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full 
                                bg-white/30 backdrop-blur-sm flex items-center 
                                justify-center text-white font-[family-name:var(--font-montserrat)] 
                                text-xs">
                  {foto.id}
                </div>
              </div>

              {/* Overlay al hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-[#4a3728]/60 via-transparent 
                           to-transparent flex items-end justify-center pb-4"
              >
                <span className="text-white font-[family-name:var(--font-cormorant)] 
                                 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver foto
                </span>
              </motion.div>

              {/* Borde decorativo */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/20 
                              pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Nota sobre las fotos */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-center font-[family-name:var(--font-cormorant)] 
                     text-sm text-[#8b7355] italic"
        >
          * Coloca tus fotos en la carpeta /public/gallery
        </motion.p>

        {/* Decoración inferior */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
          <span className="text-[#d4af37]/60 text-lg">📷</span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
        </motion.div>
      </motion.div>

      {/* Lightbox para ver foto en grande */}
      <AnimatePresence>
        {selectedFoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFoto(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm 
                       flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full aspect-square rounded-3xl overflow-hidden 
                         shadow-2xl bg-gradient-to-br from-[#fce4ec] via-[#f8bbd9] to-[#ce93d8]"
            >
              {/* Contenido de la foto */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/40 text-8xl">✿</div>
              </div>

              {/* Botón cerrar */}
              <button
                onClick={() => setSelectedFoto(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full 
                           bg-white/20 backdrop-blur-sm flex items-center 
                           justify-center text-white hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

