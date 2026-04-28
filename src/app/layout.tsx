import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "María Ve Ideas y Sabores | Mermeladas y Dulces Artesanales de Autor",
  description: "Descubre las mejores mermeladas artesanales, dulces y conservas de autor en María Ve Ideas y Sabores. Mermeladas de frutillas, duraznos, pimientos, dulce de leche tradicional y más. Productos 100% artesanales. ¡Envío a domicilio!",
  keywords: [
    "mermeladas artesanales",
    "dulces caseros",
    "mermelada de frutillas",
    "mermelada de duraznos",
    "dulce de leche artesanal",
    "conservas artesanales",
    "productos de autor",
    "repostería artesanal",
    "mermeladas caseras",
    "dulces gourmet",
    "María Ve Ideas y Sabores",
    "mermeladas naturales",
    "dulces sin conservantes"
  ],
  authors: [{ name: "María Ve Ideas y Sabores" }],
  creator: "María Ve Ideas y Sabores",
  publisher: "María Ve Ideas y Sabores",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://mariaveideasysabores.vercel.app",
    siteName: "María Ve Ideas y Sabores",
    title: "María Ve Ideas y Sabores | Mermeladas y Dulces Artesanales de Autor",
    description: "Mermeladas artesanales, dulces y conservas de autor. Hechos con ingredientes premium y mucho amor. Productos 100% naturales sin conservantes.",
    images: [
      {
        url: "/products-maria/dulce-leche.jpg",
        width: 1200,
        height: 630,
        alt: "María Ve Ideas y Sabores - Mermeladas y Dulces Artesanales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "María Ve Ideas y Sabores | Mermeladas Artesanales",
    description: "Mermeladas, dulces y conservas artesanales de autor. Productos 100% naturales.",
    images: ["/products-maria/dulce-leche.jpg"],
  },
  alternates: {
    canonical: "https://mariaveideasysabores.vercel.app",
  },
};

// JSON-LD Schema para SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "María Ve Ideas y Sabores",
  description: "Mermeladas, dulces y conservas artesanales de autor. Productos elaborados con ingredientes premium y recetas tradicionales.",
  url: "https://mariaveideasysabores.vercel.app",
  logo: "https://mariaveideasysabores.vercel.app/products-maria/dulce-leche.jpg",
  image: "https://mariaveideasysabores.vercel.app/products-maria/dulce-leche.jpg",
  telephone: "+34612345678",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ES",
  },
  openingHours: "Mo-Sa 09:00-20:00",
  priceRange: "€",
  servesCuisine: ["Mermeladas", "Dulces", "Conservas Artesanales"],
  hasMenu: {
    "@type": "Menu",
    hasMenuItem: [
      {
        "@type": "MenuItem",
        name: "Mermelada de Frutillas",
        description: "Mermelada artesanal de frutillas frescas. Sabor clásico y distinguido.",
        offers: {
          "@type": "Offer",
          price: "8.50",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        }
      },
      {
        "@type": "MenuItem",
        name: "Mermelada de Duraznos",
        description: "Dulce cremoso y aromático elaborado con duraznos seleccionados.",
        offers: {
          "@type": "Offer",
          price: "8.50",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        }
      },
      {
        "@type": "MenuItem",
        name: "Dulce de Leche Tradicional",
        description: "Elaborado a fuego lento con receta antigua. Textura cremosa y sabor auténtico.",
        offers: {
          "@type": "Offer",
          price: "9.50",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        }
      },
      {
        "@type": "MenuItem",
        name: "Mermelada de Pimientos",
        description: "Receta clásica con un sabor diferente. Perfecta para acompañar quesos.",
        offers: {
          "@type": "Offer",
          price: "9.00",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        }
      }
    ]
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200"
  }
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Productos María Ve Ideas y Sabores",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Dulce de Leche Tradicional",
        description: "Elaborado a fuego lento con receta antigua. Textura cremosa y sabor auténtico.",
        image: "https://mariaveideasysabores.vercel.app/products-maria/dulce-leche.jpg",
        offers: {
          "@type": "Offer",
          price: "9.50",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "89"
        }
      }
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Mermelada de Frutillas",
        description: "Mermelada artesanal de frutillas frescas. Sabor clásico y distinguido.",
        image: "https://mariaveideasysabores.vercel.app/products-maria/mermelada-frutillas.jpg",
        offers: {
          "@type": "Offer",
          price: "8.50",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "45"
        }
      }
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Mermelada de Pimientos",
        description: "Receta clásica con un sabor diferente. Perfecta para acompañar quesos y carnes.",
        image: "https://mariaveideasysabores.vercel.app/products-maria/mermelada-pimientos.jpg",
        offers: {
          "@type": "Offer",
          price: "9.00",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "38"
        }
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/products-maria/dulce-leche.jpg" />
        <meta name="theme-color" content="#f43f5e" />
        <meta name="google-site-verification" content="tu-codigo-verificacion" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
