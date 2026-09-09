import { useState, useRef } from 'react';

const faqData = [
  {
    question: 'How do you start a project?',
    answer:
      'We start by discussing your requirements, defining project goals, and establishing a clear roadmap. We keep you involved at every stage of the design and development process to ensure alignment.',
  },
  {
    question: 'How do you ensure project quality?',
    answer:
      'We follow Industry best practices, code reviews, testing procedures, agile methodologies, and continuous monitoring to maintain quality standards.',
  },
  {
    question: 'Do you sign NDAs?',
    answer:
      'Yes, we prioritize the confidentiality and security of your IP. We sign Non-Disclosure Agreements (NDAs) before discussing any project details.',
  },
];

const FAQ = () => {
  // Second item open by default, matching the original behavior
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div class="mt-[-50px] md:mt-[-45px] lg:mt-0">
    <section className="max-w-[1050px] mx-auto mb-12 md:mb-20 lg:mb-20 ">
      <div className="text-center mb-10">
        <p className="text-[#04A3DA] font-bold text-xs md:text-xl tracking-widest uppercase mb-3">
          FAQ
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Frequently Asked <span className="text-[#04A3DA]">Questions</span>
        </h2>
      </div>

      <div className="max-w-[820px] mx-auto flex flex-col gap-3 mt-[-20px] md:mt-0">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`relative rounded-xl transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-slate-800/40 scale-[1.01] shadow-[0_12px_40px_rgba(56,189,248,0.22)]'
                  : 'bg-slate-800/25 shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:bg-slate-800/35'
              }`}
            >
              {/* Glowing top edge */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300 ${
                  isOpen ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(90deg, transparent, #38bdf8, transparent)',
                  boxShadow: '0 0 12px rgba(56,189,248,0.8)',
                }}
              />

              <button
                type="button"
                onClick={() => toggleItem(index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="flex items-center gap-3">
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleItem(index);
                    }}
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'border-sky-400 text-sky-400 bg-sky-400/10 shadow-[0_0_10px_rgba(56,189,248,0.5)]'
                        : 'border-sky-400 text-sky-400'
                    }`}
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" d="M5 12h14" />
                      {!isOpen && <path strokeLinecap="round" d="M12 5v14" />}
                    </svg>
                  </span>
                  <span className="text-sm md:text-base font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                </span>

                <span
                  className={`w-6 h-6 flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    isOpen ? 'text-sky-400' : 'text-slate-400'
                  }`}
                >
                  <svg
                    className="w-4 h-4 transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight: isOpen
                    ? `${contentRefs.current[index]?.scrollHeight ?? 500}px`
                    : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}
              >
                <p className="px-6 pb-5 text-[#E7E8EA] text-xs md:text-sm font-medium leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </div>
  );
};

export default FAQ;
