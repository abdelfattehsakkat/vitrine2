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
      </body>
    </html>
  );
}
