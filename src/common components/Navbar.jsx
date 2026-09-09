import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import navIcon from '../assets/nav-icon.png'

function IconTalentHub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function IconStaffAugmentation() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6M22 11h-6" />
    </svg>
  )
}

function IconEvents() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

function IconPortfolio() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

function IconProducts() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
  )
}

function IconAiSolutions() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v2M12 19v2M5 12H3M21 12h-2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M17 7l1.4-1.4M5.6 18.4 7 17" />
      <rect x="7" y="7" width="10" height="10" rx="2" />
    </svg>
  )
}

function IconServices() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}

const resourceLinks = [
  { label: 'Talent Hub', to: '/talent', Icon: IconTalentHub },
  { label: 'IT Staff Augmentation', to: '/augmentation', Icon: IconStaffAugmentation },
  { label: 'Events', to: '/event', Icon: IconEvents },
  { label: 'Portfolio', to: '/portfolio', Icon: IconPortfolio },
  { label: 'Products', to: '/products', Icon: IconProducts },
  { label: 'AI Solutions & Services', to: '/ai-solutions', Icon: IconAiSolutions },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const [desktopResourcesOpen, setDesktopResourcesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileResourcesOpen(false)
  }

  // Auto-close mobile menu AND desktop dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setMobileResourcesOpen(false)
    setDesktopResourcesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
<header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || mobileMenuOpen
      ? 'bg-[#0F172A]/95 backdrop-blur-md'
      : 'bg-transparent'
  }`}
>
      <style>{`
        .resource-row .resource-icon svg {
          transition: transform 0.6s ease;
        }
        .resource-row:hover .resource-icon svg {
          transform: rotate(360deg);
        }
      `}</style>

      <div className="max-w-[1150px] mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">

        <div className="flex justify-start shrink-0">
          <Link to="/" className="inline-block">
            <img src={navIcon} alt="JAWAM INFOTECH" className="h-10 sm:h-12 md:h-16 w-auto object-contain" />
          </Link>
        </div>

        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-x-6 md:gap-x-8 px-6 md:px-8 py-2.5 rounded-full text-base md:text-sm font-medium whitespace-nowrap">
            <li><Link to="/" className="text-[#E7E8EA] hover:text-sky-400 transition-colors  text-[17px]">Home</Link></li>
            <li><Link to="/about-us" className="text-[#E7E8EA] hover:text-sky-400 transition-colors  text-[17px]">About Us</Link></li>
            <li><Link to="/services" className="text-[#E7E8EA] hover:text-sky-400 transition-colors  text-[17px]">Services</Link></li>
            <li><Link to="/industries" className="text-[#E7E8EA] hover:text-sky-400 transition-colors  text-[17px]">Industries</Link></li>
            <li><Link to="/work" className="text-[#E7E8EA] hover:text-sky-400 transition-colors  text-[17px]">Work With Us</Link></li>
            <li><Link to="/careers" className="text-[#E7E8EA] hover:text-sky-400 transition-colors  text-[17px]">Careers</Link></li>

            {/* Resources dropdown — now controlled by state instead of pure CSS
                :hover, so it can be force-closed on navigation. Still opens/closes
                on mouse enter/leave for the same hover-driven feel as before. */}
            <li
              className="relative"
              onMouseEnter={() => setDesktopResourcesOpen(true)}
              onMouseLeave={() => setDesktopResourcesOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 transition-colors  text-[17px] ${
                  desktopResourcesOpen ? 'text-sky-400' : 'text-[#E7E8EA]'
                }`}
              >
                Resources
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${desktopResourcesOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/* Invisible padding bridges the gap so hover survives moving the cursor down into the panel */}
              <div
                className={`absolute top-full left-0 -translate-x-[85%] pt-4 transition-all duration-200 ${
                  desktopResourcesOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible translate-y-1'
                }`}
              >
                <div className="w-[620px] bg-[#0F172A] rounded-xl shadow-2xl px-10 py-10">
                  <div className="grid grid-cols-2 gap-x-16 gap-y-10">
                    {resourceLinks.map(({ label, to, Icon }) => (
                      <Link
                        key={label}
                        to={to}
                        onClick={() => setDesktopResourcesOpen(false)}
                        className="resource-row group/item flex items-center gap-4 rounded-2xl px-4 py-3 -mx-4 -my-3 hover:bg-white/5 transition-colors"
                      >
                        <span className="resource-icon w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-sky-400/20 transition-colors">
                          <Icon />
                        </span>
                        <span className="text-[#E7E8EA] text-[17px]  whitespace-nowrap transition-all duration-300 group-hover/item:text-sky-400 group-hover/item:translate-x-1">
                          {label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 p-2 rounded-lg text-white hover:bg-white/10 transition-colors z-50 shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 transform origin-center ${
              mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 transform origin-center ${
              mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>

        <div className="hidden lg:flex justify-end">
          <Link to="/contact-us" className="text-white font-semibold text-[15px] px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:opacity-95 transition-all">
            Contact Us
          </Link>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 w-full h-[calc(100dvh-5rem)] bg-[#0F172A] overflow-y-auto border-t border-white/10 shadow-2xl z-50 ${
          mobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col items-start px-6 py-6 gap-3.5 pb-28">
          <li className="w-full"><Link to="/" onClick={closeMobileMenu} className="text-slate-200 hover:text-sky-400 text-lg font-semibold transition-colors block w-full py-1.5">Home</Link></li>
          <li className="w-full"><Link to="/about-us" onClick={closeMobileMenu} className="text-slate-200 hover:text-sky-400 text-lg font-semibold transition-colors block w-full py-1.5">About Us</Link></li>
          <li className="w-full"><Link to="/services" onClick={closeMobileMenu} className="text-slate-200 hover:text-sky-400 text-lg font-semibold transition-colors block w-full py-1.5">Services</Link></li>
          <li className="w-full"><Link to="/industries" onClick={closeMobileMenu} className="text-slate-200 hover:text-sky-400 text-lg font-semibold transition-colors block w-full py-1.5">Industries</Link></li>
          <li className="w-full"><Link to="/work" onClick={closeMobileMenu} className="text-slate-200 hover:text-sky-400 text-lg font-semibold transition-colors block w-full py-1.5">Work With Us</Link></li>
          <li className="w-full"><Link to="/careers" onClick={closeMobileMenu} className="text-slate-200 hover:text-sky-400 text-lg font-semibold transition-colors block w-full py-1.5">Careers</Link></li>

          {/* Resources accordion — tap to expand on mobile */}
          <li className="w-full">
            <button
              type="button"
              onClick={() => setMobileResourcesOpen((prev) => !prev)}
              className="flex items-center justify-start gap-2 w-full text-slate-200 hover:text-sky-400 text-lg font-semibold transition-colors py-1.5"
              aria-expanded={mobileResourcesOpen}
            >
              Resources
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <div className={`${mobileResourcesOpen ? 'grid' : 'hidden'} grid-cols-2 gap-2 mt-2 mb-2`}>
              {resourceLinks.map(({ label, to, Icon }) => (
                <Link
                  key={label}
                  to={to}
                  onClick={closeMobileMenu}
                  className="resource-row group/item flex items-center gap-2.5 py-2.5 px-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="resource-icon w-7 h-7 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-sky-400/20 transition-colors">
                    <Icon />
                  </span>
                  <span className="text-slate-300 text-xs font-medium transition-all duration-300 group-hover/item:text-sky-400 group-hover/item:translate-x-1">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </li>

          <li className="pt-2">
            <Link
              to="/contact-us"
              onClick={closeMobileMenu}
              className="inline-block text-white text-base font-semibold px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:opacity-95 transition-all"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}