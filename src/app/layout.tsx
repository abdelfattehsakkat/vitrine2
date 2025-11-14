import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cabinet Dentaire Dr. Guedria Yosra",
  description: "Dentiste à la Ghazela, Ariana, Tunisie. Cabinet dentaire moderne proposant des soins de qualité : prothèse, orthodontie, esthétique dentaire. Prenez rendez-vous avec votre dentiste à la Ghazela, Ariana.",
  keywords: "dentiste ghazela, dentiste ariana, dentiste tunisie, cabinet dentaire, soins dentaires, prothèses dentaires, esthétique dentaire, Dr Guedria Yosra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/jpeg" href="/images/logos/logo.jpg" />
        <meta property="og:title" content="DR. Guedria Yosra" />
        <meta property="og:description" content="Dentiste à la Ghazela, Ariana, Tunisie. Soins dentaires de qualité : implantologie, orthodontie, esthétique dentaire. Prenez rendez-vous avec votre dentiste à la Ghazela, Ariana." />
        <meta property="og:image" content="https://www.drguedria.tn/images/og-image.jpg" />
        <meta property="og:url" content="https://drguedria.tn/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dentiste Ghazela Ariana Tunisie - Dr. Guedria Yosra" />
        <meta name="twitter:description" content="Dentiste à la Ghazela, Ariana, Tunisie. Soins dentaires de qualité : implantologie, orthodontie, esthétique dentaire." />
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
