/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import { useState } from "react";
import { DM_Sans, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500"], // choose what you need
  display: "swap",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["500"], // choose what you need
  display: "swap",
});



const featureCards = [
  {
    id: 1,
    title: "Technology-Driven",
    icon: "/icons/icon_1.png",
    description:
      "Our infrastructure is built on robust technology, enabling efficient trade execution, risk monitoring, and real-time analytics that enhance our internal trading operations.",
    wrapperClass: `
      group relative rounded-2xl border border-white/10
      bg-white/5 backdrop-blur-sm p-6 shadow-lg
      transition-transform duration-300
      hover:-translate-y-2 hover:border-yellow-400 hover:bg-white/10
      active:-translate-y-2 active:border-yellow-400 active:bg-white/10
      focus:-translate-y-2 focus:border-yellow-400 focus:bg-white/10
      overflow-hidden touch-manipulation py-20
    `,
  },
  {
    id: 2,
    title: "Intelligence at Core",
    icon: "/icons/icon_2.png",
    description:
      "Data, research, and proprietary models sit at the heart of our decision-making, helping us uncover opportunity and measure risk across changing markets.",
    wrapperClass: `
      group relative rounded-2xl border border-cyan-400/40
      bg-cyan-500/10 backdrop-blur-sm p-6 shadow-xl
      transition-transform duration-300
      hover:-translate-y-2 hover:border-yellow-400 hover:bg-white/10
      active:-translate-y-2 active:border-yellow-400 active:bg-white/10
      focus:-translate-y-2 focus:border-yellow-400 focus:bg-white/10
      overflow-hidden touch-manipulation py-20
    `,
  },
  {
    id: 3,
    title: "Disciplined Trading",
    icon: "/icons/icon_3.png",
    description:
      "A rigorous framework keeps our trading focused, risk-aware, and systematic, with clear controls to support long-term performance.",
    wrapperClass: `
      group relative rounded-2xl border border-white/10
      bg-white/5 backdrop-blur-sm p-6 shadow-lg
      transition-transform duration-300
      hover:-translate-y-2 hover:border-yellow-400 hover:bg-white/10
      active:-translate-y-2 active:border-yellow-400 active:bg-white/10
      focus:-translate-y-2 focus:border-yellow-400 focus:bg-white/10
      overflow-hidden touch-manipulation py-20
    `,
  },
];

