// components/contactform.js
"use client";

import { useState, useRef, useEffect } from "react";
import { DM_Sans, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500"], // choose what you need
  display: "swap",
});

// const dm = DM_Sans({
//   subsets: ["latin"],
//   weight: ["500"], // choose what you need
//   display: "swap",
// });
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
  { name: "Belarus", dialCode: "+375", flag: "🇧🇾" },
  { name: "Belgium", dialCode: "+32", flag: "🇧🇪" },
  { name: "Belize", dialCode: "+501", flag: "🇧🇿" },
  { name: "Benin", dialCode: "+229", flag: "🇧🇯" },
  { name: "Bhutan", dialCode: "+975", flag: "🇧🇹" },
  { name: "Bolivia", dialCode: "+591", flag: "🇧🇴" },
  { name: "Bosnia and Herzegovina", dialCode: "+387", flag: "🇧🇦" },
  { name: "Botswana", dialCode: "+267", flag: "🇧🇼" },
  { name: "Brazil", dialCode: "+55", flag: "🇧🇷" },
  { name: "Brunei", dialCode: "+673", flag: "🇧🇳" },
  { name: "Bulgaria", dialCode: "+359", flag: "🇧🇬" },
  { name: "Burkina Faso", dialCode: "+226", flag: "🇧🇫" },
  { name: "Burundi", dialCode: "+257", flag: "🇧🇮" },
  { name: "Cambodia", dialCode: "+855", flag: "🇰🇭" },
  { name: "Cameroon", dialCode: "+237", flag: "🇨🇲" },
  { name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { name: "Cape Verde", dialCode: "+238", flag: "🇨🇻" },
  { name: "Central African Republic", dialCode: "+236", flag: "🇨🇫" },
  { name: "Chad", dialCode: "+235", flag: "🇹🇩" },
  { name: "Chile", dialCode: "+56", flag: "🇨🇱" },
  { name: "China", dialCode: "+86", flag: "🇨🇳" },
  { name: "Colombia", dialCode: "+57", flag: "🇨🇴" },
  { name: "Comoros", dialCode: "+269", flag: "🇰🇲" },
  { name: "Costa Rica", dialCode: "+506", flag: "🇨🇷" },
  { name: "Croatia", dialCode: "+385", flag: "🇭🇷" },
  { name: "Cuba", dialCode: "+53", flag: "🇨🇺" },
  { name: "Cyprus", dialCode: "+357", flag: "🇨🇾" },
  { name: "Czech Republic", dialCode: "+420", flag: "🇨🇿" },
  { name: "Denmark", dialCode: "+45", flag: "🇩🇰" },
  { name: "Dominican Republic", dialCode: "+1-809", flag: "🇩🇴" },
  { name: "Ecuador", dialCode: "+593", flag: "🇪🇨" },
  { name: "Egypt", dialCode: "+20", flag: "🇪🇬" },
  { name: "El Salvador", dialCode: "+503", flag: "🇸🇻" },
  { name: "Estonia", dialCode: "+372", flag: "🇪🇪" },
  { name: "Ethiopia", dialCode: "+251", flag: "🇪🇹" },
  { name: "Fiji", dialCode: "+679", flag: "🇫🇯" },
  { name: "Finland", dialCode: "+358", flag: "🇫🇮" },
  { name: "France", dialCode: "+33", flag: "🇫🇷" },
  { name: "Gabon", dialCode: "+241", flag: "🇬🇦" },
  { name: "Gambia", dialCode: "+220", flag: "🇬🇲" },
  { name: "Georgia", dialCode: "+995", flag: "🇬🇪" },
  { name: "Germany", dialCode: "+49", flag: "🇩🇪" },
  { name: "Ghana", dialCode: "+233", flag: "🇬🇭" },
  { name: "Greece", dialCode: "+30", flag: "🇬🇷" },
  { name: "Guatemala", dialCode: "+502", flag: "🇬🇹" },
  { name: "Honduras", dialCode: "+504", flag: "🇭🇳" },
  { name: "Hong Kong", dialCode: "+852", flag: "🇭🇰" },
  { name: "Hungary", dialCode: "+36", flag: "🇭🇺" },
  { name: "Iceland", dialCode: "+354", flag: "🇮🇸" },
  { name: "India", dialCode: "+91", flag: "🇮🇳" },
  { name: "Indonesia", dialCode: "+62", flag: "🇮🇩" },
  { name: "Iran", dialCode: "+98", flag: "🇮🇷" },
  { name: "Iraq", dialCode: "+964", flag: "🇮🇶" },
  { name: "Ireland", dialCode: "+353", flag: "🇮🇪" },
  { name: "Israel", dialCode: "+972", flag: "🇮🇱" },
  { name: "Italy", dialCode: "+39", flag: "🇮🇹" },
  { name: "Japan", dialCode: "+81", flag: "🇯🇵" },
  { name: "Jordan", dialCode: "+962", flag: "🇯🇴" },
  { name: "Kenya", dialCode: "+254", flag: "🇰🇪" },
  { name: "Kuwait", dialCode: "+965", flag: "🇰🇼" },
  { name: "Latvia", dialCode: "+371", flag: "🇱🇻" },
  { name: "Lebanon", dialCode: "+961", flag: "🇱🇧" },
  { name: "Libya", dialCode: "+218", flag: "🇱🇾" },
  { name: "Lithuania", dialCode: "+370", flag: "🇱🇹" },
  { name: "Luxembourg", dialCode: "+352", flag: "🇱🇺" },
  { name: "Malaysia", dialCode: "+60", flag: "🇲🇾" },
  { name: "Maldives", dialCode: "+960", flag: "🇲🇻" },
  { name: "Malta", dialCode: "+356", flag: "🇲🇹" },
  { name: "Mexico", dialCode: "+52", flag: "🇲🇽" },
  { name: "Mongolia", dialCode: "+976", flag: "🇲🇳" },
  { name: "Morocco", dialCode: "+212", flag: "🇲🇦" },
  { name: "Myanmar", dialCode: "+95", flag: "🇲🇲" },
  { name: "Nepal", dialCode: "+977", flag: "🇳🇵" },
  { name: "Netherlands", dialCode: "+31", flag: "🇳🇱" },
  { name: "New Zealand", dialCode: "+64", flag: "🇳🇿" },
  { name: "Nigeria", dialCode: "+234", flag: "🇳🇬" },
  { name: "Norway", dialCode: "+47", flag: "🇳🇴" },
  { name: "Oman", dialCode: "+968", flag: "🇴🇲" },
  { name: "Pakistan", dialCode: "+92", flag: "🇵🇰" },
  { name: "Panama", dialCode: "+507", flag: "🇵🇦" },
  { name: "Peru", dialCode: "+51", flag: "🇵🇪" },
  { name: "Philippines", dialCode: "+63", flag: "🇵🇭" },
  { name: "Poland", dialCode: "+48", flag: "🇵🇱" },
  { name: "Portugal", dialCode: "+351", flag: "🇵🇹" },
  { name: "Qatar", dialCode: "+974", flag: "🇶🇦" },
  { name: "Romania", dialCode: "+40", flag: "🇷🇴" },
  { name: "Russia", dialCode: "+7", flag: "🇷🇺" },
  { name: "Saudi Arabia", dialCode: "+966", flag: "🇸🇦" },
  { name: "Serbia", dialCode: "+381", flag: "🇷🇸" },
  { name: "Singapore", dialCode: "+65", flag: "🇸🇬" },
  { name: "South Africa", dialCode: "+27", flag: "🇿🇦" },
  { name: "South Korea", dialCode: "+82", flag: "🇰🇷" },
  { name: "Spain", dialCode: "+34", flag: "🇪🇸" },
  { name: "Sri Lanka", dialCode: "+94", flag: "🇱🇰" },
  { name: "Sweden", dialCode: "+46", flag: "🇸🇪" },
  { name: "Switzerland", dialCode: "+41", flag: "🇨🇭" },
  { name: "Taiwan", dialCode: "+886", flag: "🇹🇼" },
  { name: "Tanzania", dialCode: "+255", flag: "🇹🇿" },
  { name: "Thailand", dialCode: "+66", flag: "🇹🇭" },
  { name: "Turkey", dialCode: "+90", flag: "🇹🇷" },
  { name: "Uganda", dialCode: "+256", flag: "🇺🇬" },
  { name: "Ukraine", dialCode: "+380", flag: "🇺🇦" },
  { name: "United Arab Emirates", dialCode: "+971", flag: "🇦🇪" },
  { name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { name: "United States", dialCode: "+1", flag: "🇺🇸" },
  { name: "Uruguay", dialCode: "+598", flag: "🇺🇾" },
  { name: "Uzbekistan", dialCode: "+998", flag: "🇺🇿" },
  { name: "Venezuela", dialCode: "+58", flag: "🇻🇪" },
  { name: "Vietnam", dialCode: "+84", flag: "🇻🇳" },
  { name: "Zambia", dialCode: "+260", flag: "🇿🇲" },
  { name: "Zimbabwe", dialCode: "+263", flag: "🇿🇼" },
];

export default function ContactForm() {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  // form values
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  // validation state
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // filter dropdown by search
  const filteredCountries = COUNTRIES.filter((country) =>
    (country.name + country.dialCode)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // validation rules
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
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 space-y-2">
          <h2 className={`${manrope.className} text-3xl md:text-[70px] font-semibold`}>
            Speak with <span className="text-[#FBF705]">Our Team</span>
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* First + Last Name */}
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
                } rounded-md px-3 py-3 text-sm focus:outline-none focus:border-yellow-400 placeholder:text-white`}
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
                } rounded-md px-3 py-3 text-sm focus:outline-none focus:border-yellow-400 placeholder:text-white`}
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-red-400 text-xs">{errors.lastName}</p>
              )}
            </FieldWrapper>
          </div>

          {/* Email */}
          <FieldWrapper>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`w-full bg-black/40 border ${
                errors.email ? "border-red-400" : "border-white/20"
              } rounded-md px-3 py-3 text-sm focus:outline-none focus:border-yellow-400 placeholder:text-white`}
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-red-400 text-xs">{errors.email}</p>
            )}
          </FieldWrapper>

          {/* Phone with country selector */}
          <FieldWrapper>
            <div className="flex items-center gap-2 bg-black/40 border border-white/20 rounded-md px-2 py-2 focus-within:border-yellow-400 focus-within:bg-black/60">
              {/* Country selector */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="flex items-center gap-2 px-2 py-1 rounded-md bg-black/40 border border-white/20 text-xs sm:text-sm hover:border-yellow-400 transition-colors"
                >
                  <span className="text-lg">{selectedCountry.flag}</span>
                  <span className="text-xs sm:text-sm text-gray-100">
                    {selectedCountry.dialCode}
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-400">
                    ▼
                  </span>
                </button>

                {/* dropdown */}
                {isOpen && (
                  <div className="absolute z-30 mt-2 w-64 rounded-lg bg-black/90 border border-white/15 shadow-xl">
                    {/* search input */}
                    <div className="p-2 border-b border-white/10">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search country or code"
                        className="w-full bg-black/60 border border-white/15 rounded-md px-2 py-1.5 text-xs text-gray-100 placeholder:text-gray-500 focus:outline-none focus:border-yellow-400"
                      />
                    </div>

                    {/* list */}
                    <div className="max-h-60 overflow-y-auto custom-scrollbar">
                      {filteredCountries.length === 0 && (
                        <div className="px-3 py-2 text-xs text-gray-400">
                          No matches
                        </div>
                      )}

                      {filteredCountries.map((country) => (
                        <button
                          type="button"
                          key={country.name}
                          onClick={() => {
                            setSelectedCountry(country);
                            setIsOpen(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 text-xs sm:text-sm text-left hover:bg-yellow-400/10"
                        >
                          <span className="text-lg">{country.flag}</span>
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

              {/* Phone field */}
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="flex-1 bg-transparent text-sm px-2 py-1.5 focus:outline-none placeholder:text-white"
                placeholder="Phone Number"
              />
            </div>
            {errors.phone && (
              <p className="text-red-400 text-xs pt-1">{errors.phone}</p>
            )}
          </FieldWrapper>

          {/* Message */}
          <FieldWrapper>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`w-full bg-black/40 border ${
                errors.message ? "border-red-400" : "border-cyan-400/60"
              } rounded-md px-3 py-3 text-sm focus:outline-none focus:border-yellow-400 resize-none placeholder:text-white`}
              placeholder="Write your message..."
            />
            {errors.message && (
              <p className="text-red-400 text-xs">{errors.message}</p>
            )}
          </FieldWrapper>

          {/* Checkbox */}
          <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-200">
            <input
              id="marketing-consent"
              type="checkbox"
              checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border border-white/40 bg-black/50 text-yellow-400 focus:ring-0"
            />
            <label htmlFor="marketing-consent" className="leading-relaxed">
              I agree to receive updates and marketing emails from Reserve
              Financial Services.
            </label>
          </div>

          {/* success message */}
          {success && (
            <div className="mb-6 p-4 rounded-md bg-green-500/20 text-green-300 text-center border border-green-500/30">
              🎉 Message Sent Successfully!
            </div>
          )}

          {/* Submit button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-12 py-3 rounded-md bg-yellow-400 text-black font-semibold text-sm sm:text-base hover:bg-yellow-300 transition shadow-[0_0_25px_rgba(250,204,21,0.6)]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* Wrapper for label + required indicator */
function FieldWrapper({ label, required, children }) {
  return (
    <div className="space-y-1">
      <label className="block text-xs sm:text-sm text-gray-100">
        {label}{" "}
        {required && <span className="text-red-400 align-middle">*</span>}
      </label>
      {children}
    </div>
  );
}
