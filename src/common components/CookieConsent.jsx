import React, { useState, useEffect } from 'react'

const STORAGE_KEY = 'jawam_cookie_consent'

const CookieConsent = ({ onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [view, setView] = useState('banner') // 'banner' | 'preferences'

  // Cookie categories state
  const [preferences, setPreferences] = useState({
    necessary: true, // Always active
    analytics: true,
    functional: true,
    marketing: true,
  })

  // Load existing consent on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed?.preferences) {
          setPreferences((prev) => ({ ...prev, ...parsed.preferences, necessary: true }))
        }
        setIsVisible(false)
      } else {
        // Small delay for smooth entrance
        const timer = setTimeout(() => setIsVisible(true), 600)
        return () => clearTimeout(timer)
      }
    } catch {
      setIsVisible(true)
    }
  }, [])

  // Listen for global custom event to reopen cookie settings from footer or anywhere
  useEffect(() => {
    const handleOpenSettings = () => {
      setView('preferences')
      setIsVisible(true)
    }
    window.addEventListener('open-cookie-settings', handleOpenSettings)
    return () => {
      window.removeEventListener('open-cookie-settings', handleOpenSettings)
    }
  }, [])

  const saveConsent = (prefs) => {
    const consentData = {
      consented: true,
      timestamp: new Date().toISOString(),
      preferences: prefs,
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData))
    } catch {
      // Ignore storage errors
    }
    setPreferences(prefs)
    setIsVisible(false)
    setView('banner')
  }

  // Accept all cookies
  const handleAcceptAll = () => {
    const allEnabled = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
    }
    saveConsent(allEnabled)
  }

  // Reject non-essential cookies
  const handleRejectAll = () => {
    const essentialOnly = {
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
    }
    saveConsent(essentialOnly)
  }

  // Save current customized preferences
  const handleSavePreferences = () => {
    saveConsent({ ...preferences, necessary: true })
  }

  const toggleCategory = (key) => {
    if (key === 'necessary') return
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  if (!isVisible) return null

  // ===================== VIEW 1: SIMPLE BOTTOM-RIGHT BAR (same layout at every breakpoint) =====================
  if (view === 'banner') {
    return (
      <div
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-bar-title"
        className="fixed bottom-4 right-4 md:bottom-24 md:right-4 lg:bottom-24 lg:right-4 z-[9999] max-w-[92vw] w-[250px] animate-in fade-in slide-in-from-bottom-4 duration-300"
      >
        <div className="bg-[#0B1220] border border-[#04A3DA]/30 rounded-xl shadow-2xl shadow-black/70 flex flex-col items-start gap-3 px-4 py-4">
          <div>
            <p id="cookie-bar-title" className="text-slate-200 text-xs font-semibold">
              This website uses cookies.
            </p>
            <p className="text-slate-400 text-[11px] leading-relaxed mt-1.5">
              We use cookies to improve your browsing experience and analyze site traffic. Choose "Manage" to customize your preferences.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="flex-1 bg-gradient-to-r from-[#0ea5e9] to-[#04A3DA] hover:opacity-95 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => setView('preferences')}
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Manage
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ===================== VIEW 2: PREFERENCES CENTER (modal, same layout at every breakpoint) =====================
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-modal-title"
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-24 bg-black/40 p-4 animate-in fade-in duration-200 overflow-y-auto"
    >
      <div
        className="bg-[#0B1220] text-white border border-[#04A3DA]/30 rounded-xl shadow-2xl shadow-black/90 max-w-lg w-full p-6 relative animate-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Preferences Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/70">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setView('banner')}
                className="text-slate-400 hover:text-white text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                ← Back
              </button>
              <h2 id="cookie-modal-title" className="text-[#04A3DA] font-bold text-base tracking-tight ml-2">
                Cookie Preferences
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              aria-label="Close"
              className="text-slate-400 hover:text-white text-xl font-light leading-none p-1 transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Categories List */}
          <div className="py-4 space-y-3.5 max-h-[55vh] overflow-y-auto pr-1 text-slate-300">
            <p className="text-slate-400 text-xs leading-relaxed">
              Customize your cookie preferences below. Strictly necessary cookies cannot be disabled as
              they are essential for website operation and security.
            </p>

            {/* Category 1: Necessary */}
            <div className="p-3.5 rounded-lg border border-slate-700/70 bg-[#0F172A] flex items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold text-xs text-white">Strictly Necessary Cookies</h3>
                <p className="text-[11.5px] text-slate-400 mt-0.5">
                  Essential for website security, network management, and accessibility.
                </p>
              </div>
              <span className="shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded bg-[#04A3DA]/15 text-[#04A3DA] border border-[#04A3DA]/30">
                Always Active
              </span>
            </div>

            {/* Category 2: Analytics */}
            <div className="p-3.5 rounded-lg border border-slate-700/70 bg-[#0F172A] flex items-center justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-semibold text-xs text-white">Analytics &amp; Performance</h3>
                <p className="text-[11.5px] text-slate-400 mt-0.5">
                  Helps us understand how visitors interact with our pages to improve performance.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => toggleCategory('analytics')}
                  className="sr-only peer"
                />
                <div className="w-10 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#04A3DA]"></div>
              </label>
            </div>

            {/* Category 3: Functional */}
            <div className="p-3.5 rounded-lg border border-slate-700/70 bg-[#0F172A] flex items-center justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-semibold text-xs text-white">Functional Cookies</h3>
                <p className="text-[11.5px] text-slate-400 mt-0.5">
                  Remembers preferences and choices for an enhanced personalized experience.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={() => toggleCategory('functional')}
                  className="sr-only peer"
                />
                <div className="w-10 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#04A3DA]"></div>
              </label>
            </div>

            {/* Category 4: Marketing */}
            <div className="p-3.5 rounded-lg border border-slate-700/70 bg-[#0F172A] flex items-center justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-semibold text-xs text-white">Marketing &amp; Targeting</h3>
                <p className="text-[11.5px] text-slate-400 mt-0.5">
                  Used to provide relevant advertising and measure campaign effectiveness.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => toggleCategory('marketing')}
                  className="sr-only peer"
                />
                <div className="w-10 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#04A3DA]"></div>
              </label>
            </div>

            {/* Privacy Policy Link */}
            <p className="text-[11.5px] text-slate-400 pt-1">
              For complete details, please read our{' '}
              <button
                type="button"
                onClick={() => {
                  setIsVisible(false)
                  if (onOpenPrivacy) {
                    onOpenPrivacy()
                  } else {
                    window.dispatchEvent(new CustomEvent('open-privacy'))
                  }
                }}
                className="text-[#04A3DA] hover:underline font-medium cursor-pointer"
              >
                Privacy Policy
              </button>
              .
            </p>
          </div>

          {/* Preferences Footer Actions */}
          <div className="pt-3 border-t border-slate-700/70 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={handleSavePreferences}
              className="border border-[#04A3DA] text-[#04A3DA] hover:bg-[#04A3DA]/10 text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Confirm My Choices
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="bg-gradient-to-r from-[#0ea5e9] to-[#04A3DA] hover:opacity-95 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all cursor-pointer shadow-[0_2px_12px_rgba(4,163,218,0.35)]"
            >
              Accept All Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
