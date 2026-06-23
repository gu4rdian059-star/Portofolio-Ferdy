"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSwiping, setIsSwiping] = useState(false);

  // Disable scroll when loader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  // Global anchor click interceptor for Brutalist Swipe transition
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#")) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            e.preventDefault();
            if (isSwiping) return;
            setIsSwiping(true);

            // Midpoint of the black panel (0.16s delay + 0.5s duration midpoint)
            setTimeout(() => {
              targetElement.scrollIntoView({ behavior: "auto" });
              window.history.pushState(null, "", href);
            }, 660);
          }
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [isSwiping]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Brutalist Swipe Navigation Transition Panels */}
      <AnimatePresence>
        {isSwiping && (
          <>
            {/* Trailing Panel 1 (Pink) */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: ["-100%", "0%", "100%"] }}
              transition={{
                duration: 1.0,
                times: [0, 0.5, 1.0],
                ease: [0.76, 0, 0.24, 1]
              }}
              className="fixed inset-0 bg-pink z-[9996] pointer-events-none"
            />
            {/* Trailing Panel 2 (Neon Green) */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: ["-100%", "0%", "100%"] }}
              transition={{
                duration: 1.0,
                times: [0, 0.5, 1.0],
                ease: [0.76, 0, 0.24, 1],
                delay: 0.08
              }}
              className="fixed inset-0 bg-ngreen z-[9997] pointer-events-none"
            />
            {/* Main Panel (Black) */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: ["-100%", "0%", "100%"] }}
              transition={{
                duration: 1.0,
                times: [0, 0.5, 1.0],
                ease: [0.76, 0, 0.24, 1],
                delay: 0.16
              }}
              onAnimationComplete={() => setIsSwiping(false)}
              className="fixed inset-0 bg-black z-[9998] pointer-events-none flex items-center justify-center"
            >
              {/* Spinning star inside the swipe */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], rotate: 360 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-ngreen text-7xl font-black"
              >
                ✦
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

