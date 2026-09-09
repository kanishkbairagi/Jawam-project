import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { sendUniversalEmail } from "../../../config/emailjs";

const services = [
  "Software Development",
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Artificial Intelligence",
  "DevOps and Cloud",
  "Custom Software",
  "Third-party Integration",
  "QA and Testing",
  "IT Staff Augmentation",
];

const budgets = [
  "< $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000+",
];

const timelines = [
  "< 1 month",
  "1 - 3 months",
  "3 - 6 months",
  "6+ months",
];

const DEFAULT_COUNTRIES = [
  { name: "United States", isoCode: "US", phonecode: "1" },
  { name: "India", isoCode: "IN", phonecode: "91" },
  { name: "United Kingdom", isoCode: "GB", phonecode: "44" },
  { name: "Canada", isoCode: "CA", phonecode: "1" },
  { name: "Australia", isoCode: "AU", phonecode: "61" },
  { name: "Germany", isoCode: "DE", phonecode: "49" },
  { name: "United Arab Emirates", isoCode: "AE", phonecode: "971" },
  { name: "Singapore", isoCode: "SG", phonecode: "65" },
];

// Reliable cross-platform flag icon — emoji flags render as plain text
// (e.g. "AF") on Windows since it lacks the flag emoji font. Image-based
// flags from flagcdn.com look identical on every OS/browser.
const flagUrl = (isoCode) =>
  `https://flagcdn.com/24x18/${(isoCode || "").toLowerCase()}.png`;

function FlagIcon({ isoCode, className = "w-5 h-3.5" }) {
  if (!isoCode) return null;
  return (
    <img
      src={flagUrl(isoCode)}
      alt=""
      className={`${className} rounded-[2px] object-cover shrink-0 shadow-sm`}
      loading="lazy"
    />
  );
}

// Generic type-and-filter combobox: user can always type freely,
// suggestions are just a helper, not a restriction. Used for Country,
// City, Service, Budget, and Timeline — anywhere the person should be able
// to pick a suggestion OR type something of their own.
// The dropdown list is rendered through a portal, positioned with fixed
// viewport coordinates measured from the input — this keeps it from being
// clipped by (or scrolling awkwardly inside) the parent scrollable form,
// and from visually overlapping the fields below it.
function ComboBox({ value, onChange, options, getLabel, placeholder, wrapperClassName, inputClassName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 });
  const inputRef = useRef(null);

  const filtered =
    value.trim() === ""
      ? options.slice(0, 8)
      : options
          .filter((o) => getLabel(o).toLowerCase().includes(value.trim().toLowerCase()))
          .slice(0, 8);

  const openDropdown = () => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setPos({ top: rect.bottom + 6, left: rect.left, width: rect.width });
    }
    setIsOpen(true);
  };

  // Close (rather than reposition) on scroll/resize while open — a fixed
  // element won't track scrolling content underneath it, so keeping it
  // pinned to a stale position would be worse than just closing it.
  useEffect(() => {
    if (!isOpen) return;
    const close = () => setIsOpen(false);
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
  }, [isOpen]);

  return (
    <div className={`relative ${wrapperClassName || ""}`}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
          openDropdown();
        }}
        onFocus={openDropdown}
        onBlur={() => setTimeout(() => setIsOpen(false), 150)}
        className={inputClassName}
      />
      {isOpen &&
        filtered.length > 0 &&
        createPortal(
          <ul
            className="fixed z-[99999] max-h-52 overflow-y-auto bg-[#0F172A] border border-[#BDBDBDB0] rounded-xl shadow-2xl"
            style={{ top: pos.top, left: pos.left, width: pos.width }}
          >
            {filtered.map((opt, i) => (
              <li
                key={`${getLabel(opt)}-${i}`}
                onMouseDown={() => {
                  onChange(getLabel(opt));
                  setIsOpen(false);
                }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white hover:bg-sky-400/20 cursor-pointer"
              >
                {getLabel(opt)}
              </li>
            ))}
          </ul>,
          document.body
        )}
    </div>
  );
}

