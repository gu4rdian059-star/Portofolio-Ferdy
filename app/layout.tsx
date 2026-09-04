import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import FloatingActions from "@/components/FloatingActions";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
  preload: true,
});

export const metadata: Metadata = {
  title: "Ferdy Firmansyah Portofolio",
  description:
    "Logo, poster, grafis & branding yang bikin brand kamu unforgettable. Tersedia untuk proyek baru.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${playfairDisplay.variable} antialiased`}
    >
      <head>
        <link
          rel="preload"
          href="/me.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-screen">
        <AppProvider>
          {children}
          <FloatingActions />
        </AppProvider>
      </body>
    </html>
  );
}
