/* app/terms-of-use/page.tsx */
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export default function TermsOfUse() {
  return (
    <main
      className="relative w-full min-h-screen text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-howwework-png.png')",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* ---------- concentrated yellow radial glow (left) ---------- */}
      <div
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(600px 600px at 18% 45%, rgba(255,221,85,0.95) 0%, rgba(255,221,85,0.45) 15%, rgba(255,221,85,0.12) 30%, transparent 60%)",
        }}
        className="
          pointer-events-none absolute inset-y-0 left-[-5%]
          w-[42%] max-w-[460px] -translate-x-6 blur-[60px] opacity-95
        "
      />

      {/* ---------- subtle bottom-left yellow fill ---------- */}
      <div
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(600px 600px at 40% 15%, rgba(255,225,130,0.55) 0%, rgba(255,225,130,0.08) 35%, transparent 70%)",
        }}
        className="
          pointer-events-none absolute left-0 bottom-0
          w-[36%] max-w-[360px] blur-[48px] opacity-90
        "
      />

      {/* ---------- right-side blue glow ---------- */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute top-0 right-[-5%]
          h-[40%] w-[28%] max-w-[420px]
          blur-[90px] opacity-80
        "
        style={{
          background:
            "linear-gradient(to left, rgba(0,196,255,0.85) 0%, rgba(0,196,255,0.35) 35%, rgba(0,196,255,0.08) 65%, transparent 100%)",
        }}
      />

      {/* ---------------- CONTENT ---------------- */}
      <div className="relative z-10 mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">

        {/* Page Title */}
        <header className="mb-8 md:mb-12">
          <h1
            className={`${manrope.className} text-3xl md:text-[96px] font-semibold leading-tight mt-9`}
          >
            Terms of Use
          </h1>
        </header>

        {/* Content Container */}
        <article className="rounded-2xl p-6 md:p-10">
          <div className="prose prose-invert ">

            {/* 1 */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm md:text-[36px] text-gray-200 leading-relaxed">
                By accessing or using this website, you agree to comply with these Terms
                of Use. If you do not agree, you must not use the website. Reserve
                Financial Services Ltd reserves the right to modify these terms at any
                time. Continued use constitutes acceptance of any changes.
              </p>
            </section>

            {/* 2 */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">
                2. Website Purpose
              </h2>
              <p className="text-sm md:text-[36px] text-gray-200 leading-relaxed">
                This website is intended for informational purposes only. Reserve
                Financial Services Ltd trades solely with its own capital and develops
                financial technology. We do not provide investment advice, manage client
                funds, or offer financial services to external parties.
              </p>
            </section>

            {/* 3 */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">
                3. Intellectual Property
              </h2>
              <p className="text-sm md:text-[36px] text-gray-200 leading-relaxed">
                All content on this website—including text, graphics, logos, images, and
                software—is the property of Reserve Financial Services Ltd or its
                licensors and is protected by intellectual property laws. You may not
                copy, reproduce, distribute, or create derivative works without written
                consent.
              </p>
            </section>

            {/* 4 */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">
                4. Use of Website Content
              </h2>
              <p className="text-sm md:text-[36px] text-gray-200 leading-relaxed">
                You may use the website for personal, non-commercial purposes only. You
                may not rely on any content for financial, investment, or trading
                decisions. Any reliance on website content is at your own risk.
              </p>
            </section>

            {/* 5 */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">
                5. Limitation of Liability
              </h2>
              <p className="text-sm md:text-[36px] text-gray-200 leading-relaxed">
                While we strive for accuracy, Reserve Financial Services Ltd makes no
                warranties regarding completeness or reliability of the content. We are
                not liable for any damages resulting from use of the website.
              </p>
            </section>

            {/* 6 */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">
                6. External Links
              </h2>
              <p className="text-sm md:text-[36px] text-gray-200 leading-relaxed">
                This website may contain links to third-party sites. These are provided
                for convenience only. We are not responsible for the content or privacy
                practices of external websites.
              </p>
            </section>

            {/* 7 */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">
                7. Security and Access
              </h2>
              <p className="text-sm md:text-[36px] text-gray-200 leading-relaxed">
                You are responsible for ensuring secure access to the website. Attempts
                to hack, disrupt, or misuse the website are strictly prohibited.
              </p>
            </section>

            {/* 8 */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">
                8. Governing Law
              </h2>
              <p className="text-sm md:text-[36px] text-gray-200 leading-relaxed">
                These Terms of Use are governed by the laws of England and Wales. Any
                legal disputes will fall under the jurisdiction of the courts in England
                and Wales.
              </p>
            </section>

            {/* 9 */}
            <section className="mb-2">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">
                9. Contact Information
              </h2>
              <p className="text-sm md:text-[36px] text-gray-200 leading-relaxed">
                For questions about these Terms of Use, email us at{" "}
                <a
                  href="mailto:info@reservefinancial.co.uk"
                  className="text-yellow-300 underline"
                >
                  info@reservefinancial.co.uk
                </a>
                .
              </p>
            </section>

          </div>
        </article>
      </div>
    </main>
  );
}
