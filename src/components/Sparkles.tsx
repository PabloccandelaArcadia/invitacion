"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * ═══════════════════════════════════════════════════════════════
 * ✨ COMPONENTE SPARKLES
 * Efecto de partículas brillantes flotantes
 * Optimizado para performance en móviles
 * ═══════════════════════════════════════════════════════════════
 */

interface SparkleProps {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

// Componente individual de destello
const Sparkle = ({ size, x, y, delay, duration }: Omit<SparkleProps, "id">) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Estrella SVG */}
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path
          d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z"
          fill="url(#sparkle-gradient)"
        />
        <defs>
          <linearGradient id="sparkle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5e6a3" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#f5e6a3" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

// Generar sparkles aleatorios
const generateSparkles = (count: number): SparkleProps[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 12 + 6, // 6-18px
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: Math.random() * 2 + 2, // 2-4s
  }));
};

interface SparklesProps {
  count?: number;
  className?: string;
}

export default function Sparkles({ count = 20, className = "" }: SparklesProps) {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([]);

  useEffect(() => {
    // Generar menos sparkles en móviles para mejor performance
    const isMobile = window.innerWidth < 768;
    const sparkleCount = isMobile ? Math.floor(count / 2) : count;
    setSparkles(generateSparkles(sparkleCount));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          size={sparkle.size}
          x={sparkle.x}
          y={sparkle.y}
          delay={sparkle.delay}
          duration={sparkle.duration}
        />
      ))}
    </div>
  );
}

/**
 * ═══════════════════════════════════════════════════════════════
 * 🌸 COMPONENTE PÉTALOS FLOTANTES
 * Pétalos que caen suavemente por la pantalla
 * ═══════════════════════════════════════════════════════════════
 */

interface PetalProps {
  delay: number;
  duration: number;
  x: number;
  size: number;
}

const Petal = ({ delay, duration, x, size }: PetalProps) => {
  return (
    <motion.div
      className="absolute top-0 pointer-events-none"
      style={{
        left: `${x}%`,
        width: size,
        height: size * 1.2,
      }}
      initial={{ y: -100, opacity: 0, rotate: 0 }}
      animate={{
        y: ["0vh", "110vh"],
        opacity: [0, 1, 1, 0],
        rotate: [0, 360, 720],
        x: [0, 30, -20, 10, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Pétalo SVG */}
      <svg viewBox="0 0 24 32" fill="none" className="w-full h-full">
        <ellipse
          cx="12"
          cy="16"
          rx="10"
          ry="14"
          fill="url(#petal-gradient)"
          opacity="0.7"
        />
        <defs>
          <linearGradient id="petal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fce4ec" />
            <stop offset="50%" stopColor="#f8bbd9" />
            <stop offset="100%" stopColor="#f48fb1" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

interface FallingPetalsProps {
  count?: number;
}

export function FallingPetals({ count = 15 }: FallingPetalsProps) {
  const [petals, setPetals] = useState<PetalProps[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const petalCount = isMobile ? Math.floor(count / 2) : count;
    
    const generatedPetals = Array.from({ length: petalCount }, () => ({
      delay: Math.random() * 10,
      duration: Math.random() * 8 + 12, // 12-20s
      x: Math.random() * 100,
      size: Math.random() * 15 + 10, // 10-25px
    }));
    
    setPetals(generatedPetals);
  }, [count]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {petals.map((petal, i) => (
        <Petal key={i} {...petal} />
      ))}
    </div>
  );
}

