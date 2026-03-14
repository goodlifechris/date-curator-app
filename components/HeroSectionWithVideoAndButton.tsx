"use client";

import { RefObject, useState, useEffect } from "react";
import { ChevronDown, Heart, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  containerRef: RefObject<HTMLDivElement>;
}

export default function HeroSectionWithVideoAndButtons({ containerRef }: Props) {
  const [videoIndex, setVideoIndex] = useState(0);
  const videos = ["/videos/video2.mp4"];

  const scrollToNext = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  const router = useRouter();

  const goToPlan = () => {
    router.push("/plan");
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
        className="scroll-snap-section flex items-center justify-center relative overflow-hidden mt-32"
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

        {/* Dark Overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 60%, rgba(10,10,10,0.8) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Gradient overlay */}
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

        {/* Floating orbs */}
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
          className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-12 w-full max-w-6xl"
          style={{ animation: "fadeIn 1.5s ease forwards" }}
        >
          {/* Headline */}
          <h1
            className="mb-4 sm:mb-6 md:mb-8 lg:mb-12 leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontStyle: "italic",
              opacity: 0,
              animation: "fadeUp 1s ease 1s forwards",
              textShadow: "0 4px 20px rgba(0,0,0,0.6), 0 2px 10px rgba(0,0,0,0.4)",
              fontSize: "clamp(1.75rem, 5vw, 5rem)",
            }}
          >
          
            <br />
            <span style={{ color: "var(--cream)", fontWeight: 300 }}>
              We handle every detail so you can focus on the moment and the person beside you.
            </span>
          </h1>

          {/* Social links */}
          <p
            className="text-[0.6rem] sm:text-xs md:text-sm tracking-widest uppercase mb-6 sm:mb-8 md:mb-12"
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 300,
              color: "var(--text-muted)",
              opacity: 0,
              animation: "fadeUp 1s ease 1.2s forwards",
              textShadow: "0 2px 6px rgba(0,0,0,0.4)",
              letterSpacing: "0.25em",
            }}
          >
            <Link href="https://www.instagram.com/thedatecurator.ke?igsh=b2FncW9uZ2p5aGlz" target="_blank" rel="noopener noreferrer">
              Instagram
            </Link>
            &nbsp;·&nbsp;
            <Link href="https://www.tiktok.com/@glam_luxe_events?_r=1&_t=ZS-94ggwwrLtoo" target="_blank" rel="noopener noreferrer">
              TikTok
            </Link>
            &nbsp;·&nbsp;
            <Link href="https://www.facebook.com/share/18DSwbGPhA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              Facebook
            </Link>
          </p>

          {/* Divider with heart */}
          <div
            className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12"
            style={{ opacity: 0, animation: "fadeUp 1s ease 1.4s forwards" }}
          >
            <div
              style={{
                height: 1,
                width: "clamp(40px, 15vw, 80px)",
                background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
              }}
            />
            <span
              style={{
                color: "var(--gold)",
                animation: "heartbeat 2s ease-in-out infinite 2s",
                fontSize: "clamp(1rem, 2vw, 1.5rem)",
              }}
            >
              ♥
            </span>
            <div
              style={{
                height: 1,
                width: "clamp(40px, 15vw, 80px)",
                background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
              }}
            />
          </div>

          {/* Main CTA Button */}
        

          {/* HOW IT WORKS Section */}
          <div
            className="mt-16 sm:mt-20 md:mt-24"
            style={{ opacity: 0, animation: "fadeUp 1s ease 1.8s forwards" }}
          >
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 sm:mb-10"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--gold)",
                letterSpacing: "0.05em",
              }}
            >
              How It Works
            </h2>

            {/* Steps Grid with Elegant Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto mb-10 sm:mb-12">
              {[
                { icon: Heart, title: "Choose Your Experience", desc: "Browse our curated date ideas." },
                { icon: Sparkles, title: "We Plan Everything", desc: "We handle the concept, setup, and coordination." },
                { icon: Star, title: "You Show Up & Enjoy", desc: "Create a memory you'll never forget." },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-3"
                    style={{
                      border: "1px solid var(--gold)",
                      background: "rgba(201,168,76,0.05)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 8px 24px rgba(201,168,76,0.15)",
                    }}
                  >
                    <step.icon size={28} className="sm:w-8 sm:h-8" style={{ color: "var(--gold)" }} />
                  </div>
                  <h3
                    className="text-base sm:text-lg md:text-xl font-medium mb-2"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      color: "var(--cream)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-xs sm:text-sm"
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Three CTA Buttons – matching main button style */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {[
                { label: "Romance Club", onClick: () => router.push("/membership") },
                { label: "Experience", onClick: () => router.push("/experience") },
                { label: "Curate My Date", onClick: () => router.push("/plan") },
              ].map((btn, i) => (
                <button
                  key={i}
                  onClick={btn.onClick}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm transition-all duration-300 hover:bg-gold/5"
                  style={{
                    border: "1px solid var(--gold)",
                    color: "var(--gold)",
                    fontFamily: "var(--font-cinzel)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    background: "transparent",
                    backdropFilter: "blur(10px)",
                    borderRadius: "9999px",
                    boxShadow: "0 4px 16px rgba(201,168,76,0.1)",
                  }}
                >
                  {btn.label}
                  <span>→</span>
                </button>
              ))}
            </div>
          </div>

          {/* Video indicator dots */}
          <div
            className="flex items-center justify-center gap-1.5 sm:gap-2 mt-8 sm:mt-12 md:mt-16"
            style={{ opacity: 0, animation: "fadeUp 1s ease 2s forwards" }}
          >
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setVideoIndex(index)}
                className="transition-all duration-500"
                style={{
                  width: videoIndex === index ? "clamp(16px, 4vw, 24px)" : 8,
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
          className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 z-20"
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
            className="text-[8px] sm:text-[9px] md:text-[10px] tracking-widest uppercase"
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

        <span className="section-num relative z-20 text-xs sm:text-sm md:text-base">01 / 04</span>
      </section>
    </>
  );
}