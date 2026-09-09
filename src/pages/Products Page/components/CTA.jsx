import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section id="final-cta-section" className="px-4 mb-0 md:mb-16 md:mt-[-45px] lg:mt-0 mt-0 lg:mb-20">
      <div className="max-w-[1150px] mx-auto">
        <div className="bg-[linear-gradient(357.37deg,_rgba(177,226,244,0.2)_1.93%,_rgba(230,246,251,0.2)_97.52%)] border border-white/10 rounded-2xl px-4 md:px-6 lg:px-10 py-6 md:py-10 lg:py-12 text-center">
          <h2 className="font-semibold text-[28px] md:text-[42px] lg:text-[56px] leading-[32px] md:leading-[48px] lg:leading-[64px] tracking-[-0.5px] text-white text-center mb-4 md:mb-6">
            Let's Build Your <span className="text-sky-400">Dream Product</span>
          </h2>
          <p className="mb-4 md:mb-6 mx-auto max-w-[850px] text-[#E7E8EA] font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[16px] md:leading-[18px] lg:leading-[20px] tracking-[-0.5px] text-center">
            Whether you're building a startup MVP, SaaS platform, AI solution, or enterprise application Jawam Infotech helps transform your ideas into scalable digital products.
          </p>
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 mt-4 md:mt-6">
            <a
              href="https://calendly.com/shainkigupta?hide_event_type_details=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-white text-[11px] sm:text-xs md:text-sm font-semibold px-3 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:opacity-95 transition-all whitespace-nowrap"
            >
              Book a Discovery Call
              <svg className="w-3 h-3 md:w-4 md:h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </a>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 text-[#0F172A] text-[11px] sm:text-xs md:text-sm font-semibold px-3 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white hover:bg-slate-100 transition-all shadow-lg whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
