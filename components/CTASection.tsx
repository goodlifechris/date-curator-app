"use client";

import { Heart, ArrowRight, MessageCircle, Gift } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="section-3"
      className="scroll-snap-section flex items-center justify-center"
      style={{ background: "#111111" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Decorative rotating rings */}
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          width: 500,
          height: 500,
          border: "1px solid rgba(201,168,76,0.08)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          animation: "rotateSlow 40s linear infinite",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          width: 700,
          height: 700,
          border: "1px solid rgba(201,168,76,0.04)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          animation: "rotateSlow 60s linear infinite reverse",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          width: 300,
          height: 300,
          border: "1px solid rgba(201,168,76,0.06)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          animation: "rotateSlow 25s linear infinite",
        }}
      />

      {/* Corner decorative lines */}
      <div
        className="absolute top-16 left-16 pointer-events-none"
        style={{ width: 80, height: 80 }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 30,
            height: 1,
            background: "var(--gold)",
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1,
            height: 30,
            background: "var(--gold)",
            opacity: 0.3,
          }}
        />
      </div>
      <div
        className="absolute bottom-16 right-16 pointer-events-none"
        style={{ width: 80, height: 80 }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 30,
            height: 1,
            background: "var(--gold)",
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 1,
            height: 30,
            background: "var(--gold)",
            opacity: 0.3,
          }}
        />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 text-center px-8 max-w-2xl mx-auto"
      >
        {/* Eyebrow */}
        <div
          className="flex items-center justify-center gap-4 mb-8"
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "0.65rem",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: "var(--gold)",
          }}
        >
          <div
            style={{
              height: 1,
              width: 40,
              background: "var(--gold)",
              opacity: 0.5,
            }}
          />
          <span>Begin Your Story</span>
          <div
            style={{
              height: 1,
              width: 40,
              background: "var(--gold)",
              opacity: 0.5,
            }}
          />
        </div>

        {/* Heading */}
        <h2
          className="mb-4 leading-none"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            fontWeight: 300,
            fontStyle: "italic",
          }}
        >
          <span className="gold-text">Plan Your</span>
          <br />
          <span style={{ color: "var(--cream)" }}>Perfect Date</span>
        </h2>

        {/* Sub text */}
        <p
          className="mb-12 leading-loose"
          style={{
            fontSize: "0.75rem",
            fontWeight: 300,
            letterSpacing: "0.12em",
            color: "rgba(248,243,232,0.5)",
            textTransform: "uppercase",
            lineHeight: 2,
          }}
        >
          Tell us about your love story and our curators
          <br className="hidden md:block" />
          will craft an experience that is uniquely, beautifully yours.
        </p>

        {/* Main CTA Button */}
        <div className="mb-8">
          <button
            className="cta-main-btn inline-flex items-center gap-4 px-16 py-5"
            style={{
              background:
                "linear-gradient(135deg, var(--gold-dark), var(--gold), var(--gold-light))",
              color: "var(--obsidian)",
              fontFamily: "var(--font-cinzel)",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              border: "none",
              animation: "glowPulse 3s ease-in-out infinite",
            }}
          >
            <Heart
              size={16}
              fill="currentColor"
              className="relative z-[1]"
            />
            <span className="relative z-[1]">Plan Your Date</span>
            <ArrowRight size={16} className="relative z-[1]" strokeWidth={2} />
          </button>
        </div>

        {/* Secondary links */}
        <div
          className="flex items-center justify-center gap-6 flex-wrap"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            fontFamily: "var(--font-montserrat)",
          }}
        >
          <button
            className="flex items-center gap-2 transition-colors duration-300 hover:text-gold"
            style={{
              background: "none",
              border: "none",
              color: "inherit",
              fontSize: "inherit",
              letterSpacing: "inherit",
              fontFamily: "inherit",
              textTransform: "inherit",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--gold)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            <MessageCircle size={12} strokeWidth={1.5} />
            <span
              style={{
                borderBottom: "1px solid rgba(201,168,76,0.3)",
                paddingBottom: 1,
              }}
            >
              Speak with a Curator
            </span>
          </button>

          <span style={{ color: "var(--dark-border)" }}>·</span>

          <button
            className="flex items-center gap-2"
            style={{
              background: "none",
              border: "none",
              color: "inherit",
              fontSize: "inherit",
              letterSpacing: "inherit",
              fontFamily: "inherit",
              textTransform: "inherit",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--gold)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            <Gift size={12} strokeWidth={1.5} />
            <span
              style={{
                borderBottom: "1px solid rgba(201,168,76,0.3)",
                paddingBottom: 1,
              }}
            >
              Gift an Experience
            </span>
          </button>
        </div>

        {/* Tagline */}
        <p
          className="mt-14"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "0.9rem",
            fontStyle: "italic",
            fontWeight: 300,
            color: "rgba(248,243,232,0.25)",
            letterSpacing: "0.05em",
          }}
        >
          Luxury is in each detail
        </p>
      </div>

      <span className="section-num">04 / 04</span>
    </section>
  );
}
