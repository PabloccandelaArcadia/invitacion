"use client";

import { motion } from "framer-motion";
import Sparkles from "./Sparkles";

/**
 * ═══════════════════════════════════════════════════════════════
 * 💖 COMPONENTE AGRADECIMIENTO
 * Sección final con mensaje de agradecimiento
 * Incluye firma y efectos visuales elegantes
 * ═══════════════════════════════════════════════════════════════
 */

interface AgradecimientoProps {
  /** Nombre de la quinceañera */
  nombre?: string;
  /** Mensaje de agradecimiento */
  mensaje?: string;
  /** Nombres de los padres (opcional) */
  padres?: string;
  /** Nombres de los padrinos (opcional) */
  padrinos?: string;
}

export default function Agradecimiento({
  nombre = "Valentina",
  mensaje = "Gracias por ser parte de este momento tan especial en mi vida. Tu presencia hará de esta noche un recuerdo inolvidable.",
  padres = "María García & Juan Pérez",
  padrinos = "Ana López & Carlos Martínez",
}: AgradecimientoProps) {
  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">

      {/* Efecto de glow central */}
      <motion.div
        variants={glowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[600px] h-[600px] rounded-full bg-[#d4af37]/10 blur-[100px]"
      />

      {/* Partículas brillantes */}
      <Sparkles count={30} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-lg mx-auto text-center"
      >
        {/* Icono decorativo superior */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <svg
              className="w-16 h-16 mx-auto text-[#d4af37]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Título */}
        <motion.h2
          variants={itemVariants}
          className="font-[family-name:var(--font-great-vibes)] text-4xl md:text-6xl 
                     text-[#5e35b1] mb-6"
        >
          ¡Te esperamos!
        </motion.h2>

        {/* Mensaje de agradecimiento */}
        <motion.p
          variants={itemVariants}
          className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl 
                     text-[#4a3750] leading-relaxed mb-10 px-4"
        >
          {mensaje}
        </motion.p>

        {/* Firma */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <motion.p
            animate={{ 
              textShadow: [
                "0 0 10px rgba(212, 175, 55, 0.3)",
                "0 0 20px rgba(212, 175, 55, 0.5)",
                "0 0 10px rgba(212, 175, 55, 0.3)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="font-[family-name:var(--font-great-vibes)] text-5xl md:text-7xl 
                       text-[#d4af37]"
          >
            {nombre}
          </motion.p>
        </motion.div>

        {/* Línea decorativa */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="w-20 h-px bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span className="text-[#d4af37] text-2xl">✦</span>
          <span className="w-20 h-px bg-gradient-to-l from-transparent to-[#d4af37]" />
        </motion.div>

        {/* Información de padres y padrinos */}
        <motion.div
          variants={itemVariants}
          className="glass p-6 md:p-8 mb-8"
        >
          {/* Padres */}
          {padres && (
            <div className="mb-6">
              <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase 
                            tracking-widest text-[#d4af37] mb-2">
                Mis Padres
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#4a3728]">
                {padres}
              </p>
            </div>
          )}

          {/* Padrinos */}
          {padrinos && (
            <div>
              <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase 
                            tracking-widest text-[#d4af37] mb-2">
                Mis Padrinos
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#4a3728]">
                {padrinos}
              </p>
            </div>
          )}
        </motion.div>

        {/* Footer con corazones */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2"
        >
          {["💕", "✨", "💕"].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ 
                y: [0, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className="text-2xl"
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>

        {/* Copyright discreto */}
        <motion.p
          variants={itemVariants}
          className="mt-12 font-[family-name:var(--font-montserrat)] text-xs 
                     text-[#8b7355]/60 tracking-wider"
        >
          Con amor, {new Date().getFullYear()}
        </motion.p>
      </motion.div>

      {/* Decoraciones flotantes en las esquinas - VIOLETA */}
      <div className="absolute bottom-0 left-0 w-40 h-40 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <circle cx="20" cy="80" r="25" fill="#9575cd" />
          <circle cx="45" cy="60" r="18" fill="#7e57c2" />
          <circle cx="15" cy="50" r="15" fill="#d4af37" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20 pointer-events-none scale-x-[-1]">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <circle cx="20" cy="80" r="25" fill="#9575cd" />
          <circle cx="45" cy="60" r="18" fill="#7e57c2" />
          <circle cx="15" cy="50" r="15" fill="#d4af37" />
        </svg>
      </div>
    </section>
  );
}

