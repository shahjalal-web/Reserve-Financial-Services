// components/whatwedo.js
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section
      id="whatwedo"
      className="relative w-full text-white px-4 md:px-8 lg:px-16 py-20 md:py-24 bg-[url('/images/Backgrounds/bg-howwework-png.png')] bg-top bg-cover bg-no-repeat"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Our Values */}
        <div>
          <h2 className="text-center text-3xl md:text-4xl font-semibold">
            Our <span className="text-yellow-400">Values</span>
          </h2>

          {/* value cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:w-2/3 mx-auto">
            {/* Integrity */}
            <ValueCard
              title="Integrity"
              number="01"
              text="We operate with honesty and clarity, ensuring all trading decisions are guided by ethical practices and full accountability."
            />
            {/* Innovation */}
            <ValueCard
              title="Innovation"
              number="02"
              text="We develop in-house tools and technology, using creative solutions to enhance analysis, research, and internal trading decisions."
            />
            {/* Discipline */}
            <ValueCard
              title="Discipline"
              number="03"
              text="Every trade is guided by structured processes, risk management, and rigorous research to maintain focus and precision in our operations."
            />
            {/* Objectivity */}
            <ValueCard
              title="Objectivity"
              number="04"
              text="We rely on clear analysis and structured logic, executing decisions with precision and confidence while remaining free from emotion."
            />
          </div>
        </div>

        {/* What we do */}
        <div className="space-y-10">
          <h2 className="text-center text-4xl md:text-5xl">
            What <span className="text-yellow-400">we do</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            {/* globe / illustration */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/earth_image.png" // path change korle nijer moto dio
                  alt="Global trading illustration"
                  width={400}
                  height={400}
                  className="object-contain drop-shadow-[0_0_35px_rgba(250,204,21,0.4)]"
                />
              </div>
            </div>

            {/* text list */}
            <div className="w-full md:w-1/2 space-y-6">
              <WhatItem
                title="Research for Resilience"
                text="Our research focuses entirely on enhancing internal strategies, helping us respond effectively to changing market conditions."
              />
              <WhatItem
                title="Developing Financial Analytics"
                text="We build in-house platforms that integrate market data, news, sentiment, and internal signals to support informed decision-making."
              />
              <WhatItem
                title="Trade with Our Own Capital"
                text="All trading activity is funded solely by the company. We do not handle external funds, manage client accounts, or provide investment services."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small sub-components ---------- */

function ValueCard({ title, number, text }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 md:p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(250,204,21,0.4)]">
      
      {/* 🔥 brighter centered yellow glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {/* inner bright center light */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-40 w-40 bg-yellow-400 blur-3xl" />
        </div>
        {/* outer radial aura */}
        <div className="absolute inset-0 bg-yellow-400/10 blur-xl" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-100 leading-relaxed">
            {text}
          </p>
        </div>
        <span className="text-2xl text-gray-200/80 font-medium">{number}</span>
      </div>
    </div>
  );
}


function WhatItem({ title, text }) {
  return (
    <div className="group space-y-1">
      <h3 className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg font-semibold text-yellow-300 group-hover:text-yellow-400 transition-colors">
        <span className="h-0.5 w-6 rounded-full bg-yellow-400 group-hover:w-8 transition-all" />
        {title}
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-100 leading-relaxed group-hover:text-gray-50 transition-colors">
        {text}
      </p>
    </div>
  );
}
