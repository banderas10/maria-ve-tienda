import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "María Ve Ideas y Sabores | Mermeladas y Dulces Artesanales de Autor",
  description: "Descubre las mejores mermeladas artesanales, dulces y conservas de autor en María Ve Ideas y Sabores. Productos 100% artesanales. ¡Envío a domicilio!",
  
  // --- CONFIGURACIÓN DE IMÁGENES ---
  icons: {
    icon: "/logo-maria.png", // Icono pequeño arriba a la izquierda
    apple: "/logo-maria.png",
  },
  openGraph: {
    title: "María Ve Ideas y Sabores | Mermeladas y Dulces Artesanales",
    description: "Mermeladas artesanales, dulces y conservas de autor. Hechos con ingredientes premium.",
    // Aquí ponemos la foto del PRODUCTO DESTACADO (ID 8) para que salga grande en el centro
    images: [
      {
        url: "/products-maria/producto-8.jpg", 
        width: 1200,
        height: 630,
        alt: "Tortilla Creación Gourmet - Producto Destacado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "María Ve Ideas y Sabores | Mermeladas Artesanales",
    images: ["/products-maria/producto-8.jpg"],
  },
  // ---------------------------------

  keywords: [
    "mermeladas artesanales",
    "dulces caseros",
    "María Ve Ideas y Sabores",
    "Tortilla Creación Gourmet"
  ],
  authors: [{ name: "María Ve Ideas y Sabores" }],
  creator: "María Ve Ideas y Sabores",
};

// JSON-LD Schema para SEO (simplificado para mejor rendimiento)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "María Ve Ideas y Sabores",
  description: "Mermeladas, dulces y conservas artesanales de autor.",
  url: "https://mariaveideasysabores.vercel.app",
  logo: "https://mariaveideasysabores.vercel.app/logo-maria.png",
  image: "https://mariaveideasysabores.vercel.app/products-maria/producto-8.jpg",
  telephone: "+34612345678",
  servesCuisine: ["Mermeladas", "Dulces", "Conservas Artesanales"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Icono de la pestaña */}
        <link rel="icon" href="/logo-maria.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo-maria.png" />
        <meta name="theme-color" content="#f43f5e" />
        
        {/* Script para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
