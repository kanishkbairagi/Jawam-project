export default function StaffAugmentationContent() {
  const benefits = [
    {
      title: 'Agility & Elastic Scale',
      desc: 'Ramp up your engineering or design capacity instantly when sprint deadlines are tight, and scale down smoothly when features ship.',
    },
    {
      title: 'Cost Efficiency',
      desc: 'Avoid recruitment fees, payroll overhead, equity vesting, benefits, and long-term severance commitments.',
    },
    {
      title: 'Specialized Niche Expertise',
      desc: 'Access verified experts in adaptive UI/UX, modular dashboard architecture, mobile-first design, or advanced automated QA.',
    },
    {
      title: 'Focus on Core Product Vision',
      desc: 'Your internal core leaders stay focused on strategic product differentiation while augmented engineers handle high velocity execution.',
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
            In the modern SaaS ecosystem, speed and adaptability are everything. Founders and engineering leads constantly face the challenge of scaling their technical teams quickly while keeping overhead strictly under control.
          </p>
          <p>
            Traditional hiring is slow, costly, and rigid. That's where staff augmentation comes in a proven model allowing you to embed vetted, senior talent into your workflow on demand.
          </p>
        </div>
      </section>

      {/* What Is Staff Augmentation Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          What Is Staff Augmentation?
        </h2>
        <p className="text-slate-300 text-[15px] md:text-[16px] leading-relaxed font-normal">
          Staff augmentation is a flexible talent model where companies bring in external specialists who integrate directly into their in house teams. Unlike rigid full-project outsourcing, you retain full architectural and roadmap control while plugging specific skill gaps immediately.
        </p>
      </section>

      {/* Why It Matters for SaaS Companies Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          Why It Matters for SaaS Companies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-[#04A3DA]/40 transition-all duration-300"
            >
              <h3 className="font-semibold text-white text-[15px] md:text-[16px] mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#04A3DA]"></span>
                {benefit.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Real-World Example Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          Real-World Example
        </h2>

        <div className="rounded-xl bg-gradient-to-r from-sky-950/30 to-slate-900/40 border border-slate-700/50 p-5 md:p-6 space-y-3.5 text-slate-300 text-[14px] md:text-[15px] leading-relaxed">
          <p>
            Imagine you're building a new Inventory Management Dashboard. Your in-house team is focused entirely on backend business logic and API integrations, but you urgently need a UI/UX expert to craft adaptive, frictionless user journeys.
          </p>
          <p>
            Instead of spending four months recruiting, you augment your team with a dedicated designer for a quarter. The result is immediate delivery, lower total expenditure, and high fidelity output.
          </p>
          <div className="pt-2 border-t border-slate-700/40 text-[#04A3DA] font-medium text-sm">
            At Jawam Infotech, we don't just provide talent we empower your product vision.
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          Conclusion
        </h2>
        <p className="text-slate-300 text-[15px] md:text-[16px] leading-relaxed font-normal">
          Staff augmentation isn't about filling seats. It's about scaling smart, staying lean, and delivering faster. For SaaS founders, it's the difference between struggling to keep up and leading the market.
        </p>
      </section>

      {/* Subtle divider */}
      <div className="w-full max-w-[840px] h-[1px] mx-auto mb-14 bg-gradient-to-r from-transparent via-[#04A3DA]/60 to-transparent"></div>
    </article>
  );
}

