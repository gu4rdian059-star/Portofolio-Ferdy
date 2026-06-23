import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
  weight: ["700", "900"],
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
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
