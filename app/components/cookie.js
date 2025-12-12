/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* CookiePolicy.jsx (or .tsx) */
export default function CookiePolicy() {
  return (
    <main
      className="relative w-full min-h-screen text-white"
      /* put your background image in /public/images/ e.g. /public/images/cookie-bg.jpg */
      style={{
        backgroundImage: "url('/images/backgrounds/cookie-bg.jpg')",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* overlay for contrast */}
      <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/40 to-black/70" />

      {/* subtle decorative vignette / stars if you want */}
      <div className="absolute inset-0 pointer-events-none">
        {/* optional: add extra overlays, particle PNG, etc */}
      </div>

      {/* content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        {/* Page title */}
        <header className="mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Cookie Policy
          </h1>
        </header>

        {/* Main container: single column for mobile, wider for larger screens */}
        <article className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-10 lg:p-12">
          {/* Use a centered column for readability */}
          <div className="prose prose-invert max-w-none md:max-w-3xl">
            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold mb-3">1. Introduction</h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-200">
                Reserve Financial Services Ltd ("we", "our", or "us") uses cookies and
                similar technologies on this website to improve user experience, monitor
                website performance, and ensure security. This Cookie Policy explains
                what cookies are, how we use them, and your options for managing them.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold mb-3">2. What Are Cookies?</h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-200">
                Cookies are small text files stored on your device when you visit a
                website. They help the website remember your preferences, analyse usage,
                and provide certain functionalities.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold mb-3">3. Types of Cookies We Use</h2>

              <ul className="space-y-3 list-none">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                  <div>
                    <strong className="text-yellow-300">Essential Cookies</strong>
                    <p className="text-sm md:text-base text-gray-200 leading-relaxed mt-1">
                      Necessary for the website to function correctly, including security
                      features and basic navigation.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                  <div>
                    <strong className="text-yellow-300">Performance &amp; Analytics Cookies</strong>
                    <p className="text-sm md:text-base text-gray-200 leading-relaxed mt-1">
                      Collect anonymous information about how visitors use the website to
                      help us improve content, performance, and user experience.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                  <div>
                    <strong className="text-yellow-300">Functional Cookies</strong>
                    <p className="text-sm md:text-base text-gray-200 leading-relaxed mt-1">
                      Remember your preferences (such as language settings) to provide a more
                      personalised experience.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                  <div>
                    <strong className="text-yellow-300">Third-Party Cookies</strong>
                    <p className="text-sm md:text-base text-gray-200 leading-relaxed mt-1">
                      We may use third-party services (analytics, widgets) which place cookies
                      on your device. These are used for monitoring website traffic and performance.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold mb-3">4. Your Cookie Choices</h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-200">
                You can manage or disable cookies through your browser settings. Please note
                that blocking certain cookies may affect website functionality or limit access
                to some features.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold mb-3">5. Consent</h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-200">
                By continuing to use this website without changing your browser settings,
                you consent to the use of cookies as described in this policy.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold mb-3">6. Updates to This Policy</h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-200">
                We may update this Cookie Policy from time to time. Any changes will be posted
                on this page with an updated "Last Revised" date.
              </p>
            </section>

            <section className="mb-2">
              <h2 className="text-lg md:text-xl font-semibold mb-3">7. Contact Us</h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-200">
                If you have any questions about our use of cookies or this policy, please
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
