// components/Navbar.js
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // glass effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fix: Add window resize listener to ensure full width works correctly on mobile
  useEffect(() => {
    const handleResize = () => {
      // If the menu is open and the screen is large, close the menu
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const handleNavClick = (id, e) => {
    if (e) e.preventDefault();

    setActiveLink(id);
    setMenuOpen(false);

    // smooth scroll to section with navbar offset
    const target = document.getElementById(id);
    if (target) {
      // Find the fixed nav element
      const nav = document.querySelector("nav");
      const navHeight = nav ? nav.offsetHeight : 0;

      // Calculate scroll position, adding a small offset (8px)
      const y =
        target.getBoundingClientRect().top + window.scrollY - navHeight - 8;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "aboutus", label: "About Us" },
    { id: "whatwedo", label: "What We Do" },
    { id: "howwework", label: "How We Work" },
    { id: "contactform", label: "Contact" },
  ];

  return (
    <>
      {/* ⚠️ গুরুত্বপূর্ণ: এই outermost div-এ w-full নিশ্চিত করা হয়েছে */}
      <div className="w-full"> 
        {/* NAVBAR */}
        <nav
          className={`
            fixed top-0 w-full z-50 transition-all duration-300
            ${
              isScrolled
                ? "bg-black/40 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                : "bg-transparent"
            }
          `}
        >
          {/* MAX WIDTH WRAPPER */}
          <div className="max-w-[1500px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 lg:pt-12 lg:pb-3">
            {/* Logo (অপরিবর্তিত) */}
            <Link href="/" className="inline-block">
              <Image
                src="/images/Logo.svg"
                alt="Reserve Financial Services Logo"
                width={160}
                height={50}
                priority
              />
            </Link>

            {/* Desktop Navigation (অপরিবর্তিত) */}
            <ul className="hidden lg:flex gap-10 text-white font-medium">
              {navItems.map((item) => (
                <li key={item.id} className="cursor-pointer">
                  <Link
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(item.id, e)}
                    className={`text-[18px] transition-all duration-300 ${
                      activeLink === item.id
                        ? "text-[#FBF705] font-semibold"
                        : "text-white hover:text-[#FBF705]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger (অপরিবর্তিত) */}
            <button
              type="button"
              className="lg:hidden text-white text-3xl pl-3"
              onClick={() => setMenuOpen(true)}
              aria-label="Toggle menu"
            >
              &#9776;
            </button>
          </div>
        </nav>

        {/* OVERLAY (অপরিবর্তিত) */}
        <div
          className={`
            lg:hidden fixed inset-0 z-40
            bg-black/60 backdrop-blur-sm
            transition-opacity duration-300
            ${
              menuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }
          `}
          onClick={() => setMenuOpen(false)}
        />

        {/* DRAWER (অপরিবর্তিত, তবে w-[260px] ফিক্সড আছে যা সাধারণত সমস্যা করে না) */}
        <div
          id="mobile-navigation"
          className={`
            lg:hidden fixed top-0 left-0 h-full w-[260px] z-50
            bg-[linear-gradient(to_bottom,#11426d,#032942,#122650)]
            pt-20 pb-10 px-6
            flex flex-col gap-8
            transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* Close button (অপরিবর্তিত) */}
          <button
            type="button"
            className="absolute top-4 right-4 text-white text-3xl"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          {/* Mobile Nav Items (অপরিবর্তিত) */}
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => handleNavClick(item.id, e)}
              className={`text-left text-[20px] ${
                activeLink === item.id
                  ? "text-[#FFE400] font-semibold"
                  : "text-white hover:text-[#FFE400]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}