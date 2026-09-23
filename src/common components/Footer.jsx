import { Link, useNavigate } from 'react-router-dom';
import logoIcon1 from '../assets/logo-icon1.png';
import portfolioPdf from '/Jawam_infotech_Portfolio.pdf';

function Footer({ onOpenTerms, onOpenPrivacy }) {
  const navigate = useNavigate();

  const handleServiceClick = (path) => {
    navigate(path);
    setTimeout(() => {
      const el = document.getElementById('vision-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleOpenPositionsClick = () => {
    if (window.location.pathname === '/careers') {
      setTimeout(() => {
        const el = document.getElementById('open-roles');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  };

  return (
    <footer className="bg-[#0F172A] mb-16 lg:mb-0 md:mb-16 border-t border-white/20 py-8 md:py-14 px-6 md:px-10 lg:px-12 mt-12">
      <div className="mt-[-16px] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-y-2 md:gap-x-8 lg:gap-4">

        <div className="contents md:flex md:flex-col md:items-start md:space-y-1 md:mt-2 lg:mt-0">
          <Link to="/" className="order-1 md:order-none flex items-center gap-2 md:gap-3 mb-[-18px] md:mb-[-18px] lg:mb-7 no-underline md:-translate-x-[50px]">
            <img src={logoIcon1} alt="JAWAM INFOTECH" className="footer-brand-logo h-9 w-auto md:h-12 object-contain shrink-0 ml-[-20px] md:ml-0 md:relative md:left-6 transition-transform duration-300 hover:-translate-y-1" />
            <span className="footer-brand-text font-bold text-white text-sm md:text-base tracking-wide whitespace-nowrap leading-none ml-[-15px] md:ml-0 mr-[100px] md:mr-0">
              JAWAM INFOTECH
            </span>
          </Link>

<div className="order-2 md:order-none mb-0 md:mb-6">
  <h4 className="font-bold text-white mt-0 md:mt-[25px] lg:mt-0 text-base md:text-lg mb-2">We are hiring !</h4>
  <p className="text-white text-xs md:text-sm mb-5">Discover your next role at Jawam.</p>
  <div className="flex flex-wrap items-center gap-3 mb-0 md:mb-8">
    <Link
      to="/careers#open-roles"
      onClick={handleOpenPositionsClick}
      className="group inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-1 no-underline"
    >
      Open Positions
      <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </Link>
    <a
      href={portfolioPdf}
      download="Jawam_infotech_Portfolio.pdf"
      className="group inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-1 no-underline"
    >
      Our Portfolio
      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </a>
  </div>
</div>

          {/* Social Icons Desktop / Large Screen */}
          <div className="footer-social-icons order-6 md:order-none mt-4 md:mt-0 flex items-center gap-2.5 md:hidden lg:flex">
            <a href="https://www.linkedin.com/company/jawam-infotech/about/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0A66C2] flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1.5 no-underline" aria-label="LinkedIn">
              <svg className="w-4 h-4 md:w-[18px] md:h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="https://www.instagram.com/jawam_infotech/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gradient-to-tr hover:from-[#FEDA75] hover:via-[#D62976] hover:to-[#4F5BD5] flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1.5 no-underline" aria-label="Instagram">
              <svg className="w-4 h-4 md:w-[18px] md:h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            <a href="https://x.com/jawam23769?t=V5WOApqYT3XVQ_nFJKah9w&s=08" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-black flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1.5 no-underline" aria-label="X">
              <svg className="w-4 h-4 md:w-[18px] md:h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://www.facebook.com/share/SQtTtnasGXD86bEz/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1877F2] flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1.5 no-underline" aria-label="Facebook">
              <svg className="w-4 h-4 md:w-[18px] md:h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="https://wellfound.com/company/jawam-infotech-1" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-black flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1.5 text-xs md:text-sm font-bold no-underline" aria-label="Wellfound">W</a>
          </div>
        </div>

        <div className="order-3 md:order-none">
          <h4 className="font-bold text-white text-base md:text-lg mb-4 pb-2 border-b border-white/10">Company</h4>
          <ul className="space-y-1 text-xs md:text-sm text-white">
            <li><Link to="/about-us" className="hover:text-sky-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 no-underline"><span>→</span> About Us</Link></li>
            <li><Link to="/contact-us" className="hover:text-sky-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 no-underline"><span>→</span> Contact Us</Link></li>
            <li><Link to="/careers" className="hover:text-sky-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 no-underline"><span>→</span> Careers</Link></li>
            <li><Link to="/blog" className="hover:text-sky-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 no-underline"><span>→</span> Blogs</Link></li>
            <li>
              <button
                type="button"
                onClick={onOpenTerms}
                className="hover:text-sky-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 no-underline text-left w-full"
              >
                <span>→</span> Terms &amp; Conditions
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="hover:text-sky-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 no-underline text-left w-full"
              >
                <span>→</span> Privacy Policy
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-settings'))}
                className="hover:text-sky-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 no-underline text-left w-full"
              >
                <span>→</span> Cookie Settings
              </button>
            </li>
          </ul>
        </div>

        <div className="order-4 md:order-none">
          <h4 className="font-bold text-white text-base md:text-lg mb-4 pb-2 border-b border-white/10">Services</h4>
          <ul className="space-y-1 text-xs md:text-sm text-white">
            <li>
              <button
                type="button"
                onClick={() => handleServiceClick('/services/vision14')}
                className="hover:text-sky-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 md:gap-2 no-underline whitespace-nowrap text-left w-full"
              >
                <span>→</span> IT Staff Augmentation
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleServiceClick('/services/vision7')}
                className="hover:text-sky-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 md:gap-2 no-underline whitespace-nowrap text-left w-full"
              >
                <span>→</span> Custom Software Development
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleServiceClick('/services/vision10')}
                className="hover:text-sky-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 md:gap-2 no-underline whitespace-nowrap text-left w-full"
              >
                <span>→</span> QA &amp; Testing
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleServiceClick('/services/vision4')}
                className="hover:text-sky-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 md:gap-2 no-underline text-left w-full"
              >
                <span>→</span> UI/UX Design
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleServiceClick('/services/vision6')}
                className="hover:text-sky-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 md:gap-2 no-underline whitespace-nowrap text-left w-full"
              >
                <span>→</span> DevOps and Cloud Services
              </button>
            </li>
          </ul>
        </div>

        <div className="order-5 md:order-none">
          <h4 className="font-bold text-white text-base md:text-lg mb-4 pb-2 border-b border-white/10">Get in Touch</h4>
          <ul className="space-y-2 text-xs md:text-sm text-white">
            <li className="group flex items-start gap-2 md:gap-3">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white shrink-0 mt-0.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Plot No. 196, PU-4, 3rd Floor, Behind Malhar Mega Mall, Scheme No. 54, Vijay Nagar, Indore - 452010, Madhya Pradesh, India</span>
            </li>
            <li className="group flex items-center gap-2 md:gap-3">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-white shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-sky-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@jawaminfotech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-400 transition-all duration-300 hover:translate-x-1 no-underline inline-block"
              >
                contact@jawaminfotech.com
              </a>
            </li>
            <li className="group flex items-center gap-2 md:gap-3">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+919981467849" className="hover:text-sky-400 transition-all duration-300 hover:translate-x-1 no-underline inline-block">+91 99814 67849</a>
            </li>
          </ul>
        </div>

        {/* Social Icons Tablet View */}
        <div className="hidden md:flex lg:hidden items-center justify-start gap-2.5 col-span-2 mt-12">
          <a href="https://www.linkedin.com/company/jawam-infotech/about/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0A66C2] flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1.5 no-underline" aria-label="LinkedIn">
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
          <a href="https://www.instagram.com/jawam_infotech/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gradient-to-tr hover:from-[#FEDA75] hover:via-[#D62976] hover:to-[#4F5BD5] flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1.5 no-underline" aria-label="Instagram">
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
          </a>
          <a href="https://x.com/jawam23769?t=V5WOApqYT3XVQ_nFJKah9w&s=08" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-black flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1.5 no-underline" aria-label="X">
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
          <a href="https://www.facebook.com/share/SQtTtnasGXD86bEz/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1877F2] flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1.5 no-underline" aria-label="Facebook">
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          </a>
          <a href="https://wellfound.com/company/jawam-infotech-1" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-black flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1.5 text-sm font-bold no-underline" aria-label="Wellfound">W</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;