import { useState, useRef } from 'react';

const faqData = [
  {
    question: 'Who is Jawam Infotech?',
    answer: 'Jawam Infotech is a technology company dedicated to crafting scalable, reliable, and innovative software solutions. We specialize in IT staff augmentation, custom software development, AI solutions, and digital transformation.'
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including finance, healthcare, education, retail, logistics, and manufacturing. Our solutions are tailored to meet the unique needs of each sector.'
  },
  {
    question: 'Where is Jawam Infotech located?',
    answer: 'Our office is located at Plot No. 196, PU-4, 3rd Floor, Behind Malhar Mega Mall, Scheme No. 54, Vijay Nagar, Indore – 452010, Madhya Pradesh, India.'
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mt-[-50px] md:mt-[-45px] lg:mt-[30px]">
      <section className="max-w-[1050px] mx-auto mb-20 px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 lg:mb-3">
          <p className="text-[#04A3DA] font-bold text-xs md:text-xl tracking-widest uppercase mb-2">
            FAQ
          </p>
          <h2 className="text-xl md:text-5xl lg:text-5xl font-bold text-white mt-[-10px] md:mt-0 lg:mt-0">
            Frequently Asked <span className="text-[#04A3DA]">Questions</span>
          </h2>
        </div>

        <div className="lg:max-w-[880px] md:max-w-[700px] mx-auto flex flex-col md:gap-3 lg:gap-4 gap-1.5 mt-[-12px] md:mt-[-5px] lg:mt-0">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl border-l-4 transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-l-sky-400 bg-gradient-to-r from-sky-400/15 via-slate-800/40 to-slate-800/40 shadow-[0_10px_35px_rgba(56,189,248,0.2)]'
                    : 'border-l-slate-600/50 bg-slate-800/25 shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:border-l-sky-400/60 hover:bg-slate-800/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full px-4 py-2.5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleItem(index);
                      }}
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'border-sky-400 text-sky-400 bg-sky-400/10 shadow-[0_0_10px_rgba(56,189,248,0.5)]'
                          : 'border-sky-400 text-sky-400'
                      }`}
                    >
                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" d="M5 12h14" />
                        {!isOpen && <path strokeLinecap="round" d="M12 5v14" />}
                      </svg>
                    </span>
                    <span className="text-sm md:text-base font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                  </span>

                  <span
                    className={`w-5 h-5 flex items-center justify-center shrink-0 rounded-full transition-all duration-300 ${
                      isOpen ? 'text-sky-400' : 'text-slate-400'
                    }`}
                  >
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300"
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
                  <p className="px-4 pb-3 text-[#E7E8EA] text-xs md:text-sm font-medium leading-relaxed">
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