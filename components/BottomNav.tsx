"use client";

import { useEffect, useState, RefObject } from "react";
import { Compass, Heart, Home, User } from "lucide-react";

interface Props {
  containerRef: RefObject<HTMLDivElement>;
}

const navItems = [
  { label: "Home",      Icon: Home,    sectionIdx: 0 },
  { label: "Explore",   Icon: Compass, sectionIdx: 2 },
  { label: "Plan Date", Icon: Heart,   sectionIdx: 3 },
  { label: "Profile",   Icon: User,    sectionIdx: -1 },
];

const SECTIONS = ["section-0", "section-1", "section-2", "section-3"];

export default function BottomNav({ containerRef }: Props) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const h = window.innerHeight;
      const current = Math.min(
        Math.round(container.scrollTop / h),
        SECTIONS.length - 1
      );
      setActiveSection(current);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [containerRef]);

  const scrollTo = (idx: number) => {
    if (idx < 0) return;
    const el = document.getElementById(SECTIONS[idx]);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const getActiveNav = (sectionIdx: number) => {
    if (sectionIdx === 0 && activeSection === 0) return true;
    if (sectionIdx === 2 && activeSection === 2) return true;
    if (sectionIdx === 3 && activeSection === 3) return true;
    return false;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-6 px-8 pointer-events-none">
      <nav
        className="pointer-events-auto flex items-center gap-0 px-4 py-[10px]"
        style={{
          background: "rgba(10,10,10,0.88)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        {navItems.map(({ label, Icon, sectionIdx }, i) => (
          <div key={label} className="flex items-center">
            {i > 0 && (
              <div
                className="w-px mx-3"
                style={{ height: "24px", background: "var(--dark-border)" }}
              />
            )}
            <button
              onClick={() => scrollTo(sectionIdx)}
              className={`nav-item-link flex flex-col items-center gap-[3px] px-5 py-2 transition-all duration-300 ${
                getActiveNav(sectionIdx) ? "active" : ""
              }`}
            >
              <Icon
                size={18}
                strokeWidth={1.5}
                className="transition-colors duration-300"
                style={{
                  color: getActiveNav(sectionIdx)
                    ? "var(--gold)"
                    : "var(--text-muted)",
                }}
              />
              <span
                className="text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-cinzel)",
                  color: getActiveNav(sectionIdx)
                    ? "var(--gold)"
                    : "var(--text-muted)",
                }}
              >
                {label}
              </span>
            </button>
          </div>
        ))}
      </nav>
    </div>
  );
}
