import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cabinet Dentaire Dr. Guedria Yosra",
  description: "Dentiste à la Ghazela, Ariana, Tunisie. Cabinet dentaire moderne proposant des soins de qualité : prothèse, orthodontie, esthétique dentaire. Prenez rendez-vous avec votre dentiste à la Ghazela, Ariana.",
  keywords: "dentiste ghazela, dentiste ariana, dentiste tunisie, cabinet dentaire, soins dentaires, prothèses dentaires, esthétique dentaire, Dr Guedria Yosra",
  metadataBase: new URL('https://drguedria.tn'),
  openGraph: {
    title: "Dr. Guedria Yosra - Dentiste à la Ghazela, Ariana",
    description: "Dentiste à la Ghazela, Ariana, Tunisie. Soins dentaires de qualité : implantologie, orthodontie, esthétique dentaire. Prenez rendez-vous avec votre dentiste.",
    url: 'https://drguedria.tn',
    siteName: 'Cabinet Dentaire Dr. Guedria Yosra',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cabinet Dentaire Dr. Guedria Yosra',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dr. Guedria Yosra - Dentiste à la Ghazela, Ariana",
    description: "Dentiste à la Ghazela, Ariana, Tunisie. Soins dentaires de qualité : implantologie, orthodontie, esthétique dentaire.",
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/images/logos/favicon.ico' },
      { url: '/images/logos/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logos/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logos/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Schema.org Dentist JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dentist',
            'name': 'Dr. Guedria Yosra',
            'image': 'https://www.drguedria.tn/images/og-image.jpg',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'Ariana, La Ghazela',
              'addressLocality': 'Ariana',
              'addressRegion': 'Ariana',
              'addressCountry': 'Tunisie',
            },
            'url': 'https://drguedria.tn/',
            'description': 'Dentiste à la Ghazela, Ariana, Tunisie. Soins dentaires de qualité : implantologie, orthodontie, esthétique dentaire.',
            'telephone': '+216 12 345 678',
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': 36.8995,
              'longitude': 10.1873
            },
            'areaServed': ['Ghazela', 'Ariana', 'Tunisie']
          })
        }} />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        {/* Cloudflare Web Analytics */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "238a6e143aaf49bbacf615c9035b5167"}'
        ></script>
      </body>
    </html>
  );
}
