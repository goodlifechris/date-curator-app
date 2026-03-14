// components/MembershipSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import TopNavBar from "@/components/TopNavBar";

const benefits = [
  "Monthly Romantic Credits – Use your credits to book curated date experiences whenever the moment feels right.",
  "Priority Access – Members get first access to our most popular experiences and limited romantic setups.",
  "Exclusive Experiences – Access romantic locations and experiences available only to members.",
  "Special Member Surprises – Occasional complimentary touches added to your date to make it even more memorable.",
  "Flexible Scheduling – Use your credits whenever you’re ready — no pressure, no stress.",
];

const plans = [
  {
    name: "Silver",
    price: "KES 20,000",
    period: "/ month",
    description:
      "Perfect for couples who want to keep romance alive with regular curated date experiences.",
    features: ["Monthly credits", "Standard experiences", "Email support"],
    buttonText: "Choose Silver",
  },
  {
    name: "Gold",
    price: "KES 35,000",
    period: "/ month",
    description:
      "Elevated romantic experiences with access to more premium setups and exclusive options.",
    features: [
      "Everything in Silver",
      "Premium experiences",
      "Priority booking",
      "Surprise upgrades",
    ],
    buttonText: "Choose Gold",
    highlighted: true,
  },
    {
    name: "Elite",
    price: "KES60,000",
    period: "/ month",
    description:
      "Luxury romantic experiences with VIP access and unforgettable moments.",
    features: ["Monthly credits", "Standard experiences", "Email support"],
    buttonText: "Choose Silver",
  },
];

export const MembershipSection = () => {
  return (
    <section
      style={{
        background: "var(--obsidian)",
        minHeight: "100vh",
        width: "100%",
      }}
      className="py-16 px-4 sm:px-6 lg:px-8 mt-64"
    >

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.1,
            }}
            className="gold-text"
          >
The Date Concierge
          </h2>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              fontFamily: "var(--font-montserrat)",
            }}
            className="mt-4"
          >
Never run out of romantic ideas again.
          </p>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              color: "rgba(248,243,232,0.6)",
              fontSize: "1.1rem",
            }}
            className="mt-6 max-w-2xl mx-auto"
          >
           Keeping the spark alive shouldn’t feel like another task on your to-do list.
With The Date Concierge, romance is taken care of for you.

          </p>
                    <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              color: "rgba(248,243,232,0.6)",
              fontSize: "1.1rem",
            }}
            className="mt-6 max-w-2xl mx-auto"
          >
      

As a member, you receive monthly romantic credits that can be used for beautifully curated date experiences from intimate picnics to elegant dinner dates and unforgettable romantic moments.

Our team handles every detail behind the scenes so you can simply choose a date, show up, and enjoy meaningful time with the person you love.

Because the best relationships are built on moments that feel thoughtful, intentional, and unforgettable.
          </p>
        </motion.div>

  <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.1,
            }}
            className="gold-text"
          >
Membership Benefits
          </h2>
          </motion.div>
        {/* Benefits grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 p-5 rounded-2xl"
              style={{
                background: "var(--dark-surface)",
                border: "1px solid var(--dark-border)",
              }}
            >
              <CheckCircle
                className="w-6 h-6 flex-shrink-0 mt-0.5"
                style={{ color: "var(--gold)" }}
              />
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "var(--cream)",
                  fontSize: "1.1rem",
                }}
              >
                {benefit}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Membership Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              fontStyle: "italic",
            }}
            className="text-center gold-text mb-10"
          >
            Membership Plans
          </h3>

          <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex-1 max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden"
                style={{
                  background: "var(--dark-surface)",
                  border: plan.highlighted
                    ? "2px solid var(--gold)"
                    : "1px solid var(--dark-border)",
                  boxShadow: plan.highlighted
                    ? "0 0 30px rgba(201,168,76,0.2)"
                    : "none",
                }}
              >
                <div className="p-8" style={{ borderBottom: "1px solid var(--dark-border)" }}>
                  <h4
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "2rem",
                      fontWeight: 300,
                      fontStyle: "italic",
                    }}
                    className="gold-text mb-2"
                  >
                    {plan.name}
                  </h4>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "2.5rem",
                        fontWeight: 400,
                        color: "var(--cream)",
                      }}
                    >
                      {plan.price}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontStyle: "italic",
                      color: "rgba(248,243,232,0.7)",
                      fontSize: "1rem",
                    }}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{ color: "var(--gold)" }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "0.9rem",
                            color: "var(--cream)",
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="w-full py-3 px-6 rounded-full transition-all duration-300"
                    style={{
                      border: "1px solid var(--gold)",
                      color: "var(--gold)",
                      fontFamily: "var(--font-cinzel)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      background: "transparent",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(201,168,76,0.08)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

  <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.1,
            }}
            className="gold-text"
          >
        Member Invitation
          </h2>
          </motion.div>
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-16"
        >
         
            <motion.div
          
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 p-5 rounded-2xl"
              style={{
                background: "var(--dark-surface)",
                border: "1px solid var(--dark-border)",
              }}
            >
              
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "var(--cream)",
                  fontSize: "1.1rem",
                }}
              >
           Love deserves more than the occasional date night.

Join The Date Concierge and enjoy beautifully curated romantic experiences designed to keep your connection strong.

Join The Date Concierge
              </p>
            </motion.div>
          
        </motion.div>

      </div>
    </section>
  );
};

export default MembershipSection;