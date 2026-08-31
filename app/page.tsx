"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";

/* Below-fold components: lazy-loaded so framer-motion isn't in the critical bundle */
const Education = dynamic(() => import("@/components/Education"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const SkillMatrix = dynamic(() => import("@/components/SkillMatrix"), { ssr: false });
const Work = dynamic(() => import("@/components/Work"), { ssr: false });
const Timeline = dynamic(() => import("@/components/Timeline"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  const [isSwiping, setIsSwiping] = useState(false);

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

  // Lazy-load swipe animation only when needed
  useEffect(() => {
    if (isSwiping) {
      const timeout = setTimeout(() => setIsSwiping(false), 1200);
      return () => clearTimeout(timeout);
    }
  }, [isSwiping]);

  return (
    <>
      {/* Brutalist Swipe: CSS-only version to avoid loading framer-motion in critical path */}
      {isSwiping && (
        <>
          <div className="fixed inset-0 z-[9996] pointer-events-none animate-swipe-panel bg-pink" />
          <div className="fixed inset-0 z-[9997] pointer-events-none animate-swipe-panel-delay1 bg-ngreen" />
          <div className="fixed inset-0 z-[9998] pointer-events-none animate-swipe-panel-delay2 bg-black" />
        </>
      )}

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Education />
        <Services />
        <SkillMatrix />
        <Work />
        <Timeline />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
