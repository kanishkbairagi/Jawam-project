import React, { useState, useEffect, useRef } from "react";
import { X, Upload } from "lucide-react";
import { sendUniversalEmail } from "../../../config/emailjs";

// Free-plan EmailJS request size cap is ~50KB total — resumes are almost
// always bigger than that as base64, so we only attempt to attach the file
// if it's small enough, and otherwise just send the applicant's details.
const MAX_ATTACHMENT_BYTES = 40 * 1024; // leaves headroom under 50KB total

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
    id: "data-engineer",
    title: "Data Engineer",
    meta: "Full-time Remote • Indore, Madhya Pradesh, India",
    location: "Indore, Madhya Pradesh, India (Remote)",
    type: "Full-Time",
    mode: "Remote",
    about:
      "At Jawam Infotech, we deliver innovative and scalable IT solutions that empower business growth.",
    description:
      "We're looking for a Data Engineer to design and build the pipelines and infrastructure that power our data and analytics initiatives.",
    responsibilities: [
      "Design, build, and maintain scalable ETL/ELT data pipelines.",
      "Develop and optimize data warehouse and database architectures.",
      "Ensure data quality, integrity, and governance across systems.",
      "Collaborate with analytics and engineering teams to support data-driven decisions.",
    ],
    requirements: [
      "Strong experience with Python or SQL for data processing.",
      "Familiarity with data pipeline tools (Airflow, dbt, Kafka, Spark, or similar).",
      "Understanding of cloud data platforms (AWS, Azure, or GCP).",
    ],
  },
  {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    meta: "Full-time Remote • Indore, Madhya Pradesh, India",
    location: "Indore, Madhya Pradesh, India (Remote)",
    type: "Full-Time",
    mode: "Remote",
    about:
      "At Jawam Infotech, we deliver innovative and scalable IT solutions that empower business growth.",
    description:
      "We're looking for an AI/ML Engineer to design, train, and deploy machine learning models that solve real business problems.",
    responsibilities: [
      "Design, train, and evaluate machine learning and deep learning models.",
      "Build and maintain production-ready ML pipelines and deployment workflows.",
      "Collaborate with data engineering teams on data preparation and feature engineering.",
      "Monitor and improve model performance in production.",
    ],
    requirements: [
      "Strong experience with Python and ML frameworks (TensorFlow, PyTorch, or Scikit-learn).",
      "Understanding of MLOps practices and model deployment.",
      "Familiarity with cloud AI/ML services (AWS, Azure, or GCP) is a plus.",
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

// Converts a File to a base64 data string, so it can be sent as a plain
// EmailJS template param (EmailJS free plan has no native file-upload API).
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function ApplicationForm({ job, onSubmitted }) {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    mobile: "",
    currentEmployer: "",
    experience: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = (field) => (e) => {
    let value = e.target.value;

    if (field === "fullName") {
      // Only letters and spaces allowed
      value = value.replace(/[^A-Za-z\s]/g, "");
    }

    if (field === "mobile") {
      // Only digits allowed, capped at 15
      value = value.replace(/[^0-9]/g, "").slice(0, 15);
    }

    setValues((v) => ({ ...v, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const blockNonDigitKeys = (e) => {
    if (
      !/[0-9]/.test(e.key) &&
      !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"].includes(e.key) &&
      !(e.ctrlKey || e.metaKey)
    ) {
      e.preventDefault();
    }
  };

  const validate = () => {
    const next = {};
    if (!values.fullName.trim()) next.fullName = "Full name is required.";
    else if (!/^[A-Za-z\s]+$/.test(values.fullName.trim()))
      next.fullName = "Full name can only contain letters.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email))
      next.email = "Enter a valid email address.";
    if (!values.mobile.trim()) next.mobile = "Mobile number is required.";
    else if (!/^[0-9]{7,15}$/.test(values.mobile))
      next.mobile = "Enter a valid mobile number (7-15 digits).";
    if (!values.experience) next.experience = "Please select your experience.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    setResumeFile(file || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError("");

    try {
      let resumeAttachment = "";
      let resumeNote = resumeFile ? resumeFile.name : "No file attached";

      if (resumeFile) {
        if (resumeFile.size <= MAX_ATTACHMENT_BYTES) {
          resumeAttachment = await fileToBase64(resumeFile);
        } else {
          resumeNote = `${resumeFile.name} (too large to attach — ask applicant to resend)`;
        }
      }

      await sendUniversalEmail({
        form_type: "Career Application",
        is_career: true,
        full_name: values.fullName.trim(),
        email: values.email.trim(),
        phone: values.mobile.trim(),
        mobile: values.mobile.trim(),
        job_title: job.title,
        current_employer: values.currentEmployer.trim() || "Not provided",
        experience: values.experience,
        resume_name: resumeNote,
        resume_attachment: resumeAttachment,
        reply_to: values.email.trim(),
      });

      onSubmitted();
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setSubmitError("Something went wrong sending your application. Please try again.");
    } finally {
      setSubmitting(false);
    }
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
            inputMode="numeric"
            value={values.mobile}
            onChange={update("mobile")}
            onKeyDown={blockNonDigitKeys}
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
              {resumeFile ? resumeFile.name : "No file chosen"}
            </span>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFile}
              className="hidden"
            />
          </label>
          {resumeFile && resumeFile.size > MAX_ATTACHMENT_BYTES && (
            <p className="mt-1 text-[11px] text-amber-400">
              This file is larger than 40KB — it won't be attached to the email (only the filename will be sent).
            </p>
          )}
        </div>

        {submitError && (
          <p className="text-[12px] text-red-400 text-center">{submitError}</p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] shadow-[0_4px_20px_rgba(14,165,233,0.3)] disabled:opacity-60 text-white text-sm font-bold tracking-wide py-4 transition-opacity hover:opacity-95"
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#0B1220] border border-[#BDBDBDB0] rounded-2xl w-full max-w-xl shadow-2xl flex flex-col max-h-[85vh]"
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
              <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-[#04A3DA]/15 flex items-center justify-center">
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
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const sectionRef = useRef(null);

  // Trigger the reveal animation only once the section actually scrolls
  // into view — a plain "run on mount" animation would fire (and finish)
  // while this section is still off-screen below the fold, so by the time
  // the user scrolls down to it, nothing appears to happen.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect(); // only need to trigger this once
        }
      },
      { threshold: 0.15 } // fires once ~15% of the section is visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen lg:mt-0 md:mt-[-120px] mt-[-120px] pt-28 md:pt-36 lg:pt-0 pb-0 px-4 md:px-6 lg:px-8">
      <style>{`
        @keyframes orFadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes orRowFadeIn {
          0% { opacity: 0; transform: translateY(50px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes orButtonPop {
          0% { opacity: 0; transform: scale(0.5); }
          70% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        .or-eyebrow-anim,
        .or-heading-anim,
        .or-row-anim,
        .or-apply-btn-anim {
          opacity: 0;
        }
        .or-visible .or-eyebrow-anim {
          animation: orFadeUp 0.8s ease-out 0.1s forwards;
        }
        .or-visible .or-heading-anim {
          animation: orFadeUp 0.9s ease-out 0.3s forwards;
        }
        .or-visible .or-row-anim {
          animation: orRowFadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .or-visible .or-apply-btn-anim {
          animation: orButtonPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .or-eyebrow-anim,
          .or-heading-anim,
          .or-row-anim,
          .or-apply-btn-anim {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
      <section
        ref={sectionRef}
        id="open-roles"
        className={`max-w-[970px] mx-auto mt-[0px] md:mt-0 lg:mt-0 mb-[90px] md:mb-12 lg:mb-12 scroll-mt-4 md:scroll-mt-12 lg:scroll-mt-16 ${
          hasEnteredView ? "or-visible" : ""
        }`}
      >
        <div className="text-center mb-12 md:mb-12 lg:mb-12">
          <p className="or-eyebrow-anim text-[#04A3DA] font-bold text-sm text-left md:text-sm tracking-widest uppercase mb-3">
            OPEN POSITION
          </p>
          <h2 className="or-heading-anim text-left mb-[-25px] text-3xl md:text-5xl font-bold text-white">
            Find Your Next <span className="text-[#04A3DA]">Opportunity</span>
          </h2>
        </div>

        <div>
          <div className="space-y-2">
            {JOBS.map((job, index) => (
              <div
                key={job.id}
                className="or-row-anim border border-white/20  rounded-2xl p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2 hover:border-[#04A3DA]/30 hover:bg-slate-800/35 transition-all duration-300"
                style={{ animationDelay: hasEnteredView ? `${0.5 + index * 0.12}s` : undefined }}
              >
                <div>
                  <h3 className="text-white text-sm md:text-lg font-bold">
                    {job.title}
                  </h3>
                  <p className="text-[#E7E8EA] text-xs">{job.meta}</p>
                </div>
                <button
                  onClick={() => setActiveJob(job)}
                  className="or-apply-btn-anim text-white text-[10px] md:text-xs font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full mt-2 md:mt-0 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:opacity-95 transition-all flex items-center gap-1.5 md:gap-2 w-fit"
                  style={{ animationDelay: hasEnteredView ? `${0.65 + index * 0.12}s` : undefined }}
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