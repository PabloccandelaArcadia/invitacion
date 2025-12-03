"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  targetDate?: string;
}

export default function Countdown({ 
  targetDate = "2025-03-15T19:00:00" 
}: CountdownProps) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTime = () => {
      const diff = new Date(targetDate).getTime() - new Date().getTime();
      if (diff > 0) {
        setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((diff / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((diff / 1000 / 60) % 60));
        setSeconds(Math.floor((diff / 1000) % 60));
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) return null;

  const timeUnits = [
    { value: days, label: "Días" },
    { value: hours, label: "Horas" },
    { value: minutes, label: "Min" },
    { value: seconds, label: "Seg" },
  ];

  return (
    <section className="py-20 px-4 text-center relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[400px] h-[400px] rounded-full bg-[#d4af37]/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Título */}
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-3 font-medium">
          Cuenta Regresiva
        </p>
        <h2 className="font-[family-name:var(--font-great-vibes)] text-5xl md:text-6xl text-[#5e35b1] mb-12">
          El gran día se acerca
        </h2>

        {/* Contador */}
        <div className="flex justify-center items-center gap-3 md:gap-6 flex-wrap">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Caja del número */}
              <div className="relative">
                <div className="w-[72px] h-[85px] md:w-[85px] md:h-[100px] 
                                bg-gradient-to-b from-white to-[#faf8ff]
                                rounded-2xl shadow-lg
                                border-2 border-[#e8e0f0]
                                flex items-center justify-center
                                relative overflow-hidden">
                  {/* Brillo superior */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 
                                  bg-gradient-to-b from-white/80 to-transparent rounded-t-2xl" />
                  
                  {/* Número */}
                  <span className="font-[family-name:var(--font-cormorant)] 
                                   text-4xl md:text-5xl font-semibold text-[#5e35b1] relative z-10">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  
                  {/* Línea dorada inferior */}
                  <div className="absolute bottom-0 left-2 right-2 h-1 
                                  bg-gradient-to-r from-transparent via-[#d4af37] to-transparent 
                                  rounded-full" />
                </div>
              </div>

              {/* Etiqueta */}
              <span className="mt-3 text-xs uppercase tracking-widest text-[#8b7b9a] font-medium">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Frase */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 font-[family-name:var(--font-cormorant)] text-xl text-[#7a6b8a] italic"
        >
          ¡Cada segundo cuenta para este momento especial!
        </motion.p>

        {/* Decoración */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]/40" />
          <span className="text-[#d4af37]">✦</span>
          <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]/40" />
        </div>
      </motion.div>
    </section>
  );
}
