export default function RolesSection() {
  return (
    <div class="mt-0 md:mt-20 lg:mt-[110px] mb-16 md:mb-0 lg:mb-20">
    <section className="px-4 max-w-[950px] mx-auto mt-[100px] md:mt-10 mt-16 md:mb-0">
      <div className="text-center mb-8 md:mb-6">
        <p className="font-semibold md:text-[18px] text-[15px] leading-[18px] text-center text-[#04A3DA] mb-0 md:mb-2">ROLES</p>
        <h2 className="font-bold md:text-[44px] text-[18px] leading-[48px] tracking-[-0.5px] text-center">
          Roles Available <span className="text-sky-400">for augmentation</span>
        </h2>
      </div>
      <div className="flex flex-col gap-3 md:gap-2 md:mt-0 mt-[-30px]">
        {[
          { title:'Software Developers', desc:'Build scalable and high-performance applications with experienced developers.' },
          { title:'UI/UX Designers',     desc:'Create intuitive and visually stunning user experiences that drive engagement.' },
          { title:'QA Engineers',        desc:'Ensure software quality through comprehensive testing and quality assurance.' },
          { title:'DevOps Engineers',    desc:'Automate infrastructure and streamline deployment processes for faster delivery.' },
          { title:'Project Managers',    desc:'Lead projects to success with expert planning, coordination, and execution.' },
          { title:'Data Scientists',     desc:'Extract insights from data and build predictive models to drive business decisions.' },
        ].map(({title,desc},i) => (
          <div key={i} className="role-card bg-[#FFFFFF1A] shadow-[0px_4px_4px_0px_#00000040] border border-white/10 px-6 py-4 rounded-2xl">
            <h3 className="font-semibold text-[16px] leading-[18px] mb-1">{title}</h3>
            <p className="font-normal text-[14px] leading-[16px]">{desc}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
