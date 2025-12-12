/* app/disclaimer/page.tsx */
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export default function Disclaimer() {
  return (
    <main
      className="relative w-full min-h-screen text-white overflow-hidden"
      style={{
        backgroundColor: "",
        backgroundImage: "url('/images/bg-howwework-png.png')",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* ---------- concentrated yellow radial glow (center-left) ---------- */}
      <div
        aria-hidden="true"
        style={{
          // radial gradient gives a concentrated "spot" of yellow that fades out
          background:
            "radial-gradient(600px 600px at 18% 45%, rgba(255,221,85,0.95) 0%, rgba(255,221,85,0.45) 15%, rgba(255,221,85,0.12) 30%, transparent 60%)",
        }}
        className="
          pointer-events-none
          absolute inset-y-0 left-[-5%]
          w-[42%] max-w-[460px]
          transform -translate-x-6
          blur-[60px]
          opacity-95
        "
      />

      {/* ---------- subtle yellow fill at bottom-left for extra warmth ---------- */}
      <div
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(250px 120px at 10% 150%, rgba(255,225,130,0.55) 0%, rgba(255,225,130,0.08) 35%, transparent 70%)",
        }}
        className="pointer-events-none absolute left-0 bottom-0 w-[36%] max-w-[360px] blur-[48px] opacity-90"
      />

      {/* ---------- right-side blue glow (properly aligned) ---------- */}
<div
  aria-hidden="true"
  className="
    pointer-events-none
    absolute top-0 right-[-5%]
    h-[40%]
    w-[28%]       /* narrower so it stays at right edge */
    max-w-[420px]
    blur-[90px]
    opacity-80
  "
  style={{
    background:
      "linear-gradient(to left, rgba(0,196,255,0.85) 0%, rgba(0,196,255,0.35) 35%, rgba(0,196,255,0.08) 65%, transparent 100%)",
  }}
/>



      {/* ---------------- content ---------------- */}
      <div className="relative z-10   mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <header className="mb-8 md:mb-12">
          <h1
            className={`${manrope.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight`}
          >
            Disclaimer
          </h1>
        </header>

        <article
          className="
            relative rounded-2xl p-6 md:p-10
          "
        >
          <div className="prose prose-invert max-w-none md:max-w-none">
            <p className="text-sm md:text-base leading-relaxed text-gray-200">
              Reserve Financial Services Ltd is a company registered in the United Kingdom.
              The company trades exclusively with its own capital and does not accept funds or
              investments from external parties. All trading and analytical activities described
              on this website are conducted solely for internal purposes.
            </p>

            <p className="mt-5 text-sm md:text-base leading-relaxed text-gray-200">
              Reserve Financial Services Ltd does not offer investment advice, portfolio
              management, or brokerage services. The information provided on this website is for
              general informational purposes only and should not be interpreted as an invitation
              or recommendation to engage in any form of trading or investment.
            </p>

            <p className="mt-5 text-sm md:text-base leading-relaxed text-gray-200">
              While every effort is made to ensure the accuracy of the information presented,
              Reserve Financial Services Ltd makes no representation or warranty, express or
              implied, regarding its completeness, reliability, or suitability for any particular
              purpose.
            </p>

            <p className="mt-5 text-sm md:text-base leading-relaxed text-gray-200">
              Trading in financial markets involves significant risk. Past performance is not a
              reliable indicator of future results. Visitors to this website should not rely on
              any material contained herein for financial decision-making.
            </p>

            <p className="mt-5 text-sm md:text-base leading-relaxed text-gray-200">
              By accessing this website, you acknowledge that Reserve Financial Services Ltd
              operates solely as a proprietary trading firm and that none of the content
              constitutes financial, legal, or investment advice.
            </p>

            <p className="mt-6 italic text-sm md:text-base text-cyan-300">
              If you do not agree with this disclaimer or the terms of access, please exit the
              website immediately.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
