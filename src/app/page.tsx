"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Componentes de la invitación
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Historia from "@/components/Historia";
import Detalles from "@/components/Detalles";
import DressCode from "@/components/DressCode";
import RSVP from "@/components/RSVP";
import Galeria from "@/components/Galeria";
import Agradecimiento from "@/components/Agradecimiento";
import MusicPlayer from "@/components/MusicPlayer";
import { FallingPetals } from "@/components/Sparkles";
import Envelope from "@/components/Envelope";

/**
 * ═══════════════════════════════════════════════════════════════
 * 🎀 PÁGINA PRINCIPAL - INVITACIÓN XV AÑOS
 * 
 * Landing page completa con todas las secciones
 * Diseño mobile-first con animaciones elegantes
 * 
 * PERSONALIZACIÓN:
 * - Modifica las props de cada componente para personalizar
 * - Agrega música en /public/music/background.mp3
 * - Agrega fotos en /public/gallery/
 * ═══════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════
// CONFIGURACIÓN DEL EVENTO - PERSONALIZA AQUÍ
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
  // Información de la quinceañera
  nombre: "Brisa Rivarola",
  
  // Fecha y hora del evento (formato: YYYY-MM-DDTHH:mm:ss)
  fechaEvento: "2025-03-15T19:00:00",
  fechaTexto: "Sábado 15 de Marzo, 2025",
  hora: "19:00 hrs",
  
  // Frases
  frasePrincipal: "Un sueño que florece en mi corazón",
  
  // Ubicación
  lugar: "Salón Real Fantasía",
  direccion: "Av. Las Rosas 1234, Ciudad",
  mapUrl: "https://maps.google.com/?q=Salon+Real+Fantasia",
  
  // Dress code
  dressCode: "Formal / Elegante",
  coloresSugeridos: ["Rosa palo", "Dorado", "Champagne", "Nude"],
  colorEvitar: "blanco",
  
  // RSVP
  fechaLimiteRSVP: "1 de Marzo, 2025",
  
  // Familia
  padres: "María García & Juan Pérez",
  padrinos: "Ana López & Carlos Martínez",
};

// ═══════════════════════════════════════════════════════════════

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  // Simular carga inicial elegante
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Callback cuando se abre el sobre
  const handleEnvelopeOpen = () => {
    setEnvelopeOpened(true);
  };

  // Variantes para la pantalla de carga
  const loadingVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" as const },
    },
  };

  // Variantes para el contenido principal
  const contentVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" as const },
    },
  };

  return (
    <main className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          // ═══════════════════════════════════════════════════════════
          // PANTALLA DE CARGA ELEGANTE
          // ═══════════════════════════════════════════════════════════
          <motion.div
            key="loading"
            variants={loadingVariants}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center 
                       bg-gradient-to-b from-[#fce4ec] via-[#fff8e1] to-[#f3e5f5]"
          >
            {/* Anillo animado */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 rounded-full border-4 border-[#f8bbd9] 
                         border-t-[#d4af37] mb-8"
            />

            {/* Texto de carga */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-[family-name:var(--font-great-vibes)] text-3xl text-[#d4af37]"
            >
              Cargando...
            </motion.p>

            {/* Estrellitas decorativas */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-6 text-[#d4af37]/60"
            >
              ✦ ✦ ✦
            </motion.div>
          </motion.div>
        ) : (
          // ═══════════════════════════════════════════════════════════
          // SOBRE INICIAL + CONTENIDO PRINCIPAL
          // ═══════════════════════════════════════════════════════════
          <>
            {/* Sobre animado que se abre al tocar */}
            {!envelopeOpened && (
              <Envelope 
                nombre={CONFIG.nombre} 
                onOpen={handleEnvelopeOpen} 
              />
            )}

            {/* Contenido de la invitación (visible después de abrir el sobre) */}
            <motion.div
              key="content"
              variants={contentVariants}
              initial="initial"
              animate={envelopeOpened ? "animate" : "initial"}
            >
              {/* Pétalos cayendo (efecto global) */}
              {envelopeOpened && <FallingPetals count={12} />}

            {/* ─────────────────────────────────────────────────────────
                SECCIÓN 1: HERO PRINCIPAL
                Primer impacto visual con nombre y fecha
            ───────────────────────────────────────────────────────── */}
            <Hero
              nombre={CONFIG.nombre}
              fecha={CONFIG.fechaTexto}
              frase={CONFIG.frasePrincipal}
            />

            {/* ─────────────────────────────────────────────────────────
                SECCIÓN 2: CUENTA REGRESIVA
                Timer animado al evento
            ───────────────────────────────────────────────────────── */}
            <Countdown targetDate={CONFIG.fechaEvento} />

            {/* ─────────────────────────────────────────────────────────
                SECCIÓN 3: HISTORIA / MENSAJE
                Mensaje emotivo de bienvenida
            ───────────────────────────────────────────────────────── */}
            <Historia
              titulo="Un sueño hecho realidad"
              mensaje={`Llegó el momento de celebrar mis 15 años, un sueño que florece 
                       en mi corazón. Quiero vivir este día tan especial con las personas 
                       que hacen mi vida más dulce e iluminada.`}
              mensajeSecundario={`Vengan a festejar conmigo y a guardar para siempre 
                                  esta linda recordación. Espero contar con tu presencia 
                                  en esta noche mágica.`}
            />

            {/* ─────────────────────────────────────────────────────────
                SECCIÓN 4: DETALLES DEL EVENTO
                Fecha, hora y ubicación con mapa
            ───────────────────────────────────────────────────────── */}
            <Detalles
              fecha={CONFIG.fechaTexto}
              hora={CONFIG.hora}
              lugar={CONFIG.lugar}
              direccion={CONFIG.direccion}
              mapUrl={CONFIG.mapUrl}
            />

            {/* ─────────────────────────────────────────────────────────
                SECCIÓN 5: DRESS CODE
                Código de vestimenta
            ───────────────────────────────────────────────────────── */}
            <DressCode
              tipo={CONFIG.dressCode}
              descripcion="Te invitamos a vestir de manera elegante para esta ocasión especial"
              colores={CONFIG.coloresSugeridos}
              colorEvitar={CONFIG.colorEvitar}
            />

            {/* ─────────────────────────────────────────────────────────
                SECCIÓN 6: RSVP (COMENTADO)
                Formulario de confirmación
            ───────────────────────────────────────────────────────── */}
            {/* <RSVP
              titulo="Confirma tu Asistencia"
              fechaLimite={CONFIG.fechaLimiteRSVP}
            /> */}

            {/* ─────────────────────────────────────────────────────────
                SECCIÓN 7: GALERÍA
                Fotos animadas
            ───────────────────────────────────────────────────────── */}
            <Galeria titulo="Momentos Especiales" />

            {/* ─────────────────────────────────────────────────────────
                SECCIÓN 8: AGRADECIMIENTO
                Mensaje final y firma
            ───────────────────────────────────────────────────────── */}
            <Agradecimiento
              nombre={CONFIG.nombre}
              mensaje={`Gracias por ser parte de este momento tan especial en mi vida. 
                       Tu presencia hará de esta noche un recuerdo inolvidable.`}
              padres={CONFIG.padres}
              padrinos={CONFIG.padrinos}
            />

            {/* ─────────────────────────────────────────────────────────
                REPRODUCTOR DE MÚSICA
                Se reproduce automáticamente al abrir el sobre
            ───────────────────────────────────────────────────────── */}
            {envelopeOpened && <MusicPlayer audioSrc="/music/cancion.mp3" autoPlay />}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
