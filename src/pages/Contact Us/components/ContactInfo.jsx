const ContactInfo = () => {
  return (
    <div  className="flex flex-col gap-4 order-2 lg:order-1">
      <div className="border border-[#BDBDBDB0] bg-[#FFFFFF1A] rounded-2xl p-4 flex items-start gap-5 hover:border-[#04A3DA]/30 hover:bg-slate-800/35 transition-all duration-300">
        <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400 shrink-0">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-base font-semibold">Phone</h3>
          <div className="p-[0.8px] rounded-2xl bg-gradient-to-r from-[#04A3DA] to-[rgba(255,255,255,0.75)] mt-2 mb-2"></div>
          <a href="tel:+919981467849" className="text-[#E7E8EA] text-sm md:text-base font-medium break-all hover:text-sky-400 transition-colors">+91 99814 67849</a>
        </div>
      </div>

      <div className="border border-[#BDBDBDB0] bg-[#FFFFFF1A] rounded-2xl p-4 flex items-start gap-5 hover:border-[#04A3DA]/30 hover:bg-slate-800/35 transition-all duration-300">
        <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400 shrink-0">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-base font-semibold">Email</h3>
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#04A3DA] to-[rgba(255,255,255,0.75)] mt-2 mb-2"></div>
          <a href="mailto:contact@jawaminfotech.com" className="text-[#E7E8EA] text-sm md:text-base font-medium break-all hover:text-sky-400 transition-colors">contact@jawaminfotech.com</a>
        </div>
      </div>

      <div className="border border-[#BDBDBDB0] bg-[#FFFFFF1A] rounded-2xl p-4 flex items-start gap-5 hover:border-[#04A3DA]/30 hover:bg-slate-800/35 transition-all duration-300">
        <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400 shrink-0">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-base font-semibold">Address</h3>
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#04A3DA] to-[rgba(255,255,255,0.75)] mt-2 mb-2"></div>
          <p className="text-[#E7E8EA] text-xs md:text-sm leading-relaxed">
            Plot No. 196, PU-4, 3rd Floor, Behind Malhar Mega Mall, Scheme No. 54, Vijay Nagar, Indore - 452010, Madhya Pradesh, India
          </p>
        </div>
      </div>

      <div className="border border-[#BDBDBDB0] bg-[#FFFFFF1A] rounded-2xl p-4 flex items-start gap-5 hover:border-[#04A3DA]/30 hover:bg-slate-800/35 transition-all duration-300">
        <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400 shrink-0">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-base font-semibold">Working Hours</h3>
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#04A3DA] to-[rgba(255,255,255,0.75)] mt-2 mb-2"></div>
          <p className="text-[#E7E8EA] text-sm md:text-base font-medium">Mon - Sat 10:00 AM - 07:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
