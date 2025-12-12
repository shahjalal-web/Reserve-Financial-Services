// components/contactform.js
"use client";

import { useState, useRef, useEffect } from "react";
import { Manrope } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const COUNTRIES = [
  { name: "Afghanistan", dialCode: "+93", code: "af" },
  { name: "Albania", dialCode: "+355", code: "al" },
  { name: "Algeria", dialCode: "+213", code: "dz" },
  { name: "Andorra", dialCode: "+376", code: "ad" },
  { name: "Angola", dialCode: "+244", code: "ao" },
  { name: "Argentina", dialCode: "+54", code: "ar" },
  { name: "Armenia", dialCode: "+374", code: "am" },
  { name: "Australia", dialCode: "+61", code: "au" },
  { name: "Austria", dialCode: "+43", code: "at" },
  { name: "Azerbaijan", dialCode: "+994", code: "az" },
  { name: "Bahamas", dialCode: "+1-242", code: "bs" },
  { name: "Bahrain", dialCode: "+973", code: "bh" },
  { name: "Bangladesh", dialCode: "+880", code: "bd" },
  { name: "Belgium", dialCode: "+32", code: "be" },
  { name: "Brazil", dialCode: "+55", code: "br" },
  { name: "Canada", dialCode: "+1", code: "ca" },
  { name: "China", dialCode: "+86", code: "cn" },
  { name: "France", dialCode: "+33", code: "fr" },
  { name: "Germany", dialCode: "+49", code: "de" },
  { name: "India", dialCode: "+91", code: "in" },
  { name: "Italy", dialCode: "+39", code: "it" },
  { name: "Japan", dialCode: "+81", code: "jp" },
  { name: "Malaysia", dialCode: "+60", code: "my" },
  { name: "Nepal", dialCode: "+977", code: "np" },
  { name: "Netherlands", dialCode: "+31", code: "nl" },
  { name: "Pakistan", dialCode: "+92", code: "pk" },
  { name: "Saudi Arabia", dialCode: "+966", code: "sa" },
  { name: "Singapore", dialCode: "+65", code: "sg" },
  { name: "South Korea", dialCode: "+82", code: "kr" },
  { name: "Spain", dialCode: "+34", code: "es" },
  { name: "Sri Lanka", dialCode: "+94", code: "lk" },
  { name: "Sweden", dialCode: "+46", code: "se" },
  { name: "Switzerland", dialCode: "+41", code: "ch" },
  { name: "Thailand", dialCode: "+66", code: "th" },
  { name: "Turkey", dialCode: "+90", code: "tr" },
  { name: "United Arab Emirates", dialCode: "+971", code: "ae" },
  { name: "United Kingdom", dialCode: "+44", code: "gb" },
  { name: "United States", dialCode: "+1", code: "us" },
];


