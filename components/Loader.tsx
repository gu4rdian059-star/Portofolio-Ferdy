"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const loadingWords = [
  { text: "MEMULAI", range: [0, 20] },
  { text: "MENDESAIN", range: [21, 45] },
  { text: "CODING", range: [46, 70] },
  { text: "HOHEY", range: [71, 90] },
  { text: "WELCOME!", range: [91, 100] },
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentWord, setCurrentWord] = useState("MEMULAI");

  useEffect(() => {
    let start = 0;
    const duration = 120; // 0.12s total duration for instantaneous LCP & zero TBT
    const intervalTime = 16;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 50);
      } else {
        const currentProgress = Math.floor(start);
        setProgress(currentProgress);

        const word = loadingWords.find(
          (w) => currentProgress >= w.range[0] && currentProgress <= w.range[1]
        );
        if (word) {
          setCurrentWord(word.text);
        }
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] bg-black text-white flex flex-col justify-between p-6 md:p-10 select-none font-sans pointer-events-none"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center border-b-[2px] border-white/20 pb-4">
        <span className="font-display text-xl md:text-2xl font-black tracking-tight text-white">
          FERDY<span className="text-ngreen">.</span>
        </span>
        <span className="text-xs font-semibold tracking-widest text-white/80 uppercase">
          PORTOFOLIO
        </span>
      </div>

      {/* Center Layout */}
      <div className="flex flex-col items-center justify-center my-auto py-10 w-full max-w-xl mx-auto">
        {/* Glowing floating star above */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="text-ngreen text-5xl md:text-6xl mb-6 font-bold"
        >
          ✦
        </motion.div>

        {/* Word Display */}
        <div className="h-10 md:h-14 overflow-hidden mb-2 text-center">
          <motion.p
            key={currentWord}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-black tracking-widest text-pink uppercase"
          >
            {currentWord}
          </motion.p>
        </div>

        {/* Heavy brutal progress percentage */}
        <p className="font-display text-8xl sm:text-9xl md:text-[140px] font-black leading-none tracking-tighter text-white mb-8">
          {progress.toString().padStart(3, "0")}
        </p>

        {/* Neo-brutal progress bar container */}
        <div className="w-full h-8 bg-[#222] border-[3px] border-white shadow-[4px_4px_0px_#fff] p-1 flex items-center">
          {/* Progress bar fill */}
          <motion.div
            className="h-full bg-ngreen"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
