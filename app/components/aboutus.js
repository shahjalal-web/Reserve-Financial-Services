// components/contactform.js
"use client";

import { useState, useRef, useEffect } from "react";
import { DM_Sans, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const COUNTRIES = [
  { name: "Afghanistan", dialCode: "+93", flag: "🇦🇫" },
  { name: "Albania", dialCode: "+355", flag: "🇦🇱" },
  { name: "Algeria", dialCode: "+213", flag: "🇩🇿" },
  { name: "Andorra", dialCode: "+376", flag: "🇦🇩" },
  { name: "Angola", dialCode: "+244", flag: "🇦🇴" },
  { name: "Argentina", dialCode: "+54", flag: "🇦🇷" },
  { name: "Armenia", dialCode: "+374", flag: "🇦🇲" },
  { name: "Australia", dialCode: "+61", flag: "🇦🇺" },
  { name: "Austria", dialCode: "+43", flag: "🇦🇹" },
  { name: "Azerbaijan", dialCode: "+994", flag: "🇦🇿" },
  { name: "Bahamas", dialCode: "+1-242", flag: "🇧🇸" },
  { name: "Bahrain", dialCode: "+973", flag: "🇧🇭" },
  { name: "Bangladesh", dialCode: "+880", flag: "🇧🇩" },
  { name: "Belgium", dialCode: "+32", flag: "🇧🇪" },
  { name: "Brazil", dialCode: "+55", flag: "🇧🇷" },
  { name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { name: "China", dialCode: "+86", flag: "🇨🇳" },
  { name: "France", dialCode: "+33", flag: "🇫🇷" },
  { name: "Germany", dialCode: "+49", flag: "🇩🇪" },
  { name: "India", dialCode: "+91", flag: "🇮🇳" },
  { name: "Italy", dialCode: "+39", flag: "🇮🇹" },
  { name: "Japan", dialCode: "+81", flag: "🇯🇵" },
  { name: "Malaysia", dialCode: "+60", flag: "🇲🇾" },
  { name: "Nepal", dialCode: "+977", flag: "🇳🇵" },
  { name: "Netherlands", dialCode: "+31", flag: "🇳🇱" },
  { name: "Pakistan", dialCode: "+92", flag: "🇵🇰" },
  { name: "Saudi Arabia", dialCode: "+966", flag: "🇸🇦" },
  { name: "Singapore", dialCode: "+65", flag: "🇸🇬" },
  { name: "South Korea", dialCode: "+82", flag: "🇰🇷" },
  { name: "Spain", dialCode: "+34", flag: "🇪🇸" },
  { name: "Sri Lanka", dialCode: "+94", flag: "🇱🇰" },
  { name: "Sweden", dialCode: "+46", flag: "🇸🇪" },
  { name: "Switzerland", dialCode: "+41", flag: "🇨🇭" },
  { name: "Thailand", dialCode: "+66", flag: "🇹🇭" },
  { name: "Turkey", dialCode: "+90", flag: "🇹🇷" },
  { name: "United Arab Emirates", dialCode: "+971", flag: "🇦🇪" },
  { name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { name: "United States", dialCode: "+1", flag: "🇺🇸" },
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
      className="relative w-full text-white px-4 md:px-8 lg:px-16 py-20 md:py-24 bg-[url('/images/bg-form-png.png')] bg-top bg-cover bg-no-repeat"
    >
      {/* Emoji font fix */}
      <style jsx global>{`
        .emoji {
          font-family: "Apple Color Emoji", "Segoe UI Emoji",
            "Noto Color Emoji", sans-serif !important;
        }
      `}</style>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 space-y-2">
          <h2 className={`${manrope.className} text-3xl md:text-[70px] font-semibold`}>
            Speak with <span className="text-[#FBF705]">Our Team</span>
          </h2>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
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
                } rounded-md px-3 py-3 text-sm placeholder:text-white`}
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
                onChange={(e) =>
                  setForm({ ...form, lastName: e.target.value })
                }
                className={`w-full bg-black/40 border ${
                  errors.lastName ? "border-red-400" : "border-white/20"
                } rounded-md px-3 py-3 text-sm placeholder:text-white`}
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
              } rounded-md px-3 py-3 text-sm placeholder:text-white`}
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-red-400 text-xs">{errors.email}</p>
            )}
          </FieldWrapper>

          {/* PHONE + COUNTRY SELECT */}
          <FieldWrapper>
            <div className="flex items-center gap-2 bg-black/40 border border-white/20 rounded-md px-2 py-2">
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-2 px-2 py-1 rounded-md bg-black/40 border border-white/20 text-sm"
                >
                  <span className="text-lg emoji">{selectedCountry.flag}</span>
                  <span className="text-sm text-gray-100">
                    {selectedCountry.dialCode}
                  </span>
                  <span className="text-xs text-gray-400">▼</span>
                </button>

                {isOpen && (
                  <div className="absolute z-30 mt-2 w-64 rounded-lg bg-black/90 border border-white/15 shadow-xl">
                    <div className="p-2 border-b border-white/10">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search country or code"
                        className="w-full bg-black/60 border border-white/15 rounded-md px-2 py-1.5 text-xs text-gray-100"
                      />
                    </div>

                    <div className="max-h-60 overflow-y-auto">
                      {filteredCountries.map((country) => (
                        <button
                          key={country.name}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(country);
                            setIsOpen(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-yellow-400/10"
                        >
                          <span className="text-lg emoji">{country.flag}</span>
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

              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="flex-1 bg-transparent text-sm px-2 py-1.5 placeholder:text-white"
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
              } rounded-md px-3 py-3 text-sm resize-none placeholder:text-white`}
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
              onChange={(e) =>
                setForm({ ...form, consent: e.target.checked })
              }
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
