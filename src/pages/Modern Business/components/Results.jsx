import React, { useEffect, useRef, useState } from 'react'

// Splits a stat string like "90%+" or "24/7" into a numeric part to animate
// and a trailing suffix to keep static (handles "+", "%", "/7", etc.)
function parseStat(raw) {
  const match = raw.match(/^(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { target: null, suffix: raw }
  return { target: parseFloat(match[1]), suffix: match[2] }
}

function useCountUp(target, isActive, duration = 2800) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isActive || target === null) return
    let start = null
    let frameId

    const step = (timestamp) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) frameId = requestAnimationFrame(step)
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [isActive, target, duration])

  return value
}

function StatItem({ stat, isActive, delay }) {
  const { target, suffix } = parseStat(stat.number)
  const animated = useCountUp(target, isActive)
  const isInteger = target !== null && Number.isInteger(target)
  const display =
    target === null
      ? stat.number
      : `${isInteger ? Math.round(animated) : animated.toFixed(1)}${suffix}`

  return (
    <div
      className="stat-rise flex flex-col items-center sm:items-start relative z-10"
      style={{ animationDelay: isActive ? `${delay}ms` : '0ms' }}
    >
   <span
  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-400 tracking-tight mb-2 tabular-nums"
  style={{
    transform: 'none',
    rotate: 'none',
  }}
>
  {display}
</span>
      <span className="text-slate-300 text-xs sm:text-sm font-medium leading-snug text-center sm:text-left">
        {stat.label}
      </span>
    </div>
  )
}

export default function Results() {
  const stats = [
    { number: '30+', label: 'Engineers' },
    { number: '20+', label: 'Active Projects' },
    { number: '12+', label: 'Countries Served' },
    { number: '24/7', label: 'Support Coverage' },
    { number: '2+', label: 'Years In Business' },
    { number: '90%+', label: 'Client Retention' },
  ]

  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 text-white relative mt-0 md:mt-0 lg:mt-12">
      <style>{`
        @keyframes results-blob-pulse {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes results-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes stat-rise {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .results-blob-1 { animation: results-blob-pulse 8s ease-in-out infinite; }
        .results-blob-2 { animation: results-blob-pulse 8s ease-in-out infinite 1.5s; }
        .results-fade-up {
          opacity: 0;
          animation: results-fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .stat-rise {
          opacity: 0;
          animation: stat-rise 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .results-blob-1, .results-blob-2, .results-fade-up, .stat-rise {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Container Box */}
        <div className="relative bg-[#091D3E] border border-sky-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">

          {/* FIGMA ACCURATE BLOB 1 (Bottom-Left behind '30+ Engineers' stat item) */}
          <div
            className="results-blob-1 absolute rounded-full pointer-events-none z-0"
            style={{
              width: '139px',
              height: '137px',
              backgroundColor: '#04A3DA',
              filter: 'blur(122.75px)',
              bottom: '10px',
              left: '5px',
            }}
          />

          {/* FIGMA SVG GLOW EFFECT (Top-Right corner) */}
          <div className="results-blob-2 absolute -top-16 -right-6 pointer-events-none z-0">
            <svg
              width="349"
              height="353"
              viewBox="0 0 349 353"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[280px] h-[280px] sm:w-[349px] sm:h-[353px]"
            >
              <g filter="url(#filter0_f_6772_11164)">
                <circle cx="244.176" cy="108.5" r="65.5" fill="#04A3DA" />
              </g>
              <defs>
                <filter
                  id="filter0_f_6772_11164"
                  x="-0.000579834"
                  y="-135.676"
                  width="488.353"
                  height="488.353"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="89.3382" result="effect1_foregroundBlur_6772_11164" />
                </filter>
              </defs>
            </svg>
          </div>

          <div className="relative z-10">
            {/* Section Tag */}
            <span
              className={`text-sky-400 text-[11px] sm:text-sm font-bold tracking-[0.2em] uppercase block mb-3 text-center sm:text-left ${isVisible ? 'results-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: '0ms' }}
            >
              BUILDING TRUST THROUGH RESULTS
            </span>

            {/* Heading */}
            <h2
              className={`text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight max-w-2xl mb-8 sm:mb-14 lg:mb-16 text-center sm:text-left mx-auto sm:mx-0 ${isVisible ? 'results-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: '100ms' }}
            >
              Our expertise and reliability,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                proven by numbers
              </span>
            </h2>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 mt-[-25px] md:mt-[-50px] lg:mt-[-50px] lg:grid-cols-6 gap-x-4 gap-y-6 sm:gap-8 pt-4 relative z-10">
              {stats.map((stat, idx) => (
                <StatItem key={idx} stat={stat} isActive={isVisible} delay={200 + idx * 90} />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
