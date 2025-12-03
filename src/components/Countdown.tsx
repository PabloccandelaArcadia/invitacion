"use client";

import { useState, useEffect } from "react";

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

  return (
    <section className="py-16 px-4 text-center">
      <p className="text-sm uppercase tracking-widest text-[#d4af37] mb-2">
        Cuenta Regresiva
      </p>
      <h2 className="text-4xl text-[#5e35b1] mb-8" style={{ fontFamily: 'cursive' }}>
        El gran día se acerca
      </h2>

      <div className="flex justify-center gap-4">
        <div className="bg-white rounded-xl p-4 shadow-md min-w-[70px]">
          <div className="text-3xl font-bold text-[#5e35b1]">{days}</div>
          <div className="text-xs text-gray-500 uppercase">Días</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md min-w-[70px]">
          <div className="text-3xl font-bold text-[#5e35b1]">{hours}</div>
          <div className="text-xs text-gray-500 uppercase">Horas</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md min-w-[70px]">
          <div className="text-3xl font-bold text-[#5e35b1]">{minutes}</div>
          <div className="text-xs text-gray-500 uppercase">Min</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md min-w-[70px]">
          <div className="text-3xl font-bold text-[#5e35b1]">{seconds}</div>
          <div className="text-xs text-gray-500 uppercase">Seg</div>
        </div>
      </div>

      <p className="mt-8 text-gray-600 italic">
        ¡Cada segundo cuenta para este momento especial!
      </p>
    </section>
  );
}
