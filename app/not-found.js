/* app/404/page.tsx or pages/404.js */
"use client";

import Link from "next/link";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["600"], display: "swap" });

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-linear-to-b from-[#030313] via-[#070719] to-[#041025] text-white flex items-center justify-center overflow-hidden relative">
      {/* animated stars / particles */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-40" />
        <div className="absolute left-0 top-0 w-full h-full">
          <div className="stars" />
        </div>
      </div>

      {/* content container */}
      <div className="relative z-10 max-w-4xl w-full px-6 md:px-10 py-24">
        <div className="mx-auto text-center">
          {/* headline */}
          <h1
            className={`${manrope.className} text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight`}
            aria-hidden
          >
            <span className="inline-block glitch relative">
              <span className="glitch-layer">404</span>
              <span className="glitch-layer">404</span>
              <span className="glitch-layer">404</span>
            </span>
          </h1>

          {/* subtitle */}
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Oops — we couldn’t find the page you were looking for. It might have been moved
            or removed, or the URL may be incorrect.
          </p>

          {/* actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="focus:outline-none">
              <p
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-linear-to-r from-[#0ea5e9] to-[#fbbf24] text-black font-semibold shadow-lg hover:scale-[1.02] transform transition"
                role="button"
              >
                Go Home
              </p>
            </Link>

            <a
              href="/components/contact"
              className="text-sm text-gray-300 hover:text-white underline"
            >
              Report an issue
            </a>
          </div>

          {/* subtle extra message */}
          <p className="mt-8 text-sm text-gray-400">
            Or try using the navigation menu to find what you need.
          </p>
        </div>
      </div>

      {/* decorative orbit / glow behind card */}
      <div aria-hidden className="absolute -z-20 inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[650px] h-[650px] rounded-full bg-linear-to-r from-[#05202e]/20 via-transparent to-[#3d1a4a]/10 blur-3xl" />
      </div>

      {/* Inline styles & keyframes */}
      <style jsx>{`
        /* starfield: generate many tiny dots using background with radial-gradient */
        .stars {
          width: 100%;
          height: 100%;
          background-image:
            radial-gradient(circle at 10% 20%, rgba(255,255,255,0.9) 0.8px, transparent 1px),
            radial-gradient(circle at 30% 40%, rgba(255,255,255,0.85) 0.8px, transparent 1px),
            radial-gradient(circle at 70% 80%, rgba(255,255,255,0.75) 0.8px, transparent 1px),
            radial-gradient(circle at 50% 10%, rgba(255,255,255,0.6) 0.8px, transparent 1px),
            radial-gradient(circle at 85% 30%, rgba(255,255,255,0.6) 0.8px, transparent 1px),
            radial-gradient(circle at 15% 75%, rgba(255,255,255,0.5) 0.8px, transparent 1px);
          background-size: 200% 200%;
          animation: star-move 30s linear infinite;
          opacity: 0.9;
        }

        @keyframes star-move {
          0% {
            background-position: 0% 0%;
            transform: translateZ(0);
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 100%;
          }
        }

        /* glitch headline */
        .glitch {
          display: inline-block;
          position: relative;
          line-height: 0.9;
          color: white;
        }
        .glitch .glitch-layer {
          position: absolute;
          left: 0;
          top: 0;
          will-change: transform;
          display: inline-block;
          mix-blend-mode: screen;
          text-shadow: 0 0 8px rgba(255,255,255,0.05);
        }
        .glitch .glitch-layer:nth-child(1) {
          color: #fff;
          z-index: 3;
          transform: translateX(0);
        }
        .glitch .glitch-layer:nth-child(2) {
          color: #0ea5e9;
          z-index: 2;
          clip-path: inset(0 0 45% 0);
          transform: translateX(-4px) translateY(-2px);
          opacity: 0.9;
          animation: glitch-anim-1 2.5s infinite linear;
        }
        .glitch .glitch-layer:nth-child(3) {
          color: #fbbf24;
          z-index: 1;
          clip-path: inset(55% 0 0 0);
          transform: translateX(6px) translateY(2px);
          opacity: 0.85;
          animation: glitch-anim-2 3s infinite linear;
        }

        @keyframes glitch-anim-1 {
          0% { transform: translateX(-4px) translateY(-2px) skewX(-2deg); }
          10% { transform: translateX(-20px) translateY(2px) skewX(-6deg); }
          20% { transform: translateX(3px) translateY(-1px) skewX(1deg); }
          30% { transform: translateX(-6px) translateY(3px) skewX(-2deg); }
          40% { transform: translateX(0px) translateY(0px) skewX(0deg); }
          100% { transform: translateX(-4px) translateY(-2px) skewX(-2deg); }
        }

        @keyframes glitch-anim-2 {
          0% { transform: translateX(6px) translateY(2px) skewX(1deg); }
          10% { transform: translateX(18px) translateY(-3px) skewX(4deg); }
          20% { transform: translateX(-2px) translateY(1px) skewX(-1deg); }
          30% { transform: translateX(7px) translateY(-2px) skewX(2deg); }
          40% { transform: translateX(0px) translateY(0px) skewX(0deg); }
          100% { transform: translateX(6px) translateY(2px) skewX(1deg); }
        }

        /* subtle float for the whole container */
        @keyframes floaty {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        main > div > .mx-auto {
          animation: floaty 6s ease-in-out infinite;
        }

        /* prefer reduced motion: disable animations */
        @media (prefers-reduced-motion: reduce) {
          .stars, .glitch .glitch-layer:nth-child(2), .glitch .glitch-layer:nth-child(3),
          main > div > .mx-auto {
            animation: none !important;
          }
        }

        /* responsive tweaks */
        @media (max-width: 640px) {
          .glitch { font-size: 3.25rem; } /* smaller on small screens */
        }
      `}</style>
    </main>
  );
}
