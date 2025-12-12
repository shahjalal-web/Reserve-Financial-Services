/* eslint-disable @next/next/no-img-element */
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export default function ResponsiveImageSection() {
  return (
    <section
      className="
        relative w-full flex flex-col items-center
        py-16 md:py-24
        bg-[url('/images/data-workflow.png')]
        bg-top bg-cover bg-no-repeat
        text-white max-w-[1500px] mx-auto
        overflow-hidden
      "
    >
      {/* TOP SHADOW — smooth blend with previous section */}
      <div
        className="
          pointer-events-none absolute top-0 left-0 right-0 
          h-16 bg-linear-to-b 
          from-black/80 via-black/40 to-transparent
        "
      />

      {/* Title */}
      <h2
        className={`
          ${manrope.className}
          text-2xl sm:text-3xl md:text-[70px]
          text-center leading-snug
        `}
      >
        How We Turn Data
        <br />
        into
        <span className="text-[#FBF705]"> Decisions</span>
      </h2>

      {/* Desktop Image */}
      <div className="w-full max-w-6xl mt-10 md:mt-14 hidden md:block p-4">
        <img
          src="/images/Workflow-Desktop.png"
          alt="Process Visualization Desktop"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Mobile Image */}
      <div className="w-full max-w-6xl mt-10 md:mt-14 block md:hidden p-4">
        <img
          src="/images/Mobile-workflow.svg"
          alt="Process Visualization Mobile"
          className="w-full h-auto object-contain"
        />
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
