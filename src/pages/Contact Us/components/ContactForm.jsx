import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// ---- EmailJS config (reusing your existing service + public key) ----
const EMAILJS_SERVICE_ID = "service_nxaukhv";
const EMAILJS_TEMPLATE_ID = "template_dv3zuqh"; // ← replace with your NEW contact-form template ID
const EMAILJS_PUBLIC_KEY = "ZsgPJ4Y5L7dWqRzmT";

// ---- Country list: ISO code (lowercase, for flag images), dial code, and name ----
const COUNTRIES = [
  { code: "in", dial: "+91", name: "India" },
  { code: "us", dial: "+1", name: "United States" },
  { code: "gb", dial: "+44", name: "United Kingdom" },
  { code: "ca", dial: "+1", name: "Canada" },
  { code: "au", dial: "+61", name: "Australia" },
  { code: "ae", dial: "+971", name: "UAE" },
  { code: "sg", dial: "+65", name: "Singapore" },
  { code: "de", dial: "+49", name: "Germany" },
  { code: "fr", dial: "+33", name: "France" },
  { code: "nl", dial: "+31", name: "Netherlands" },
  { code: "pk", dial: "+92", name: "Pakistan" },
  { code: "bd", dial: "+880", name: "Bangladesh" },
  { code: "np", dial: "+977", name: "Nepal" },
  { code: "lk", dial: "+94", name: "Sri Lanka" },
  { code: "sa", dial: "+966", name: "Saudi Arabia" },
  { code: "jp", dial: "+81", name: "Japan" },
  { code: "cn", dial: "+86", name: "China" },
  { code: "br", dial: "+55", name: "Brazil" },
  { code: "za", dial: "+27", name: "South Africa" },
  { code: "ng", dial: "+234", name: "Nigeria" },
];

// Small helper — renders a real flag image from flagcdn.com for a given country code
const FlagImg = ({ code, className }) => (
  <img
    src={`https://flagcdn.com/w40/${code}.png`}
    srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
    alt=""
    className={className}
  />
);

const ContactForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [country, setCountry] = useState(COUNTRIES[0]); // defaults to India, +91
  const [countryOpen, setCountryOpen] = useState(false);
  const countryRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Auto-dismiss the top toast a few seconds after it appears
  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), 4000);
    return () => clearTimeout(timer);
  }, [showToast]);

  // Close the country dropdown when clicking anywhere outside it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (countryRef.current && !countryRef.current.contains(e.target)) {
        setCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Only letters, spaces, apostrophes, and hyphens allowed (blocks digits as they're typed)
  const updateNameField = (field) => (e) => {
    const filtered = e.target.value.replace(/[^A-Za-z\s'-]/g, "");
    setValues((v) => ({ ...v, [field]: filtered }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Only digits and spaces allowed in the number itself (dial code is handled separately)
  const updatePhoneField = (field) => (e) => {
    const filtered = e.target.value.replace(/[^0-9\s]/g, "");
    setValues((v) => ({ ...v, [field]: filtered }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!values.fullName.trim()) next.fullName = "Full name is required.";
    else if (!/^[A-Za-z\s'-]+$/.test(values.fullName.trim()))
      next.fullName = "Name can only contain letters.";

    if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email))
      next.email = "Enter a valid email address.";

    if (values.phone.trim() && !/^[0-9\s]{6,14}$/.test(values.phone.trim()))
      next.phone = "Phone number can only contain digits.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError("");

    try {
      const fullPhone = values.phone.trim()
        ? `${country.dial} ${values.phone.trim()}`
        : "";

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: values.fullName,
          email: values.email,
          phone: fullPhone,
          subject: values.subject,
          message: values.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setValues({ fullName: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
      setShowToast(true);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setSubmitError("Something went wrong sending your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Top toast notification */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-300 ${
          showToast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-3 bg-[#0F172A] border border-sky-400/40 rounded-2xl px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
          <span className="w-7 h-7 rounded-full bg-sky-400/15 flex items-center justify-center shrink-0">
            <span className="text-sky-400 text-sm">✓</span>
          </span>
          <div>
            <p className="text-white text-sm font-semibold">Message sent!</p>
            <p className="text-[#E7E8EA] text-xs">We'll get back to you soon.</p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            aria-label="Dismiss"
            className="ml-2 text-slate-400 hover:text-white transition-colors text-lg leading-none"
          >
            ×
          </button>
        </div>
      </div>

      <div className="order-1 lg:order-2 mt-[-40px] md:mt-0">
        <div className="border border-[#BDBDBDB0] bg-white/10 rounded-2xl p-5 md:p-6">
          <form onSubmit={handleFormSubmit} className="space-y-1.4 mb-[-5px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[#E7E8EA] text-xs md:text-sm font-semibold mb-1">Full Name *</label>
                <input
                  type="text"
                  value={values.fullName}
                  onChange={updateNameField("fullName")}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-[#0a1220]/80 border border-white/10 rounded-2xl px-4 py-2 text-white text-xs md:text-sm focus:outline-none focus:border-sky-500/40 transition-colors"
                />
                {errors.fullName && <p className="mt-1 text-[11px] text-red-400">{errors.fullName}</p>}
              </div>
              <div>
                <label className="block text-[#E7E8EA] text-xs md:text-sm font-semibold mb-1">Email Address</label>
                <input
                  type="email"
                  value={values.email}
                  onChange={update("email")}
                  placeholder="Enter your Email"
                  className="w-full bg-[#0a1220]/80 border border-white/10 rounded-2xl px-4 py-2 text-white text-xs md:text-sm focus:outline-none focus:border-sky-500/40 transition-colors"
                />
                {errors.email && <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-[#E7E8EA] text-xs md:text-sm font-semibold mb-1">Phone Number</label>
              <div className="flex items-center bg-[#0a1220]/80 border border-white/10 rounded-2xl focus-within:border-sky-500/40 transition-colors">
                {/* Custom flag-only dropdown */}
                <div className="relative shrink-0" ref={countryRef}>
                  <button
                    type="button"
                    onClick={() => setCountryOpen((o) => !o)}
                    aria-label="Select country"
                    className="flex items-center gap-1.5 pl-3 pr-2 py-2 border-r border-white/10 focus:outline-none"
                  >
                    <FlagImg code={country.code} className="w-5 h-[14px] object-cover rounded-[2px] shrink-0" />
                    <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {countryOpen && (
                    <ul className="absolute z-20 mt-1 left-0 w-52 max-h-60 overflow-y-auto bg-[#0a1220] border border-white/10 rounded-xl shadow-lg py-1">
                      {COUNTRIES.map((c) => (
                        <li key={c.code}>
                          <button
                            type="button"
                            onClick={() => {
                              setCountry(c);
                              setCountryOpen(false);
                            }}
                            className={`w-full flex items-center gap-2 px-3 py-2 text-left text-xs md:text-sm hover:bg-white/10 transition-colors ${
                              country.code === c.code ? "bg-white/5 text-sky-400" : "text-white"
                            }`}
                          >
                            <FlagImg code={c.code} className="w-5 h-[14px] object-cover rounded-[2px] shrink-0" />
                            <span className="flex-1">{c.name}</span>
                            <span className="text-slate-400">{c.dial}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <input
                  type="tel"
                  value={values.phone}
                  onChange={updatePhoneField("phone")}
                  placeholder="Phone Number"
                  className="w-full bg-transparent px-4 py-2 text-white text-xs md:text-sm focus:outline-none"
                />
              </div>
              {errors.phone && <p className="mt-1 text-[11px] text-red-400">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-[#E7E8EA] text-xs md:text-sm font-semibold mb-1">Subject</label>
              <input
                type="text"
                value={values.subject}
                onChange={update("subject")}
                placeholder="Enter Subject"
                className="w-full bg-[#0a1220]/80 border border-white/10 rounded-2xl px-4 py-2 text-white text-xs md:text-sm focus:outline-none focus:border-sky-500/40 transition-colors"
              />
            </div>

            <div className="mb-2 mt-1">
              <label className="block text-[#E7E8EA] text-xs md:text-sm font-semibold mb-1">Message</label>
              <textarea
                rows="2"
                value={values.message}
                onChange={update("message")}
                placeholder="Type your message here...."
                className="align-top w-full bg-[#0a1220]/80 border border-white/10 rounded-2xl px-4 pt-3 pb-8 text-white text-xs md:text-sm focus:outline-none focus:border-sky-500/40 transition-colors resize-none"
              ></textarea>
            </div>

            {submitError && (
              <p className="text-[12px] text-red-400 text-center">{submitError}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2 mt-4 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-white font-semibold rounded-4xl hover:opacity-95 transition-opacity text-sm shadow-[0_4px_20px_rgba(14,165,233,0.2)] disabled:opacity-60"
            >
              {submitting ? "SENDING..." : "Sent Message"}
            </button>
          </form>
        </div>

        {/* Connect with us */}
        <div className="mt-3 pl-2">
          <p className="text-white text-lg font-bold mb-2">Connect with us</p>
          <div className="flex items-center gap-12">
            <a href="https://www.linkedin.com/company/jawam-infotech/about/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#050f1c] hover:bg-[#0A66C2] hover:text-white transition-all shadow-md">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a  href="https://www.facebook.com/share/SQtTtnasGXD86bEz/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#050f1c] hover:bg-[#1877F2] hover:text-white transition-all shadow-md">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://x.com/jawam23769?t=V5WOApqYT3XVQ_nFJKah9w&s=08" target="_blank" rel="noopener noreferrer"  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#050f1c] hover:bg-black hover:text-white transition-all shadow-md">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.instagram.com/jawam_infotech/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#050f1c] hover:bg-gradient-to-tr hover:from-[#FEDA75] hover:via-[#D62976] hover:to-[#4F5BD5] hover:text-white transition-all shadow-md">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;