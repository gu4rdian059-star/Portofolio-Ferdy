"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";

export default function KontakPage() {
  const { lang, t } = useApp();

  return (
    <div className="min-h-screen bg-cream text-black flex flex-col pt-20">
      <Navbar />

      <main className="flex-1 pt-12 pb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
          {/* Header Banner — Redesigned Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-[3px] border-black bg-pink p-8 sm:p-12 shadow-brutal mb-8 relative overflow-hidden text-black"
          >
            {/* Subtle grid pattern background accent */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-black text-ngreen text-xs font-black uppercase px-3 py-1 border-[2px] border-black tracking-widest sticker-tilt-slight-left">
                    {t("kontakBannerBadge")}
                  </span>
                  <span className="bg-white text-black text-xs font-bold uppercase px-3 py-1 border-[2px] border-black tracking-wider">
                    {t("kontakBannerBadge2")}
                  </span>
                </div>
                <h1 className="font-display text-4xl sm:text-6xl font-black leading-tight mb-4 tracking-tight">
                  {t("kontakBannerTitle")}<span className="text-black">.</span>
                </h1>
                <p className="text-black/90 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
                  {t("kontakBannerDesc")}
                </p>
              </div>

              {/* Decorative badge right side */}
              <div className="hidden lg:flex flex-col items-center justify-center bg-black border-[3px] border-black p-5 shadow-[4px_4px_0px_#ccff00] text-center rotate-2 shrink-0">
                <span className="text-ngreen text-3xl font-black">24/7</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white mt-1">
                  {lang === "id" ? "Terbuka Kolaborasi" : "Open for Work"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
