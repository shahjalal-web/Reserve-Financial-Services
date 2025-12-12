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
        backgroundImage: "url('/images/backgrounds/bg-howwework-png.png')",
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
          w-[28%]
          max-w-[420px]
          blur-[90px]
          opacity-80
        "
        style={{
          background:
            "linear-gradient(to left, rgba(0,196,255,0.85) 0%, rgba(0,196,255,0.35) 35%, rgba(0,196,255,0.08) 65%, transparent 100%)",
        }}
      />

      {/* slight overall dark-to-darker gradient to tie content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02000E]/30 to-[#02000E]" />

      <div className="relative z-10 mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <header className="mb-8 md:mb-12">
          <h1
            className={`${manrope.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight`}
          >
            Privacy Policy
          </h1>
        </header>

        <article className="p-6 md:p-10">
          <div className="prose prose-invert max-w-none md:max-w-3xl">
            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold">1. Introduction</h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-200">
                Reserve Financial Services Ltd ("we", "our", or "us") respects your privacy and
                is committed to protecting your personal information. This Privacy Policy
                explains how we collect, use, and safeguard your data when you visit our website.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold">2. Information We Collect</h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-200">
                We may collect limited personal information in the following ways:
              </p>

              <ul className="list-none space-y-3 mt-3">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                  <div>
                    <strong className="text-yellow-300">Contact Forms:</strong>
                    <p className="mt-1 text-sm md:text-base text-gray-200 leading-relaxed">
                      Information you submit via contact or enquiry forms (name, email, message).
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                  <div>
                    <strong className="text-yellow-300">Website Usage Data:</strong>
                    <p className="mt-1 text-sm md:text-base text-gray-200 leading-relaxed">
                      Non-identifying analytics data (IP addresses, browser type, pages visited,
                      session duration) that helps us improve the site.
                    </p>
                  </div>
                </li>
              </ul>

              <p className="mt-3 text-sm md:text-base text-gray-200 leading-relaxed">
                <strong>We do not collect financial, transactional, or sensitive personal data.</strong>
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-200 space-y-2 mt-3">
                <li>Respond to enquiries or requests.</li>
                <li>Maintain and improve website functionality and user experience.</li>
                <li>Protect against unauthorised access and maintain site security.</li>
              </ul>

              <p className="mt-3 text-sm md:text-base text-gray-200 leading-relaxed">
                We do not sell, rent, or share your personal data with third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold">4. Legal Basis for Processing</h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-200">
                We rely on lawful bases for processing such as legitimate interest, consent where
                provided, and fulfilling requests you make to us.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold">5. Data Retention</h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-200">
                We retain personal data only for as long as necessary to fulfil the purpose for which
                it was collected, or as required by law.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold">6. Data Security</h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-200">
                We use appropriate technical and organisational measures to protect information from
                loss, unauthorised access, alteration, or misuse.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold">7. Your Rights</h2>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-200 space-y-2 mt-3">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate information.</li>
                <li>Request deletion where applicable.</li>
                <li>Object to or restrict processing in certain circumstances.</li>
              </ul>
              <p className="mt-3 text-sm md:text-base text-gray-200">
                To exercise your rights, please contact us at{" "}
                <a href="mailto:info@reservefinancial.co.uk" className="text-yellow-300 underline">
                  info@reservefinancial.co.uk
                </a>
                .
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold">8. Third-Party Links</h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-200">
                Our website may contain links to external sites. We are not responsible for the
                privacy practices of those sites.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold">9. Changes to This Policy</h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-200">
                We may update this Privacy Policy from time to time. Any updates will be posted on
                this page with an updated "Last Revised" date.
              </p>
            </section>

            <section className="mb-2">
              <h2 className="text-lg md:text-xl font-semibold">10. Contact Us</h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-200">
                If you have any questions about this policy, please contact us at{" "}
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
