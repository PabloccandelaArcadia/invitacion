"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ═══════════════════════════════════════════════════════════════
 * 💜 COMPONENTE ENVELOPE - ESTILO RAPUNZEL
 * Animación simple: destello violeta con partículas
 * Paleta: Violeta y Dorado
 * ═══════════════════════════════════════════════════════════════
 */

interface EnvelopeProps {
  nombre?: string;
  onOpen: () => void;
}

export default function Envelope({ nombre = "Brisa", onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    
    // Después del destello, mostrar la invitación
    setTimeout(() => onOpen(), 1200);
  };

  return (
    <AnimatePresence>
      {!isOpening ? (
        // PANTALLA DEL SOBRE
        <motion.div
          key="envelope"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center 
                     bg-gradient-to-b from-[#f3e5f5] via-[#ede7f6] to-[#e8eaf6]
                     cursor-pointer overflow-hidden"
          onClick={handleOpen}
        >
          {/* Partículas doradas flotantes */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#d4af37]"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Texto superior */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-6 z-10"
          >
            <svg className="w-12 h-12 mx-auto text-[#d4af37] mb-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
            </svg>
            <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase 
                          tracking-[0.3em] text-[#d4af37] mb-1">
              Estás invitado/a
            </p>
            <h1 className="font-[family-name:var(--font-great-vibes)] text-3xl md:text-4xl 
                           text-[#5e35b1]">
              A mis XV Años
            </h1>
          </motion.div>

          {/* SOBRE VIOLETA */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative z-10"
          >
            <div className="relative w-72 h-48 md:w-80 md:h-52">
              {/* Sombra */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-6 
                              bg-black/10 blur-xl rounded-full" />

              {/* Cuerpo del sobre */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl
                              bg-gradient-to-br from-[#9575cd] via-[#7e57c2] to-[#673ab7]">
                {/* Brillo superior */}
                <div className="absolute top-0 left-0 right-0 h-1/3 
                                bg-gradient-to-b from-white/20 to-transparent" />
                
                {/* Borde interior */}
                <div className="absolute inset-3 border border-white/20 rounded-xl" />
                
                {/* Flores decorativas en esquinas */}
                <div className="absolute top-3 left-3 text-white/20 text-lg">✿</div>
                <div className="absolute top-3 right-3 text-white/20 text-lg">✿</div>
                <div className="absolute bottom-3 left-3 text-white/20 text-lg">✿</div>
                <div className="absolute bottom-3 right-3 text-white/20 text-lg">✿</div>

                {/* Lazo dorado abajo */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <svg className="w-12 h-6 text-[#d4af37]" viewBox="0 0 64 32" fill="currentColor">
                    <ellipse cx="16" cy="16" rx="12" ry="8"/>
                    <ellipse cx="48" cy="16" rx="12" ry="8"/>
                    <circle cx="32" cy="16" r="5"/>
                  </svg>
                </div>
              </div>

              {/* Solapa triangular */}
              <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-2xl overflow-hidden">
                <svg viewBox="0 0 320 160" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="flapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#9575cd" />
                      <stop offset="100%" stopColor="#7e57c2" />
                    </linearGradient>
                  </defs>
                  <path d="M0,0 L320,0 L160,120 Z" fill="url(#flapGrad)" />
                  <path d="M0,0 L320,0 L160,60 Z" fill="rgba(255,255,255,0.15)" />
                  <path d="M15,8 L160,105 L305,8" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                </svg>
              </div>

              {/* Sello dorado con corona */}
              <div className="absolute top-[38%] left-1/2 -translate-x-1/2 z-30">
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full 
                             bg-gradient-to-br from-[#f5e6a3] via-[#d4af37] to-[#b8860b]
                             shadow-lg flex items-center justify-center
                             border-2 border-white/30"
                >
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Texto inferior */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center z-10"
          >
            <motion.p
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-[family-name:var(--font-cormorant)] text-lg text-[#7e57c2]"
            >
              Toca para abrir
            </motion.p>
            <motion.span
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block mt-2 text-[#d4af37] text-lg"
            >
              ♡
            </motion.span>
          </motion.div>

          {/* Decoración de esquinas */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#d4af37]/30 rounded-tl-xl" />
          <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#d4af37]/30 rounded-tr-xl" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#d4af37]/30 rounded-bl-xl" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#d4af37]/30 rounded-br-xl" />
        </motion.div>
      ) : (
        // BRILLITOS VIOLETA DISPERSOS
        <motion.div
          key="flash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="fixed inset-0 z-[100] pointer-events-none"
        >
          {/* Brillitos dispersos por toda la pantalla */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#5e35b1]"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                fontSize: `${8 + Math.random() * 12}px`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.03,
                ease: "easeOut",
              }}
            >
              ✦
            </motion.div>
          ))}
          
          {/* Brillitos dorados adicionales */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`gold-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#d4af37]"
              style={{
                left: `${5 + Math.random() * 90}%`,
                top: `${5 + Math.random() * 90}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.04,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
