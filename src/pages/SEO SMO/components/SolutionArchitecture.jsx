import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { Link } from "react-router-dom";

export default function SolutionArchitecture() {
  const faqs = [
    "How long does it take to see measurable ranking improvements on Google?",
    "How do you optimize Core Web Vitals and technical site architecture?",
    "What backlink acquisition and digital PR strategies do you use?",
    "How do you optimize social media profiles for lead generation (SMO)?",
    "Do you provide regular keyword ranking and organic traffic reports?",
    "How do you ensure our SEO strategy adheres to Google algorithm guidelines?"
];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const leftRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const left = leftRef.current;
    const list = listRef.current;
    if (!left || !list) return;

    const leftObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            left.classList.add("faq-left-in");
            leftObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    leftObserver.observe(left);

    const items = list.querySelectorAll(".faq-item");
    const listObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((item, i) => {
              item.style.transitionDelay = `${i * 80}ms`;
              item.classList.add("faq-item-in");
            });
            listObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    listObserver.observe(list);

    return () => {
      leftObserver.disconnect();
      listObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative py-0 md:py-0 mt-0 md:mt-[-20px] lg:mt-0 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <style>{`
        .faq-left-hidden {
          opacity: 0;
          transform: translateX(-24px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .faq-left-in {
          opacity: 1;
          transform: translateX(0);
        }
        .faq-item {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.3s ease;
        }
        .faq-item-in {
          opacity: 1;
          transform: translateY(0);
        }
        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows 0.35s ease, opacity 0.3s ease;
        }
        .faq-answer.faq-answer-open {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .faq-answer > div {
          overflow: hidden;
        }
        .faq-icon-rotate {
          transition: transform 0.3s ease;
        }
        .faq-icon-rotate.faq-icon-open {
          transform: rotate(90deg);
        }
        @media (prefers-reduced-motion: reduce) {
          .faq-left-hidden, .faq-item {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .faq-answer {
            transition: none !important;
          }
        }
      `}</style>

      <div className="max-w-[1130px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-start">

          {/* Left Column: Header + CTA */}
          <div ref={leftRef} className="faq-left-hidden lg:col-span-4 flex flex-col items-start text-left lg:mt-2">
            <p className="text-sky-400 text-[12px] mx-auto md:mx-auto lg:mx-0 md:text-[15px] lg:text-[13px] font-bold tracking-[0.25em] uppercase mb-3">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="text-2xl sm:text-3xl hidden md:hidden lg:block lg:text-[40px] lg:leading-[45px] font-extrabold text-white tracking-tight leading-tight mb-4">
              Questions Before You Get Started
            </h2>
            <p className="text-[16px] hidden md:hidden lg:block text-slate-400 leading-relaxed mb-6">
              Have questions? We've got answers. Here are some of the most common questions about our seo / smo services.
            </p>
            <Link
              to="/contact-us"
              className="hidden md:hidden lg:block md:inline-flex lg:inline-flex items-center gap-2 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] hover:opacity-90 hover:scale-[1.03] active:scale-[0.98] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
            >
              <span>Ask a Question</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: Accordion FAQ List */}
          <div ref={listRef} className="lg:col-span-8 flex flex-col gap-2 mt-[-15px] lg:mt-0 md:mt-0">
            {faqs.map((question, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="faq-item bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 rounded-lg overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-4 py-2.5 text-left cursor-pointer"
                  >
                    <span className="text-xs md:text-[13px] lg:text-[15px] font-medium text-slate-200">
                      {question}
                    </span>
                    <span className={`faq-icon-rotate ${isOpen ? 'faq-icon-open' : ''} shrink-0 w-5 h-5 rounded-full bg-sky-500/10 text-sky-400 flex items-center justify-center`}>
                      {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                    </span>
                  </button>

                  <div className={`faq-answer ${isOpen ? 'faq-answer-open' : ''}`}>
                    <div>
                      <p className="px-4 pb-3 -mt-0.5 text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                        Reach out to our team and we'll walk you through exactly how we can help with this.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
