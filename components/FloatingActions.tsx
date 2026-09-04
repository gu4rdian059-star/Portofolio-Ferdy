"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/context/AppContext";

export default function FloatingActions() {
  const { lang } = useApp();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappMessage = encodeURIComponent(
    lang === "id"
      ? "Halo Ferdy, saya tertarik untuk bekerja sama dan ingin berdiskusi mengenai proyek!"
      : "Hello Ferdy, I'm interested in collaborating and would like to discuss a project!"
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end select-none pointer-events-none">
      {/* 1. Scroll to Top Button (Appears on scroll) */}
      <div
        className={`transition-all duration-300 transform ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
            : "opacity-0 translate-y-6 pointer-events-none scale-75"
        }`}
      >
        <button
          onClick={scrollToTop}
          aria-label={lang === "id" ? "Kembali ke bagian atas halaman" : "Scroll back to top"}
          title={lang === "id" ? "Kembali ke Atas" : "Back to Top"}
          className="avatar-circle group relative w-12 h-12 sm:w-14 sm:h-14 bg-[#8b0000] hover:bg-[#a00000] text-white border-[3px] border-black shadow-[3px_3px_0px_#000] hover:shadow-[5px_5px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] flex items-center justify-center transition-all cursor-pointer rounded-full"
        >
          {/* Arrow Up Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
          </svg>

          {/* Hover Tooltip Label */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white text-[11px] font-black uppercase px-2.5 py-1 border-[2px] border-black shadow-[2px_2px_0px_#ccff00] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
            {lang === "id" ? "Ke Atas ↑" : "Top ↑"}
          </span>
        </button>
      </div>

      {/* 2. WhatsApp Floating CTA Button */}
      <div className="pointer-events-auto">
        <a
          href={`https://wa.me/6285236132763?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={lang === "id" ? "Hubungi Ferdy lewat WhatsApp" : "Contact Ferdy via WhatsApp"}
          title="Chat via WhatsApp"
          className="avatar-circle group relative w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white border-[3px] border-black shadow-[3px_3px_0px_#000] hover:shadow-[5px_5px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] flex items-center justify-center transition-all cursor-pointer rounded-full"
        >
          {/* WhatsApp Official SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 group-hover:scale-110"
            aria-hidden="true"
          >
            <path d="M12.004 2c-5.518 0-9.996 4.48-9.996 10.002 0 1.767.462 3.493 1.34 5.016l-1.348 4.982 5.097-1.336a9.92 9.92 0 0 0 4.907 1.336h.004c5.518 0 9.996-4.48 9.996-10.002 0-5.522-4.478-10.002-9.996-10.002zm5.83 14.286c-.244.686-1.42 1.31-1.956 1.394-.51.08-1.173.116-3.794-.966-3.148-1.298-5.176-4.502-5.334-4.71-.154-.21-1.27-1.69-1.27-3.226 0-1.536.804-2.292 1.09-2.608.284-.316.622-.394.83-.394.208 0 .416.002.598.01.192.01.45-.074.704.536.262.63.894 2.184.972 2.342.078.158.13.344.026.554-.104.21-.156.34-.31.522-.156.182-.328.406-.468.544-.156.156-.318.326-.136.638.182.312.81 1.336 1.738 2.164 1.194 1.064 2.2 1.394 2.512 1.55.312.156.494.13.676-.078.182-.21.78-.91 1-.988.22-.078.442-.042.664.042.222.084 1.41.666 1.652.788.242.122.404.182.464.286.06.104.06.602-.184 1.288z" />
          </svg>

          {/* Hover Tooltip Label */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-ngreen text-[11px] font-black uppercase px-2.5 py-1 border-[2px] border-black shadow-[2px_2px_0px_#fff] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
            {lang === "id" ? "Chat WhatsApp 💬" : "WhatsApp Chat 💬"}
          </span>
        </a>
      </div>
    </div>
  );
}
