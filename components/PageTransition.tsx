"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function PageTransition() {
  const [isSwiping, setIsSwiping] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      // Allow user to use modifier keys for opening in new tab
      if (
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.defaultPrevented
      ) {
        return;
      }

      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      // Ignore links with target="_blank"
      if (anchor.target && anchor.target !== "_self") return;

      // Ignore download links
      if (anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external or non-HTTP links
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("//") ||
        href.endsWith(".pdf")
      ) {
        return;
      }

      // If it's a hash link on the same page
      if (href.startsWith("#")) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
        return;
      }

      // If navigating to the exact same page path
      const [pathOnly] = href.split("?");
      if (pathOnly === pathname) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // Intercept and run Brutalist Swipe page transition
      e.preventDefault();
      if (isNavigatingRef.current) return;
      isNavigatingRef.current = true;
      setIsSwiping(true);

      // Midpoint: switch route when viewport is completely covered by the black panel
      setTimeout(() => {
        router.push(href);
        window.scrollTo(0, 0);
      }, 480);

      // Animation complete: cleanup overlay
      setTimeout(() => {
        setIsSwiping(false);
        isNavigatingRef.current = false;
      }, 1080);
    };

    document.addEventListener("click", handleAnchorClick, true);
    return () => {
      document.removeEventListener("click", handleAnchorClick, true);
    };
  }, [pathname, router]);

  if (!isSwiping) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden"
      aria-hidden="true"
    >
      {/* Trailing Panel 1 (Pink) */}
      <div className="fixed inset-0 bg-[#ff2d9b] z-[99996] animate-swipe-panel pointer-events-none" />

      {/* Trailing Panel 2 (Neon Green) */}
      <div className="fixed inset-0 bg-[#ccff00] z-[99997] animate-swipe-panel-delay1 pointer-events-none" />

      {/* Main Panel (Black) with spinning Brutalist Star */}
      <div className="fixed inset-0 bg-[#0a0a0a] z-[99998] flex flex-col items-center justify-center animate-swipe-panel-delay2 pointer-events-none">
        <div className="text-[#ccff00] text-7xl md:text-8xl font-black animate-swipe-star select-none">
          ✦
        </div>
      </div>
    </div>
  );
}
