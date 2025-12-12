/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* app/page.jsx (or wherever your Home component sits) */
"use client";

import { useEffect, useState, useRef } from "react";
import CoreArchitecturePage from "./components/home";
import Aboutus from "./components/aboutus";
import WhatWeDo from "./components/whatwedo";
import HowWeWork from "./components/howwework";
import ContactForm from "./components/contactform";
import Animated from "./components/animated";

const CONSENT_KEY = "rfs_consent";

function ConsentGate({ onAccept }) {
  const [visible, setVisible] = useState(true);
  const acceptBtnRef = useRef(null);
  const exitBtnRef = useRef(null);

  useEffect(() => {
    // focus the accept button when gate appears
    acceptBtnRef.current?.focus();

    // keyboard shortcuts
    const onKey = (e) => {
      if (e.key === "Escape") {
        // treat Escape as Exit
        handleExit();
      } else if (e.key === "Enter") {
        // Enter accepts
        handleAccept();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "true");
    } catch (err) {
      /* ignore storage errors */
    }
    setVisible(false);
    onAccept && onAccept();
  };

  const handleExit = () => {
    // If they choose to exit, redirect out
    // small delay so click animation can be seen
    window.location.href = "https://www.google.com";
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site access confirmation"
      className="fixed inset-0 z-9999 flex items-center justify-center px-6"
    >
      {/* background */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* content card */}
      <div className="relative z-10 max-w-3xl w-full rounded-2xl overflow-hidden">
        <div
          className="w-full h-96 md:h-[480px] flex flex-col justify-center p-8 md:p-12"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(6,6,23,0.9) 0%, rgba(6,6,23,0.75) 60%, rgba(3,70,111,0.2) 100%)",
            boxShadow: "0 10px 40px rgba(2,6,23,0.7)",
          }}
        >
          {/* Left content (text) */}
          <div className="max-w-2xl text-left">
            <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
              Reserve Financial Services Ltd is a UK-registered company that trades
              solely with its own capital. This website is for informational purposes
              only. We do not provide investment advice, manage client funds, or offer
              financial services to external parties. Trading involves risk, and past
              activity is not a reliable indicator of future outcomes.
            </p>

            <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
              By entering this website, you acknowledge that all content is intended to
              describe internal operations and tools, not to promote or solicit external
              investment.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <button
                ref={acceptBtnRef}
                onClick={handleAccept}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold shadow-md hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-yellow-300"
              >
                Access Website
              </button>

              <button
                ref={exitBtnRef}
                onClick={handleExit}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/5 focus:outline-none focus:ring-4 focus:ring-white/10"
              >
                Exit Now
              </button>
            </div>

            <p className="mt-6 text-xs text-gray-400">
              We will remember your choice on this device. You can clear this via your
              browser storage to re-open the gate.
            </p>
          </div>

          {/* decorative right area — match the look with small image/gradient */}
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 bottom-0 w-1/3 hidden md:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(2,60,104,0.12) 40%, rgba(3,70,111,0.2) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [consentGiven, setConsentGiven] = useState(false);
  const [checkedStorage, setCheckedStorage] = useState(false);

  useEffect(() => {
    // Only run on client
    try {
      const val = localStorage.getItem(CONSENT_KEY);
      if (val === "true") {
        setConsentGiven(true);
      }
    } catch (err) {
      // ignore
    } finally {
      setCheckedStorage(true);
    }
  }, []);

  // while we check localStorage, don't render the site content behind the gate
  if (!checkedStorage) {
    // optional: a minimal loader
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="animate-pulse text-gray-400">Loading…</div>
      </div>
    );
  }

  return (
    <div className="">
      {/* show gate if no consent yet */}
      {!consentGiven && (
        <ConsentGate
          onAccept={() => {
            setConsentGiven(true);
          }}
        />
      )}

      {/* main site content — only visible if consentGiven or after accept */}
      {consentGiven && (
        <div className="">
          <CoreArchitecturePage />
          <Aboutus />
          <WhatWeDo />
          <Animated />
          <HowWeWork />
          <ContactForm />
        </div>
      )}
    </div>
  );
}
