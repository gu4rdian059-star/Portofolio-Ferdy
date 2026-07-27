"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";

const accentPalettes = [
  { id: "ngreen", name: "Neon Green", hex: "#ccff00", bgClass: "bg-[#ccff00]", textClass: "text-[#ccff00]" },
  { id: "pink", name: "Hot Pink", hex: "#ff2d9b", bgClass: "bg-[#ff2d9b]", textClass: "text-[#ff2d9b]" },
  { id: "purple", name: "Cyber Purple", hex: "#7b2fbe", bgClass: "bg-[#7b2fbe]", textClass: "text-[#7b2fbe]" },
  { id: "cyan", name: "Electric Cyan", hex: "#00f0ff", bgClass: "bg-[#00f0ff]", textClass: "text-[#00f0ff]" },
  { id: "yellow", name: "Solar Yellow", hex: "#ffd600", bgClass: "bg-[#ffd600]", textClass: "text-[#ffd600]" },
];

// Web Audio API Retro Arcade SFX Generator (No external MP3 required!)
function playRetroClickSound(frequency = 440, type: OscillatorType = "sine") {
  try {
    const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(frequency * 0.4, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch {
    // Silent fallback if audio context fails
  }
}

export default function ThemeStudio() {
  const { lang } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccent, setActiveAccent] = useState(accentPalettes[0]);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Apply custom accent color CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty("--accent-primary", activeAccent.hex);
  }, [activeAccent]);

  const handleSelectAccent = (palette: typeof accentPalettes[0]) => {
    setActiveAccent(palette);
    if (soundEnabled) {
      playRetroClickSound(600, "square");
    }
  };

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) {
      playRetroClickSound(800, "sine");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Trigger Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.08, rotate: -3 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          if (soundEnabled) playRetroClickSound(500, "triangle");
        }}
        className="bg-black text-ngreen border-[3px] border-black shadow-[4px_4px_0px_#ccff00] p-3.5 sm:p-4 rounded-none font-black text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer group"
      >
        <span className="text-base animate-pulse">🎨</span>
        <span className="hidden sm:inline font-display">
          {lang === "id" ? "Studio Tema" : "Theme Studio"}
        </span>
      </motion.button>

      {/* Floating Interactive Panel Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="absolute bottom-16 right-0 bg-white border-[4px] border-black shadow-[8px_8px_0px_#000] p-6 w-[310px] sm:w-[340px] text-black"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-black/10 mb-4">
              <span className="font-display text-sm font-black uppercase tracking-wider flex items-center gap-2 text-black">
                <span>🎨</span> {lang === "id" ? "Kustomisasi Interaktif" : "Interactive Studio"}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="font-black text-xs bg-black text-white px-2 py-0.5 border border-black hover:bg-pink hover:text-black transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Accent Palette Selector */}
            <div className="mb-5">
              <label className="block text-xs font-black uppercase tracking-wider text-black/70 mb-2">
                {lang === "id" ? "Warna Akses Utama:" : "Primary Accent Color:"}
              </label>
              <div className="grid grid-cols-5 gap-2">
                {accentPalettes.map((palette) => (
                  <button
                    key={palette.id}
                    onClick={() => handleSelectAccent(palette)}
                    className={`h-9 border-[2px] border-black transition-all flex items-center justify-center cursor-pointer shadow-[2px_2px_0px_#000] ${palette.bgClass} ${
                      activeAccent.id === palette.id ? "ring-2 ring-black scale-110" : "opacity-80 hover:opacity-100"
                    }`}
                    title={palette.name}
                  >
                    {activeAccent.id === palette.id && (
                      <span className="text-black font-black text-xs">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Audio Retro SFX Toggle */}
            <div className="mb-5 bg-cream p-3 border-[2px] border-black flex items-center justify-between">
              <div>
                <span className="text-xs font-black uppercase block text-black">
                  {lang === "id" ? "Efek Suara Interaktif (SFX)" : "Interactive Audio SFX"}
                </span>
                <span className="text-[10px] font-semibold text-black/60 block">
                  {soundEnabled ? (lang === "id" ? "Suara Aktif 🔊" : "Audio On 🔊") : (lang === "id" ? "Suara Senyap 🔇" : "Muted 🔇")}
                </span>
              </div>
              <button
                onClick={toggleSound}
                className={`px-3 py-1.5 border-[2px] border-black font-black text-xs uppercase tracking-wider transition-all shadow-[2px_2px_0px_#000] ${
                  soundEnabled ? "bg-ngreen text-black" : "bg-black text-white"
                }`}
              >
                {soundEnabled ? "ON" : "OFF"}
              </button>
            </div>

            {/* Active Accent Preview Badge */}
            <div className="bg-black text-white p-3 border-[2px] border-black text-center">
              <span className="text-[11px] font-bold text-white/70 uppercase block mb-1">
                {lang === "id" ? "Warna Akses Terpilih:" : "Active Theme Accent:"}
              </span>
              <span
                className="font-display font-black text-sm uppercase px-2 py-0.5 inline-block border border-black"
                style={{ backgroundColor: activeAccent.hex, color: activeAccent.hex === "#ccff00" || activeAccent.hex === "#ffd600" || activeAccent.hex === "#00f0ff" ? "#000" : "#fff" }}
              >
                ✦ {activeAccent.name} ✦
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