function FeatureCard({
  title,
  icon,
  description,
  wrapperClass,
}) {
  return (
    <div className={wrapperClass} tabIndex={0}>
      <div
        className="
          absolute inset-0 bg-cyan-400/20 opacity-0 blur-xl
          transition-all duration-500
          group-hover:opacity-100
          group-active:opacity-100
          group-focus:opacity-100
        "
      />
      <div className="relative mb-4">
        <div className="flex h-16 w-16 p-4 items-center justify-center rounded-full bg-[#FBF705] text-black font-semibold text-lg">
          <img src={icon} />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold mt-4">{title}</h3>
      </div>
      <p className="relative text-xl text-gray-100 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function Aboutus() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % featureCards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      (prev - 1 + featureCards.length) % featureCards.length
    );
  };

  return (
    <section
      className="
    relative w-full text-white
    px-4 md:px-8 lg:px-16
    pt-24 md:pt-32
    pb-20 md:pb-28

    bg-[url('/images/Backgrounds/About-mobile.png')]
    md:bg-[url('/images/Backgrounds/About.png')]

    bg-center bg-no-repeat
    bg-contain md:bg-cover
  "
    >
      <div className="max-w-6xl mx-auto md:py-24">
        {/* TOP: Insight That Matters */}
        <div className="text-center space-y-3">
          <p className={`${manrope.className} text-xs md:text-6xl text-gray-200`}>
            Insight That Matters
          </p>
        </div>

        {/* ---- MOBILE: CAROUSEL VIEW ---- */}
        <div className="mt-10 md:hidden relative flex items-center gap-3">
          {/* Left button */}
          <button
            type="button"
            onClick={handlePrev}
            className="
              shrink-0 h-10 w-10 rounded-full border border-white/30
              bg-black/40 backdrop-blur-sm
              flex items-center justify-center
              text-sm font-semibold
              active:scale-95
            "
          >
            ‹
          </button>

          {/* Active card */}
          <div className="flex-1 overflow-hidden h-[500px]">
            <FeatureCard {...featureCards[activeIndex]} />
          </div>

          {/* Right button */}
          <button
            type="button"
            onClick={handleNext}
            className="
              shrink-0 h-10 w-10 rounded-full border border-white/30
              bg-black/40 backdrop-blur-sm
              flex items-center justify-center
              text-sm font-semibold
              active:scale-95
            "
          >
            ›
          </button>
        </div>

        {/* Optional: small indicator dots for mobile */}
        <div className="mt-4 md:hidden flex justify-center gap-2">
          {featureCards.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => setActiveIndex(idx)}
              className={`
                h-2 w-2 rounded-full
                ${idx === activeIndex ? "bg-yellow-400 w-4" : "bg-white/40"}
              `}
            />
          ))}
        </div>

        {/* ---- DESKTOP/TABLET: ORIGINAL GRID VIEW ---- */}
        <div className="mt-10 hidden md:grid gap-6 md:grid-cols-3">
          {featureCards.map((card) => (
            <FeatureCard key={card.id} {...card} />
          ))}
        </div>

        {/* ABOUT US TEXT BLOCK */}
        <div
          className="mt-16 md:my-64 max-w-3xl mx-auto text-center space-y-5"
          id="aboutus"
        >
          <span className="inline-block rounded-full border border-yellow-400/70 px-5 py-3 text-[20px] font-bold uppercase tracking-[0.25em] text-yellow-300">
            About Us
          </span>

          <h2 className={`${manrope.className} text-2xl sm:text-3xl md:text-6xl leading-snug`}>
            We are Committed,
            <br className="hidden sm:block" /> Focused and Disciplined
          </h2>

          <p className="text-xs sm:text-sm md:text-xl text-gray-100 leading-relaxed">
            Reserve Financial Services Ltd was established in the United Kingdom
            to participate in financial markets using only its own capital.
            Guided by disciplined research and in-house tools, our trading is
            internal and systematically managed. We do not manage client funds
            or provide investment advice, focusing entirely on our own
            operations.
          </p>

          <div className="md:block hidden mt-10 md:mt-28 h-px w-full mx-auto bg-white/40" />
        </div>

        {/* OUR VISION SECTION */}
        <div className="mb-24 mt-10 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          {/* Vision + Mission */}
          <div className="space-y-8">
            {/* Vision card */}
            <div className="group" tabIndex={0}>
              <div className="relative rounded-2xl bg-linear-to-r from-cyan-500/40 via-transparent to-cyan-500/40 p-px animate-border md:w-full w-1/2 mb-8">
                <div
                  className="
                    rounded-2xl bg-black/50 px-5 py-4 sm:px-6 sm:py-5 backdrop-blur-sm
                    transition-all duration-300
                    group-hover:bg-black/80 group-hover:-translate-y-1 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]
                    group-active:bg-black/80 group-active:-translate-y-1 group-active:shadow-[0_0_25px_rgba(56,189,248,0.5)]
                    group-focus:bg-black/80 group-focus:-translate-y-1 group-focus:shadow-[0_0_25px_rgba(56,189,248,0.5)]
                    touch-manipulation
                  "
                >
                  <div className="space-y-3">
                    <h3 className={`${dm.className} text-2xl md:text-[70px] text-yellow-300`}>
                      Our Vision
                    </h3>
                    <p className="text-xs sm:text-sm md:text-[23px] text-gray-100 leading-relaxed">
                      To transform data into direction, intelligence into
                      insight, and risk into disciplined control in
                      unpredictable markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission card */}
            <div className="group" tabIndex={0}>
              <div className="relative rounded-2xl bg-linear-to-r from-cyan-500/40 via-transparent to-cyan-500/40 p-px animate-border md:block hidden">
                <div
                  className="
                    rounded-2xl bg-black/50 px-5 py-4 sm:px-6 sm:py-5 backdrop-blur-sm
                    transition-all duration-300
                    group-hover:bg-black/80 group-hover:-translate-y-1 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]
                    group-active:bg-black/80 group-active:-translate-y-1 group-active:shadow-[0_0_25px_rgba(56,189,248,0.5)]
                    group-focus:bg-black/80 group-focus:-translate-y-1 group-focus:shadow-[0_0_25px_rgba(56,189,248,0.5)]
                    touch-manipulation
                  "
                >
                  <div className="space-y-3">
                    <h3 className={`${dm.className} text-2xl md:text-[70px] text-yellow-300`}>
                      Our Mission
                    </h3>
                    <p className="text-xs sm:text-sm md:text-[23px] text-gray-100 leading-relaxed">
                      To combine technology, research, and disciplined execution
                      to build a resilient trading operation, continually
                      adapting to evolving market conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side “astronaut area” placeholder / highlight box */}
          {/* <div className="hidden md:block">
            <div className="relative h-64 lg:h-80 w-full rounded-3xl border border-white/15 bg-black/40 backdrop-blur-sm shadow-2xl p-6 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-cyan-500/10 opacity-40 blur-2xl" />
              <div className="relative">
                <span className="text-xs tracking-[0.25em] uppercase text-cyan-300">
                  Future Outlook
                </span>

                <h4 className="mt-2 text-xl font-semibold text-white">
                  Looking Beyond Today
                </h4>

                <div className="mt-2 h-0.5 w-14 bg-linear-to-r from-cyan-400 to-yellow-400 rounded-full" />
              </div>

              <p className="relative text-sm text-gray-100 max-w-xs">
                Focused on the horizon of innovation, our vision extends beyond
                today&apos;s markets, preparing for the next wave of
                opportunities.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
