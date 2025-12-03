# 🎀 Invitación Digital XV Años

Una hermosa invitación digital interactiva para celebrar los XV años, creada con Next.js, Tailwind CSS y Framer Motion.

## ✨ Características

- 📱 **Mobile-First** - Diseño optimizado para celulares
- 🎬 **Animaciones elegantes** - Framer Motion + CSS Keyframes
- 💫 **Efectos visuales** - Partículas, pétalos flotantes, glassmorphism
- ⏰ **Cuenta regresiva** - Timer animado hasta el evento
- 📝 **RSVP interactivo** - Formulario de confirmación de asistencia
- 🎵 **Música de fondo** - Botón ON/OFF (opcional)
- 🖼️ **Galería de fotos** - Grid con lightbox animado

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000
```

## 🎨 Personalización

### 1. Datos del Evento

Edita el archivo `src/app/page.tsx` y modifica el objeto `CONFIG`:

```typescript
const CONFIG = {
  // Información de la quinceañera
  nombre: "Tu Nombre",
  
  // Fecha y hora (formato: YYYY-MM-DDTHH:mm:ss)
  fechaEvento: "2025-06-15T19:00:00",
  fechaTexto: "Sábado 15 de Junio, 2025",
  hora: "19:00 hrs",
  
  // Frases
  frasePrincipal: "Tu frase especial aquí",
  
  // Ubicación
  lugar: "Nombre del Salón",
  direccion: "Dirección completa",
  mapUrl: "https://maps.google.com/?q=Tu+Ubicacion",
  
  // Dress code
  dressCode: "Formal / Elegante",
  coloresSugeridos: ["Rosa", "Dorado", "Champagne"],
  colorEvitar: "blanco",
  
  // RSVP
  fechaLimiteRSVP: "1 de Junio, 2025",
  
  // Familia
  padres: "Nombres de los padres",
  padrinos: "Nombres de los padrinos",
};
```

### 2. Agregar Fotos

Coloca tus fotos en la carpeta `/public/gallery/`:

```
public/
  gallery/
    foto1.jpg
    foto2.jpg
    foto3.jpg
    ...
```

Luego edita `src/components/Galeria.tsx` para actualizar los paths.

### 3. Agregar Música de Fondo

Coloca tu archivo de música en `/public/music/`:

```
public/
  music/
    background.mp3
```

### 4. Personalizar Colores

Edita `src/app/globals.css` para cambiar la paleta de colores:

```css
:root {
  --pink-soft: #fce4ec;
  --pink-medium: #f8bbd9;
  --pink-dark: #ec407a;
  --gold: #d4af37;
  --gold-light: #f5e6a3;
  --violet-soft: #e1bee7;
  /* ... más colores */
}
```

### 5. Cambiar Tipografías

Edita `src/app/layout.tsx` para usar otras fuentes de Google Fonts:

```typescript
import { Playfair_Display, Dancing_Script } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css      # Estilos globales y animaciones
│   ├── layout.tsx       # Layout principal con fuentes
│   └── page.tsx         # Página principal
├── components/
│   ├── Hero.tsx         # Sección de bienvenida
│   ├── Countdown.tsx    # Cuenta regresiva
│   ├── Historia.tsx     # Mensaje emotivo
│   ├── Detalles.tsx     # Fecha, hora, ubicación
│   ├── DressCode.tsx    # Código de vestimenta
│   ├── RSVP.tsx         # Formulario de confirmación
│   ├── Galeria.tsx      # Galería de fotos
│   ├── Agradecimiento.tsx # Sección final
│   ├── Sparkles.tsx     # Efectos de partículas
│   └── MusicPlayer.tsx  # Reproductor de música
public/
├── music/               # Música de fondo
└── gallery/             # Fotos de la galería
```

## 🔧 Conectar RSVP con Backend

El formulario RSVP actualmente usa un mock handler. Para conectarlo con un backend real:

1. **API Route de Next.js:**

```typescript
// src/app/api/rsvp/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Guardar en base de datos o enviar email
  return Response.json({ success: true });
}
```

2. **Google Sheets (gratuito):**

Usa [Google Apps Script](https://developers.google.com/apps-script) para recibir los datos.

3. **Servicios como Formspree o FormSubmit:**

Simplemente cambia el action del formulario a tu endpoint.

## 📦 Despliegue

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Sube la carpeta .next a Netlify
```

## 🎯 Optimizaciones de Rendimiento

- ✅ Animaciones optimizadas para móviles
- ✅ Lazy loading de componentes
- ✅ Fuentes optimizadas con next/font
- ✅ Respeto por `prefers-reduced-motion`

## 📝 Licencia

Este proyecto es de uso libre. ¡Disfruta tu fiesta de XV años! 🎉

---

Creado con 💕 usando Next.js, Tailwind CSS y Framer Motion
