import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // choose what you need
  display: "swap",
});

export default function Hero() {
  return (
    <section
      id="home"
      className={`${manrope.className} relative w-full flex items-center justify-center px-4 md:py-[300px] py-4 bg-[url('/images/bg-hero.png')] bg-top bg-no-repeat bg-cover  max-w-[1500px] mx-auto
      `}
    >
      <div className="relative text-center space-y-6 max-w-[1200px] mx-auto">
        {/* Heading */}
        <h1 className="text-2xl md:mt-0 mt-20 sm:text-3xl text-white md:text-[70px] font-semibold leading-snug md:leading-tight">
          <span className="block text-[#FBF705] font-manrope">
            Transforming Data and
          </span>
          <span className="block">Intelligence into Clarity,</span>
          <span className="block">Risk into Control</span>
        </h1>

        {/* Paragraph */}
        <p className="text-lg max-w-5xl md:text-[32px] font-light text-gray-100 leading-relaxed">
          Reserve Financial Services Ltd combines technology, data, and
          discipline to support internal trading decisions. We trade solely with
          company capital, guided by research and innovation.
        </p>

        {/* Button */}
        <div className="pt-4">
          <button className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-xs sm:text-sm md:text-base font-medium bg-[#FBF705] hover:bg-[#ddd900] text-black shadow-lg shadow-yellow-500/40 transition">
            Learn More About Us
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
