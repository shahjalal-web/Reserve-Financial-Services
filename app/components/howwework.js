import Image from "next/image";
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

export default function HowWeWork() {
  return (
    <section
      id="howwework"
      className="
        relative w-full text-white
        px-4 md:px-8 lg:px-16
        py-20 md:py-24
        bg-[url('/images/bg-howwework-png.png')]
      "
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Heading + intro text */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <h2
            className={`${manrope.className} text-3xl md:text-[70px] font-semibold`}
          >
            How <span className="text-[#FBF705]">we work</span>
          </h2>
          <p
            className={`${dm.className}text-xs md:text-[25px] leading-relaxed text-gray-100`}
          >
            At Reserve Financial Services Ltd, our approach is grounded in
            discipline, research, and technology. We integrate market expertise
            with in-house analytics to guide internal trading decisions. This
            structured methodology ensures clarity, consistency, and the ability
            to respond confidently in both stable and volatile market
            conditions.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-20  grid gap-6 md:grid-cols-2">
          <WorkCard
            title="Data-Driven Insights"
            text="Global prices, news, and sentiment are combined into a single framework, helping us assess opportunities and risks with clarity and precision."
            image="/images/card_1.png"
          />
          <WorkCard
            title="Layered Analysis"
            text="We combine short-term signals, long-term patterns, and behavioural indicators to create a balanced, multi-dimensional perspective for decision-making."
            image="/images/card_2.png"
          />
          <WorkCard
            title="Intelligent Tools"
            text="Machine-assisted processes filter vast data and detect emerging signals, enhancing human judgement without replacing it in trading decisions."
            image="/images/card_3.png"
          />
          <WorkCard
            title="Risk and Discipline"
            text="Risk management guides every decision. Position sizing, exposure, and balance are carefully defined to ensure clarity and consistency in all conditions."
            image="/images/card_4.png"
          />
        </div>
      </div>
    </section>
  );
}

/* --- Card component with hover blue glow + image zoom --- */

function WorkCard({ title, text, image }) {
  return (
    <div
      tabIndex={0}
      className="
        group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10
        backdrop-blur-sm shadow-lg transition-all duration-300
        hover:-translate-y-2 active:-translate-y-2 focus:-translate-y-2
        hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]
        active:shadow-[0_0_30px_rgba(56,189,248,0.45)]
        focus:shadow-[0_0_30px_rgba(56,189,248,0.45)]
      "
    >
      {/* blue glow on hover / active / focus */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500
          group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100
        "
      >
        <div className="absolute inset-0 bg-cyan-500/15 blur-2xl" />
      </div>

      {/* content wrapper with equal padding */}
      <div className="relative flex flex-col h-full px-6 pt-5 pb-6">
        {/* Text */}
        <div>
          <h3
            className={`${dm.className} text-lg md:text-[28px] text-yellow-300`}
          >
            {title}
          </h3>
          <p
            className={`${dm.className} mt-2 text-xs md:text-[20px] text-gray-100 leading-relaxed`}
          >
            {text}
          </p>
        </div>

        {/* Image container with SAME side padding */}
        <div className="relative w-full mt-3 h-64 sm:h-48 md:h-72 overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title}
            fill
            className="
            object-cover transition-transform duration-500
            group-hover:scale-105 group-active:scale-105 group-focus:scale-105
          "
            sizes="100vw"
          />

          {/* Top gradient fade */}
          <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-black/40 to-transparent" />
        </div>
      </div>
    </div>
  );
}
