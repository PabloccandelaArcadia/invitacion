"use client";

import { motion } from "framer-motion";

/**
 * ═══════════════════════════════════════════════════════════════
 * 📍 COMPONENTE DETALLES DEL EVENTO
 * Información de fecha, hora y ubicación
 * Con íconos personalizados y enlace a Google Maps
 * ═══════════════════════════════════════════════════════════════
 */

interface DetallesProps {
  /** Fecha del evento */
  fecha?: string;
  /** Hora del evento */
  hora?: string;
  /** Nombre del lugar */
  lugar?: string;
  /** Dirección completa */
  direccion?: string;
  /** URL de Google Maps */
  mapUrl?: string;
}

export default function Detalles({
  fecha = "Sábado 15 de Marzo, 2025",
  hora = "19:00 hrs",
  lugar = "Salón Real Fantasía",
  direccion = "Av. Las Rosas 1234, Ciudad",
  mapUrl = "https://maps.google.com",
}: DetallesProps) {
  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  // Componente para cada detalle
  const DetailCard = ({
    icon,
    title,
    content,
    subContent,
  }: {
    icon: React.ReactNode;
    title: string;
    content: string;
    subContent?: string;
  }) => (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className="glass-strong p-6 text-center flex flex-col items-center"
    >
      {/* Icono */}
      <motion.div
        variants={iconVariants}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f5e6a3] 
                   flex items-center justify-center mb-4 shadow-lg"
      >
        {icon}
      </motion.div>

      {/* Título */}
      <h3 className="font-[family-name:var(--font-montserrat)] text-xs uppercase 
                     tracking-widest text-[#d4af37] mb-2">
        {title}
      </h3>

      {/* Contenido */}
      <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl 
                    text-[#4a3728] font-semibold">
        {content}
      </p>

      {/* Subcontenido */}
      {subContent && (
        <p className="font-[family-name:var(--font-cormorant)] text-base 
                      text-[#8b7355] mt-1">
          {subContent}
        </p>
      )}
    </motion.div>
  );

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f3e5f5]/40 via-[#fff8e1]/50 to-[#fce4ec]/40" />

      {/* Decoraciones de fondo */}
      <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-[#d4af37]/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#f8bbd9]/15 blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-lg mx-auto"
      >
        {/* Título de sección */}
        <motion.div variants={cardVariants} className="text-center mb-12">
          <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase 
                        tracking-[0.3em] text-[#d4af37] mb-2">
            Detalles
          </p>
          <h2 className="font-[family-name:var(--font-great-vibes)] text-4xl md:text-5xl 
                         text-[#4a3728]">
            ¿Cuándo y Dónde?
          </h2>
        </motion.div>

        {/* Grid de detalles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Fecha */}
          <DetailCard
            icon={
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
              </svg>
            }
            title="Fecha"
            content={fecha}
          />

          {/* Hora */}
          <DetailCard
            icon={
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
            }
            title="Hora"
            content={hora}
          />
        </div>

        {/* Ubicación - card más grande */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="glass-strong p-8 text-center"
        >
          {/* Icono de ubicación */}
          <motion.div
            variants={iconVariants}
            className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#ec407a] to-[#f8bbd9] 
                       flex items-center justify-center mb-4 shadow-lg"
          >
            <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </motion.div>

          <h3 className="font-[family-name:var(--font-montserrat)] text-xs uppercase 
                         tracking-widest text-[#d4af37] mb-2">
            Ubicación
          </h3>

          <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl 
                        text-[#4a3728] font-semibold mb-2">
            {lugar}
          </p>

          <p className="font-[family-name:var(--font-cormorant)] text-base 
                        text-[#8b7355] mb-6">
            {direccion}
          </p>

          {/* Botón de Google Maps */}
          <motion.a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 btn-pink 
                       font-[family-name:var(--font-montserrat)] text-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Ver Ubicación
          </motion.a>
        </motion.div>

        {/* Decoración inferior */}
        <motion.div
          variants={cardVariants}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
          <span className="text-[#d4af37] text-xl">✦</span>
          <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

