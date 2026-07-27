"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";

export default function ProjectEstimator() {
  const { lang } = useApp();

  const servicesList = [
    { id: "web", name_id: "Website Next.js", name_en: "Next.js Web App", basePrice: 1200000, baseDays: 5, icon: "💻" },
    { id: "uiux", name_id: "Desain UI/UX", name_en: "UI/UX Design", basePrice: 600000, baseDays: 3, icon: "🎨" },
    { id: "mobile", name_id: "Mobile App", name_en: "Mobile Application", basePrice: 2000000, baseDays: 8, icon: "📱" },
    { id: "branding", name_id: "Grafis & Branding", name_en: "Branding & Graphics", basePrice: 400000, baseDays: 2, icon: "⚡" },
  ];

  const scopesList = [
    
    { id: "small", label_id: "1 - 3 Halaman", label_en: "1 - 3 Pages", multiplier: 1.0, addDays: 0 },
    { id: "medium", label_id: "4 - 8 Halaman", label_en: "4 - 8 Pages", multiplier: 1.8, addDays: 3 },
    { id: "large", label_id: "9+ Halaman / Kompleks", label_en: "9+ Pages / Complex", multiplier: 2.8, addDays: 6 },
  ];

  const urgenciesList = [
    { id: "standard", label_id: "Standar (Normal)", label_en: "Standard (Normal)", multiplier: 1.0, dayFactor: 1.0 },
    { id: "express", label_id: "Express Kilat (+30%)", label_en: "Express Rush (+30%)", multiplier: 1.3, dayFactor: 0.6 },
  ];

  const [selectedService, setSelectedService] = useState(servicesList[0]);
  const [selectedScope, setSelectedScope] = useState(scopesList[0]);
  const [selectedUrgency, setSelectedUrgency] = useState(urgenciesList[0]);

  // Calculate estimated price and timeline
  const estimatedPrice = Math.round(
    selectedService.basePrice * selectedScope.multiplier * selectedUrgency.multiplier
  );
  const estimatedDays = Math.max(
    2,
    Math.round((selectedService.baseDays + selectedScope.addDays) * selectedUrgency.dayFactor)
  );

  const formattedPriceIDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(estimatedPrice);

  const formattedPriceUSD = "$" + Math.round(estimatedPrice / 15500);

  // Generate WhatsApp pre-filled text
  const waText = encodeURIComponent(
    `Halo Ferdy, saya ingin memesan proyek:\n- Layanan: ${
      lang === "id" ? selectedService.name_id : selectedService.name_en
    }\n- Skala: ${
      lang === "id" ? selectedScope.label_id : selectedScope.label_en
    }\n- Urgensi: ${
      lang === "id" ? selectedUrgency.label_id : selectedUrgency.label_en
    }\n- Estimasi Durasi: ~${estimatedDays} hari kerja\n- Estimasi Biaya: ${formattedPriceIDR}\nMohon informasi selanjutnya!`
  );

  return (
    <section className="py-20 lg:py-24 bg-cream relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <span className="inline-block bg-ngreen text-black text-xs font-black uppercase px-3.5 py-1.5 border-[2px] border-black tracking-widest mb-3 sticker-tilt-slight-right">
            {lang === "id" ? "✦ Fitur Interaktif" : "✦ Interactive Feature"}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-black">
            {lang === "id" ? "Kalkulator Estimasi Proyek." : "Project Cost Estimator."}
          </h2>
          <p className="text-black/70 text-sm sm:text-base mt-3 font-medium">
            {lang === "id"
              ? "Pilih opsi kebutuhan proyek Anda untuk menghitung perkiraan estimasi waktu & biaya secara transparan."
              : "Select your project options to calculate transparent time & cost estimates in real-time."}
          </p>
        </motion.div>

        {/* Interactive Estimator Main Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-[#181818] border-[3px] border-black shadow-[8px_8px_0px_#000] p-6 sm:p-10 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Controls (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Step 1: Select Service */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-black/60 dark:text-white/60 mb-2">
                  1. {lang === "id" ? "Pilih Jenis Layanan" : "Select Service Type"}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {servicesList.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => setSelectedService(srv)}
                      className={`p-3.5 text-left border-[2px] border-black font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-[2px_2px_0px_#000] ${
                        selectedService.id === srv.id
                          ? "bg-black text-ngreen font-black border-black shadow-[4px_4px_0px_#ccff00]"
                          : "bg-white text-black hover:bg-[#fbf9f4]"
                      }`}
                    >
                      <span className="text-lg">{srv.icon}</span>
                      <span className="truncate">{lang === "id" ? srv.name_id : srv.name_en}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Scope */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-black/60 dark:text-white/60 mb-2">
                  2. {lang === "id" ? "Skala / Jumlah Halaman" : "Project Scope / Pages"}
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {scopesList.map((scp) => (
                    <button
                      key={scp.id}
                      onClick={() => setSelectedScope(scp)}
                      className={`p-3 text-center border-[2px] border-black font-bold text-xs transition-all shadow-[2px_2px_0px_#000] ${
                        selectedScope.id === scp.id
                          ? "bg-pink text-white font-black"
                          : "bg-white text-black hover:bg-[#fbf9f4]"
                      }`}
                    >
                      {lang === "id" ? scp.label_id : scp.label_en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Select Urgency */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-black/60 dark:text-white/60 mb-2">
                  3. {lang === "id" ? "Kecepatan Pengerjaan" : "Delivery Urgency"}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {urgenciesList.map((urg) => (
                    <button
                      key={urg.id}
                      onClick={() => setSelectedUrgency(urg)}
                      className={`p-3 text-center border-[2px] border-black font-bold text-xs transition-all shadow-[2px_2px_0px_#000] ${
                        selectedUrgency.id === urg.id
                          ? "bg-purple text-white font-black"
                          : "bg-white text-black hover:bg-[#fbf9f4]"
                      }`}
                    >
                      {lang === "id" ? urg.label_id : urg.label_en}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Summary Result Card (5 cols) */}
            <div className="lg:col-span-5 bg-black text-white p-6 sm:p-8 border-[3px] border-black flex flex-col justify-between relative shadow-[4px_4px_0px_#ccff00]">
              <div className="absolute top-3 right-3 text-ngreen text-2xl font-black">✦</div>

              <div>
                <span className="bg-ngreen text-black text-[10px] font-black uppercase px-2.5 py-1 border border-black tracking-widest inline-block mb-4">
                  {lang === "id" ? "Hasil Estimasi" : "Estimated Result"}
                </span>

                <div className="mb-6">
                  <span className="text-xs font-bold text-white/50 block uppercase tracking-wider mb-1">
                    {lang === "id" ? "Perkiraan Biaya:" : "Estimated Price:"}
                  </span>
                  <div className="font-display text-3xl sm:text-4xl font-black text-ngreen leading-tight">
                    {lang === "id" ? formattedPriceIDR : formattedPriceUSD}
                  </div>
                </div>

                <div className="mb-6 pt-4 border-t border-white/20">
                  <span className="text-xs font-bold text-white/50 block uppercase tracking-wider mb-1">
                    {lang === "id" ? "Estimasi Durasi:" : "Estimated Timeline:"}
                  </span>
                  <div className="font-display text-2xl font-black text-white">
                    ~{estimatedDays} {lang === "id" ? "Hari Kerja" : "Business Days"}
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <a
                href={`https://wa.me/6285236132763?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-ngreen text-black font-black text-xs uppercase px-4 py-4 border-[2px] border-black shadow-[3px_3px_0px_#fff] hover:bg-pink hover:text-white transition-all text-center block tracking-wider"
              >
                {lang === "id" ? "Kirim Estimasi via WhatsApp →" : "Send Estimate via WhatsApp →"}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
