import Image from "next/image";

export default function HowWeWork() {
  return (
    <section
      id="howwework"
      className="
        relative w-full text-white
        px-4 md:px-8 lg:px-16
        py-20 md:py-24
        bg-[url('/images/backgrounds/bg-howwework-png.png')] bg-top bg-cover bg-no-repeat
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading + intro text */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            How <span className="text-yellow-400">we work</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-100">
            At Reserve Financial Services Ltd, our approach is grounded in
            discipline, research, and technology. We integrate market expertise
            with in-house analytics to guide internal trading decisions. This
            structured methodology ensures clarity, consistency, and the ability
            to respond confidently in both stable and volatile market conditions.
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
    <div className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]">
      {/* blue glow on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-cyan-500/15 blur-2xl" />
      </div>

      {/* content */}
      <div className="relative flex flex-col h-full">
        <div className="px-6 pt-5 pb-3">
          <h3 className="text-lg md:text-xl font-semibold text-yellow-300">
            {title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-100 leading-relaxed">
            {text}
          </p>
        </div>

        {/* image area */}
        <div className="relative mt-2 h-64 sm:h-44 md:h-96 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* top gradient to blend with text */}
          <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-black/40 to-transparent" />
        </div>
      </div>
    </div>
  );
}
