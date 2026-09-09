export default function DevOpsContent() {
  const benefits = [
    {
      num: '01',
      title: 'Continuous Integration & Deployment',
      desc: 'Automated CI/CD pipelines reduce manual errors and accelerate build test deploy cycles.',
    },
    {
      num: '02',
      title: 'Faster Time to Market',
      desc: 'Quick, iterative rollouts mean features reach users faster while maintaining system stability.',
    },
    {
      num: '03',
      title: 'Improved Collaboration',
      desc: 'Engineering, QA, and operations teams align under unified metrics and shared accountability.',
    },
    {
      num: '04',
      title: 'Real-time Monitoring & Feedback',
      desc: 'Automated observability and proactive alerting catch and resolve anomalies before they impact customers.',
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
            DevOps bridges the gap between software development and operations, ensuring rapid, predictable releases without compromising production stability or data integrity.
          </p>
        </div>
      </section>

      {/* Key Benefits of DevOps Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          Key Benefits of DevOps
        </h2>

        <div className="space-y-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.num}
              className="p-4 md:p-5 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-[#04A3DA]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-sky-500/20 text-[#04A3DA] font-bold text-xs">
                  {benefit.num}
                </span>
                <h3 className="font-semibold text-white text-[15px] md:text-[17px]">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed pl-10">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Jawam Infotech's DevOps Solutions Section */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          Jawam Infotech's DevOps Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: 'CI/CD Pipeline Setup', desc: 'Custom automated build, test, and containerized deployment workflows.' },
            { title: 'Infrastructure as Code (IaC)', desc: 'Terraform and Ansible automation for reproducible cloud environments.' },
            { title: 'Cloud DevOps & Orchestration', desc: 'Kubernetes cluster management, auto scaling, and microservice meshes.' },
            { title: 'Monitoring & Optimization', desc: 'Prometheus, Grafana, and APM tracking for 99.99% system availability.' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-slate-800/30 border border-slate-700/30 text-slate-300 text-sm md:text-[15px]"
            >
              <span className="font-semibold text-white block mb-0.5">{item.title}</span>
              <span className="text-slate-300 text-xs md:text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 flex items-center gap-2.5">
          <span className="w-1.5 h-5 rounded-full bg-[#04A3DA] inline-block"></span>
          Conclusion
        </h2>
        <p className="text-slate-300 text-[15px] md:text-[16px] leading-relaxed font-normal">
          DevOps is not just a methodology it's a culture shift that empowers high performing engineering organizations to achieve both speed and reliability.
        </p>
      </section>

      {/* Subtle divider */}
      <div className="w-full max-w-[840px] h-[1px] mx-auto mb-14 bg-gradient-to-r from-transparent via-[#04A3DA]/60 to-transparent"></div>
    </article>
  );
}

