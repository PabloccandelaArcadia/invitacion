"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * ═══════════════════════════════════════════════════════════════
 * ⏰ COMPONENTE COUNTDOWN
 * Timer animado con cuenta regresiva al evento
 * Diseño elegante con glassmorphism
 * ═══════════════════════════════════════════════════════════════
 */

interface CountdownProps {
  /** Fecha objetivo del evento (formato: "YYYY-MM-DDTHH:mm:ss") */
  targetDate?: string;
}

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

export default function Countdown({ 
  targetDate = "2025-03-15T19:00:00" 
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });
  const [isClient, setIsClient] = useState(false);

  // Calcular tiempo restante
  const calculateTimeLeft = (): TimeLeft => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();

    if (difference <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    setIsClient(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
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

  // Componente de cada unidad de tiempo
  const TimeUnit = ({ 
    value, 
    label, 
    index 
  }: { 
    value: number; 
    label: string;
    index: number;
  }) => (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center"
    >
      {/* Caja con número */}
      <motion.div
        className="glass-strong w-16 h-16 md:w-20 md:h-20 flex items-center justify-center
                   shadow-lg relative"
        whileHover={{ scale: 1.05 }}
      >
        {/* Número animado */}
        <span
          className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl 
                     font-bold text-[#5e35b1]"
        >
          {isClient ? String(value).padStart(2, "0") : "00"}
        </span>

        {/* Decoración dorada */}
        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r 
                        from-transparent via-[#d4af37] to-transparent" />
      </motion.div>

      {/* Etiqueta */}
      <span className="mt-3 font-[family-name:var(--font-montserrat)] text-xs 
                       uppercase tracking-wider text-[#8b7355]">
        {label}
      </span>
    </motion.div>
  );

  // Separador decorativo
  const Separator = () => (
    <motion.span
      variants={itemVariants}
      className="text-[#d4af37] text-2xl md:text-3xl font-light mx-1 self-start mt-4"
      animate={{ opacity: [1, 0.3, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      :
    </motion.span>
  );

  return (
    <section 
      id="countdown" 
      className="relative py-20 px-4 overflow-hidden"
    >

      {/* Decoración circular de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[500px] h-[500px] rounded-full bg-[#d4af37]/5 blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-lg mx-auto text-center"
      >
        {/* Título */}
        <motion.div variants={titleVariants} className="mb-10">
          <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase 
                        tracking-[0.3em] text-[#d4af37] mb-2">
            Cuenta Regresiva
          </p>
          <h2 className="font-[family-name:var(--font-great-vibes)] text-4xl md:text-5xl 
                         text-[#5e35b1]">
            El gran día se acerca
          </h2>
        </motion.div>

        {/* Contador */}
        <div className="flex items-start justify-center gap-2 md:gap-4">
          <TimeUnit value={timeLeft.dias} label="Días" index={0} />
          <Separator />
          <TimeUnit value={timeLeft.horas} label="Horas" index={1} />
          <Separator />
          <TimeUnit value={timeLeft.minutos} label="Min" index={2} />
          <Separator />
          <TimeUnit value={timeLeft.segundos} label="Seg" index={3} />
        </div>

        {/* Frase debajo del contador */}
        <motion.p
          variants={itemVariants}
          className="mt-10 font-[family-name:var(--font-cormorant)] text-lg 
                     text-[#8b7355] italic"
        >
          ¡Cada segundo cuenta para este momento especial!
        </motion.p>

        {/* Decoración de línea */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
          <span className="text-[#d4af37]/50">❀</span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

