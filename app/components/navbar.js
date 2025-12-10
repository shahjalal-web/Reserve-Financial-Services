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

  const handleNavClick = (id, e) => {
    if (e) e.preventDefault();

    setActiveLink(id);
    setMenuOpen(false);

    // smooth scroll to section with navbar offset
    const target = document.getElementById(id);
    if (target) {
      const nav = document.querySelector("nav");
      const navHeight = nav ? nav.offsetHeight : 0;

      const y =
        target.getBoundingClientRect().top + window.scrollY - navHeight - 8; // small extra gap

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
    <nav
      className={`
        fixed top-0 left-0 w-full
        flex items-center justify-between
        px-6 md:px-10 lg:px-16
        py-4 lg:py-6
        z-50
        transition-all duration-300
        ${
          isScrolled
            ? "bg-black/40 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }
      `}
    >
      {/* Logo */}
      <div>
        <Link href="/" className="inline-block">
          <Image
            src="/images/Logo.svg"
            alt="Reserve Financial Services Logo"
            width={160}
            height={50}
            priority
          />
        </Link>
      </div>

      {/* Desktop menu (>= lg) */}
      <ul className="hidden lg:flex gap-10 text-white font-medium">
        {navItems.map((item) => (
          <li key={item.id} className="cursor-pointer">
            <Link
              href={`#${item.id}`}
              // scroll/prefetch dorkar nai ekhon
              onClick={(e) => handleNavClick(item.id, e)}
              className={`text-[18px] transition-all duration-300 ${
                activeLink === item.id
                  ? "text-yellow-400 font-semibold"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger (< lg) */}
      <button
        type="button"
        className="lg:hidden text-white text-3xl pl-3"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        &#9776;
      </button>

      {/* Mobile overlay + drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {/* Drawer */}
        <div
          id="mobile-navigation"
          className={`absolute top-0 left-0 h-full w-[260px] bg-linear-to-b from-[#11426d] via-[#032942] to-[#122650] pt-20 pb-96 pl-8 pr-6 flex flex-col gap-8 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            type="button"
            className="absolute top-4 right-4 text-white text-3xl"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

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
    </nav>
  );
}
