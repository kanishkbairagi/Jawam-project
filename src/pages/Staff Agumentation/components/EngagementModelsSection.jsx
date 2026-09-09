export default function EngagementModelsSection() {
  return (
    <section className="px-4 max-w-[1100px] mx-auto mt-0 md:mt-[-55px] lg:mt-[-40px] mb-14 md:mb-6 lg:mb-6">
      <div className="text-center mb-10 md:mb-12">
        <p className="mb-3 font-semibold text-[14px] md:text-[16px] leading-[18px] tracking-[1px] text-center text-[#04A3DA] uppercase">ENGAGEMENT MODELS</p>
        <h2 className="font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[46px] tracking-[-0.5px] text-center">
          Three ways to <span className="text-sky-400">engage with us</span>
        </h2>
      </div>
      <div className="rounded-2xl border border-[#BDBDBDB0] overflow-hidden mt-[-20px] md:mt-0">
        <div className="overflow-x-auto">
          <table className="engagement-table w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="border border-[#BDBDBDB0]">
                <th className="font-semibold text-[20px] leading-6 tracking-normal text-[#B5B7BD] text-center">Model</th>
                <th className="text-left p-4 md:p-5 text-sky-400 font-bold text-[15px] md:text-[18px]">Dedicated Resource</th>
                <th className="text-left p-4 md:p-5 text-sky-400 font-bold text-[15px] md:text-[18px]">Dedicated Team</th>
                <th className="text-left p-4 md:p-5 text-sky-400 font-bold text-[15px] md:text-[18px]">Project-Based Team</th>
              </tr>
            </thead>
            <tbody>
              {[
                { row:'Overview',    c1:'A single embedded specialist',      c2:'A full pod that works as your unit',         c3:'A complete team owning a project end-to-end' },
                { row:'Best for',    c1:'Filling a skill gap',               c2:'Scaling an existing roadmap',                c3:'Delivering a defined outcome' },
                { row:'Commitment',  c1:'Monthly rolling',                   c2:'3–12 months',                               c3:'Project duration' },
                { row:'Flexibility', c1:'High',                              c2:'High',                                      c3:'Medium' },
                { row:'Scalability', c1:'Add as needed',                     c2:'Scale the pod up/down',                     c3:'Scoped per project' },
              ].map(({row,c1,c2,c3}) => (
                <tr key={row}>
                  <td data-label="Model"               className="p-4 md:p-5 text-slate-400 text-[13px] md:text-[15px] font-medium">{row}</td>
                  <td data-label="Dedicated Resource"  className="p-4 md:p-5 text-white text-[13px] md:text-[15px]">{c1}</td>
                  <td data-label="Dedicated Team"      className="p-4 md:p-5 text-white text-[13px] md:text-[15px]">{c2}</td>
                  <td data-label="Project-Based Team"  className="p-4 md:p-5 text-white text-[13px] md:text-[15px]">{c3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
