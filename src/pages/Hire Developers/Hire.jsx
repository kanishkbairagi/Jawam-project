import Hero from './components/Hero'
import Form from './components/Form'

export default function Hire() {
  return (
    <main className="min-h-screen  text-white pt-[90px] md:pt-[90px] mb-[-15px] lg:mb-0 md:mb-0 lg:pt-[120px] sm:pt-36 pb-0 lg:pb-2 px-4 sm:px-6 relative overflow-hidden">
      {/* Soft background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-4">
        <Hero />
        <Form />
      </div>
    </main>
  )
}
