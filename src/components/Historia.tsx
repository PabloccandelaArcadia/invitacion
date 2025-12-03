"use client";

import { motion } from "framer-motion";

/**
 * ═══════════════════════════════════════════════════════════════
 * 💝 COMPONENTE HISTORIA / MENSAJE
 * Sección con mensaje emotivo de bienvenida
 * Animaciones tipo reveal al hacer scroll
 * ═══════════════════════════════════════════════════════════════
 */

interface HistoriaProps {
  /** Título de la sección */
  titulo?: string;
  /** Mensaje principal */
  mensaje?: string;
  /** Mensaje secundario */
  mensajeSecundario?: string;
}

export default function Historia({
  titulo = "Un sueño hecho realidad",
  mensaje = `Llegó el momento de celebrar mis 15 años, un sueño que florece en mi corazón. 
             Quiero vivir este día tan especial con las personas que hacen mi vida más dulce 
             e iluminada.`,
  mensajeSecundario = `Vengan a festejar conmigo y a guardar para siempre esta linda recordación. 
                        Espero contar con tu presencia en esta noche mágica.`,
}: HistoriaProps) {
  // Variantes de animación para el contenedor
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Variantes para elementos con efecto reveal
  const revealVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Variantes para la imagen/decoración
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  // Variantes para líneas decorativas
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Decoración de fondo - círculos suaves */}
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-[#ce93d8]/10 blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-72 h-72 rounded-full bg-[#9575cd]/10 blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        {/* Decoración superior - marco floral */}
        <motion.div
          variants={imageVariants}
          className="flex justify-center mb-8"
        >
          <div className="relative w-24 h-24">
            {/* Círculo decorativo */}
            <div className="absolute inset-0 rounded-full border-2 border-[#d4af37]/30 
                            animate-slow-spin" />
            <div className="absolute inset-2 rounded-full border border-[#f8bbd9]/50" />
            
            {/* Icono central */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-[#d4af37]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Título */}
        <motion.h2
          variants={revealVariants}
          className="text-center font-[family-name:var(--font-great-vibes)] text-4xl md:text-5xl 
                     text-[#5e35b1] mb-8"
        >
          {titulo}
        </motion.h2>

        {/* Línea decorativa */}
        <motion.div
          variants={lineVariants}
          className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-8"
          style={{ originX: 0.5 }}
        />

        {/* Mensaje principal */}
        <motion.div
          variants={revealVariants}
          className="glass p-6 md:p-8 mb-6"
        >
          <p className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl 
                        text-[#4a3750] leading-relaxed text-center">
            {mensaje}
          </p>
        </motion.div>

        {/* Mensaje secundario */}
        <motion.p
          variants={revealVariants}
          className="font-[family-name:var(--font-cormorant)] text-base md:text-lg 
                     text-[#7e6b8a] italic text-center leading-relaxed px-4"
        >
          {mensajeSecundario}
        </motion.p>

        {/* Firma decorativa */}
        <motion.div
          variants={revealVariants}
          className="mt-10 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
            <span className="text-[#d4af37] text-xl">♡</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
          </div>
          <p className="font-[family-name:var(--font-great-vibes)] text-2xl text-[#d4af37]">
            Con cariño
          </p>
        </motion.div>

        {/* Flores decorativas - VIOLETA */}
        <motion.div
          variants={imageVariants}
          className="absolute -bottom-10 left-0 w-32 h-32 opacity-20 pointer-events-none"
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <circle cx="30" cy="70" r="20" fill="#ce93d8" />
            <circle cx="50" cy="50" r="15" fill="#9575cd" />
            <circle cx="70" cy="75" r="18" fill="#e1bee7" />
          </svg>
        </motion.div>
        <motion.div
          variants={imageVariants}
          className="absolute -bottom-10 right-0 w-32 h-32 opacity-20 pointer-events-none scale-x-[-1]"
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <circle cx="30" cy="70" r="20" fill="#ce93d8" />
            <circle cx="50" cy="50" r="15" fill="#9575cd" />
            <circle cx="70" cy="75" r="18" fill="#e1bee7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

