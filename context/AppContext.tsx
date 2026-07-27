"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";
export type Language = "id" | "en";

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    // Navbar
    navHome: "Beranda",
    navAbout: "Tentang",
    navServices: "Layanan",
    navWork: "Karya",
    navContact: "Kontak",
    navCTA: "Ajak Kerja",
    
    // Hero
    heroBadge: "✦ Tersedia untuk proyek",
    heroGreeting: "halo, saya",
    heroTitle: "desainer+dev yang bikin brand nendang.",
    heroSubtext: "Logo, poster, grafis & branding yang bikin brand kamu unforgettable. Siap bikin sesuatu yang luar biasa?",
    heroCTAWork: "Lihat Karya →",
    heroCTAContact: "Hubungi Saya",
    heroStatProjects: "Proyek Selesai",
    heroStatClients: "Klien Puas",
    heroStatExp: "Tahun Pengalaman",
    heroOpenForWork: "Buka untuk kerja",

    // Education / School
    eduBadge: "✦ Latar Belakang Pendidikan",
    eduTitle: "Sekolah & Spesialisasi Jurusan",
    eduSubtitle: "Fondasi keahlian teknis dan kreativitas yang ditempuh di sekolah kejuruan favorit.",
    eduSchoolName: "SMK Negeri 1 Pasuruan",
    eduSchoolMotto: "Wiyata Sarwatama — Sekolah Pusat Keunggulan",
    eduSchoolDesc: "Menimba ilmu dasar kejuruan dan kedisiplinan teknologi di SMK Negeri 1 Pasuruan.",
    eduDeptName: "Rekayasa Perangkat Lunak (RPL)",
    eduDeptDesc: "Fokus spesialisasi pada Pemrograman Web, Pengembangan Aplikasi, Database SQL, dan Desain Antarmuka (UI/UX).",
    eduSkillsBadge: "Skill Inti RPL",

    // Services
    servicesTag: "apa yang saya buat.",
    servicesTitle: "Layanan Saya.",
    servicesCTA: "Ajak Kerja →",
    workflowTag: "proses kreatif.",
    workflowTitle: "Alur Kerja Saya.",
    techTag: "teknologi.",
    techTitle: "Senjata Tempur.",

    // Work
    workTag: "karya pilihan.",
    workTitle: "Proyek.",
    workCTA: "Lihat Semua Karya →",
    workBannerCTA: "Buka Halaman Galeri Karya Lengkap →",

    // Contact
    contactTitle1: "Punya ide",
    contactSticker: "berani?",
    contactTitle2: "Ayo wujudkan.",
    contactDesc: "Siap bikin sesuatu yang beda dari yang lain? Langsung hubungi saya sekarang.",
    emailMe: "EMAIL SAYA",
    waMe: "WhatsApp Saya",

    // Footer
    footerRights: "© 2026 — Hak cipta dilindungi.",

    // Music Player
    musicTitle: "LOFI CODING VIBE",
    musicArtist: "Ferdy Beats",

    // Karya Page
    karyaBannerBadge: "✦ Portfolio Galeri",
    karyaBannerCount: "Proyek Unggulan",
    karyaBannerTitle: "Karya & Proyek Pilihan.",
    karyaBannerDesc: "Eksplorasi kumpulan desain UI/UX, aplikasi web berkecepatan tinggi, dan aplikasi mobile yang dirancang presisi dengan sentuhan estetika neo-brutalis.",
    karyaSearchPlaceholder: "Cari proyek...",
    karyaNoResults: "Tidak Ada Proyek Ditemukan",
    karyaResetFilter: "Reset Filter",
    karyaCTATitle: "Punya Ide Proyek Menarik?",
    karyaCTADesc: "Mari berkolaborasi untuk mewujudkan ide Anda menjadi aplikasi atau desain yang luar biasa.",
    karyaCTABtn: "Mulai Diskusi →",

    // Layanan Page
    layananBannerBadge: "✦ Solusi Digital",
    layananBannerBadge2: "Full-Stack & UI/UX",
    layananBannerTitle: "Layanan & Keahlian Kreatif.",
    layananBannerDesc: "Menyediakan solusi digital komprehensif mulai dari desain UI/UX, visual branding, pengembangan web Next.js berkecepatan tinggi, hingga aplikasi mobile.",

    // Kontak Page
    kontakBannerBadge: "✦ Hubungi Saya",
    kontakBannerBadge2: "Respon Cepat & Free Konsultasi",
    kontakBannerTitle: "Mari Kolaborasi & Wujudkan Ide.",
    kontakBannerDesc: "Punya pertanyaan, proyek baru, atau tawaran kerjasama? Kirim pesan langsung melalui email atau WhatsApp di bawah ini.",
  },
  en: {
    // Navbar
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navWork: "Work",
    navContact: "Contact",
    navCTA: "Hire Me",

    // Hero
    heroBadge: "✦ Available for projects",
    heroGreeting: "hello, I'm",
    heroTitle: "designer+dev making brands punchy.",
    heroSubtext: "Logos, posters, graphics & branding that make your brand unforgettable. Ready to build something awesome?",
    heroCTAWork: "View Work →",
    heroCTAContact: "Contact Me",
    heroStatProjects: "Completed Projects",
    heroStatClients: "Happy Clients",
    heroStatExp: "Years Experience",
    heroOpenForWork: "Open for work",

    // Education / School
    eduBadge: "✦ Educational Background",
    eduTitle: "School & Specialization",
    eduSubtitle: "The foundation of technical expertise & creativity built in vocational high school.",
    eduSchoolName: "SMK Negeri 1 Pasuruan",
    eduSchoolMotto: "Wiyata Sarwatama — Vocational School of Excellence",
    eduSchoolDesc: "Learning vocational fundamentals and tech discipline at SMK Negeri 1 Pasuruan.",
    eduDeptName: "Software Engineering (RPL)",
    eduDeptDesc: "Specialized in Web Development, Mobile App Engineering, SQL Databases, and UI/UX Design.",
    eduSkillsBadge: "Core RPL Skills",

    // Services
    servicesTag: "what I build.",
    servicesTitle: "My Services.",
    servicesCTA: "Work Together →",
    workflowTag: "creative process.",
    workflowTitle: "My Workflow.",
    techTag: "technologies.",
    techTitle: "Tech Stack.",

    // Work
    workTag: "featured work.",
    workTitle: "Projects.",
    workCTA: "View All Projects →",
    workBannerCTA: "Open Full Project Gallery →",

    // Contact
    contactTitle1: "Have a bold",
    contactSticker: "idea?",
    contactTitle2: "Let's build it.",
    contactDesc: "Ready to create something standout? Get in touch with me directly.",
    emailMe: "EMAIL ME",
    waMe: "WhatsApp Me",

    // Footer
    footerRights: "© 2026 — All rights reserved.",

    // Music Player
    musicTitle: "LOFI CODING VIBE",
    musicArtist: "Ferdy Beats",

    // Karya Page
    karyaBannerBadge: "✦ Portfolio Gallery",
    karyaBannerCount: "Featured Projects",
    karyaBannerTitle: "Selected Projects & Works.",
    karyaBannerDesc: "Explore a curated collection of UI/UX designs, high-speed web apps, and mobile applications crafted with neo-brutalist aesthetic.",
    karyaSearchPlaceholder: "Search projects...",
    karyaNoResults: "No Projects Found",
    karyaResetFilter: "Reset Filter",
    karyaCTATitle: "Have an Exciting Project Idea?",
    karyaCTADesc: "Let's collaborate to bring your vision to life with exceptional apps and design.",
    karyaCTABtn: "Start Discussion →",

    // Layanan Page
    layananBannerBadge: "✦ Digital Solutions",
    layananBannerBadge2: "Full-Stack & UI/UX",
    layananBannerTitle: "Services & Creative Skills.",
    layananBannerDesc: "Providing end-to-end digital solutions from UI/UX design, visual branding, Next.js web development, to mobile apps.",

    // Kontak Page
    kontakBannerBadge: "✦ Contact Me",
    kontakBannerBadge2: "Fast Response & Free Consultation",
    kontakBannerTitle: "Let's Collaborate & Bring Ideas to Life.",
    kontakBannerDesc: "Have questions, new projects, or partnership offers? Drop a message directly via email or WhatsApp below.",
  },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [lang, setLangState] = useState<Language>("id");

  useEffect(() => {
    const savedTheme = localStorage.getItem("app_theme") as Theme;
    const savedLang = localStorage.getItem("app_lang") as Language;
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    }
    if (savedLang === "id" || savedLang === "en") {
      setLangState(savedLang);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("dark-theme");
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("app_theme", nextTheme);
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("app_lang", newLang);
  };

  const toggleLang = () => {
    const nextLang = lang === "id" ? "en" : "id";
    setLang(nextLang);
  };

  const t = (key: string): string => {
    const langDict = translations[lang] || translations.id;
    return (langDict as Record<string, string>)[key] || key;
  };

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, lang, setLang, toggleLang, t }}
    >
      <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
        {children}
      </div>
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
