import React, { useState, useEffect } from "react";
import { X, Upload } from "lucide-react";
import "./openRoles.css";

// ---- All open positions live here. Edit / add / remove freely. ----
const JOBS = [
  {
    id: "bde",
    title: "Business Development Executive",
    meta: "Full-time Onsite • Indore, Madhya Pradesh, India",
    location: "Indore, Madhya Pradesh, India",
    type: "Full-Time",
    mode: "Onsite",
    about:
      "At Jawam Infotech, we deliver innovative and scalable IT solutions that empower business growth. As a fast-growing tech company, we thrive on excellence, collaboration, and creating meaningful digital products that make an impact.",
    description:
      "We are looking for a passionate and self-motivated Business Development Executive (BDE) to join our dynamic team.",
    responsibilities: [
      "Identify and pursue new business opportunities through various business platforms.",
      "Generate leads, pitch services, and set up meetings with potential clients.",
      "Support the sales team in creating proposals and presentations for prospective clients.",
      "Maintain and update CRM tools with accurate client and lead information.",
      "Coordinate with internal teams to ensure smooth onboarding of new clients.",
      "Conduct market research to identify trends and potential growth areas.",
      "Participate in client calls, demos, and follow-ups under supervision.",
    ],
    requirements: [
      "Bachelor's degree in BBA, MBA, BCA, MCA, BE, B.Tech or relevant degree.",
      "Strong communication (Verbal + Written).",
      "Basic or minimal understanding of IT services and solutions is a plus.",
      "Quick learner with a positive attitude and a growth mindset.",
    ],
  },
  {
    id: "senior-react",
    title: "Senior React Developer",
    meta: "Full-time Remote • Indore, Madhya Pradesh, India",
    location: "Indore, Madhya Pradesh, India (Remote)",
    type: "Full-Time",
    mode: "Remote",
    about:
      "At Jawam Infotech, we deliver innovative and scalable IT solutions that empower business growth.",
    description:
      "We're looking for a Senior React Developer to lead frontend architecture and mentor the team on our product suite.",
    responsibilities: [
      "Architect and build performant, maintainable React applications.",
      "Review code and mentor junior developers on best practices.",
      "Collaborate with design and backend teams to ship features end to end.",
      "Optimize application performance and address technical debt.",
    ],
    requirements: [
      "4+ years of experience with React and modern JavaScript/TypeScript.",
      "Strong understanding of state management, hooks, and component design.",
      "Experience with REST/GraphQL APIs and testing frameworks.",
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Designer",
    meta: "Full-time Onsite • Indore, Madhya Pradesh, India",
    location: "Indore, Madhya Pradesh, India",
    type: "Full-Time",
    mode: "Onsite",
    about:
      "At Jawam Infotech, we deliver innovative and scalable IT solutions that empower business growth.",
    description:
      "We're looking for a UI/UX Designer who can turn ideas into intuitive, polished product experiences.",
    responsibilities: [
      "Design wireframes, prototypes, and high-fidelity UI for web and mobile.",
      "Conduct user research and translate findings into design decisions.",
      "Maintain and evolve our design system.",
      "Collaborate closely with developers to ensure accurate implementation.",
    ],
    requirements: [
      "Portfolio demonstrating strong UI/UX work.",
      "Proficiency in Figma or similar design tools.",
      "Understanding of accessibility and responsive design principles.",
    ],
  },
  {
    id: "python-dev",
    title: "Python Developer",
    meta: "Full-time Remote • Indore, Madhya Pradesh, India",
    location: "Indore, Madhya Pradesh, India (Remote)",
    type: "Full-Time",
    mode: "Remote",
    about:
      "At Jawam Infotech, we deliver innovative and scalable IT solutions that empower business growth.",
    description:
      "We're looking for a Python Developer to build and maintain backend services and data pipelines.",
    responsibilities: [
      "Design and develop scalable backend services in Python.",
      "Write clean, tested, well-documented code.",
      "Work with databases and third-party APIs.",
      "Collaborate with frontend and DevOps teams on deployment.",
    ],
    requirements: [
      "Strong experience with Python and a framework such as Django or FastAPI.",
      "Familiarity with SQL/NoSQL databases.",
      "Understanding of API design and version control (Git).",
    ],
  },
  {
    id: "backend-dev",
    title: "Backend Developer",
    meta: "Full-time Onsite • Indore, Madhya Pradesh, India",
    location: "Indore, Madhya Pradesh, India",
    type: "Full-Time",
    mode: "Onsite",
    about:
      "At Jawam Infotech, we deliver innovative and scalable IT solutions that empower business growth.",
    description:
      "We're looking for a Backend Developer to build reliable, scalable server-side systems.",
    responsibilities: [
      "Develop and maintain backend APIs and services.",
      "Design efficient database schemas and queries.",
      "Ensure application security, performance, and reliability.",
      "Work closely with frontend developers to integrate APIs.",
    ],
    requirements: [
      "Experience with Node.js, Java, or a similar backend stack.",
      "Solid understanding of relational and/or NoSQL databases.",
      "Familiarity with REST API design and authentication.",
    ],
  },
  {
    id: "devops",
    title: "DevOps Engineer",
    meta: "Full-time Remote • Indore, Madhya Pradesh, India",
    location: "Indore, Madhya Pradesh, India (Remote)",
    type: "Full-Time",
    mode: "Remote",
    about:
      "At Jawam Infotech, we deliver innovative and scalable IT solutions that empower business growth.",
    description:
      "We're looking for a DevOps Engineer to manage our infrastructure, CI/CD, and deployment pipelines.",
    responsibilities: [
      "Build and maintain CI/CD pipelines.",
      "Manage cloud infrastructure and monitoring.",
      "Automate deployment and scaling processes.",
      "Ensure system reliability, security, and uptime.",
    ],
    requirements: [
      "Experience with AWS/Azure/GCP and containerization (Docker, Kubernetes).",
      "Familiarity with CI/CD tools (GitHub Actions, Jenkins, etc.).",
      "Scripting experience (Bash, Python, or similar).",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Executive",
    meta: "Full-time Onsite • Indore, Madhya Pradesh, India",
    location: "Indore, Madhya Pradesh, India",
    type: "Full-Time",
    mode: "Onsite",
    about:
      "At Jawam Infotech, we deliver innovative and scalable IT solutions that empower business growth.",
    description:
      "We're looking for a Digital Marketing Executive to grow our online presence and generate qualified leads.",
    responsibilities: [
      "Plan and run campaigns across SEO, SEM, and social media.",
      "Create and manage content calendars.",
      "Track and report on campaign performance and ROI.",
      "Coordinate with design and sales teams on marketing assets.",
    ],
    requirements: [
      "Experience with SEO, Google Ads, and social media marketing.",
      "Strong written communication skills.",
      "Familiarity with analytics tools (Google Analytics, etc.).",
    ],
  },
  {
    id: "hr-executive",
    title: "HR Executive",
    meta: "Full-time Onsite • Indore, Madhya Pradesh, India",
    location: "Indore, Madhya Pradesh, India",
    type: "Full-Time",
    mode: "Onsite",
    about:
      "At Jawam Infotech, we deliver innovative and scalable IT solutions that empower business growth.",
    description:
      "We're looking for an HR Executive to support recruitment, onboarding, and day-to-day people operations.",
    responsibilities: [
      "Coordinate end-to-end recruitment for open roles.",
      "Manage onboarding, documentation, and HR records.",
      "Support employee engagement initiatives.",
      "Assist with policy implementation and compliance.",
    ],
    requirements: [
      "Bachelor's degree in HR or related field.",
      "Good communication and organizational skills.",
      "0-2 years of HR experience; freshers with strong fundamentals welcome.",
    ],
  },
];

const EXPERIENCE_OPTIONS = ["Fresher", "0-1 years", "1-3 years", "3-5 years", "5+ years"];

function fieldClasses(hasError) {
  return `w-full rounded-xl border px-4 py-3.5 text-sm text-white placeholder-slate-400 bg-[#0F172A] outline-none transition-colors ${
    hasError
      ? "border-red-400 focus:border-red-400"
      : "border-[#BDBDBDB0] focus:border-[#04A3DA]"
  }`;
}

function ApplicationForm({ job, onSubmitted }) {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    mobile: "",
    currentEmployer: "",
    experience: "",
  });
  const [fileName, setFileName] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const update = (field) => (e) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!values.fullName.trim()) next.fullName = "Full name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email))
      next.email = "Enter a valid email address.";
    if (!values.mobile.trim()) next.mobile = "Mobile number is required.";
    else if (!/^[0-9+\-\s]{7,15}$/.test(values.mobile))
      next.mobile = "Enter a valid mobile number.";
    if (!values.experience) next.experience = "Please select your experience.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Wire this up to your real submit endpoint / resume upload here.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    onSubmitted();
  };

  return (
    <div>
      <h3 className="text-base font-bold text-white mb-4">
        Fill Details to Apply
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            value={values.fullName}
            onChange={update("fullName")}
            placeholder="Full Name"
            className={fieldClasses(errors.fullName)}
          />
          {errors.fullName && (
            <p className="mt-1 text-[11px] text-red-400">{errors.fullName}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            value={values.email}
            onChange={update("email")}
            placeholder="Email Id"
            className={fieldClasses(errors.email)}
          />
          {errors.email && (
            <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            value={values.mobile}
            onChange={update("mobile")}
            placeholder="Mobile Number"
            className={fieldClasses(errors.mobile)}
          />
          {errors.mobile && (
            <p className="mt-1 text-[11px] text-red-400">{errors.mobile}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            value={values.currentEmployer}
            onChange={update("currentEmployer")}
            placeholder="Current Employer"
            className={fieldClasses(errors.currentEmployer)}
          />
        </div>

        <div>
          <select
            value={values.experience}
            onChange={update("experience")}
            className={`${fieldClasses(errors.experience)} ${
              values.experience ? "text-white" : "text-slate-400"
            }`}
          >
            <option value="" disabled className="bg-[#0F172A] text-slate-400">
              Total Experience
            </option>
            {EXPERIENCE_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-[#0F172A] text-white">
                {opt}
              </option>
            ))}
          </select>
          {errors.experience && (
            <p className="mt-1 text-[11px] text-red-400">
              {errors.experience}
            </p>
          )}
        </div>

        <div>
          <p className="text-sm font-semibold text-[#E7E8EA] mb-2">
            Upload Resume
          </p>
          <label className="flex items-center gap-3 rounded-xl border border-[#BDBDBDB0] bg-[#0F172A] px-4 py-3.5 cursor-pointer hover:border-[#04A3DA] transition-colors">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] text-white text-sm font-medium px-3 py-1.5 shrink-0">
              <Upload size={14} />
              Choose File
            </span>
            <span className="text-sm text-[#04A3DA] truncate">
              {fileName || "No file chosen"}
            </span>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFile}
              className="hidden"
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className={`mt-2 w-full rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] shadow-[0_4px_20px_rgba(14,165,233,0.3)] disabled:opacity-60 text-white text-sm font-bold tracking-wide py-4 transition-opacity hover:opacity-95 ${
            submitting ? "submit-btn-loading" : ""
          }`}
        >
          {submitting ? "SUBMITTING..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
}

function JobDetails({ job }) {
  return (
    <div className="text-sm text-[#E7E8EA]">
      <div className="space-y-1 mb-4 text-[13px]">
        <p>
          <span className="font-semibold text-white">Location:</span>{" "}
          {job.location}
        </p>
        <p>
          <span className="font-semibold text-white">Type:</span> {job.type}
        </p>
        <p>
          <span className="font-semibold text-white">Mode:</span> {job.mode}
        </p>
      </div>

      <h3 className="font-bold text-[#04A3DA] mb-1.5">About Us</h3>
      <p className="mb-4 leading-relaxed">{job.about}</p>

      <h3 className="font-bold text-[#04A3DA] mb-1.5">Job Description</h3>
      <p className="mb-4 leading-relaxed">{job.description}</p>

      <h3 className="font-bold text-[#04A3DA] mb-1.5">Key Responsibilities</h3>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        {job.responsibilities.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      <h3 className="font-bold text-[#04A3DA] mb-1.5">
        Required Skills & Qualifications
      </h3>
      <ul className="list-disc pl-5">
        {job.requirements.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
}

function JobModal({ job, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="job-overlay-anim fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="job-panel-anim bg-[#0B1220] border border-[#BDBDBDB0] rounded-2xl w-full max-w-xl shadow-2xl flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#BDBDBD33] shrink-0">
          <h2 className="text-lg md:text-xl font-bold text-[#04A3DA] pr-4">
            {job.title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-slate-400 hover:text-white transition-colors shrink-0"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto px-6 py-5">
          {submitted ? (
            <div className="py-10 text-center">
              <div className="success-icon-anim mx-auto mb-4 w-14 h-14 rounded-full bg-[#04A3DA]/15 flex items-center justify-center">
                <span className="text-[#04A3DA] text-2xl">✓</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Application submitted
              </h3>
              <p className="text-sm text-[#E7E8EA]">
                Thanks for applying for {job.title}. Our team will reach out
                if there's a match.
              </p>
            </div>
          ) : (
            <>
              <JobDetails job={job} />

              <div className="mt-6 pt-6 border-t border-[#BDBDBD33]">
                <ApplicationForm
                  job={job}
                  onSubmitted={() => setSubmitted(true)}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function OpenRoles() {
  const [activeJob, setActiveJob] = useState(null);

  return (
    <div className="min-h-screen pt-28 md:pt-36 lg:pt-[130px] pb-0 px-4 md:px-6 lg:px-8">
      <section
        id="open-roles"
        className="max-w-[950px] mx-auto mt-[0px] md:mt-0 lg:mt-0 mb-[90px]"
      >
        <div className="text-center mb-12 md:mb-12 lg:mb-12">
          <p className="text-[#04A3DA] font-bold text-sm text-center md:text-sm tracking-widest uppercase mb-3">
            OPEN POSITION
          </p>
          <h2 className="text-center mb-[-25px] text-3xl md:text-5xl font-bold text-white">
            Find Your Next <span className="text-[#04A3DA]">Opportunity.</span>
          </h2>
        </div>

        <div>
          <div className="space-y-2">
            {JOBS.map((job, index) => (
              <div
                key={job.id}
                className="job-row-anim border border-[#BDBDBDB0] bg-[#FDFDFD33] rounded-2xl p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2 hover:border-[#04A3DA]/30 hover:bg-slate-800/35 transition-all duration-300"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div>
                  <h3 className="text-white text-sm md:text-lg font-bold">
                    {job.title}
                  </h3>
                  <p className="text-[#E7E8EA] text-xs">{job.meta}</p>
                </div>
                <button
                  onClick={() => setActiveJob(job)}
                  className="apply-btn text-white text-[10px] md:text-xs font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full mt-2 md:mt-0 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:opacity-95 transition-all flex items-center gap-1.5 md:gap-2 w-fit"
                >
                  Apply Now
                  <svg
                    className="w-2.5 h-2.5 md:w-3 md:h-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeJob && (
        <JobModal job={activeJob} onClose={() => setActiveJob(null)} />
      )}
    </div>
  );
}