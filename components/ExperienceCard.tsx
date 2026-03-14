"use client";

import { ArrowRight } from "lucide-react";
import { Experience } from "@/lib/experiences";

interface Props {
  exp: Experience;
  delay?: number;
}

export default function ExperienceCard({ exp, delay = 0 }: Props) {
  return (
    <div
      className="experience-card relative overflow-hidden"
      style={{
        background: "var(--dark-card)",
        border: "1px solid var(--dark-border)",
        animation: `cardReveal 0.8s ease ${delay}s both`,
      }}
    >
      {/* Card image area */}
      <div className="relative overflow-hidden" style={{ height: 220 }}>
        <div
          className="card-image-inner w-full h-full flex items-center justify-center text-6xl"
          style={{ background: exp.bgGradient }}
        >
          {exp.emoji}
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
          }}
        />

        {/* Badge */}
        {exp.badge && (
          <div
            className="absolute top-4 right-4 px-3 py-1"
            style={{
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.4)",
              color: "var(--gold-light)",
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "var(--font-cinzel)",
            }}
          >
            {exp.badge}
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6">
        <p
          className="mb-2"
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "0.55rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--gold)",
          }}
        >
          {exp.category}
        </p>

        <h3
          className="mb-2 leading-tight"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1.3rem",
            fontWeight: 500,
          }}
        >
          {exp.description} 
        </h3>

        <p
          className="mb-5"
          style={{
            fontSize: "0.72rem",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "rgba(248,243,232,0.55)",
          }}
        >
          {exp.description}
        </p>

        {/* Footer */}
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: "1px solid var(--dark-border)" }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                color: "var(--text-muted)",
              }}
            >
              From{" "}
            </span>
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.1rem",
                fontWeight: 300,
                color: "var(--cream)",
              }}
            >
              {exp.currency} {exp.price}
            </span>
          </div>

          <button
            className="card-arrow-btn flex items-center justify-center transition-all duration-300"
            style={{
              width: 36,
              height: 36,
              border: "1px solid var(--dark-border)",
              background: "transparent",
              color: "var(--gold)",
            }}
            aria-label={`View ${exp.title}`}
          >
            <ArrowRight size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
