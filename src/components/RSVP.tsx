"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ═══════════════════════════════════════════════════════════════
 * 📝 COMPONENTE RSVP
 * Formulario de confirmación de asistencia
 * Con validación y animaciones de estado
 * ═══════════════════════════════════════════════════════════════
 */

interface RSVPProps {
  /** Texto del título */
  titulo?: string;
  /** Fecha límite para confirmar */
  fechaLimite?: string;
}

export default function RSVP({
  titulo = "Confirma tu Asistencia",
  fechaLimite = "1 de Marzo, 2025",
}: RSVPProps) {
  // Estados del formulario
  const [nombre, setNombre] = useState("");
  const [personas, setPersonas] = useState("1");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validación
    if (!nombre.trim()) {
      setError("Por favor ingresa tu nombre");
      return;
    }

    setIsSubmitting(true);

    // Simulación de envío (mock handler)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Aquí se conectaría con un backend real
    console.log("RSVP enviado:", { nombre, personas });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Decoraciones sutiles */}
      <div className="absolute top-10 right-20 w-48 h-48 rounded-full bg-[#ce93d8]/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-[#d4af37]/5 blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-md mx-auto"
      >
        {/* Título */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase 
                        tracking-[0.3em] text-[#d4af37] mb-2">
            RSVP
          </p>
          <h2 className="font-[family-name:var(--font-great-vibes)] text-4xl md:text-5xl 
                         text-[#5e35b1] mb-3">
            {titulo}
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-base text-[#7e6b8a]">
            Confirmar antes del {fechaLimite}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            /* Formulario */
            <motion.form
              key="form"
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="glass-strong p-6 md:p-8"
            >
              {/* Campo Nombre */}
              <div className="mb-6">
                <label
                  htmlFor="nombre"
                  className="block font-[family-name:var(--font-montserrat)] text-xs 
                             uppercase tracking-wider text-[#8b7355] mb-2"
                >
                  Nombre Completo
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#ce93d8]/50 
                             bg-white/50 backdrop-blur-sm
                             font-[family-name:var(--font-cormorant)] text-lg text-[#4a3750]
                             placeholder:text-[#7e6b8a]/50
                             focus:border-[#7e57c2] focus:outline-none focus:ring-2 
                             focus:ring-[#ce93d8]/20 transition-all duration-300"
                />
              </div>

              {/* Campo Número de personas */}
              <div className="mb-6">
                <label
                  htmlFor="personas"
                  className="block font-[family-name:var(--font-montserrat)] text-xs 
                             uppercase tracking-wider text-[#8b7355] mb-2"
                >
                  Número de Personas
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  id="personas"
                  value={personas}
                  onChange={(e) => setPersonas(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#ce93d8]/50 
                             bg-white/50 backdrop-blur-sm
                             font-[family-name:var(--font-cormorant)] text-lg text-[#4a3750]
                             focus:border-[#7e57c2] focus:outline-none focus:ring-2 
                             focus:ring-[#ce93d8]/20 transition-all duration-300
                             cursor-pointer"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "persona" : "personas"}
                    </option>
                  ))}
                </motion.select>
              </div>

              {/* Mensaje de error */}
              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-[#ec407a] text-sm mb-4 text-center 
                               font-[family-name:var(--font-cormorant)]"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Botón enviar */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full btn-gold font-[family-name:var(--font-montserrat)] 
                           text-sm uppercase tracking-widest flex items-center 
                           justify-center gap-2 ${isSubmitting ? "opacity-70" : ""}`}
              >
                {isSubmitting ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                    Confirmar Asistencia
                  </>
                )}
              </motion.button>
            </motion.form>
          ) : (
            /* Mensaje de éxito */
            <motion.div
              key="success"
              variants={successVariants}
              initial="hidden"
              animate="visible"
              className="glass-strong p-8 text-center"
            >
              {/* Icono de éxito */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br 
                           from-[#4caf50] to-[#81c784] flex items-center justify-center 
                           mb-6 shadow-lg"
              >
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </motion.div>

              <h3 className="font-[family-name:var(--font-great-vibes)] text-3xl 
                             text-[#4a3728] mb-3">
                ¡Gracias, {nombre}!
              </h3>

              <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#8b7355]">
                Tu confirmación ha sido recibida. 
                <br />
                ¡Te esperamos con mucha ilusión!
              </p>

              {/* Corazón animado */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mt-6 text-3xl"
              >
                💕
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decoración inferior */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
          <span className="text-[#d4af37]/60 text-lg">♡</span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

