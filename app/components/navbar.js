"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleNavClick = (id) => {
    setActiveLink(id);
    setMenuOpen(false);
  };

  const navItems = [
    { id: "aboutus", label: "About Us" },
    { id: "whatwedo", label: "What We Do" },
    { id: "howwework", label: "How We Work" },
    { id: "contactform", label: "Contact" },
  ];

  return (
   <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 lg:py-6 z-50 bg-transparent">
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

      {/* Desktop menu (only >= 1024px) */}
      <ul className="hidden lg:flex gap-10 text-white font-medium">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className="cursor-pointer"
          >
            <Link
              href={`#${item.id}`}
              scroll={false}
              prefetch={false}
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

      {/* Hamburger (only < 1024px) */}
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
          className={`absolute top-0 left-0 h-full w-[260px] bg-linear-to-b from-[#11426d] via-[#032942] to-[#122650] pt-20 pb-24 pl-8 pr-6 flex flex-col gap-8 transform transition-transform duration-300 ${
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
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-[20px] ${
                activeLink === item.id
                  ? "text-[#FFE400] font-semibold"
                  : "text-white hover:text-[#FFE400]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
