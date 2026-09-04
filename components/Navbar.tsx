"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHoveringNav, setIsHoveringNav] = useState(false);

  const pathname = usePathname();
  const { theme, toggleTheme, lang, toggleLang, t } = useApp();

  const navLinks = [
    { label: lang === "id" ? "Beranda" : "Home", href: "/" },
    { label: lang === "id" ? "Tentang" : "About", href: "/tentang" },
    { label: lang === "id" ? "Layanan" : "Services", href: "/layanan" },
    { label: lang === "id" ? "Karya" : "Work", href: "/karya" },
    { label: lang === "id" ? "Kontak" : "Contact", href: "/kontak" },
  ];

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 bg-cream/90 dark:bg-[#121212]/90 backdrop-blur-md border-b-[3px] border-black dark:border-white transition-colors"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl font-black text-black dark:text-white tracking-tight flex items-center gap-1 group"
          >
            <span className="transition-transform duration-200 group-hover:-rotate-2 inline-block">
              FERDY
            </span>
            <span className="text-ngreen inline-block animate-pulse">.</span>
          </Link>

          {/* Desktop Links with Liquid Glass Floating Capsule */}
          <div
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }}
            onMouseEnter={() => setIsHoveringNav(true)}
            onMouseLeave={() => {
              setIsHoveringNav(false);
              setHoveredPath(null);
            }}
            className="hidden md:flex items-center gap-1 px-2.5 py-1.5 liquid-glass-nav relative"
          >
            {/* Dynamic Liquid Mouse Spotlight Glow */}
            <div
              className="liquid-mouse-glow"
              style={{
                opacity: isHoveringNav ? 1 : 0,
                background:
                  theme === "dark"
                    ? `radial-gradient(130px circle at ${mousePos.x}px ${mousePos.y}px, rgba(204, 255, 0, 0.28), rgba(255, 45, 155, 0.15) 45%, transparent 80%)`
                    : `radial-gradient(120px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.8), rgba(123, 47, 190, 0.15) 50%, transparent 80%)`,
              }}
            />

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isItemHovered = hoveredPath === link.href;
              // If hovering over the nav bar, follow the hovered item; otherwise highlight the active page item
              const showLiquidPill = isHoveringNav ? isItemHovered : isActive;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredPath(link.href)}
                  className="relative px-4 py-2 text-xs font-black uppercase tracking-widest transition-all duration-150 z-10 select-none flex items-center justify-center cursor-pointer"
                >
                  {/* iOS Dynamic Island / VisionOS Fluid Liquid Glass Capsule */}
                  {showLiquidPill && (
                    <motion.div
                      layoutId="liquid-glass-menu-pill"
                      className="liquid-glass-pill"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 33,
                        mass: 0.55,
                        restDelta: 0.0005,
                      }}
                    >
                      {/* Top curved specular gloss reflection */}
                      <div className="liquid-specular" />

                      {/* Sweeping Liquid Light Shimmer */}
                      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="w-[160%] h-full bg-gradient-to-r from-transparent via-white/50 dark:via-white/25 to-transparent animate-liquid-shimmer" />
                      </div>

                      {/* Internal fluid gradient tint */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple/15 dark:from-ngreen/25 to-transparent pointer-events-none" />
                    </motion.div>
                  )}

                  {/* Nav Item Text with Smooth Micro-Lift */}
                  <motion.span
                    animate={{
                      scale: isActive || isItemHovered ? 1.05 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                    className={`relative z-20 font-black transition-colors duration-150 ${
                      isActive || isItemHovered
                        ? "text-purple dark:text-ngreen"
                        : "text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              );
            })}
          </div>

          {/* Right Controls: Theme Toggle, Language Toggle & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLang}
              aria-label={lang === "id" ? "Ganti ke Bahasa Inggris" : "Switch to Indonesian"}
              className="w-[78px] shrink-0 justify-center bg-white text-black dark:bg-[#1a1a1a] dark:text-white font-black text-xs py-2 border-[2px] border-black dark:border-white shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#ccff00] hover:bg-ngreen hover:text-black transition-colors uppercase tracking-wider flex items-center gap-1 whitespace-nowrap cursor-pointer"
              title="Change Language"
            >
              <span>{lang === "id" ? "🇮🇩 ID" : "🇺🇸 EN"}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Ganti ke mode gelap" : "Ganti ke mode terang"}
              className="w-[96px] shrink-0 justify-center bg-white text-black dark:bg-black dark:text-ngreen font-black text-xs py-2 border-[2px] border-black dark:border-white shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#ff2d9b] hover:bg-purple hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1 whitespace-nowrap cursor-pointer"
              title="Toggle Dark/Light Mode"
            >
              <span>{theme === "light" ? "🌙 DARK" : "☀️ LIGHT"}</span>
            </button>

            {/* CTA Button */}
            <Link
              href="/kontak"
              className="w-[130px] shrink-0 justify-center text-center bg-white text-black dark:bg-black dark:text-ngreen font-black text-xs py-2.5 border-[3px] border-black dark:border-white shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#ccff00] brutal-hover uppercase tracking-wider whitespace-nowrap inline-flex items-center"
            >
              {lang === "id" ? "Ajak Kerja" : "Hire Me"}
            </Link>
          </div>

          {/* Mobile Hamburger & Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              aria-label={lang === "id" ? "Ganti ke Bahasa Inggris" : "Switch to Indonesian"}
              className="bg-white text-black dark:bg-[#181818] dark:text-white font-black text-xs px-2.5 py-2 min-h-[44px] min-w-[44px] flex items-center justify-center border border-black dark:border-white shadow-[2px_2px_0px_#000]"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Ganti ke mode gelap" : "Ganti ke mode terang"}
              className="bg-white text-black dark:bg-black dark:text-ngreen font-black text-xs px-2.5 py-2 min-h-[44px] min-w-[44px] flex items-center justify-center border border-black dark:border-white shadow-[2px_2px_0px_#000]"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <button
              className="flex flex-col justify-center items-center gap-1.5 p-2.5 min-h-[44px] min-w-[44px] ml-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span
                className={`block w-6 h-[3px] bg-black dark:bg-white transition-transform duration-200 ${
                  mobileOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-[3px] bg-black dark:bg-white transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-[3px] bg-black dark:bg-white transition-transform duration-200 ${
                  mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown with Glassmorphism */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t-[3px] border-black dark:border-white bg-cream/95 dark:bg-[#141414]/95 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-black uppercase tracking-widest px-4 py-3 border transition-all liquid-glass flex items-center justify-between ${
                      isActive
                        ? "bg-white/80 dark:bg-white/10 border-purple dark:border-ngreen text-purple dark:text-ngreen shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#ccff00]"
                        : "bg-white/40 dark:bg-white/5 border-black/20 dark:border-white/20 text-black dark:text-white hover:bg-white/80 dark:hover:bg-white/15"
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
              <Link
                href="/kontak"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-block bg-white text-black dark:bg-black dark:text-ngreen font-black text-sm px-6 py-3 border-[3px] border-black dark:border-white shadow-brutal text-center uppercase tracking-wider hover:bg-ngreen transition-colors"
              >
                {t("navCTA")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


