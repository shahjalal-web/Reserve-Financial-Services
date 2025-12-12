/* eslint-disable react/no-unescaped-entities */
/* app/privacy/page.tsx */
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export default function PrivacyPolicy() {
  return (
    <main
      className="relative w-full min-h-screen text-white overflow-hidden"
      style={{
        backgroundColor: "#02000E",
        backgroundImage: "url('/images/bg-howwework-png.png')",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* ---------- yellow glow left ---------- */}
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

      {/* ---------- bottom-left warm yellow ---------- */}
      <div
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(250px 120px at 10% 150%, rgba(255,225,130,0.55) 0%, rgba(255,225,130,0.08) 35%, transparent 70%)",
        }}
        className="pointer-events-none absolute left-0 bottom-0 w-[36%] max-w-[360px] blur-[48px] opacity-90"
      />

      {/* ---------- blue glow right ---------- */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute top-0 right-[-5%]
          h-[40%] w-[28%] max-w-[420px] blur-[90px] opacity-80
        "
        style={{
          background:
            "linear-gradient(to left, rgba(0,196,255,0.85) 0%, rgba(0,196,255,0.35) 35%, rgba(0,196,255,0.08) 65%, transparent 100%)",
        }}
      />

      {/* soft dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#02000E]/30 to-[#02000E]" />

      {/* ---------------- CONTENT ---------------- */}
      <div className="relative z-10 mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">

        {/* ---------- HEADER ---------- */}
        <header className="mb-8 md:mb-12">
          <h1
            className={`${manrope.className} text-3xl md:text-[96px] font-semibold leading-tight mt-9`}
          >
            Privacy Policy
          </h1>
        </header>

        {/* ---------- ARTICLE CONTENT ---------- */}
        <article className="p-6 md:p-10">
          <div className="prose prose-invert ">

            {/* 1 */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">1. Introduction</h2>
              <p className="text-sm md:text-[36px] leading-relaxed text-gray-200">
                Reserve Financial Services Ltd ("we", "our", or "us") respects your privacy and
                is committed to protecting your personal information. This Privacy Policy explains
                how we collect, use, and safeguard your data when you visit our website.
              </p>
            </section>

            {/* 2 */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">2. Information We Collect</h2>

              <p className="text-sm md:text-[36px] leading-relaxed text-gray-200">
                We may collect limited personal information in the following ways:
              </p>

              <ul className="list-none space-y-8 mt-6">
                <li className="flex gap-4">
                  <span className="mt-3 h-3 w-3 rounded-full bg-yellow-400 shrink-0" />
                  <div>
                    <strong className="text-yellow-300 text-base md:text-[36px]">Contact Forms:</strong>
                    <p className="mt-2 text-sm md:text-[32px] text-gray-200 leading-relaxed">
                      Information you submit via contact or enquiry forms (name, email, message).
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="mt-3 h-3 w-3 rounded-full bg-yellow-400 shrink-0" />
                  <div>
                    <strong className="text-yellow-300 text-base md:text-[36px]">Website Usage Data:</strong>
                    <p className="mt-2 text-sm md:text-[32px] text-gray-200 leading-relaxed">
                      Analytics such as IP address, browser type, pages visited, and session duration.
                    </p>
                  </div>
                </li>
              </ul>

              <p className="mt-6 text-sm md:text-[36px] text-gray-200 leading-relaxed font-semibold">
                We do not collect financial, transactional, or sensitive personal data.
              </p>
            </section>

            {/* 3 */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">3. How We Use Your Information</h2>

              <ul className="list-disc list-inside text-sm md:text-[36px] text-gray-200 space-y-4">
                <li>Respond to enquiries or requests.</li>
                <li>Improve website performance and user experience.</li>
                <li>Maintain site security and protect against unauthorised access.</li>
              </ul>

              <p className="mt-6 text-sm md:text-[36px] text-gray-200 leading-relaxed">
                We do not sell, rent, or share personal data with third parties for marketing.
              </p>
            </section>

            {/* 4 */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">4. Legal Basis for Processing</h2>
              <p className="text-sm md:text-[36px] text-gray-200 leading-relaxed">
                We rely on legitimate interest, consent (where applicable), and fulfilling user requests.
              </p>
            </section>

            {/* 5 */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">5. Data Retention</h2>
              <p className="text-sm md:text-[36px] text-gray-200 leading-relaxed">
                Personal data is retained only as long as necessary, or as required by law.
              </p>
            </section>

            {/* 6 */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">6. Data Security</h2>
              <p className="text-sm md:text-[36px] text-gray-200 leading-relaxed">
                We implement technical and organisational safeguards to protect data from misuse.
              </p>
            </section>

            {/* 7 */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">7. Your Rights</h2>

              <ul className="list-disc list-inside text-sm md:text-[36px] text-gray-200 space-y-4">
                <li>Access personal information we hold.</li>
                <li>Request corrections.</li>
                <li>Request deletion where applicable.</li>
                <li>Restrict or object to processing.</li>
              </ul>

              <p className="mt-6 text-sm md:text-[36px] text-gray-200">
                To exercise your rights, contact{" "}
                <a href="mailto:info@reservefinancial.co.uk" className="text-yellow-300 underline">
                  info@reservefinancial.co.uk
                </a>
                .
              </p>
            </section>

            {/* 8 */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">8. Third-Party Links</h2>
              <p className="text-sm md:text-[36px] text-gray-200 leading-relaxed">
                We are not responsible for the privacy practices of external websites.
              </p>
            </section>

            {/* 9 */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">9. Changes to This Policy</h2>
              <p className="text-sm md:text-[36px] text-gray-200 leading-relaxed">
                Updates may occur periodically. Changes will appear here with a new date.
              </p>
            </section>

            {/* 10 */}
            <section className="mb-2">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">10. Contact Us</h2>
              <p className="text-sm md:text-[36px] text-gray-200 leading-relaxed">
                For privacy-related enquiries, contact{" "}
                <a href="mailto:info@reservefinancial.co.uk" className="text-yellow-300 underline">
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
