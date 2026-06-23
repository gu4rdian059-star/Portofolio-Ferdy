"use client";

import { motion } from "framer-motion";

const socialLinks = [
  {
    label: "IG",
    href: "https://instagram.com/frdyfrmns",
    ariaLabel: "Instagram",
  },
  {
    label: "GH",
    href: "https://github.com/gu4rdian059-star",
    ariaLabel: "GitHub",
  },
  {
    label: "TT",
    href: "https://tiktok.com/@frdyfrmnsy",
    ariaLabel: "TikTok",
  },
];

export default function Footer() {
  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black py-8"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#beranda" className="font-display text-xl font-black text-white">
            FERDY<span className="text-ngreen">.</span>
          </a>

          {/* Copyright */}
          <p className="text-xs text-white/30 text-center">
            © 2026 — Hak cipta dilindungi.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="w-10 h-10 flex items-center justify-center border-2 border-[#333] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:bg-ngreen hover:text-black hover:border-ngreen hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#ccff00]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
