"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";

const faqs = [
  {
    id: 1,
    q_id: "Berapa lama estimasi pengerjaan proyek website atau desain?",
    q_en: "How long does a website or design project usually take?",
    a_id: "Estimasi waktu bervariasi tergantung skala proyek. Untuk desain UI/UX sederhana 3-5 hari kerja, sedangkan website Next.js penuh biasanya memakan waktu 1-2 minggu.",
    a_en: "Project timeline depends on complexity. Simple UI/UX designs take 3-5 business days, while full Next.js web applications take 1-2 weeks.",
  },
  {
    id: 2,
    q_id: "Apakah website buatan Anda sudah responsif dan ramah HP?",
    q_en: "Is the website responsive and mobile-friendly?",
    a_id: "Tentu saja! Semua website dirancang dengan pendekatan Mobile-First yang dioptimalkan untuk berbagai layar HP, tablet, hingga monitor 4K desktop.",
    a_en: "Absolutely! All websites are designed with a Mobile-First approach, optimized for smartphones, tablets, and 4K desktop displays.",
  },
  {
    id: 3,
    q_id: "Teknologi apa saja yang Anda gunakan untuk pengembangan?",
    q_en: "What tech stack do you use for web development?",
    a_id: "Teknologi utama yang saya gunakan adalah Next.js (React), TypeScript, TailwindCSS, Framer Motion, Laravel, dan Figma untuk perancangan UI/UX.",
    a_en: "My primary tech stack includes Next.js (React), TypeScript, TailwindCSS, Framer Motion, Laravel, and Figma for UI/UX prototyping.",
  },
  {
    id: 4,
    q_id: "Bagaimana alur kerja dan sistem revisinya?",
    q_en: "What is your workflow and revision policy?",
    a_id: "Alur kerja dimulai dari konsultasi awal (brief), pembuatan sketsa/wireframe, tahap coding/finishing, hingga pengujian. Saya memberikan hingga 3x revisi mayor gratis untuk memastikan hasil sempurna.",
    a_en: "The process begins with initial consultation (brief), wireframing, development/coding, and testing. Up to 3 major revisions are included free of charge.",
  },
];

export default function FAQ() {
  const { lang } = useApp();
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-24 bg-cream relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mb-14 text-center max-w-2xl mx-auto"
        >
          <span className="inline-block bg-pink text-white text-xs font-black uppercase px-3.5 py-1.5 border-[2px] border-black tracking-widest mb-3 sticker-tilt-slight-left">
            {lang === "id" ? "✦ Pertanyaan Umum" : "✦ FAQ Section"}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-black">
            {lang === "id" ? "Hal Yang Sering Ditanyakan." : "Frequently Asked Questions."}
          </h2>
        </motion.div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-[#181818] border-[3px] border-black dark:border-white shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#ccff00] overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-black text-lg sm:text-xl text-[#0a0a0a] dark:text-white hover:bg-[#fbf9f4] dark:hover:bg-[#222] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-purple dark:text-ngreen font-mono text-sm font-bold">0{faq.id}.</span>
                    <span className="text-[#0a0a0a] dark:text-white font-black">
                      {lang === "id" ? faq.q_id : faq.q_en}
                    </span>
                  </span>
                  <span className="w-8 h-8 rounded-none bg-black text-ngreen flex items-center justify-center font-mono font-black text-lg shrink-0 border border-black shadow-[2px_2px_0px_#000]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-5 sm:p-6 text-[#1a1a1a] dark:text-white/90 font-medium text-sm sm:text-base border-t-2 border-black/10 dark:border-white/20 bg-[#f9f7f2] dark:bg-[#111] leading-relaxed">
                        {lang === "id" ? faq.a_id : faq.a_en}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
