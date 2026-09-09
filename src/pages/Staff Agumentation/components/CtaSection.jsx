import { Link } from 'react-router-dom';

export default function CtaSection() {
  return (
    <section className="cta-section px-4  mb-0 md:mb-0 lg:mb-8 lg:mt-16">
      <div className="max-w-[1150px] mx-auto">
        <div className="bg-[linear-gradient(357.37deg,_rgba(177,226,244,0.2)_1.93%,_rgba(230,246,251,0.2)_97.52%)] border border-white/10 rounded-2xl px-4 md:px-6 lg:px-10 py-6 md:py-10 lg:py-12 text-center">
          <h2 className="font-semibold text-[28px] md:text-[42px] lg:text-[56px] leading-[32px] md:leading-[48px] lg:leading-[64px] tracking-[-0.5px] text-white text-center mb-4 md:mb-6">
            Build Your <span className="text-sky-400">Dream Team</span> Today?
          </h2>
          <p className="mb-4 md:mb-6 mx-auto max-w-[850px] text-[#E7E8EA] font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[16px] md:leading-[18px] lg:leading-[20px] tracking-[-0.5px] text-center">
            Whether you need one expert or an entire development team, Jawam Infotech provides the talent, expertise, and flexibility to help you achieve your business goals.
          </p>
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 mt-4 md:mt-6">
            <Link to="/contact-us" className="inline-flex items-center gap-2 text-[#0F172A] text-[11px] sm:text-xs md:text-sm font-semibold px-3 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white hover:bg-slate-100 transition-all shadow-lg whitespace-nowrap">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
