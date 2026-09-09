import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import logoIcon from '../assets/favicon.png'

const DISPLAY_MS = 1200
const EXIT_MS = 650

export default function Preloader() {
  const location = useLocation()
  const [show, setShow] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const [triggerCount, setTriggerCount] = useState(0)
  const prevPathRef = useRef(location.pathname)

  // Every time location changes (or initial mount / triggerCount changes), start the preloader
  useEffect(() => {
    // When switching sub-categories on the Industries page, do not show the full blocking preloader
    const isInternalIndustrySwitch =
      prevPathRef.current.startsWith('/industries') &&
      location.pathname.startsWith('/industries') &&
      prevPathRef.current !== location.pathname

    prevPathRef.current = location.pathname

    if (isInternalIndustrySwitch) {
      return
    }

    setShow(true)
    setIsExiting(false)
    document.body.style.overflow = 'hidden'

    // Preload logo
    const img = new Image()
    img.src = logoIcon

    const exitTimer = setTimeout(() => {
      setIsExiting(true)
      document.body.style.overflow = ''

      if (window.location.pathname.startsWith('/services/vision')) {
        const el = document.getElementById('vision-section')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (window.location.hash) {
        const id = window.location.hash.slice(1)
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (!window.location.pathname.startsWith('/industries')) {
        window.scrollTo(0, 0)
      }
    }, DISPLAY_MS)

    const finishTimer = setTimeout(() => {
      setShow(false)
      setIsExiting(false)
      document.body.style.overflow = ''
    }, DISPLAY_MS + EXIT_MS)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(finishTimer)
      document.body.style.overflow = ''
    }
  }, [location.pathname, location.search, triggerCount])

  // Listen for navigation clicks on same-page links or custom trigger events
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      if (
        anchor.target === '_blank' ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#')
      ) {
        return
      }

      try {
        const targetUrl = new URL(anchor.href, window.location.href)
        // Skip internal category switches on Industries page
        if (
          targetUrl.origin === window.location.origin &&
          targetUrl.pathname.startsWith('/industries') &&
          window.location.pathname.startsWith('/industries')
        ) {
          return
        }

        // If clicking a link pointing to the exact same page, increment triggerCount to show loader
        if (
          targetUrl.origin === window.location.origin &&
          targetUrl.pathname === window.location.pathname &&
          !targetUrl.hash
        ) {
          setTriggerCount((prev) => prev + 1)
        }
      } catch {}
    }

    const handleCustomTrigger = () => {
      setTriggerCount((prev) => prev + 1)
    }

    window.addEventListener('click', handleGlobalClick, true)
    window.addEventListener('trigger-preloader', handleCustomTrigger)
    window.addEventListener('show-preloader', handleCustomTrigger)

    return () => {
      window.removeEventListener('click', handleGlobalClick, true)
      window.removeEventListener('trigger-preloader', handleCustomTrigger)
      window.removeEventListener('show-preloader', handleCustomTrigger)
    }
  }, [])

  if (!show) return null

  return (
    <aside
      role="status"
      aria-label="Loading..."
      className={`fixed inset-0 z-[99999] flex items-center justify-center select-none ${
        isExiting ? 'pointer-events-none' : ''
      }`}
    >
      <style>{`
        @keyframes ai-halo {
          0%, 100% { transform: scale(1); opacity: 0.16; }
          50% { transform: scale(1.12); opacity: 0.32; }
        }
        @keyframes ai-logo-pulse {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 6px rgba(4, 163, 218, 0.45));
          }
          50% {
            transform: scale(1.045);
            filter: drop-shadow(0 0 16px rgba(4, 163, 218, 0.75));
          }
        }
        @keyframes ai-ring-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ai-ring-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes ai-nodes-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ai-node-blink {
          0%, 100% { opacity: 0.35; r: 2.6; }
          50% { opacity: 1; r: 3.6; }
        }
        @keyframes ai-radar-ping {
          0% { transform: scale(0.55); opacity: 0.4; }
          100% { transform: scale(1.15); opacity: 0; }
        }

        .ai-loader-stage {
          width: 190px;
          height: 190px;
          will-change: transform, opacity, filter;
        }
        @media (min-width: 640px) {
          .ai-loader-stage { width: 230px; height: 230px; }
        }

        .ai-halo {
          animation: ai-halo 3s ease-in-out infinite;
          will-change: transform, opacity;
        }
        .ai-ring-outer {
          animation: ai-ring-cw 7.5s linear infinite;
          will-change: transform;
        }
        .ai-ring-inner {
          animation: ai-ring-ccw 11s linear infinite;
          will-change: transform;
        }
        .ai-nodes {
          animation: ai-nodes-spin 9s linear infinite;
          will-change: transform;
        }
        .ai-node-dot {
          animation: ai-node-blink 1.8s ease-in-out infinite;
          transform-origin: center;
        }
        .ai-logo-core {
          animation: ai-logo-pulse 2.4s ease-in-out infinite;
          will-change: transform, filter;
        }
        .ai-ping {
          animation: ai-radar-ping 2.4s ease-out infinite;
        }
      `}</style>

      {/* Backdrop: dissolves independently so the page beneath is revealed
          smoothly underneath the shrinking logo, with no hard cut. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-[#0F172A] ${
          isExiting
            ? 'opacity-0 transition-opacity duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]'
            : 'opacity-100'
        }`}
      />

      <div
        className={`ai-loader-stage relative flex items-center justify-center ${
          isExiting
            ? 'scale-[0.35] opacity-0 blur-md transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]'
            : 'scale-100 opacity-100 blur-0'
        }`}
      >
        {/* Ambient breathing halo behind everything */}
        <div
          aria-hidden="true"
          className="ai-halo absolute inset-0 rounded-full bg-[#04A3DA] blur-3xl"
        />

        {/* Radar-style pulses breathing outward from the core */}
        <span
          aria-hidden="true"
          className="ai-ping absolute h-16 w-16 rounded-full border border-[#38BDF8]"
          style={{ animationDelay: '0s' }}
        />
        <span
          aria-hidden="true"
          className="ai-ping absolute h-16 w-16 rounded-full border border-[#38BDF8]"
          style={{ animationDelay: '1.2s' }}
        />

        {/* Shared glow filter for the SVG rings/nodes */}
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <defs>
            <filter id="ai-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="1.6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Outer rotating scan arc */}
        <svg
          aria-hidden="true"
          viewBox="0 0 200 200"
          className="ai-ring-outer absolute inset-0 h-full w-full"
        >
          <circle
            cx="100"
            cy="100"
            r="92"
            fill="none"
            stroke="#04A3DA"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeDasharray="60 300"
            opacity="0.9"
            filter="url(#ai-glow)"
          />
        </svg>

        {/* Slower counter-rotating secondary arc for depth */}
        <svg
          aria-hidden="true"
          viewBox="0 0 200 200"
          className="ai-ring-inner absolute inset-0 h-full w-full"
        >
          <circle
            cx="100"
            cy="100"
            r="78"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeDasharray="40 210"
            opacity="0.45"
            filter="url(#ai-glow)"
          />
        </svg>

        {/* Orbiting neural nodes, tethered to the core by faint spokes */}
        <svg
          aria-hidden="true"
          viewBox="0 0 200 200"
          className="ai-nodes absolute inset-0 h-full w-full"
        >
          {[0, 120, 240].map((angle, i) => {
            const rad = (angle * Math.PI) / 180
            const r = 64
            const x = 100 + r * Math.cos(rad)
            const y = 100 + r * Math.sin(rad)
            return (
              <g key={angle}>
                <line
                  x1="100"
                  y1="100"
                  x2={x}
                  y2={y}
                  stroke="#B1E2F4"
                  strokeWidth="0.75"
                  opacity="0.25"
                />
                <circle
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#B1E2F4"
                  filter="url(#ai-glow)"
                  className="ai-node-dot"
                  style={{ animationDelay: `${i * 0.6}s` }}
                />
              </g>
            )
          })}
        </svg>

        {/* AI core: the logo itself, breathing gently at the center */}
        <div className="ai-logo-core relative z-10 flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20">
          <img
            src={logoIcon}
            alt="Jawam Logo"
            className="h-[50px] w-[50px] select-none object-contain"
          />
        </div>
      </div>
    </aside>
  )
}
