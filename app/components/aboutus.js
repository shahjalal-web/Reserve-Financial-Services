/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// components/aboutus.js
export default function Aboutus() {
  return (
    <section
      id="aboutus"
      className="
        relative w-full text-white
        px-4 md:px-8 lg:px-16
        pt-24 pb-20 md:pb-28
        bg-[url('/images/Backgrounds/bg-about-png.png')]  /* same bg as home */
        bg-top bg-no-repeat bg-cover
      "
    >
      <div className="max-w-6xl mx-auto md:py-24">
        {/* TOP: Insight That Matters */}
        <div className="text-center space-y-3">
          <p className="text-xs md:text-4xl tracking-[0.2em] uppercase text-gray-200">
            Insight That Matters
          </p>
        </div>

        {/* 3 FEATURE CARDS */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:bg-white/10 overflow-hidden">
            {/* blue glow effect */}
            <div className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

            <div className="relative mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 p-2 items-center justify-center rounded-full bg-[#FBF705] text-black font-semibold text-lg">
                <img src={"/icons/icon_1.png"} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">
                Technology-Driven
              </h3>
            </div>
            <p className="relative text-xs sm:text-sm text-gray-100 leading-relaxed">
              Our infrastructure is built on robust technology, enabling
              efficient trade execution, risk monitoring, and real-time
              analytics that enhance our internal trading operations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl border border-cyan-400/40 bg-cyan-500/10 backdrop-blur-sm p-6 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:bg-white/10 overflow-hidden">
            {/* blue glow effect */}
            <div className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

            <div className="relative mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FBF705] text-black font-semibold text-lg">
                <img src={"/icons/icon_2.png"} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">
                Intelligence at Core
              </h3>
            </div>
            <p className="relative text-xs sm:text-sm text-gray-100 leading-relaxed">
              Data, research, and proprietary models sit at the heart of our
              decision-making, helping us uncover opportunity and measure risk
              across changing markets.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:bg-white/10 overflow-hidden">
            {/* blue glow effect */}
            <div className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

            <div className="relative mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FBF705] text-black font-semibold text-lg">
                <img src={"/icons/icon_3.png"} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">
                Disciplined Trading
              </h3>
            </div>
            <p className="relative text-xs sm:text-sm text-gray-100 leading-relaxed">
              A rigorous framework keeps our trading focused, risk-aware, and
              systematic, with clear controls to support long-term performance.
            </p>
          </div>
        </div>

        {/* ABOUT US TEXT BLOCK */}
        <div className="mt-16 md:my-64 max-w-3xl mx-auto text-center space-y-5">
          <span className="inline-block rounded-full border border-yellow-400/70 px-5 py-3 text-[20px] font-bold uppercase tracking-[0.25em] text-yellow-300">
            About Us
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-semibold leading-snug">
            We are Committed,
            <br className="hidden sm:block" /> Focused and Disciplined
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-100 leading-relaxed">
            Reserve Financial Services Ltd was established in the United Kingdom
            to participate in financial markets using only its own capital.
            Guided by disciplined research and in-house tools, our trading is
            internal and systematically managed. We do not manage client funds
            or provide investment advice, focusing entirely on our own
            operations.
          </p>

          <div className="mt-44 h-px w-full mx-auto bg-white/40" />
        </div>

        {/* OUR VISION SECTION */}
        <div className="mt-16 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          {/* Vision text cards */}
          <div className="space-y-8">
            {/* Vision card */}
            <div className="group">
              <div className="relative rounded-2xl bg-linear-to-r from-cyan-500/40 via-transparent to-cyan-500/40 p-px animate-border">
                <div className="rounded-2xl bg-black/50 px-5 py-4 sm:px-6 sm:py-5 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/80 group-hover:-translate-y-1 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]">
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-4xl text-yellow-300">
                      Our Vision
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-100 leading-relaxed">
                      To transform data into direction, intelligence into
                      insight, and risk into disciplined control in
                      unpredictable markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission card */}
            <div className="group">
              <div className="relative rounded-2xl bg-linear-to-r from-cyan-500/40 via-transparent to-cyan-500/40 p-px animate-border">
                <div className="rounded-2xl bg-black/50 px-5 py-4 sm:px-6 sm:py-5 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/80 group-hover:-translate-y-1 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]">
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-4xl text-yellow-300">
                      Our Mission
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-100 leading-relaxed">
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
          <div className="hidden md:block">
            <div className="relative h-64 lg:h-80 w-full rounded-3xl border border-white/15 bg-black/40 backdrop-blur-sm shadow-2xl p-6 flex flex-col justify-between overflow-hidden">
              {/* Blue glow halo effect */}
              <div className="absolute inset-0 bg-cyan-500/10 opacity-40 blur-2xl"></div>

              {/* Title area */}
              <div className="relative">
                <span className="text-xs tracking-[0.25em] uppercase text-cyan-300">
                  Future Outlook
                </span>

                <h4 className="mt-2 text-xl font-semibold text-white">
                  Looking Beyond Today
                </h4>

                {/* small accent line */}
                <div className="mt-2 h-0.5 w-14 bg-linear-to-r from-cyan-400 to-yellow-400 rounded-full"></div>
              </div>

              {/* Bottom text content */}
              <p className="relative text-sm text-gray-100 max-w-xs">
                Focused on the horizon of innovation, our vision extends beyond
                today&apos;s markets, preparing for the next wave of
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
