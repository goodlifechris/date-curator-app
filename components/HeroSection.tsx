"use client";

import Image from "next/image";
import { RefObject } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  containerRef: RefObject<HTMLDivElement>;
}

export default function HeroSection({ containerRef }: Props) {
  const scrollToNext = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  const scrollToExplore = () => {
    const el = document.getElementById("section-2");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="section-0"
      className="scroll-snap-section flex items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, rgba(139,105,20,0.05) 0%, transparent 50%), #0A0A0A",
      }}
    >
      {/* Grain texture */}
      <div className="grain-overlay" />

      {/* Floating orbs */}
      <div
        className="orb"
        style={{
          width: 600, height: 600,
          top: -150, right: -150,
          background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          animation: "orbFloat1 12s ease-in-out infinite",
        }}
      />
      <div
        className="orb"
        style={{
          width: 400, height: 400,
          bottom: -100, left: -100,
          background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
          animation: "orbFloat2 15s ease-in-out infinite",
        }}
      />
      <div
        className="orb"
        style={{
          width: 200, height: 200,
          top: "30%", left: "10%",
          background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
          animation: "orbFloat1 20s ease-in-out infinite reverse",
        }}
      />

      {/* Decorative lines */}
      <div
        className="deco-line"
        style={{
          width: 300, top: "15%", left: "5%",
          transform: "rotate(-15deg)",
          animation: "goldPulse 4s ease-in-out infinite",
        }}
      />
      <div
        className="deco-line"
        style={{
          width: 200, bottom: "20%", right: "8%",
          transform: "rotate(20deg)",
          animation: "goldPulse 4s ease-in-out infinite 2s",
        }}
      />

      {/* Main content */}
      <div
        className="relative z-10 text-center px-8"
        style={{ animation: "fadeIn 1.5s ease forwards" }}
      >
        {/* Logo */}
        <div
          style={{
            animation: "scaleIn 1.2s cubic-bezier(0.16,1,0.3,1) forwards, float 6s ease-in-out 1.5s infinite",
            
            marginBottom: "2.5rem",
          }}
        >
          <Image
            src="/logo.png"
            alt="The Date Curator — By Luxury Proposal"
            width={280}
            height={200}
            priority
            className="mx-auto w-[220px] md:w-[280px] h-auto"
          />
        </div>

        {/* Tagline */}
        <p
          className="uppercase tracking-[0.35em] mb-6 text-sm md:text-base"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 300,
            color: "var(--gold-pale)",
            opacity: 0,
            animation: "fadeUp 1s ease 0.8s forwards",
          }}
        >
          Curating Extraordinary Moments
        </p>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.05]"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 300,
            fontStyle: "italic",
            opacity: 0,
            animation: "fadeUp 1s ease 1s forwards",
          }}
        >
          <span className="gold-text">Love, Crafted</span>
          <br />
          <span style={{ color: "var(--cream)", fontWeight: 300 }}>
            to Perfection
          </span>
        </h1>

        {/* Sub */}
        <p
          className="text-xs tracking-[0.25em] uppercase mb-12"
          style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 300,
            color: "var(--text-muted)",
            opacity: 0,
            animation: "fadeUp 1s ease 1.2s forwards",
          }}
        >
          Nairobi &nbsp;·&nbsp; Luxury Experiences &nbsp;·&nbsp; By Invitation
        </p>

        {/* Divider with heart */}
        <div
          className="flex items-center justify-center gap-4 mb-12"
          style={{ opacity: 0, animation: "fadeUp 1s ease 1.4s forwards" }}
        >
          <div
            style={{
              height: 1,
              width: 80,
              background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
            }}
          />
          <span
            style={{ color: "var(--gold)", animation: "heartbeat 2s ease-in-out infinite 2s" }}
          >
            ♥
          </span>
          <div
            style={{
              height: 1,
              width: 80,
              background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
            }}
          />
        </div>

        {/* CTA Button */}
        <div style={{ opacity: 0, animation: "fadeUp 1s ease 1.6s forwards" }}>
          <button
            onClick={scrollToExplore}
            className="hero-outline-btn inline-flex items-center gap-4 px-12 py-4"
            style={{
              border: "1px solid var(--gold)",
              color: "var(--gold)",
              fontFamily: "var(--font-cinzel)",
              fontSize: "0.75rem",
              fontWeight: 400,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              background: "transparent",
            }}
          >
            <span className="relative z-[1]">Explore Experiences</span>
            <span className="relative z-[1]">→</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2"
        style={{
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          animation: "fadeIn 1s ease 2.5s forwards, scrollBounce 2s ease-in-out 3.5s infinite",
          opacity: 0,
          background: "none",
          border: "none",
        }}
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-montserrat)" }}
        >
          Scroll
        </span>
        <ChevronDown
          size={20}
          strokeWidth={1}
          style={{ color: "var(--gold)", marginTop: -4 }}
        />
      </button>

      <span className="section-num">01 / 04</span>
    </section>
  );
}