export default function ContactForm() {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = COUNTRIES.filter((country) =>
    (country.name + country.dialCode)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  function validateForm() {
    let newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Invalid email address";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
      });
      setTimeout(() => setSuccess(false), 3000);
    }
  }

  return (
    <section
      id="contactform"
      className="relative w-full text-white px-4 md:px-8 lg:px-16 py-20 md:py-48 bg-[url('/images/bg-form.png')] bg-top bg-cover bg-no-repeat max-w-[1500px] mx-auto"
    >
      {/* Emoji font fix */}
      <style jsx global>{`
        .emoji {
          font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji",
            sans-serif !important;
        }
      `}</style>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 space-y-2">
          <h2
            className={`${manrope.className} text-3xl md:text-[70px] font-semibold`}
          >
            Speak with <span className="text-[#FBF705]">Our Team</span>
          </h2>
        </div>

        <form className="space-y-9" onSubmit={handleSubmit}>
          {/* FIRST & LAST NAME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FieldWrapper>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                className={`w-full bg-black/40 border ${
                  errors.firstName ? "border-red-400" : "border-white/20"
                } rounded-md px-3 md:py-4 md:text-2xl py-2 text-xl placeholder:text-white`}
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="text-red-400 text-xs">{errors.firstName}</p>
              )}
            </FieldWrapper>

            <FieldWrapper>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className={`w-full bg-black/40 border ${
                  errors.lastName ? "border-red-400" : "border-white/20"
                } rounded-md px-3 md:py-4 md:text-2xl py-2 text-xl placeholder:text-white`}
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-red-400 text-xs">{errors.lastName}</p>
              )}
            </FieldWrapper>
          </div>

          {/* EMAIL */}
          <FieldWrapper>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`w-full bg-black/40 border ${
                errors.email ? "border-red-400" : "border-white/20"
              } rounded-md px-3 md:py-4 md:text-2xl py-2 text-xl placeholder:text-white`}
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-red-400 text-xs">{errors.email}</p>
            )}
          </FieldWrapper>

          {/* PHONE + COUNTRY SELECT */}
          <FieldWrapper>
            <div className="flex items-center gap-2 bg-black/40 border border-white/20 rounded-md px-2 py-2">
              {/* COUNTRY SELECTOR */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-2 px-2 py-1 rounded-md bg-black/40 border border-white/20 text-sm"
                >
                  <Image
                    src={`/flags/${selectedCountry.code}.svg`}
                    alt={selectedCountry.name}
                    width={20}
                    height={14}
                    className="rounded-sm object-cover"
                  />
                  <span className="text-sm text-gray-100">
                    {selectedCountry.dialCode}
                  </span>
                  <span className="text-xs text-gray-400">▼</span>
                </button>

                {isOpen && (
                  <div className="absolute z-30 mt-2 w-64 rounded-lg bg-black/90 border border-white/15 shadow-xl">
                    {/* SEARCH FIELD */}
                    <div className="p-2 border-b border-white/10">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search country or code"
                        className="w-full bg-black/60 border border-white/15 rounded-md px-2 py-1.5 text-xs text-gray-100 focus:outline-none"
                      />
                    </div>

                    {/* COUNTRY LIST */}
                    <div className="max-h-60 overflow-y-auto">
                      {filteredCountries.length === 0 && (
                        <div className="px-3 py-2 text-xs text-gray-400">
                          No matches
                        </div>
                      )}

                      {filteredCountries.map((country) => (
                        <button
                          key={country.name}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(country);
                            setIsOpen(false);
                            setSearchTerm("");
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-yellow-400/10"
                        >
                          <Image
                            src={`/flags/${country.code}.svg`}
                            alt={country.name}
                            width={20}
                            height={14}
                            className="rounded-sm object-cover"
                          />
                          <span className="flex-1 text-gray-100">
                            {country.name}
                          </span>
                          <span className="text-gray-300">
                            {country.dialCode}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* PHONE NUMBER */}
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="flex-1 bg-transparent px-2 md:py-4 md:text-2xl py-2 text-xl placeholder:text-white focus:outline-none"
                placeholder="Phone Number"
              />
            </div>
            {errors.phone && (
              <p className="text-red-400 text-xs">{errors.phone}</p>
            )}
          </FieldWrapper>

          {/* MESSAGE */}
          <FieldWrapper>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`w-full bg-black/40 border ${
                errors.message ? "border-red-400" : "border-cyan-400/60"
              } rounded-md px-3 md:py-4 md:text-2xl py-2 text-xl resize-none placeholder:text-white`}
              placeholder="Write your message..."
            />
            {errors.message && (
              <p className="text-red-400 text-xs">{errors.message}</p>
            )}
          </FieldWrapper>

          {/* CONSENT CHECKBOX */}
          <div className="flex items-start gap-3 text-sm text-gray-200">
            <input
              id="marketing-consent"
              type="checkbox"
              checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-white/40 bg-black/50"
            />
            <label htmlFor="marketing-consent">
              I agree to receive updates and marketing emails from Reserve
              Financial Services.
            </label>
          </div>

          {success && (
            <div className="mb-6 p-4 rounded-md bg-green-500/20 text-green-300 border border-green-500/30 text-center">
              🎉 Message Sent Successfully!
            </div>
          )}

          <button
            type="submit"
            className="w-full sm:w-auto px-12 py-3 rounded-md bg-yellow-400 text-black font-semibold text-sm hover:bg-yellow-300 shadow-[0_0_25px_rgba(250,204,21,0.6)]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

function FieldWrapper({ label, required, children }) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm text-gray-100">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      {children}
    </div>
  );
}
