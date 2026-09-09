export default function AiMlContent() {
  const applications = [
    {
      num: '01',
      title: 'Predictive Analytics',
      desc: 'Forecast market trends, inventory demands, and customer behavioral patterns with high precision statistical models.',
    },
    {
      num: '02',
      title: 'Intelligent Automation',
      desc: 'Eliminate repetitive, high friction operational tasks with automated robotic and cognitive workflows.',
    },
    {
      num: '03',
      title: 'Hyper-Personalization',
      desc: 'Deliver real time tailored content, product recommendations, and custom UX to individual end users.',
    },
    {
      num: '04',
      title: 'Dynamic Risk Management',
      desc: 'Identify anomalies, fraud vectors, and operational vulnerabilities in real time before they escalate.',
    },
  ];

  return (
    <article className="max-w-[840px] mx-auto text-left px-2 sm:px-4">
      {/* Introduction Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          Introduction
        </h2>
        <div className="space-y-3.5 text-slate-300 text-[15px] md:text-[16px] leading-relaxed font-normal">
          <p>
            AI and Machine Learning are transforming modern enterprises by turning raw, unstructured data into actionable, intelligent insights that drive revenue and operational excellence.
          </p>
        </div>
      </section>

      {/* Key Applications Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          Key Applications
        </h2>

        <div className="space-y-3">
          {applications.map((app) => (
            <div
              key={app.num}
              className="p-4 md:p-5 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-[#04A3DA]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-sky-500/20 text-[#04A3DA] font-bold text-xs">
                  {app.num}
                </span>
                <h3 className="font-semibold text-white text-[15px] md:text-[17px]">
                  {app.title}
                </h3>
              </div>
              <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed pl-10">
                {app.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          Industry Applications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { domain: 'Healthcare', detail: 'Early disease prediction, diagnostic image classification & personalized medicine' },
            { domain: 'Finance', detail: 'Real time credit scoring, automated algorithmic trading & transaction fraud detection' },
            { domain: 'Retail', detail: 'Granular demand forecasting, dynamic pricing & churn reduction models' },
            { domain: 'Manufacturing', detail: 'Predictive equipment maintenance, automated visual QA & supply chain triage' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-slate-800/30 border border-slate-700/30 text-slate-300 text-sm md:text-[15px]"
            >
              <span className="font-semibold text-white block mb-0.5">{item.domain}</span>
              <span className="text-slate-300 text-xs md:text-sm">{item.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Jawam Infotech's Services Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          Jawam Infotech's Services
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            'Custom ML Model Development',
            'Deep AI Architecture Integration',
            'End to End Data Engineering',
            'Business Intelligence & Visualization',
          ].map((service, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2.5 text-slate-300 text-[14px] md:text-[15px]"
            >
              <span className="text-[#04A3DA] text-xs">◆</span>
              <span className="text-slate-200 font-medium">{service}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Conclusion Section */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          Conclusion
        </h2>
        <p className="text-slate-300 text-[15px] md:text-[16px] leading-relaxed font-normal">
          AI & Machine Learning empower modern forward thinking businesses to make data driven decisions and outperform competitors in 2026 and beyond.
        </p>
      </section>

      {/* Subtle divider */}
      <div className="w-full max-w-[840px] h-[1px] mx-auto mb-14 bg-gradient-to-r from-transparent via-[#04A3DA]/60 to-transparent"></div>
    </article>
  );
}

