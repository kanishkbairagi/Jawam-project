export default function AiTrendsContent() {
  const trends = [
    {
      num: '01',
      title: 'Agentic AI',
      desc: "AI systems are no longer passive tools they're becoming autonomous agents capable of making decisions, initiating actions, and adapting in real time.",
    },
    {
      num: '02',
      title: 'AI-Augmented Development',
      desc: 'AI tools like code assistants and auto debuggers are transforming software engineering and accelerating development cycles.',
    },
    {
      num: '03',
      title: 'Edge AI',
      desc: 'Processing data at the edge enables real time analytics and secure automation without latency.',
    },
    {
      num: '04',
      title: 'AI Cybersecurity',
      desc: 'AI driven threat detection is protecting businesses from increasingly sophisticated attacks and zero day vulnerabilities.',
    },
    {
      num: '05',
      title: 'Generative AI for Business Intelligence',
      desc: 'Generative AI now assists in scenario simulation, synthetic data generation, and strategic planning.',
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
            Artificial Intelligence is evolving faster than ever. In 2026, businesses must stay ahead of the curve to remain competitive. From autonomous agents to AI-powered cybersecurity, the landscape is shifting rapidly.
          </p>
          <p>
            At Jawam Infotech, we help organizations leverage these trends to drive innovation, efficiency, and growth.
          </p>
        </div>
      </section>

      {/* Top 5 AI Trends Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          Top 5 AI Trends in 2026
        </h2>

        <div className="space-y-3">
          {trends.map((trend) => (
            <div
              key={trend.num}
              className="p-4 md:p-5 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-[#04A3DA]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-sky-500/20 text-[#04A3DA] font-bold text-xs">
                  {trend.num}
                </span>
                <h3 className="font-semibold text-white text-[15px] md:text-[17px]">
                  {trend.title}
                </h3>
              </div>
              <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed pl-10">
                {trend.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why These Trends Matter Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          Why These Trends Matter
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Faster decision making with automated analytics',
            'Improved customer experiences through personalization',
            'Enhanced operational efficiency across departments',
            'Stronger proactive data and endpoint security',
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-800/30 border border-slate-700/30 text-slate-300 text-sm md:text-[15px]"
            >
              <span className="w-2 h-2 rounded-full bg-[#04A3DA] flex-shrink-0"></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Jawam Infotech's AI Services Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          Jawam Infotech's AI Services
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            'AI Strategy Consulting',
            'Custom AI Model Development',
            'Edge AI Integration',
            'AI-Powered Cybersecurity',
            'Generative AI for BI & Planning',
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
          AI is no longer optional it's foundational. Businesses that embrace these trends in 2026 will lead their industries.
        </p>
      </section>

      {/* Subtle divider */}
      <div className="w-full max-w-[840px] h-[1px] mx-auto mb-14 bg-gradient-to-r from-transparent via-[#04A3DA]/60 to-transparent"></div>
    </article>
  );
}

