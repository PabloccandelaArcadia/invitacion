"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ═══════════════════════════════════════════════════════════════
 * 🎵 COMPONENTE MUSIC PLAYER
 * Reproductor de música de fondo con botón ON/OFF
 * Puede reproducirse automáticamente al cargar
 * ═══════════════════════════════════════════════════════════════
 */

interface MusicPlayerProps {
  /** URL del archivo de audio (colocar en /public) */
  audioSrc?: string;
  /** Si debe reproducirse automáticamente */
  autoPlay?: boolean;
  /** Volumen inicial (0 a 1) */
  volume?: number;
}

export default function MusicPlayer({ 
  audioSrc = "/music/cancion.mp3",
  autoPlay = false,
  volume = 0.15  // Volumen bajito por defecto (15%)
}: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Crear elemento de audio
    audioRef.current = new Audio(audioSrc);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    // Si autoPlay está activado, intentar reproducir
    if (autoPlay) {
      const playAudio = async () => {
        try {
          await audioRef.current?.play();
          setIsPlaying(true);
        } catch (error) {
          // Si el navegador bloquea autoplay, no hacer nada
          // El usuario puede activar manualmente con el botón
          console.log("Autoplay bloqueado - usa el botón para activar música");
        }
      };
      
      // Pequeño delay para asegurar que el componente esté montado
      setTimeout(playAudio, 500);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc, autoPlay, volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        console.log("Reproducción bloqueada por el navegador");
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Variantes de animación para el botón
  const buttonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5 }
    },
    tap: { scale: 0.9 },
    hover: { scale: 1.1 },
  };

  // Variantes para las barras de ecualizador
  const barVariants = {
    playing: (i: number) => ({
      height: ["40%", "100%", "60%", "80%", "40%"],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        delay: i * 0.1,
        ease: "easeInOut",
      },
    }),
    paused: {
      height: "40%",
    },
  };

  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileTap="tap"
      whileHover="hover"
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full 
                 bg-gradient-to-br from-[#d4af37] to-[#f5e6a3]
                 shadow-lg shadow-[#d4af37]/30
                 flex items-center justify-center
                 border-2 border-white/30
                 backdrop-blur-sm"
      aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          // Ecualizador animado cuando está reproduciendo
          <motion.div
            key="equalizer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-end gap-0.5 h-6"
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                custom={i}
                variants={barVariants}
                animate="playing"
                className="w-1 bg-white rounded-full"
                style={{ originY: 1 }}
              />
            ))}
          </motion.div>
        ) : (
          // Icono de nota musical cuando está pausado
          <motion.svg
            key="note"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </motion.svg>
        )}
      </AnimatePresence>

      {/* Anillo decorativo */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/20"
        animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </motion.button>
  );
}
