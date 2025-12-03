"use client";

import { motion } from "framer-motion";

/**
 * ═══════════════════════════════════════════════════════════════
 * 👗 COMPONENTE DRESS CODE
 * Sección de código de vestimenta
 * Con iconos de ropa y animaciones elegantes
 * ═══════════════════════════════════════════════════════════════
 */

interface DressCodeProps {
  /** Tipo de vestimenta */
  tipo?: string;
  /** Descripción adicional */
  descripcion?: string;
  /** Colores sugeridos */
  colores?: string[];
  /** Mostrar colores a evitar */
  colorEvitar?: string;
}

export default function DressCode({
  tipo = "Formal / Elegante",
  descripcion = "Te invitamos a vestir de manera elegante para esta ocasión especial",
  colores = ["Rosa palo", "Dorado", "Champagne", "Nude"],
  colorEvitar = "blanco",
}: DressCodeProps) {
  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const iconHoverVariants = {
    hover: {
      y: -5,
      scale: 1.05,
      transition: { type: "spring" as const, stiffness: 300 },
    },
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Decoraciones sutiles */}
      <div className="absolute top-20 left-0 w-56 h-56 rounded-full bg-[#9575cd]/10 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-48 h-48 rounded-full bg-[#d4af37]/5 blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-lg mx-auto text-center"
      >
        {/* Título */}
        <motion.div variants={itemVariants} className="mb-10">
          <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase 
                        tracking-[0.3em] text-[#d4af37] mb-2">
            Código de Vestimenta
          </p>
          <h2 className="font-[family-name:var(--font-great-vibes)] text-4xl md:text-5xl 
                         text-[#5e35b1]">
            Dress Code
          </h2>
        </motion.div>

        {/* Iconos de vestimenta */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8 md:gap-12 mb-8"
        >
          {/* Icono vestido - VIOLETA */}
          <motion.div
            variants={iconHoverVariants}
            whileHover="hover"
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full glass-strong 
                            flex items-center justify-center shadow-lg mb-3">
              <svg
                className="w-10 h-10 md:w-12 md:h-12 text-[#7e57c2]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C10.34 2 9 3.34 9 5c0 .66.21 1.26.57 1.76L7 10l-4 9h6v3h6v-3h6l-4-9-2.57-3.24C14.79 6.26 15 5.66 15 5c0-1.66-1.34-3-3-3zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
              </svg>
            </div>
            <span className="font-[family-name:var(--font-montserrat)] text-xs 
                             text-[#8b7355] uppercase tracking-wider">
              Damas
            </span>
          </motion.div>

          {/* Icono traje */}
          <motion.div
            variants={iconHoverVariants}
            whileHover="hover"
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full glass-strong 
                            flex items-center justify-center shadow-lg mb-3">
              <svg
                className="w-10 h-10 md:w-12 md:h-12 text-[#4a3728]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 2l2 4h8l2-4H6zm8 5H10l-2 3 6 11 6-11-2-3h-4zm-5.5 1h7l-3.5 6.5L8.5 8z" />
                <path d="M12 8l-4 7v7h8v-7l-4-7zm0 2.5l2.5 4.5h-5l2.5-4.5z" opacity="0.6" />
              </svg>
            </div>
            <span className="font-[family-name:var(--font-montserrat)] text-xs 
                             text-[#8b7355] uppercase tracking-wider">
              Caballeros
            </span>
          </motion.div>
        </motion.div>

        {/* Tipo de vestimenta */}
        <motion.div
          variants={itemVariants}
          className="glass-strong p-6 md:p-8 mb-6"
        >
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl 
                         text-[#4a3728] font-semibold mb-3">
            {tipo}
          </h3>
          <p className="font-[family-name:var(--font-cormorant)] text-base md:text-lg 
                        text-[#8b7355]">
            {descripcion}
          </p>
        </motion.div>

        {/* Colores sugeridos */}
        {colores.length > 0 && (
          <motion.div variants={itemVariants} className="mb-6">
            <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase 
                          tracking-widest text-[#d4af37] mb-4">
              Colores Sugeridos
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {colores.map((color, index) => (
                <motion.span
                  key={color}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="px-4 py-2 rounded-full glass text-sm 
                             font-[family-name:var(--font-cormorant)] text-[#4a3728]
                             border border-[#d4af37]/30"
                >
                  {color}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Aviso de color a evitar */}
        {colorEvitar && (
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-sm"
          >
            <span className="text-[#9575cd]">❀</span>
            <p className="font-[family-name:var(--font-cormorant)] text-[#7e6b8a] italic">
              Por favor evitar el color {colorEvitar}
            </p>
            <span className="text-[#9575cd]">❀</span>
          </motion.div>
        )}

        {/* Decoración inferior */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
          <span className="text-[#d4af37]/60 text-lg">✿</span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

