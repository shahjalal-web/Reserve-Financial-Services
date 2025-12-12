/* eslint-disable @next/next/no-img-element */
// components/Footer.js

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      className="
        relative w-full text-white
        bg-[url('/images/footer.png')]
        bg-top bg-cover bg-no-repeat max-w-[1500px] mx-auto
      "
    >
      <div className="relative max-w-[1300px] mx-auto px-4 md:px-8 lg:px-16 pt-16 pb-10">

        {/* ================= TOP GRID ================= */}
        <div
          className="
            grid gap-10 lg:gap-20
            md:grid-cols-[1.4fr_0.9fr_0.9fr_1.4fr]
            items-start
          "
        >
          {/* ---------- LOGO + SOCIAL (Shown on all devices) ---------- */}
          <div className="space-y-8">
            <div className="flex items-start">
              <img
                src="/images/Logo.svg"
                alt="Reserve Financial Services"
                className="h-12 md:h-14 w-auto"
              />
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-wide">Follow Us</p>

              <div className="flex items-center gap-3 text-base md:text-lg">
                <a className="h-9 w-9 flex items-center justify-center rounded-full border border-white/40 hover:border-yellow-300 transition">
                  <FaXTwitter />
                </a>
                <a className="h-9 w-9 flex items-center justify-center rounded-full border border-white/40 hover:border-yellow-300 transition">
                  <FaLinkedinIn />
                </a>
                <a className="h-9 w-9 flex items-center justify-center rounded-full border border-white/40 hover:border-yellow-300 transition">
                  <FaInstagram />
                </a>
                <a className="h-9 w-9 flex items-center justify-center rounded-full border border-white/40 hover:border-yellow-300 transition">
                  <FaFacebookF />
                </a>
                <a className="h-9 w-9 flex items-center justify-center rounded-full border border-white/40 hover:border-yellow-300 transition">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* ---------- MOBILE: Quick Links + Legal (2 columns) ---------- */}
          <div className="grid grid-cols-2 gap-8 md:hidden">
            
            {/* Quick Links (MOBILE) */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wide">Quick Links</h3>
              <ul className="space-y-2 text-xs text-gray-200">
                <li><a href="#whatwedo" className="hover:text-yellow-300">What we do</a></li>
                <li><a href="#howwework" className="hover:text-yellow-300">How We Work</a></li>
                <li><a href="#aboutus" className="hover:text-yellow-300">About Us</a></li>
                <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
              </ul>
            </div>

            {/* Legal (MOBILE) */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wide">Legal & Compliance</h3>
              <ul className="space-y-2 text-xs text-gray-200">
                <li><Link href="/components/legal/disclimer" className="hover:text-yellow-300">Disclaimer</Link></li>
                <li><Link href="/components/legal/privacy" className="hover:text-yellow-300">Privacy Policy</Link></li>
                <li><Link href="/components/legal/cookie" className="hover:text-yellow-300">Cookie Policy</Link></li>
                <li><Link href="/components/legal/terms" className="hover:text-yellow-300">Terms Of Use</Link></li>
              </ul>
            </div>

          </div>

          {/* ---------- DESKTOP Quick Links ---------- */}
          <div className="hidden md:block space-y-4">
            <h3 className="text-sm md:text-base font-semibold tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-xs md:text-sm text-gray-200">
              <li><a href="#whatwedo" className="hover:text-yellow-300">What we do</a></li>
              <li><a href="#howwework" className="hover:text-yellow-300">How We Work</a></li>
              <li><a href="#aboutus" className="hover:text-yellow-300">About Us</a></li>
              <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </div>

          {/* ---------- DESKTOP Legal ---------- */}
          <div className="hidden md:block space-y-4">
            <h3 className="text-sm md:text-base font-semibold tracking-wide">Legal & Compliance</h3>
            <ul className="space-y-2 text-xs md:text-sm text-gray-200">
              <li><Link href="/components/legal/disclimer" className="hover:text-yellow-300">Disclaimer</Link></li>
              <li><Link href="/components/legal/privacy" className="hover:text-yellow-300">Privacy Policy</Link></li>
              <li><Link href="/components/legal/cookie" className="hover:text-yellow-300">Cookie Policy</Link></li>
              <li><Link href="/components/legal/terms" className="hover:text-yellow-300">Terms Of Use</Link></li>
            </ul>
          </div>

          {/* ---------- Get In Touch (full width on mobile) ---------- */}
          <div className="space-y-4">
            <h3 className="text-sm md:text-base font-semibold tracking-wide">Get in Touch</h3>

            <div className="space-y-3 text-xs md:text-sm text-gray-200">

              <div className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 text-lg shrink-0" />
                <p>
                  DBA – Suite 01.03–1st Floor Commerce House,<br />
                  1 Exchange Square,<br />
                  Middlesbrough, England, TS1 1DE
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="text-lg shrink-0" />
                <a href="mailto:info@reservefinancial.co.uk" className="hover:text-yellow-300">
                  info@reservefinancial.co.uk
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-lg shrink-0" />
                <a href="tel:07919767108" className="hover:text-yellow-300">
                  07919767108
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/25" />

        {/* Copyright */}
        <p className="mt-4 text-center text-[11px] sm:text-xs md:text-sm text-gray-200">
          © 2025 Reserve Financial Services. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
