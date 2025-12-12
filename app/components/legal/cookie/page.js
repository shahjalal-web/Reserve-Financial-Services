/* eslint-disable react/no-unescaped-entities */
/* app/cookie-policy/page.tsx */

import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export default function CookiePolicy() {
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
          pointer-events-none
          absolute inset-y-0 left-[-5%]
          w-[42%] max-w-[460px]
          transform -translate-x-6
          blur-[60px]
          opacity-95
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
          pointer-events-none
          absolute left-0 bottom-0
          w-[36%] max-w-[360px]
          blur-[48px]
          opacity-90
        "
      />

      {/* ---------- right-side blue glow ---------- */}
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

      {/* CONTENT AREA */}
      <div className="relative z-10 mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">

        {/* PAGE TITLE */}
        <header className="mb-8 md:mb-12">
          <h1
            className={`${manrope.className} text-3xl md:text-[96px] mt-9 font-semibold leading-tight`}
          >
            Cookie Policy
          </h1>
        </header>

        {/* CONTENT CARD */}
        <article className="rounded-2xl p-6 md:p-10">
          <div className="prose prose-invert max-w-none">

            {/* 1. INTRODUCTION */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">
                1. Introduction
              </h2>
              <p className="text-sm md:text-[36px] leading-relaxed text-gray-200">
                Reserve Financial Services Ltd ("we", "our", or "us") uses cookies and
                similar technologies on this website to improve user experience, monitor
                website performance, and ensure security. This Cookie Policy explains
                what cookies are, how we use them, and your options for managing them.
              </p>
            </section>

            {/* 2. WHAT ARE COOKIES */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">
                2. What Are Cookies?
              </h2>
              <p className="text-sm md:text-[36px] leading-relaxed text-gray-200">
                Cookies are small text files stored on your device when you visit a
                website. They help the website remember your preferences, analyse usage,
                and provide certain functionalities.
              </p>
            </section>

            {/* 3. TYPES OF COOKIES */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">
                3. Types of Cookies We Use
              </h2>

              <ul className="list-none space-y-8 md:space-y-10">
                <li className="flex gap-4">
                  <span className="mt-3 h-3 w-3 rounded-full bg-yellow-400 shrink-0"></span>
                  <div>
                    <strong className="text-yellow-300 text-base md:text-[36px]">
                      Essential Cookies
                    </strong>
                    <p className="text-sm md:text-[32px] text-gray-200 leading-relaxed mt-2">
                      Required for core functionality, security, and navigation.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="mt-3 h-3 w-3 rounded-full bg-yellow-400 shrink-0"></span>
                  <div>
                    <strong className="text-yellow-300 text-base md:text-[36px]">
                      Performance & Analytics Cookies
                    </strong>
                    <p className="text-sm md:text-[32px] text-gray-200 leading-relaxed mt-2">
                      Help track site usage so we can improve content and UX.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="mt-3 h-3 w-3 rounded-full bg-yellow-400 shrink-0"></span>
                  <div>
                    <strong className="text-yellow-300 text-base md:text-[36px]">
                      Functional Cookies
                    </strong>
                    <p className="text-sm md:text-[32px] text-gray-200 leading-relaxed mt-2">
                      Store preferences like language or layout.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="mt-3 h-3 w-3 rounded-full bg-yellow-400 shrink-0"></span>
                  <div>
                    <strong className="text-yellow-300 text-base md:text-[36px]">
                      Third-Party Cookies
                    </strong>
                    <p className="text-sm md:text-[32px] text-gray-200 leading-relaxed mt-2">
                      Placed by analytics or embedded services for traffic monitoring.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            {/* 4. YOUR COOKIE CHOICES */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">
                4. Your Cookie Choices
              </h2>
              <p className="text-sm md:text-[36px] leading-relaxed text-gray-200">
                You can manage or disable cookies via your browser settings. Blocking
                certain cookies may limit website functionality.
              </p>
            </section>

            {/* 5. CONSENT */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">
                5. Consent
              </h2>
              <p className="text-sm md:text-[36px] leading-relaxed text-gray-200">
                By continuing to use this site without changing settings, you consent to
                our use of cookies.
              </p>
            </section>

            {/* 6. UPDATES */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">
                6. Updates to This Policy
              </h2>
              <p className="text-sm md:text-[36px] leading-relaxed text-gray-200">
                We may update this Cookie Policy. Changes will appear here with a revised date.
              </p>
            </section>

            {/* 7. CONTACT */}
            <section className="mb-10">
              <h2 className="text-lg md:text-[48px] font-semibold mb-6">
                7. Contact Us
              </h2>
              <p className="text-sm md:text-[36px] leading-relaxed text-gray-200">
                For questions, contact us at{" "}
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