const InquiryForm = ({ isOpen, onClose }) => {
  const [values, setValues] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const [countryIso, setCountryIso] = useState("");
  const [phoneCountryIso, setPhoneCountryIso] = useState("US");
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const [phoneCountrySearch, setPhoneCountrySearch] = useState("");
  const [phoneDropdownPos, setPhoneDropdownPos] = useState({ top: 0, left: 0, width: 256 });
  const [phoneFieldFocused, setPhoneFieldFocused] = useState(false);
  const [errors, setErrors] = useState({});
  const [hasExisting, setHasExisting] = useState(null);
  const [isNotRobot, setIsNotRobot] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [countriesList, setCountriesList] = useState(DEFAULT_COUNTRIES);
  const [cityHelper, setCityHelper] = useState(null);

  const phoneButtonRef = useRef(null);
  const formScrollRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    import("country-state-city").then((mod) => {
      if (mod?.Country?.getAllCountries) {
        setCountriesList(mod.Country.getAllCountries());
      }
      if (mod?.City) {
        setCityHelper(mod.City);
      }
    }).catch(() => {});
  }, [isOpen]);

  // Close the phone-country dropdown whenever the form scrolls, since it's
  // rendered via a portal with fixed viewport coordinates and won't move
  // with the scrolling content underneath it.
  useEffect(() => {
    const el = formScrollRef.current;
    if (!el) return;
    const handleScroll = () => setPhoneDropdownOpen(false);
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isOpen) return null;

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Simple setter for ComboBox-driven fields (service/budget/timeline),
  // which pass the new string value directly rather than an event.
  const updateComboField = (field) => (val) => {
    setValues((v) => ({ ...v, [field]: val }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Only letters, spaces, apostrophes, and hyphens; capped at 50 chars
  const updateNameField = (field) => (e) => {
    const filtered = e.target.value.replace(/[^A-Za-z\s'-]/g, "").slice(0, 50);
    setValues((v) => ({ ...v, [field]: filtered }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Digits only, capped at 10 (country dial code is handled separately)
  const updatePhoneField = (field) => (e) => {
    const filtered = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    setValues((v) => ({ ...v, [field]: filtered }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const updateCountry = (val) => {
    setValues((v) => ({ ...v, country: val, city: "" }));
    const match = countriesList.find((c) => c.name.toLowerCase() === val.trim().toLowerCase());
    setCountryIso(match ? match.isoCode : "");
    if (errors.country) setErrors((prev) => ({ ...prev, country: "" }));
  };

  const updateCity = (val) => {
    setValues((v) => ({ ...v, city: val }));
  };

  const citiesForSelectedCountry = countryIso && cityHelper ? cityHelper.getCitiesOfCountry(countryIso) || [] : [];

  const selectedPhoneCountry =
    countriesList.find((c) => c.isoCode === phoneCountryIso) ||
    DEFAULT_COUNTRIES[0];

  // Compute exact viewport coordinates of the dial-code button so the
  // dropdown (rendered in a portal) can be positioned precisely beneath it,
  // escaping every parent's overflow/scroll clipping.
  const togglePhoneDropdown = () => {
    if (!phoneDropdownOpen && phoneButtonRef.current) {
      const rect = phoneButtonRef.current.getBoundingClientRect();
      setPhoneDropdownPos({
        top: rect.bottom + 6,
        left: rect.left,
        width: Math.max(rect.width, 264),
      });
    }
    setPhoneDropdownOpen((o) => !o);
  };

  const validate = () => {
    const next = {};

    if (!values.fullName.trim()) next.fullName = "Full name is required.";
    else if (!/^[A-Za-z\s'-]+$/.test(values.fullName.trim()))
      next.fullName = "Name can only contain letters.";

    if (!values.email.trim()) next.email = "Work email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email.trim()))
      next.email = "Enter a valid email address.";

    if (!values.phone.trim()) next.phone = "Phone number is required.";
    else if (!/^[0-9]{7,10}$/.test(values.phone.trim()))
      next.phone = "Enter a valid phone number (7–10 digits).";

    if (!values.service.trim()) next.service = "Please select or enter a service.";

    if (!values.description.trim()) next.description = "Project description is required.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleClose = () => {
    setValues({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      service: "",
      budget: "",
      timeline: "",
      description: "",
    });
    setCountryIso("");
    setPhoneCountryIso("US");
    setPhoneDropdownOpen(false);
    setErrors({});
    setHasExisting(null);
    setIsNotRobot(false);
    setSubmitError("");
    setSubmitted(false);
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (!isNotRobot) {
      alert("Please confirm that you are not a robot.");
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    const fullPhone = `+${selectedPhoneCountry?.phonecode || ""} ${values.phone}`;

try {
  await sendUniversalEmail({
    form_type: "Project Inquiry",
    is_work: true,
    full_name: values.fullName.trim(),
    company_name: values.company.trim(),
    email: values.email.trim(),
    phone: fullPhone,
    country: values.country.trim(),
    city: values.city.trim(),
    service: values.service.trim(),
    budget: values.budget.trim(),
    timeline: values.timeline.trim(),
    existing_website: hasExisting === "yes" ? "Yes" : "No",
    project_description: values.description.trim(),
    reply_to: values.email.trim(),
  });
  setSubmitted(true);
} catch (err) {
  console.error("EmailJS send failed:", err);
  setSubmitError("Something went wrong sending your inquiry. Please try again.");
} finally {
  setSubmitting(false);
}
  };

  return (
    <div
      className="inquiry-backdrop-anim fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-3 sm:px-4"
      onClick={handleClose}
    >
      <style>{`
        @keyframes inquiry-backdrop-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes inquiry-modal-pop {
          from { opacity: 0; transform: scale(0.94) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes inquiry-field-rise {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes inquiry-shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-4px); }
          40% { transform: translateX(4px); }
          60% { transform: translateX(-3px); }
          80% { transform: translateX(3px); }
        }
        @keyframes inquiry-error-in {
          from { opacity: 0; transform: translateY(-3px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes inquiry-success-pop {
          0% { opacity: 0; transform: scale(0.9); }
          60% { opacity: 1; transform: scale(1.03); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes inquiry-check-draw {
          from { stroke-dashoffset: 20; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes inquiry-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes inquiry-dropdown-in {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .inquiry-backdrop-anim {
          animation: inquiry-backdrop-fade 0.25s ease-out both;
        }
        .inquiry-modal-anim {
          opacity: 0;
          animation: inquiry-modal-pop 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .inquiry-field-rise {
          opacity: 0;
          animation: inquiry-field-rise 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .inquiry-shake {
          animation: inquiry-shake 0.4s ease-in-out;
        }
        .inquiry-error-text {
          animation: inquiry-error-in 0.2s ease-out both;
        }
        .inquiry-success-pop {
          animation: inquiry-success-pop 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .inquiry-check-draw {
          stroke-dasharray: 20;
          stroke-dashoffset: 20;
          animation: inquiry-check-draw 0.35s ease-out 0.05s forwards;
        }
        .inquiry-spinner {
          animation: inquiry-spin 0.7s linear infinite;
        }
        .inquiry-dropdown-portal {
          animation: inquiry-dropdown-in 0.15s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .inquiry-backdrop-anim, .inquiry-modal-anim, .inquiry-field-rise,
          .inquiry-shake, .inquiry-error-text, .inquiry-success-pop,
          .inquiry-check-draw, .inquiry-spinner, .inquiry-dropdown-portal {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>

      {/* Modal */}
      <div
        className="inquiry-modal-anim bg-[#0F172A] border border-[#BDBDBDB0] rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3.5 sm:py-5 border-b border-[#BDBDBDB0] shrink-0">
          <h2 className="text-base sm:text-xl md:text-2xl font-bold text-sky-400">
            Client Project Inquiry Form
          </h2>

          <button
            type="button"
            onClick={handleClose}
            className="text-slate-400 hover:text-white text-xl sm:text-2xl leading-none transition-colors hover:rotate-90 duration-300"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {submitted ? (
          <div className="inquiry-success-pop px-4 sm:px-6 md:px-10 py-10 sm:py-16 text-center">
            <div className="mx-auto mb-4 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-sky-400/15 flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path className="inquiry-check-draw" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">Inquiry Sent!</h3>
            <p className="text-xs sm:text-sm text-[#E7E8EA]">
              Thanks for reaching out. Our team will get back to you shortly.
            </p>
          </div>
        ) : (
          /* Content */
          <form
            ref={formScrollRef}
            onSubmit={handleSubmit}
            noValidate
            className="overflow-y-auto px-4 sm:px-6 md:px-10 py-4 sm:py-6 space-y-3 sm:space-y-4"
          >
            {/* Full Name */}
            <div className="inquiry-field-rise" style={{ animationDelay: "0ms" }}>
              <input
                type="text"
                placeholder="Full Name *"
                value={values.fullName}
                onChange={updateNameField("fullName")}
                maxLength={50}
                className={`w-full bg-white/5 border border-[#BDBDBDB0] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all ${
                  errors.fullName ? "inquiry-shake ring-1 ring-red-400" : ""
                }`}
              />
              {errors.fullName && <p className="inquiry-error-text mt-1 text-[10px] sm:text-[11px] text-red-400">{errors.fullName}</p>}
            </div>

            {/* Company */}
            <input
              type="text"
              placeholder="Company Name"
              value={values.company}
              onChange={updateNameField("company")}
              maxLength={50}
              className="inquiry-field-rise w-full bg-white/5 border border-[#BDBDBDB0] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
              style={{ animationDelay: "40ms" }}
            />

            {/* Email + Phone */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 inquiry-field-rise" style={{ animationDelay: "80ms" }}>
              <div className="w-full sm:w-1/2">
                <input
                  type="email"
                  placeholder="Work Email *"
                  value={values.email}
                  onChange={update("email")}
                  className={`w-full bg-white/5 border border-[#BDBDBDB0] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all ${
                    errors.email ? "inquiry-shake ring-1 ring-red-400" : ""
                  }`}
                />
                {errors.email && <p className="inquiry-error-text mt-1 text-[10px] sm:text-[11px] text-red-400">{errors.email}</p>}
              </div>

              {/* Merged flag + dial-code + phone number as ONE unified field */}
              <div className="w-full sm:w-1/2">
                <div
                  className={`flex items-stretch bg-white/5 border rounded-lg sm:rounded-xl overflow-visible transition-all ${
                    errors.phone
                      ? "inquiry-shake border-red-400 ring-1 ring-red-400"
                      : phoneFieldFocused
                      ? "border-transparent ring-2 ring-sky-400"
                      : "border-[#BDBDBDB0]"
                  }`}
                >
                  {/* Country dial-code picker */}
                  <div className="relative shrink-0">
                    <button
                      ref={phoneButtonRef}
                      type="button"
                      onClick={togglePhoneDropdown}
                      className="h-full flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2.5 sm:py-3 text-white hover:bg-white/10 rounded-l-lg sm:rounded-l-xl transition-colors"
                    >
                      <FlagIcon isoCode={selectedPhoneCountry?.isoCode} className="w-4 h-3 sm:w-5 sm:h-3.5" />
                      <span className="text-xs sm:text-sm text-slate-200">+{selectedPhoneCountry?.phonecode}</span>
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {phoneDropdownOpen &&
                      createPortal(
                        <>
                          {/* Invisible full-screen layer to catch outside clicks and close the dropdown */}
                          <div
                            className="fixed inset-0 z-[99998]"
                            onClick={() => setPhoneDropdownOpen(false)}
                          />

                          {/* Header (search bar) is a real flex item OUTSIDE the scroll
                              region — not `sticky` — so it can never be scrolled over
                              or rendered underneath the list items. */}
                          <div
                            className="inquiry-dropdown-portal fixed z-[99999] flex flex-col max-h-64 bg-[#0F172A] border border-[#BDBDBDB0] rounded-xl shadow-2xl overflow-hidden"
                            style={{
                              top: phoneDropdownPos.top,
                              left: phoneDropdownPos.left,
                              width: phoneDropdownPos.width,
                            }}
                          >
                            <input
                              autoFocus
                              type="text"
                              value={phoneCountrySearch}
                              onChange={(e) => setPhoneCountrySearch(e.target.value)}
                              placeholder="Search country..."
                              className="shrink-0 w-full px-3 py-2 bg-[#0F172A] text-white text-xs sm:text-sm border-b border-white/10 focus:outline-none placeholder-slate-500"
                            />

                            <div className="overflow-y-auto">
                              {countriesList.filter((c) =>
                                c.name.toLowerCase().includes(phoneCountrySearch.toLowerCase())
                              )
                                .slice(0, 60)
                                .map((c) => (
                                  <div
                                    key={c.isoCode}
                                    onMouseDown={() => {
                                      setPhoneCountryIso(c.isoCode);
                                      setPhoneDropdownOpen(false);
                                      setPhoneCountrySearch("");
                                    }}
                                    className="px-3 py-1.5 sm:py-2 flex items-center gap-3 text-xs sm:text-sm text-white hover:bg-sky-400/20 cursor-pointer"
                                  >
                                    <FlagIcon isoCode={c.isoCode} className="w-5 h-3.5 shrink-0" />
                                    <span className="flex-1 truncate">{c.name}</span>
                                    <span className="shrink-0 w-14 text-right text-slate-400 text-xs tabular-nums">
                                      +{c.phonecode}
                                    </span>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </>,
                        document.body
                      )}
                  </div>

                  {/* Vertical divider between the picker and the number field */}
                  <div className="w-px my-1.5 sm:my-2 bg-white/15 shrink-0" />

                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={values.phone}
                    onChange={updatePhoneField("phone")}
                    onFocus={() => setPhoneFieldFocused(true)}
                    onBlur={() => setPhoneFieldFocused(false)}
                    maxLength={10}
                    className="flex-1 min-w-0 bg-transparent px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none rounded-r-lg sm:rounded-r-xl"
                  />
                </div>
                {errors.phone && <p className="inquiry-error-text mt-1 text-[10px] sm:text-[11px] text-red-400">{errors.phone}</p>}
              </div>
            </div>

            {/* Country + City */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 inquiry-field-rise" style={{ animationDelay: "120ms" }}>
              <ComboBox
                value={values.country}
                onChange={updateCountry}
                options={countriesList}
                getLabel={(o) => o.name}
                placeholder="Country"
                wrapperClassName="w-full sm:w-1/2"
                inputClassName="w-full bg-white/5 border border-[#BDBDBDB0] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
              />
              <ComboBox
                value={values.city}
                onChange={updateCity}
                options={citiesForSelectedCountry}
                getLabel={(o) => o.name}
                placeholder="City"
                wrapperClassName="w-full sm:w-1/2"
                inputClassName="w-full bg-white/5 border border-[#BDBDBDB0] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
              />
            </div>

            {/* Service — type freely, or pick a suggestion */}
            <div className="inquiry-field-rise" style={{ animationDelay: "160ms" }}>
              <ComboBox
                value={values.service}
                onChange={updateComboField("service")}
                options={services}
                getLabel={(o) => o}
                placeholder="What service are you looking for? *"
                inputClassName={`w-full bg-white/5 border rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all ${
                  errors.service ? "inquiry-shake border-red-400 ring-1 ring-red-400" : "border-[#BDBDBDB0]"
                }`}
              />
              {errors.service && <p className="inquiry-error-text mt-1 text-[10px] sm:text-[11px] text-red-400">{errors.service}</p>}
            </div>

            {/* Budget + Timeline — type freely, or pick a suggestion */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 inquiry-field-rise" style={{ animationDelay: "200ms" }}>
              <ComboBox
                value={values.budget}
                onChange={updateComboField("budget")}
                options={budgets}
                getLabel={(o) => o}
                placeholder="Project Budget"
                wrapperClassName="w-full sm:w-1/2"
                inputClassName="w-full bg-white/5 border border-[#BDBDBDB0] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
              />
              <ComboBox
                value={values.timeline}
                onChange={updateComboField("timeline")}
                options={timelines}
                getLabel={(o) => o}
                placeholder="Project Timeline"
                wrapperClassName="w-full sm:w-1/2"
                inputClassName="w-full bg-white/5 border border-[#BDBDBDB0] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
              />
            </div>

            {/* Description */}
            <div className="inquiry-field-rise" style={{ animationDelay: "240ms" }}>
              <textarea
                placeholder="Project Description *"
                rows={4}
                value={values.description}
                onChange={update("description")}
                className={`w-full bg-white/5 border border-[#BDBDBDB0] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all ${
                  errors.description ? "inquiry-shake ring-1 ring-red-400" : ""
                }`}
              />
              {errors.description && <p className="inquiry-error-text mt-1 text-[10px] sm:text-[11px] text-red-400">{errors.description}</p>}
            </div>

            {/* Existing Website/App */}
            <div className="inquiry-field-rise" style={{ animationDelay: "280ms" }}>
              <p className="text-sm sm:text-base text-sky-400 font-medium mb-1.5 sm:mb-2">
                Do you have existing website/app?
              </p>

              <div className="flex items-center gap-4 sm:gap-6">
                <label className="flex items-center gap-1.5 sm:gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="existing"
                    checked={hasExisting === "yes"}
                    onChange={() => setHasExisting("yes")}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 accent-sky-400"
                  />

                  <span className="text-sm sm:text-base text-sky-400">Yes</span>
                </label>

                <label className="flex items-center gap-1.5 sm:gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="existing"
                    checked={hasExisting === "no"}
                    onChange={() => setHasExisting("no")}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 accent-sky-400"
                  />

                  <span className="text-sm sm:text-base text-sky-400">No</span>
                </label>
              </div>
            </div>

            {/* "Not a robot" Confirmation */}
            <label
              className="inquiry-field-rise flex items-center gap-2.5 sm:gap-3 border border-white/15 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 w-fit cursor-pointer bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
              style={{ animationDelay: "320ms" }}
            >
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={isNotRobot}
                  onChange={(e) => setIsNotRobot(e.target.checked)}
                  className="peer appearance-none w-4 h-4 sm:w-5 sm:h-5 rounded-md border-2 border-white/25 bg-white/5 checked:bg-sky-400 checked:border-sky-400 transition-all duration-200 cursor-pointer"
                />
                <svg
                  className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 text-white pointer-events-none opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm text-slate-200 font-medium select-none">
                I confirm I'm not a robot
              </span>
            </label>

            {submitError && (
              <p className="inquiry-error-text text-[11px] sm:text-[12px] text-red-400 text-center">{submitError}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="inquiry-field-rise w-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] text-white text-sm sm:text-base font-semibold py-3 sm:py-3.5 rounded-lg sm:rounded-xl transition-all shadow-[0_4px_20px_rgba(14,165,233,0.3)] disabled:opacity-60 disabled:hover:scale-100 flex items-center justify-center gap-2"
              style={{ animationDelay: "360ms" }}
            >
              {submitting && (
                <svg className="inquiry-spinner w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
              {submitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default InquiryForm;