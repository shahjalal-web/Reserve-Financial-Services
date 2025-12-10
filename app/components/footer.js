/* eslint-disable @next/next/no-img-element */
// components/Footer.js

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
    relative
    w-full
    text-white
    bg-top bg-no-repeat bg-cover
  "
      style={{ backgroundImage: "url('/images/Backgrounds/footer.png')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 lg:px-16 pt-12 pb-8">
        {/* TOP GRID */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Logo + Social */}
          <div className="space-y-6">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-2">
                {/* If you have logo image, use that instead */}
                <img
                  src="/images/logo.svg"
                  alt="Reserve Financial Services"
                  className="h-10 w-auto"
                />
              </div>
            </div>

            {/* Social */}
            <div className="space-y-3">
              <p className="font-semibold">Follow Us</p>

               <div className="flex items-center gap-4 text-2xl">
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-80">
              <FaYoutube />
            </a>
          </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a
                  href="#whatwedo"
                  className="hover:text-yellow-300 transition-colors"
                >
                  What we do
                </a>
              </li>
              <li>
                <a
                  href="#howwework"
                  className="hover:text-yellow-300 transition-colors"
                >
                  How We Work
                </a>
              </li>
              <li>
                <a
                  href="#aboutus"
                  className="hover:text-yellow-300 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal &amp; Compliance</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a
                  href="/legal/disclaimer"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="/legal/privacy-policy"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/legal/cookie-policy"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="/legal/terms"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Terms Of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>

            <div className="space-y-3 text-sm text-gray-200">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-lg">📍</span>
                <p>
                  DBA - Suite 01.03–1st Floor Commerce House, 1 Exchange Square,
                  <br />
                  Middlesbrough, England, TS1 1DE
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-lg">✉️</span>
                <a
                  href="mailto:info@reservefinancial.co.uk"
                  className="hover:text-yellow-300 transition-colors"
                >
                  info@reservefinancial.co.uk
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <a
                  href="tel:07919767108"
                  className="hover:text-yellow-300 transition-colors"
                >
                  07919767108
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/20" />

        {/* Bottom copyright */}
        <p className="mt-4 text-center text-xs sm:text-sm text-gray-200">
          © 2025 Reserve Financial Services. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
