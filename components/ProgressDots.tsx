"use client";

import { useEffect, useState, RefObject } from "react";

interface Props {
  containerRef: RefObject<HTMLDivElement>;
}

const SECTIONS = ["section-0", "section-1", "section-2", "section-3"];

export default function ProgressDots({ containerRef }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const scrollTop = container.scrollTop;
      const h = window.innerHeight;
      const current = Math.min(Math.round(scrollTop / h), SECTIONS.length - 1);
      setActive(current);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [containerRef]);

  const scrollToSection = (idx: number) => {
    const el = document.getElementById(SECTIONS[idx]);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {SECTIONS.map((_, i) => (
        <button
          key={i}
          onClick={() => scrollToSection(i)}
          className={`progress-dot w-[6px] h-[6px] rounded-full bg-dark-border transition-all duration-400 ${
            active === i ? "active" : ""
          }`}
          aria-label={`Go to section ${i + 1}`}
        />
      ))}
    </div>
  );
}
