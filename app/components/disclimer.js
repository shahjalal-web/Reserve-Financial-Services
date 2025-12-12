/* eslint-disable @next/next/no-img-element */
/* app/disclaimer/page.tsx or components/Disclaimer.js */
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export default function Disclaimer() {
  return (
    <main
      className="relative w-full min-h-screen text-white"
      style={{
        backgroundImage: "url('/images/backgrounds/disclaimer-bg.jpg')",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* contrast overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/40 to-black/70" />

      {/* content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <header className="mb-8 md:mb-12">
          <h1 className={`${manrope.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight`}>
            Disclaimer
          </h1>
        </header>

        <article className="bg-black/25 backdrop-blur-sm rounded-2xl p-6 md:p-10">
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
