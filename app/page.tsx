"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Education from "@/components/Education";
import Services from "@/components/Services";
import SkillMatrix from "@/components/SkillMatrix";
import Work from "@/components/Work";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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

  useEffect(() => {
    if (isSwiping) {
      const timeout = setTimeout(() => setIsSwiping(false), 1200);
      return () => clearTimeout(timeout);
    }
  }, [isSwiping]);

  return (
    <>
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
