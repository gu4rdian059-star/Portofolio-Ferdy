"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
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
      className="fixed top-0 left-0 right-0 z-50 bg-cream border-b-[3px] border-black transition-colors"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display text-2xl font-black text-black tracking-tight flex items-center gap-1">
            FERDY<span className="text-ngreen">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors relative py-1 ${isActive ? "text-purple font-black" : "text-black hover:text-purple"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-purple" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Controls: Theme Toggle, Language Toggle & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle Button — Fixed width to prevent layout shifts */}
            <button
              onClick={toggleLang}
              aria-label={lang === "id" ? "Ganti ke Bahasa Inggris" : "Switch to Indonesian"}
              className="w-[78px] shrink-0 justify-center bg-white text-black font-black text-xs py-2 border-[2px] border-black shadow-[2px_2px_0px_#000] hover:bg-ngreen transition-colors uppercase tracking-wider flex items-center gap-1 whitespace-nowrap cursor-pointer"
              title="Change Language"
            >
              <span>{lang === "id" ? "🇮🇩 ID" : "🇺🇸 EN"}</span>
            </button>

            {/* Theme Toggle Button — Fixed width to prevent layout shifts */}
            <button
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Ganti ke mode gelap" : "Ganti ke mode terang"}
              className="w-[96px] shrink-0 justify-center bg-white text-black dark:bg-black dark:text-ngreen font-black text-xs py-2 border-[2px] border-black dark:border-white shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#ff2d9b] hover:bg-purple hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1 whitespace-nowrap cursor-pointer"
              title="Toggle Dark/Light Mode"
            >
              <span>{theme === "light" ? "🌙 DARK" : "☀️ LIGHT"}</span>
            </button>

            {/* CTA Button — Fixed width to prevent layout shifts */}
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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t-[3px] border-black bg-cream overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-bold uppercase tracking-widest transition-colors ${isActive ? "text-purple font-black" : "text-black hover:text-purple"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/kontak"
                onClick={() => setMobileOpen(false)}
                className="inline-block bg-white text-black dark:bg-black dark:text-ngreen font-black text-sm px-6 py-2.5 border-[3px] border-black dark:border-white shadow-brutal text-center uppercase tracking-wider"
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


