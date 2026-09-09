export default function CloudSolutionsContent() {
  const points = [
    {
      num: '01',
      title: 'Scalability on Demand',
      desc: 'Scale storage and computing power instantly as your traffic or business needs grow.',
    },
    {
      num: '02',
      title: 'Cost Efficiency',
      desc: 'Pay as you go models eliminate upfront hardware capital costs and cut operational overhead.',
    },
    {
      num: '03',
      title: 'Remote Collaboration',
      desc: 'Modern cloud infrastructure enables global teams to deploy and collaborate seamlessly from anywhere.',
    },
    {
      num: '04',
      title: 'Security & Compliance',
      desc: 'Enterprise grade encryption, automated backups, and stringent compliance frameworks ensure data safety.',
    },
    {
      num: '05',
      title: 'Innovation Acceleration',
      desc: 'Fast-track deployment of AI, machine learning pipelines, and advanced analytics tools without infrastructure delays.',
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
            Cloud computing is no longer just a hosting solution it's the backbone of digital transformation. Businesses are leveraging cloud platforms to scale faster, optimize costs, and innovate smarter.
          </p>
        </div>
      </section>

      {/* Why Cloud Is Central to Transformation Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          Why Cloud Is Central to Transformation
        </h2>

        <div className="space-y-3">
          {points.map((point) => (
            <div
              key={point.num}
              className="p-4 md:p-5 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-[#04A3DA]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-sky-500/20 text-[#04A3DA] font-bold text-xs">
                  {point.num}
                </span>
                <h3 className="font-semibold text-white text-[15px] md:text-[17px]">
                  {point.title}
                </h3>
              </div>
              <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed pl-10">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Use Cases Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          Industry Use Cases
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { industry: 'Retail', detail: 'Real time inventory & omnichannel digital commerce' },
            { industry: 'Healthcare', detail: 'Secure HIPAA compliant patient data & telemedicine' },
            { industry: 'Finance', detail: 'Real time fraud detection & highly scalable ledger systems' },
            { industry: 'Education', detail: 'Virtual classrooms, LMS platforms & high concurrency content delivery' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-slate-800/30 border border-slate-700/30 text-slate-300 text-sm md:text-[15px]"
            >
              <span className="font-semibold text-white block mb-0.5">{item.industry}</span>
              <span className="text-slate-300 text-xs md:text-sm">{item.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Jawam Infotech's Cloud Services Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          Jawam Infotech's Cloud Services
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            'Cloud Strategy & Consulting',
            'Migration & Zero-Downtime Deployment',
            'DevOps & Infrastructure Automation',
            'Cloud-Native Microservices Development',
            'Security Architecture & Compliance Audits',
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
          Cloud computing is the engine of digital transformation. Businesses that embrace modern cloud infrastructure gain agility, resilience, and superior innovation velocity.
        </p>
      </section>

      {/* Subtle divider */}
      <div className="w-full max-w-[840px] h-[1px] mx-auto mb-14 bg-gradient-to-r from-transparent via-[#04A3DA]/60 to-transparent"></div>
    </article>
  );
}

