// components/whatwedo.js
import Image from "next/image";
import { DM_Sans, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "500"],
  display: "swap",
});

export default function WhatWeDo() {
  return (
    <section
      id="whatwedo"
      className="
        relative w-full text-white
        px-4 md:px-8 lg:px-16
        md:py-24
        bg-[url('/images/bg-whatwedo-png.png')]
        bg-top bg-no-repeat bg-cover max-w-[1500px] mx-auto
      "
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Our Values */}
        <div>
          <h2
            className={`${manrope.className} text-center text-[50px] md:text-[96px] font-semibold`}
          >
            Our <span className="text-[#FBF705]">Values</span>
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 mx-auto">
            <ValueCard
              title="Integrity"
              number="01"
              text="We operate with honesty and clarity, ensuring all trading decisions are guided by ethical practices and full accountability."
            />
            <ValueCard
              title="Innovation"
              number="02"
              text="We develop in-house tools and technology, using creative solutions to enhance analysis, research, and internal trading decisions."
            />
            <ValueCard
              title="Discipline"
              number="03"
              text="Every trade is guided by structured processes, risk management, and rigorous research to maintain focus and precision in our operations."
            />
            <ValueCard
              title="Objectivity"
              number="04"
              text="We rely on clear analysis and structured logic, executing decisions with precision and confidence while remaining free from emotion."
            />
          </div>
        </div>

        {/* What we do – responsive: IMAGE on top for mobile+tablet, two-column only on lg+ */}
        <div className="space-y-12 md:space-y-16">
          <h2
            className={`${manrope.className} text-center text-4xl md:text-5xl lg:text-[70px] font-semibold leading-tight`}
          >
            What <span className="text-[#FBF705]">we do</span>
          </h2>

          {/* Use column layout only at large screens */}
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6">
            {/* globe / illustration (top on mobile/tablet; left on lg+) */}
            <div className="w-full lg:w-1/2 flex justify-center items-center lg:justify-start">
              <div className="relative w-full max-w-[700px]">
                <Image
                  src="/images/earth_image.png"
                  alt="Global trading illustration"
                  width={700}
                  height={700}
                  className="w-full h-auto object-contain drop-shadow-[0_0_35px_rgba(250,204,21,0.4)]"
                />
              </div>
            </div>

            {/* TEXT: show as single-column block on mobile/tablet; on lg show as right column */}
            <div className="w-full lg:w-1/2 p-4 lg:p-6">
              {/* desktop/tablet: keep same items for all sizes but styling slightly adjusts */}
              <div className="space-y-6 md:space-y-8">
                <WhatItem
                  title="Research for Resilience"
                  text="Our research focuses entirely on enhancing internal strategies, helping us respond effectively to changing market conditions."
                />
                <WhatItem
                  title="Developing Financial Analytics"
                  text="We build in-house platforms that integrate market data, news, sentiment, and internal signals to support informed decision-making."
                />
                <WhatItem
                  title="Trading with Our Own Capital"
                  text="All trading activity is funded solely by the company. We do not handle external funds, manage client accounts, or provide investment services."
                />
              </div>
            </div>
          </div>

          {/* Optional: if you still prefer a special boxed card on small screens you can keep this,
              but per your request we keep same design — so no extra image and text sits below image. */}
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

/* ---------- Small sub-components ---------- */

function ValueCard({ title, number, text }) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 
        backdrop-blur-sm p-3 md:py-7 md:px-14 shadow-lg transition-all duration-300 
        hover:-translate-y-2 active:-translate-y-2 focus:-translate-y-2
        hover:shadow-[0_0_35px_rgba(250,204,21,0.4)]
        active:shadow-[0_0_35px_rgba(250,204,21,0.4)]
        focus:shadow-[0_0_35px_rgba(250,204,21,0.4)]
      "
      tabIndex={0}
    >
      <div
        className="
          pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500
          group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100
        "
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-40 w-40 bg-yellow-400 blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-yellow-400/10 blur-xl" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h3 className={`${dm.className} text-3xl md:text-[35px] py-4`}>{title}</h3>
          <p className={`${dm.className} text-lg md:text-[20px] text-gray-100 leading-relaxed`}>
            {text}
          </p>
        </div>
        <span className={`${dm.className} text-[48px] text-gray-200/80 font-thin`}>{number}</span>
      </div>
    </div>
  );
}

function WhatItem({ title, text }) {
  return (
    <div className="space-y-2">
      <h3 className={`${manrope.className} text-xl md:text-[30px] font-semibold text-[#FBF705]`}>{title}</h3>
      <p className={`${manrope.className} text-md md:text-[20px] text-gray-100 leading-relaxed`}>{text}</p>
    </div>
  );
}
