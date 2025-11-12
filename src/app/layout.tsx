import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cabinet Dentaire - Excellence & Sourire",
  description: "Cabinet dentaire moderne proposant des soins de qualité dans un environnement bienveillant. Spécialistes en implantologie, orthodontie et esthétique dentaire.",
  keywords: "dentiste, cabinet dentaire, soins dentaires, implants, orthodontie, Paris",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta property="og:title" content="DR. Guedria Yosra" />
        <meta property="og:description" content="Cabinet dentaire moderne proposant des soins de qualité dans un environnement bienveillant. Spécialistes en implantologie, orthodontie et esthétique dentaire." />
        <meta property="og:image" content="https://www.drguedria.tn/images/og-image.jpg" />
        <meta property="og:url" content="https://drguedria.tn/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
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
