// app/contact/page.tsx
"use client";

import TopNavBar from "@/components/TopNavBar";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div
      style={{
        background: "var(--obsidian)",
        minHeight: "100vh",
      }}
    >
      <div className="max-w-[1200px] mx-auto mt-32 px-6 md:px-16 pt-32 pb-32">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem,5vw,4rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.1,
            }}
          >
            Get in <span className="gold-text">Touch</span>
          </h1>
          <p
            className="mt-4"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              fontFamily: "var(--font-montserrat)",
            }}
          >
            We’d love to hear from you
          </p>
          <p
            className="mt-6 max-w-xl mx-auto"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              color: "rgba(248,243,232,0.6)",
              fontSize: "1.1rem",
            }}
          >
            Whether you have a question, a dream date idea, or just want to say
            hello – our team is here to help.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left column: Contact info */}
          <div className="space-y-8">
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "2rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--gold)",
                  marginBottom: "1.5rem",
                }}
              >
                Contact Information
              </h2>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-full"
                    style={{
                      background: "var(--dark-surface)",
                      border: "1px solid var(--dark-border)",
                    }}
                  >
                    <Phone size={20} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        color: "var(--text-muted)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      PHONE
                    </p>
                    <a
                      href="tel:+254722172759"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1.3rem",
                        color: "var(--cream)",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--gold)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--cream)")
                      }
                    >
                      +254 722 123 456
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-full"
                    style={{
                      background: "var(--dark-surface)",
                      border: "1px solid var(--dark-border)",
                    }}
                  >
                    <Mail size={20} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        color: "var(--text-muted)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      EMAIL
                    </p>
                    <a
                      href="mailto:thedatecurator@gmail.com"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1.3rem",
                        color: "var(--cream)",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--gold)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--cream)")
                      }
                    >
                      hello@thedatecurator.ke
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-full"
                    style={{
                      background: "var(--dark-surface)",
                      border: "1px solid var(--dark-border)",
                    }}
                  >
                    <MapPin size={20} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        color: "var(--text-muted)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      LOCATION
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1.3rem",
                        color: "var(--cream)",
                      }}
                    >
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-full"
                    style={{
                      background: "var(--dark-surface)",
                      border: "1px solid var(--dark-border)",
                    }}
                  >
                    <Heart size={20} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        color: "var(--text-muted)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      FOLLOW US
                    </p>
                    <div className="flex gap-4">





 

                      <Link
                        href="https://www.instagram.com/thedatecurator.ke?igsh=b2FncW9uZ2p5aGlz"
                        target="_blank"
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          fontSize: "1.1rem",
                          color: "var(--cream)",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--gold)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--cream)")
                        }
                      >
                        Instagram
                      </Link>
                      <Link
                        href="https://www.tiktok.com/@glam_luxe_events?_r=1&_t=ZS-94ggwwrLtoo"
                        target="_blank"
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          fontSize: "1.1rem",
                          color: "var(--cream)",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--gold)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--cream)")
                        }
                      >
                        TikTok
                      </Link>
                      <Link
                        href="https://www.facebook.com/share/18DSwbGPhA/?mibextid=wwXIfr"
                        target="_blank"
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          fontSize: "1.1rem",
                          color: "var(--cream)",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--gold)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--cream)")
                        }
                      >
                        Facebook
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Contact form */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "2rem",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--gold)",
                marginBottom: "1.5rem",
              }}
            >
              Send us a message
            </h2>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="you@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="form-label">Message</label>
                <textarea
                  rows={5}
                  className="form-input"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="luxury-btn w-full"
                style={{ cursor: "pointer" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Styling (reused from PlanPage) */}
      <style jsx>{`
        .form-label {
          display: block;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 8px;
          color: var(--text-muted);
          font-family: var(--font-montserrat);
        }

        .form-input {
          width: 100%;
          padding: 14px 16px;
          background: var(--dark-surface);
          border: 1px solid var(--dark-border);
          color: var(--cream);
          font-family: var(--font-montserrat);
          font-size: 0.9rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          border-color: var(--gold);
          background: rgba(201, 168, 76, 0.05);
        }

        textarea.form-input {
          resize: none;
        }

        .luxury-btn {
          padding: 14px 28px;
          border: 1px solid var(--gold);
          color: var(--gold);
          font-family: var(--font-cinzel);
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          background: transparent;
          transition: all 0.3s ease;
        }

        .luxury-btn:hover {
          background: rgba(201, 168, 76, 0.08);
        }
      `}</style>
    </div>
  );
}