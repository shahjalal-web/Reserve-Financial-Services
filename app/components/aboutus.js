/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef } from "react";
import { DM_Sans, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["500"],
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
      group relative rounded-2xl border border-transparent
      bg-transparent p-6 shadow-none
      transition-transform duration-300
      hover:-translate-y-2 hover:border-[#00E5FF]/60 hover:bg-gradient-to-r hover:from-[#00E5FF] hover:via-[#0099FF] hover:to-[#00D4FF]
      active:-translate-y-2 active:border-[#00E5FF]/60 active:bg-gradient-to-r active:from-[#00E5FF] active:via-[#0099FF] active:to-[#00D4FF]
      focus:-translate-y-2 focus:border-[#00E5FF]/60 focus:bg-gradient-to-r focus:from-[#00E5FF] focus:via-[#0099FF] focus:to-[#00D4FF]
      overflow-hidden touch-manipulation md:py-20 py-5
    `,
  },
  {
    id: 2,
    title: "Intelligence at Core",
    icon: "/icons/icon_2.png",
    description:
      "Data, research, and proprietary models sit at the heart of our decision-making, helping us uncover opportunity and measure risk across changing markets.",
    wrapperClass: `
      group relative rounded-2xl border border-[#00E5FF]/40
      bg-gradient-to-r from-[#00E5FF]/10 via-transparent to-[#00D4FF]/10 backdrop-blur-sm p-6 shadow-xl
      transition-transform duration-300
      hover:-translate-y-2 hover:border-[#00E5FF]/60 hover:bg-gradient-to-r hover:from-[#00E5FF] hover:via-[#0099FF] hover:to-[#00D4FF]
      active:-translate-y-2 active:border-[#00E5FF]/60 active:bg-gradient-to-r active:from-[#00E5FF] active:via-[#0099FF] active:to-[#00D4FF]
      focus:-translate-y-2 focus:border-[#00E5FF]/60 focus:bg-gradient-to-r focus:from-[#00E5FF] focus:via-[#0099FF] focus:to-[#00D4FF]
      overflow-hidden touch-manipulation md:py-20 py-5
    `,
  },
  {
    id: 3,
    title: "Disciplined Trading",
    icon: "/icons/icon_3.png",
    description:
      "A rigorous framework keeps our trading focused, risk-aware, and systematic, with clear controls to support long-term performance.",
    wrapperClass: `
      group relative rounded-2xl border border-transparent
      bg-transparent p-6 shadow-none
      transition-transform duration-300
      hover:-translate-y-2 hover:border-[#00E5FF]/60 hover:bg-gradient-to-r hover:from-[#00E5FF] hover:via-[#0099FF] hover:to-[#00D4FF]
      active:-translate-y-2 active:border-[#00E5FF]/60 active:bg-gradient-to-r active:from-[#00E5FF] active:via-[#0099FF] active:to-[#00D4FF]
      focus:-translate-y-2 focus:border-[#00E5FF]/60 focus:bg-gradient-to-r focus:from-[#00E5FF] focus:via-[#0099FF] focus:to-[#00D4FF]
      overflow-hidden touch-manipulation md:py-20 py-5
    `,
  },
];

function FeatureCard({ title, icon, description, wrapperClass }) {
  return (
    <div
      className={`group ${wrapperClass} w-full h-[450px] outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0`}
      tabIndex={0}
    >
      {/* gradient glow background — hidden until hover/focus */}
      <div
        className="
          absolute inset-0 opacity-0 blur-xl
          transition-all duration-500
          group-hover:opacity-100
          group-active:opacity-100
          group-focus:opacity-100
          bg-linear-to-r from-[#00E5FF] via-[#0099FF] to-[#00D4FF]
        "
        aria-hidden="true"
      />

      <div className="relative mb-4">
        <div className="flex h-16 w-16 p-4 items-center justify-center rounded-full bg-[#FBF705] text-black font-semibold text-lg">
          <img src={icon} alt="" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold mt-4">{title}</h3>
      </div>

      <p className="relative text-xl text-left text-gray-100 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function Aboutus() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const getCardWidth = () => {
    if (!scrollRef.current) return 0;
    const first = scrollRef.current.querySelector(".carousel-card");
    return first ? first.offsetWidth + 16 /* gap */ : Math.round(scrollRef.current.clientWidth * 0.85);
  };

  const handleNext = () => {
    if (!scrollRef.current) return;
    const scrollBy = getCardWidth();
    scrollRef.current.scrollBy({ left: scrollBy, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (!scrollRef.current) return;
    const scrollBy = getCardWidth();
    scrollRef.current.scrollBy({ left: -scrollBy, behavior: "smooth" });
  };

  const scrollToIndex = (idx) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector(".carousel-card");
    const cardWidth = card ? card.offsetWidth + 16 : Math.round(scrollRef.current.clientWidth * 0.85);
    scrollRef.current.scrollTo({ left: Math.round(cardWidth * idx), behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full text-white px-4 md:px-8 lg:px-16 pt-24 md:pt-24 pb-10 md:pb-28 bg-black bg-[url('/images/About-mobile.png')] md:bg-[url('/images/About.png')] bg-center bg-no-repeat bg-contain md:bg-cover  max-w-[1500px] mx-auto
  "
    >
      <div className="mx-auto md:py-24 max-w-[1200px]">
        {/* TOP: Insight That Matters */}
        <div className="text-center space-y-3">
          <p
            className={`${manrope.className} mb-3 text-3xl md:text-6xl text-gray-200`}
          >
            Insight That Matters
          </p>
        </div>

        {/* ---- MOBILE+TABLET: SCROLLABLE CAROUSEL (shows ~1.5 on mobile, 2 on tablet) ---- */}
        <div className="mt-10 lg:hidden relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 -mx-4 touch-manipulation pb-4"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {featureCards.map((card, idx) => (
              <div key={card.id} className="min-w-[85%] md:min-w-[48%] snap-center carousel-card">
                <FeatureCard {...card} />
              </div>
            ))}
          </div>
        </div>

        {/* Optional: small indicator dots for mobile+tablet */}
        <div className="mt-4 lg:hidden flex justify-center gap-2">
          {featureCards.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => {
                setActiveIndex(idx);
                scrollToIndex(idx);
              }}
              className={`h-2 w-2 rounded-full ${idx === activeIndex ? "bg-yellow-400 w-4" : "bg-white/40"}`}
              aria-label={`Show feature ${idx + 1}`}
            />
          ))}
        </div>

        {/* ---- DESKTOP/TABLET: ORIGINAL GRID VIEW for lg+ ---- */}
        <div className="mt-10 hidden lg:grid gap-6 lg:grid-cols-3">
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

          <h2
            className={`${manrope.className} text-2xl sm:text-3xl md:text-6xl leading-snug`}
          >
            We are Committed,
            <br /> Focused and Disciplined
          </h2>

          <p
            className="
    text-[13px] md:text-xl text-gray-100
    leading-snug        /* mobile — tighter line height */
    sm:leading-normal   /* small screens */
    md:leading-relaxed  /* desktop — original spacing */
  "
          >
            Reserve Financial Services Ltd was established in the United Kingdom
            to participate in financial markets using only its own capital.
            Guided by disciplined research and in-house tools, our trading is
            internal and systematically managed. We do not manage client funds
            or provide investment advice, focusing entirely on our own
            operations.
          </p>

          <div className="md:block hidden mt-10 md:mt-28 h-px w-full mx-auto bg-white/40" />
        </div>

        {/* OUR VISION SECTION (unchanged) */}
        <div className="mb-24 mt-10 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          {/* Vision + Mission */}
          <div className="space-y-8">
            {/* Vision card */}
            <div className="group" tabIndex={0}>
              <div
                className="
    relative rounded-2xl border-cyan-300/30           /* thin blue border */
    bg-white/5 backdrop-blur-md          /* transparent glass */
    p-5 sm:p-6 
    md:w-full w-1/2
    transition-all duration-300
    hover:bg-white/10
    hover:shadow-[0_0_30px_rgba(0,200,255,0.35)]
    active:shadow-[0_0_30px_rgba(0,200,255,0.35)]
    focus:shadow-[0_0_30px_rgba(0,200,255,0.35)]
  "
              >
                <h3
                  className={`${dm.className} text-2xl md:text-[65px] text-[#FBF705]`}
                >
                  Our Vision
                </h3>

                <p className="text-xs sm:text-sm md:text-[23px] text-gray-100 leading-snug md:leading-relaxed pt-2">
                  To transform data into direction, intelligence into insight,
                  and risk into disciplined control in unpredictable markets.
                </p>
              </div>
            </div>

            {/* Mission card */}
            <div className="group" tabIndex={0}>
              <div
                className="
    relative rounded-2xl 
    border border-cyan-300/30
    bg-white/5 backdrop-blur-md
    p-5 sm:p-6 
    md:w-full w-1/2 mt-4
    transition-all duration-300
    hover:bg-white/10
    hover:shadow-[0_0_30px_rgba(0,200,255,0.35)]
    active:shadow-[0_0_30px_rgba(0,200,255,0.35)]
    focus:shadow-[0_0_30px_rgba(0,200,255,0.35)]
  "
              >
                <h3
                  className={`${dm.className} text-xl md:text-[65px] text-[#FBF705]`}
                >
                  Our Mission
                </h3>

                <p className="text-xs sm:text-sm md:text-[23px] text-gray-100 leading-snug md:leading-relaxed pt-2">
                  To combine technology, research, and disciplined execution to
                  build a resilient trading operation, continually adapting to
                  evolving market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* BOTTOM SHADOW — smooth blend with next section */}
      <div
        className="
          pointer-events-none absolute bottom-0 left-0 right-0 
          h-20 bg-linear-to-t 
          from-black/80 via-black/40 to-transparent
        "
      />
    </section>
  );
}
