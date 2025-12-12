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
        bg-[url('/images/bg-howwework-png.png')]
        bg-top bg-cover bg-no-repeat
        text-white
      "
    >
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

      {/* Image wrapper */}
      <div className="w-full max-w-6xl mt-10 md:mt-14">
        <img
          src="/images/Workflow-Desktop.png"
          alt="Process Visualization"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
