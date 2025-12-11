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
      className="relative w-full min-h-screen text-white"
      style={{
        backgroundImage: "url('/images/backgrounds/bg-howwework-png.png')",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        {/* Page Title */}
        <header className="mb-8 md:mb-12">
          <h1
            className={`${manrope.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold`}
          >
            Terms of Use
          </h1>
        </header>

        {/* Content Container */}
        <article className="bg-black/25 backdrop-blur-sm rounded-2xl p-6 md:p-10">
          <div className="prose prose-invert max-w-none md:max-w-3xl">
            {/* 1 */}
            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold">1. Acceptance of Terms</h2>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                By accessing or using this website, you agree to comply with these Terms
                of Use. If you do not agree, you must not use the website. Reserve
                Financial Services Ltd reserves the right to modify these terms at any
                time. Continued use constitutes acceptance of any changes.
              </p>
            </section>

            {/* 2 */}
            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold">2. Website Purpose</h2>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                This website is intended for informational purposes only. Reserve
                Financial Services Ltd is a company that trades solely with its own
                capital and develops financial technology. We do not provide investment
                advice, manage client funds, or offer financial services to external
                parties.
              </p>
            </section>

            {/* 3 */}
            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold">3. Intellectual Property</h2>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                All content on this website—including text, graphics, logos, images, and
                software—is the property of Reserve Financial Services Ltd or its
                licensors and is protected by copyright, trademark, and other
                intellectual property laws. You may not copy, reproduce, distribute, or
                create derivative works without prior written consent.
              </p>
            </section>

            {/* 4 */}
            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold">4. Use of Website Content</h2>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                You may use the website for personal, non-commercial purposes only. You
                may not rely on any content for financial, investment, or trading
                decisions. Any reliance on website content is at your own risk.
              </p>
            </section>

            {/* 5 */}
            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold">5. Limitation of Liability</h2>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                While we strive to provide accurate and up-to-date information, Reserve
                Financial Services Ltd makes no warranties regarding the accuracy,
                completeness, or reliability of the website content. We are not liable
                for any losses, damages, or consequences resulting from your use of the
                website.
              </p>
            </section>

            {/* 6 */}
            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold">6. External Links</h2>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                The website may contain links to third-party websites. These links are
                provided for convenience only. Reserve Financial Services Ltd is not
                responsible for the content, privacy policies, or accuracy of third-party
                websites.
              </p>
            </section>

            {/* 7 */}
            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold">7. Security and Access</h2>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                You are responsible for ensuring your access to the website is secure and
                free from unauthorised use. Attempting to disrupt, hack, or interfere
                with the website is strictly prohibited.
              </p>
            </section>

            {/* 8 */}
            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold">8. Governing Law</h2>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                These Terms of Use are governed by the laws of England and Wales. Any
                disputes arising from the use of this website will be subject to the
                exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            {/* 9 */}
            <section className="mb-0">
              <h2 className="text-lg md:text-xl font-semibold">9. Contact Information</h2>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                For questions regarding these Terms of Use or website usage, please
                contact us at{" "}
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
