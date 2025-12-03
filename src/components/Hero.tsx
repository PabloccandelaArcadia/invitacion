"use client";

import { motion } from "framer-motion";
import Sparkles from "./Sparkles";

/**
 * ═══════════════════════════════════════════════════════════════
 * 🎀 COMPONENTE HERO
 * Sección principal con animación de entrada
 * Incluye título, nombre, fecha y botón CTA
 * ═══════════════════════════════════════════════════════════════
 */

interface HeroProps {
  /** Nombre de la quinceañera */
  nombre?: string;
  /** Fecha del evento */
  fecha?: string;
  /** Frase emotiva */
  frase?: string;
  /** Callback al hacer click en "Ver invitación" */
  onVerInvitacion?: () => void;
}

export default function Hero({
  nombre = "Valentina",
  fecha = "15 de Marzo, 2025",
  frase = "Un sueño que florece en mi corazón",
  onVerInvitacion,
}: HeroProps) {
  // Variantes de animación para contenedor
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Variantes para elementos hijos
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Variante especial para el nombre con efecto de escala
  const nombreVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Variante para el botón
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.5,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 40px rgba(212, 175, 55, 0.4)",
    },
    tap: { scale: 0.98 },
  };

  // Scroll suave a la siguiente sección
  const handleVerInvitacion = () => {
    if (onVerInvitacion) {
      onVerInvitacion();
    } else {
      const nextSection = document.getElementById("countdown");
      nextSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-12">
      {/* Fondo decorativo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fce4ec]/80 via-[#fff8e1]/60 to-[#f3e5f5]/80" />
      
      {/* Círculos decorativos de fondo */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#f8bbd9]/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#ce93d8]/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#f5e6a3]/20 blur-3xl" />

      {/* Partículas brillantes */}
      <Sparkles count={25} />

      {/* Contenido principal */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-lg mx-auto"
      >
        {/* Corona o decoración superior */}
        <motion.div
          variants={itemVariants}
          className="mb-4"
        >
          <svg
            className="w-16 h-16 mx-auto text-[#d4af37]"
            viewBox="0 0 64 64"
            fill="currentColor"
          >
            <path d="M32 4L36 16L48 12L44 24L56 28L44 32L48 44L36 40L32 52L28 40L16 44L20 32L8 28L20 24L16 12L28 16L32 4Z" />
          </svg>
        </motion.div>

        {/* Texto "Mis XV Años" */}
        <motion.p
          variants={itemVariants}
          className="font-[family-name:var(--font-montserrat)] text-sm md:text-base 
                     uppercase tracking-[0.3em] text-[#d4af37] mb-2"
        >
          Mis XV Años
        </motion.p>

        {/* Nombre de la quinceañera */}
        <motion.h1
          variants={nombreVariants}
          className="font-[family-name:var(--font-great-vibes)] text-6xl md:text-8xl 
                     text-[#4a3728] mb-4 leading-tight"
        >
          {nombre}
        </motion.h1>

        {/* Línea decorativa */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span className="text-[#d4af37] text-2xl">✦</span>
          <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]" />
        </motion.div>

        {/* Frase emotiva */}
        <motion.p
          variants={itemVariants}
          className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl 
                     text-[#8b7355] italic mb-8 px-4"
        >
          "{frase}"
        </motion.p>

        {/* Fecha */}
        <motion.div
          variants={itemVariants}
          className="mb-10"
        >
          <p className="font-[family-name:var(--font-montserrat)] text-base md:text-lg 
                        text-[#4a3728] tracking-wider">
            {fecha}
          </p>
        </motion.div>

        {/* Botón Ver Invitación */}
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          onClick={handleVerInvitacion}
          className="btn-gold font-[family-name:var(--font-montserrat)] text-sm 
                     uppercase tracking-widest"
        >
          Ver Invitación
        </motion.button>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[#d4af37]/70"
        >
          <span className="text-xs font-[family-name:var(--font-montserrat)] uppercase tracking-widest">
            Desliza
          </span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Flores decorativas en las esquinas (opcional visual) */}
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#f8bbd9]">
          <circle cx="20" cy="80" r="15" fill="currentColor" opacity="0.5" />
          <circle cx="35" cy="70" r="10" fill="currentColor" opacity="0.4" />
          <circle cx="10" cy="65" r="12" fill="currentColor" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30 transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#f8bbd9]">
          <circle cx="20" cy="80" r="15" fill="currentColor" opacity="0.5" />
          <circle cx="35" cy="70" r="10" fill="currentColor" opacity="0.4" />
          <circle cx="10" cy="65" r="12" fill="currentColor" opacity="0.3" />
        </svg>
      </div>
    </section>
  );
}

