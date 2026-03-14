"use client";

import Image from "next/image";
import { RefObject, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { TopNavBar } from "./TopNavBar";

interface Props {
  containerRef: RefObject<HTMLDivElement>;
}

export default function HeroSectionWithVideos({ containerRef }: Props) {
  const [videoIndex, setVideoIndex] = useState(0);
  const videos = ["/videos/video1.mp4", "/videos/video2.mp4"];

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

  // Switch videos every 12 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videos.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>


    <section
      id="section-0"
      className="scroll-snap-section flex items-center justify-center relative overflow-hidden"
      style={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {videos.map((video, index) => (
          <video
            key={video}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: videoIndex === index ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>

      {/* Dark Overlay for Text Readability */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 60%, rgba(10,10,10,0.8) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Additional gradient overlay for depth */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(139,105,20,0.04) 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Grain texture */}
      <div className="grain-overlay absolute inset-0" style={{ pointerEvents: "none" }} />

      {/* Floating orbs (optional - adjust opacity for video) */}
      <div
        className="orb absolute"
        style={{
          width: 600,
          height: 600,
          top: -150,
          right: -150,
          background: "radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)",
          animation: "orbFloat1 12s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        className="orb absolute"
        style={{
          width: 400,
          height: 400,
          bottom: -100,
          left: -100,
          background: "radial-gradient(circle, rgba(201,168,76,0.02) 0%, transparent 70%)",
          animation: "orbFloat2 15s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Decorative lines */}
      <div
        className="deco-line absolute"
        style={{
          width: 300,
          top: "15%",
          left: "5%",
          transform: "rotate(-15deg)",
          animation: "goldPulse 4s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        className="deco-line absolute"
        style={{
          width: 200,
          bottom: "20%",
          right: "8%",
          transform: "rotate(20deg)",
          animation: "goldPulse 4s ease-in-out infinite 2s",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div
        className="relative z-10 text-center px-8"
        style={{ animation: "fadeIn 1.5s ease forwards" }}
      >


        {/* Tagline */}
        <p
          className="uppercase tracking-[0.35em] mb-6 text-sm md:text-base"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 300,
            color: "var(--gold-pale)",
            opacity: 0,
            animation: "fadeUp 1s ease 0.8s forwards",
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
         Curated Moments. Unforgettable Dates.
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
            textShadow: "0 4px 20px rgba(0,0,0,0.6), 0 2px 10px rgba(0,0,0,0.4)",
          }}
        >
          <span className="gold-text" style={{ textShadow: "0 2px 8px rgba(201,168,76,0.3)" }}>
We design and deliver beautifully curated date experiences so you can simply show up 
          </span>
          <br />
          <span style={{ color: "var(--cream)", fontWeight: 300 }}>
         Fall in love with the moment
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
            textShadow: "0 2px 6px rgba(0,0,0,0.4)",
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
            className="hero-outline-btn inline-flex items-center gap-4 px-12 py-4 hover:bg-gold/5 transition-all duration-300"
            style={{
              border: "1px solid var(--gold)",
              color: "var(--gold)",
              fontFamily: "var(--font-cinzel)",
              fontSize: "0.75rem",
              fontWeight: 400,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              background: "transparent",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px rgba(201,168,76,0.1)",
            }}
          >
            <span className="relative z-[1]">Plan My Date</span>
            <span className="relative z-[1]">→</span>
          </button>
        </div>

        {/* Video indicator dots */}
        <div
          className="flex items-center justify-center gap-2 mt-16"
          style={{ opacity: 0, animation: "fadeUp 1s ease 1.8s forwards" }}
        >
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setVideoIndex(index)}
              className="transition-all duration-500"
              style={{
                width: videoIndex === index ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: videoIndex === index ? "var(--gold)" : "var(--text-muted)",
                cursor: "pointer",
                opacity: videoIndex === index ? 1 : 0.5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 z-20"
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

      <span className="section-num relative z-20">01 / 04</span>
    </section>
</>
  );
}
