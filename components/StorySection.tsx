"use client";

export default function StorySection() {
  return (
    <section
      id="section-1"
      className="scroll-snap-section flex items-center justify-center"
      style={{ background: "#111111" }}
    >
      {/* Radial background glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(201,168,76,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left — Visual rings */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Outer ring */}
            <div
              className="story-ring absolute"
              style={{
                width: 320,
                height: 320,
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "50%",
                animation: "rotateSlow 30s linear infinite",
              }}
            />
            {/* Middle ring */}
            <div
              className="absolute"
              style={{
                width: 260,
                height: 260,
                border: "1px solid rgba(201,168,76,0.1)",
                borderRadius: "50%",
                animation: "rotateSlow 20s linear infinite reverse",
              }}
            />
            {/* Center circle */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: 180,
                height: 180,
                background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "50%",
                animation: "glowPulse 4s ease-in-out infinite",
              }}
            >
              <span
                style={{
                  fontSize: "3.5rem",
                  animation: "heartbeat 3s ease-in-out infinite",
                }}
              >
                ♥
              </span>
            </div>
          </div>
        </div>

        {/* Right — Text */}
        <div>
          {/* Eyebrow */}
          <div
            className="flex items-center gap-4 mb-6 pt-5"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "0.65rem",
              letterSpacing: "0.4em",
              color: "var(--gold)",
              textTransform: "uppercase",
            }}
          >
            <span>Brand Story </span>
            <div
              style={{
                height: 1,
                flex: 1,
                maxWidth: 60,
                background: "linear-gradient(90deg, var(--gold), transparent)",
              }}
            />
          </div>

          {/* Heading */}
          <h2
            className="mb-6 leading-[1.2]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              fontWeight: 400,
            }}
          >

            <br />
            <span className="gold-text">           Romance Should Never Feel Ordinary
</span>
            <br />
            </h2>
             <p
            className="mb-5 leading-loose"
            style={{
              fontSize: "1.2rem",
              fontWeight: 300,
              color: "rgba(248,243,232,0.65)",
              lineHeight: 2,
            }}
          >
In the middle of busy lives, romance often gets forgotten. The Date Curator was created to make meaningful moments easy again.         
</p>
          {/* Body text */}
          <p
            className="mb-5 leading-loose"
            style={{
              fontSize: "1.2rem",
              fontWeight: 300,
              color: "rgba(248,243,232,0.65)",
              lineHeight: 2,
            }}
          >
           From intimate picnics to luxury date nights, we design personalised experiences that help couples reconnect, celebrate love, and create unforgettable memories without the stress of planning.
          </p>

          <p
            className="mb-8 leading-loose"
            style={{
              fontSize: "1.2rem",
              fontWeight: 300,
              color: "rgba(248,243,232,0.65)",
              lineHeight: 2,
            }}
          >
            Each experience is handcrafted by our team of romance curators,
            drawing from the finest venues, exquisite cuisine, and intimate
            details that speak directly to your unique love story.
          </p>

          {/* Stats */}
          <div
            className="flex gap-10 pt-6"
            style={{
              borderTop: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            {[
              { num: "200+", label: "Experiences" },
              { num: "98%",  label: "Satisfaction" },
              { num: "5★",   label: "Rated" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <span
                  className="block gold-text"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2.2rem",
                    fontWeight: 300,
                  }}
                >
                  {num}
                </span>
                <span
                  className="block mt-1"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <span className="section-num">02 / 04</span>
    </section>
  );
}
