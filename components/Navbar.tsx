"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  // { label: "Layanan", href: "#layanan" },
  { label: "Karya", href: "#karya" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      id="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream border-b-[3px] border-black"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#beranda" className="font-display text-2xl font-black text-black">
            FERDY<span className="text-ngreen">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-widest text-black hover:text-purple transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button — tilted sticker style */}
          <div className="hidden md:block">
            <a
              href="#kontak"
              className="inline-block bg-black text-ngreen font-bold text-sm px-6 py-2.5 border-[3px] border-black shadow-brutal brutal-hover uppercase tracking-wider sticker-tilt-slight-right hover:!rotate-0"
            >
              Ajak Kerja
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[3px] bg-black transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
            />
            <span
              className={`block w-6 h-[3px] bg-black transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-6 h-[3px] bg-black transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
            />
          </button>
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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-semibold uppercase tracking-widest text-black hover:text-purple transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontak"
                onClick={() => setMobileOpen(false)}
                className="inline-block bg-black text-ngreen font-bold text-sm px-6 py-2.5 border-[3px] border-black shadow-brutal text-center uppercase tracking-wider"
              >
                Ajak Kerja
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
