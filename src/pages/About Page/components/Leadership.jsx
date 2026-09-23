
import ceoImage1 from '../../../assets/sir.webp';
import ceoImage2 from '../../../assets/sir2.webp';

export default function Leadership() {
  return (
    <section className="relative py-16 lg:py-20 md:py-14 px-4 mb-10 md:mb-[50px] lg:mb-[-30px]">
      {/* Floating icon animation */}
      <style>{`
        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-3px);
          }
        }

        .icon-float-1 {
          animation: iconFloat 1.2s ease-in-out infinite;
          animation-delay: 0s;
        }

        .icon-float-2 {
          animation: iconFloat 1.6s ease-in-out infinite;
          animation-delay: 0.3s;
        }

        .icon-float-3 {
          animation: iconFloat 1.4s ease-in-out infinite;
          animation-delay: 0.6s;
        }

        .icon-float-4 {
          animation: iconFloat 1.8s ease-in-out infinite;
          animation-delay: 0.15s;
        }

        .icon-float-5 {
          animation: iconFloat 1.5s ease-in-out infinite;
          animation-delay: 0.45s;
        }

        .icon-float-6 {
          animation: iconFloat 1.7s ease-in-out infinite;
          animation-delay: 0.75s;
        }
      `}</style>

      {/* Background depth gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(30,64,120,0.45), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto mt-[-40px] md:mt-0 lg:mt-0">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-10 lg:mb-12">
          <p className="font-semibold text-[14px] sm:text-[15px] lg:text-[16px] leading-[16px] sm:leading-[17px] lg:leading-[18px] tracking-wider text-[#04A3DA] mb-2 uppercase">
            LEADERSHIP
          </p>

          <h2 className="font-bold text-[26px] sm:text-[34px] lg:text-[44px] leading-[30px] sm:leading-[38px] lg:leading-[48px] tracking-[-0.5px] text-center">
            Meet our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
              CEO
            </span>
          </h2>

          {/* Decorative divider under title */}
          <div className="hidden md:flex items-center justify-center gap-3 mt-4 mb-[-15px]">
            <div className="w-12 h-[1px] bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#04A3DA]" />
            <div className="w-12 h-[1px] bg-white/20" />
          </div>
        </div>

        {/* =========================================================
            MOBILE VIEW
        ========================================================= */}
        <div className="block md:hidden bg-[#FFFFFF0D] mt-[-30px] border border-[#BDBDBDB0] rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* CEO Photo */}
            <div className="relative shrink-0 w-[100px] h-[100px] group">
              <div
                className="absolute inset-0 rounded-full z-0"
                style={{
                  background:
                    'linear-gradient(135deg, #3b82f6, #a21caf, #ec4899, #f97316)',
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={ceoImage2}
                    alt="Shainki Gupta - CEO of Jawam Infotech"
                    className="w-full h-full object-cover object-top rounded-full pt-2"
                  />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col items-center gap-3 flex-1">
              <div>
                <h3 className="font-bold text-[26px] sm:text-[34px] leading-[30px] sm:leading-[38px] tracking-[-0.5px] mb-0.5">
                  Shainki Gupta
                </h3>

                <p className="font-semibold text-[16px] sm:text-[20px] leading-[19px] sm:leading-[24px] tracking-[-0.5px] text-[#04A3DA]">
                  Founder & CEO, Jawam Infotech
                </p>
              </div>

              <p className="font-normal text-[15px] leading-[18px] tracking-[0] text-[#E5E7EB] text-left">
                With over a decade of experience in the IT industry, he leads
                the company with a vision for innovation, integrity and
                excellence.
              </p>

              {/* Social links */}
              <div className="flex justify-center flex-wrap gap-2.5 mt-1">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/authwall?trk=qf&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fshainkigupta%2F"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-float-1 w-8 h-8 rounded-xl bg-white flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#0A66C2"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="https://mail.google.com/mail/u/0/?fs=1&to=contact@jawaminfotech.com&tf=cm"
                  aria-label="Mail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-float-2 w-8 h-8 rounded-xl bg-white flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0A66C2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </a>

                {/* X */}
                <a
                  href="https://x.com/shainki_gu71933?t=20atwb0GEyOYadcZd-3EyQ&s=08"
                  aria-label="X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-float-3 w-8 h-8 rounded-xl bg-white flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#0F172A"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Wellfound */}
                <a
                  href="https://wellfound.com/u/shainki-gupta-1"
                  aria-label="Wellfound"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-float-4 w-8 h-8 rounded-xl bg-white flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <span className="font-extrabold text-sm text-slate-900">
                    W<span className="text-red-500">:</span>
                  </span>
                </a>

                {/* Call */}
                <a
                  href="tel:+917828072833"
                  aria-label="Call"
                  className="icon-float-5 w-8 h-8 rounded-xl bg-white flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0A66C2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917828072833"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-float-6 w-8 h-8 rounded-xl bg-white flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#25D366"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            DESKTOP VIEW
        ========================================================= */}
        <div className="hidden md:block relative bg-white/[0.02] border border-white/10 rounded-[32px] p-8 lg:p-12 overflow-hidden shadow-2xl backdrop-blur-sm">
          {/* Dot grid decoration on left */}
          <div className="absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 grid grid-cols-3 gap-y-3.5 gap-x-2.5 opacity-25 pointer-events-none z-0">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-white/70"
              />
            ))}
          </div>

          <div className="relative z-10 flex items-center justify-between gap-8 lg:gap-14 pl-12 lg:pl-16">
            {/* Left: CEO Photo */}
            <div className="relative shrink-0 my-4 group cursor-pointer">
              <div className="absolute -bottom-4 -left-4 w-[240px] lg:w-[270px] h-[310px] lg:h-[350px] rounded-2xl bg-gradient-to-br from-[#04A3DA]/40 to-[#0284c7]/20 border border-[#04A3DA]/40 -z-0 transition-transform duration-500 group-hover:scale-[1.02]" />

              <div className="relative z-10 w-[240px] lg:w-[270px] h-[310px] lg:h-[350px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#566579] to-[#3a4859] border border-white/10 flex items-end justify-center shadow-xl transition-all duration-500">
                <img
                  src={ceoImage2}
                  alt="Shainki Gupta - CEO of Jawam Infotech"
                  className="absolute inset-0 w-full h-full object-cover object-top block transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                />

                <img
                  src={ceoImage1}
                  alt="Shainki Gupta - CEO of Jawam Infotech (Hover)"
                  className="absolute inset-0 w-full h-full object-cover object-top block transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>

            {/* Right: Info & CEO Quote Card */}
            <div className="flex flex-col flex-1 max-w-[500px] text-left">
              <p className="font-semibold text-xs lg:text-sm tracking-wider uppercase text-[#04A3DA] mb-1.5">
                LEADERSHIP
              </p>

              <h3 className="font-bold text-2xl lg:text-3xl xl:text-4xl text-white tracking-tight mb-1">
                Shainki Gupta
              </h3>

              <p className="font-semibold text-sm lg:text-base text-[#04A3DA]">
                Founder & CEO
              </p>

              <div className="w-full h-[1px] bg-white/15 my-4" />

              <p className="font-normal text-xs lg:text-sm text-gray-300 leading-relaxed mb-5">
                With over a decade of experience in the IT industry, he leads
                the company with a vision for innovation, integrity and
                excellence.
              </p>

              {/* CEO Quote */}
              <div className="w-full rounded-2xl bg-white/[0.03] border border-white/10 p-4 lg:p-5 flex items-start gap-3.5 mb-5 shadow-inner">
                <svg
                  className="w-6 h-6 lg:w-7 lg:h-7 text-[#04A3DA] shrink-0 mt-0.5 opacity-90"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-xs lg:text-sm text-gray-300 leading-relaxed">
                  At Jawam Infotech, we believe in delivering more than just
                  technology like we deliver trust. Our focus is on building
                  scalable solutions and providing top-tier talent that helps
                  businesses grow faster and smarter.
                </p>
              </div>

              {/* Social links */}
              <div className="flex items-center flex-wrap gap-2.5">
                <span className="text-white/80 text-xs lg:text-sm font-medium mr-1.5">
                  Connect:
                </span>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/authwall?trk=qf&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fshainkigupta%2F"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-float-1 w-7 h-7 rounded-lg bg-white flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#0A66C2"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="https://mail.google.com/mail/u/0/?fs=1&to=contact@jawaminfotech.com&tf=cm"
                  aria-label="Email"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-float-2 w-7 h-7 rounded-lg bg-white flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0A66C2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </a>

                {/* X */}
                <a
                  href="https://x.com/shainki_gu71933?t=20atwb0GEyOYadcZd-3EyQ&s=08"
                  aria-label="X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-float-3 w-7 h-7 rounded-lg bg-white flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="#0F172A"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Wellfound */}
                <a
                  href="https://wellfound.com/u/shainki-gupta-1"
                  aria-label="Wellfound"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-float-4 w-7 h-7 rounded-lg bg-white flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <span className="font-extrabold text-sm text-slate-900">
                    W<span className="text-red-500">:</span>
                  </span>
                </a>

                {/* Call */}
                <a
                  href="tel:+917828072833"
                  aria-label="Call"
                  className="icon-float-5 w-7 h-7 rounded-lg bg-white flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0A66C2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917828072833"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-float-6 w-7 h-7 rounded-lg bg-white flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="#25D366"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
