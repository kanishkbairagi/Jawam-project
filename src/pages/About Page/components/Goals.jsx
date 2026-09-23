import { useState, useEffect, useRef } from 'react'

const goals = [
{
  number: '01',
  title: 'Innovation',
  description:
    'We embrace innovation in everything we do, constantly pushing the boundaries of what\'s possible.',
  icon: (
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.37229 4.26748C9.77588 3.24417 11.2241 3.24417 11.6277 4.26749L12.8784 7.43865C13.0016 7.75108 13.2489 7.99838 13.5613 8.1216L16.7325 9.37229C17.7558 9.77588 17.7558 11.2241 16.7325 11.6277L13.5613 12.8784C13.2489 13.0016 13.0016 13.2489 12.8784 13.5613L11.6277 16.7325C11.2241 17.7558 9.77588 17.7558 9.37229 16.7325L8.1216 13.5613C7.99838 13.2489 7.75107 13.0016 7.43865 12.8784L4.26748 11.6277C3.24417 11.2241 3.24417 9.77588 4.26749 9.37229L7.43865 8.1216C7.75108 7.99838 7.99838 7.75107 8.1216 7.43865L9.37229 4.26748Z" stroke="#B5B7BD" strokeWidth="1.5"/>
<path d="M19.2339 15.5722C19.4475 15.0306 20.2139 15.0306 20.4275 15.5722L21.3615 17.9404C21.4268 18.1058 21.5576 18.2367 21.723 18.3019L24.0912 19.2359C24.6328 19.4495 24.6328 20.2159 24.0912 20.4295L21.723 21.3635C21.5576 21.4287 21.4268 21.5596 21.3615 21.7249L20.4275 24.0932C20.2139 24.6347 19.4475 24.6347 19.2339 24.0932L18.2999 21.7249C18.2347 21.5596 18.1038 21.4287 17.9385 21.3635L15.5702 20.4295C15.0287 20.2159 15.0287 19.4495 15.5702 19.2359L17.9385 18.3019C18.1038 18.2367 18.2347 18.1058 18.2999 17.9404L19.2339 15.5722Z" stroke="#B5B7BD" strokeWidth="1.5"/>
</svg>

  ),
},
  {
    number: '02',
    title: 'Excellence',
    description:
      'We strive for excellence in quality, service, and execution, setting the highest standards for ourselves and our work.',
icon: (
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.8307 9.33398V7.00065C19.8307 4.80076 19.8307 3.70082 19.1473 3.0174C18.4639 2.33398 17.364 2.33398 15.1641 2.33398H12.8307C10.6308 2.33398 9.5309 2.33398 8.84748 3.0174C8.16406 3.70082 8.16406 4.80076 8.16406 7.00065V9.33398" stroke="#B5B7BD" strokeWidth="1.5"/>
<path d="M12.324 6.74745C13.3684 6.17793 14.6306 6.17793 15.6751 6.74745L21.2683 9.79732C22.393 10.4106 23.0928 11.5892 23.0928 12.8702V18.6308C23.0928 19.9117 22.393 21.0904 21.2683 21.7036L15.6751 24.7535C14.6306 25.323 13.3684 25.323 12.324 24.7535L6.73069 21.7036C5.60604 21.0904 4.90625 19.9117 4.90625 18.6308V12.8702C4.90625 11.5892 5.60604 10.4106 6.73069 9.79732L12.324 6.74745Z" stroke="#B5B7BD" strokeWidth="1.5"/>
<path d="M13.0036 13.4429C13.4469 12.6476 13.6686 12.25 14 12.25C14.3314 12.25 14.5531 12.6476 14.9964 13.4429L15.1111 13.6487C15.2371 13.8747 15.3001 13.9877 15.3983 14.0622C15.4965 14.1368 15.6188 14.1645 15.8634 14.2198L16.0862 14.2702C16.947 14.465 17.3775 14.5624 17.4799 14.8917C17.5823 15.221 17.2889 15.5642 16.702 16.2505L16.5501 16.428C16.3834 16.6231 16.3 16.7206 16.2624 16.8412C16.2249 16.9618 16.2375 17.0919 16.2628 17.3521L16.2857 17.589C16.3744 18.5047 16.4188 18.9625 16.1507 19.1661C15.8826 19.3696 15.4796 19.184 14.6735 18.8129L14.465 18.7169C14.2359 18.6114 14.1214 18.5587 14 18.5587C13.8786 18.5587 13.7641 18.6114 13.535 18.7169L13.3265 18.8129C12.5204 19.184 12.1174 19.3696 11.8493 19.1661C11.5812 18.9625 11.6256 18.5047 11.7143 17.589L11.7372 17.3521C11.7625 17.0919 11.7751 16.9618 11.7376 16.8412C11.7 16.7206 11.6166 16.6231 11.4499 16.428L11.298 16.2505C10.7111 15.5642 10.4177 15.221 10.5201 14.8917C10.6225 14.5624 11.0529 14.465 11.9138 14.2702L12.1366 14.2198C12.3812 14.1645 12.5035 14.1368 12.6017 14.0622C12.6999 13.9877 12.7629 13.8747 12.8889 13.6487L13.0036 13.4429Z" stroke="#060A12" strokeWidth="1.5"/>
</svg>

)
  },
{
  number: '03',
  title: 'Integrity',
  description:
    'We conduct ourselves with integrity, honesty, and transparency, earning the trust and respect of our clients, partners, and colleagues.',
  icon: (
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.30065 24.9531H6.9974C5.89745 24.9531 5.34748 24.9531 5.00577 24.6114C4.66406 24.2697 4.66406 23.7197 4.66406 22.6198V21.3225C4.66406 20.7176 4.66406 20.4151 4.81944 20.145C4.97481 19.8749 5.20921 19.7386 5.67802 19.4659C8.7644 17.6708 13.1475 16.6604 16.073 18.4052C16.2695 18.5224 16.4463 18.664 16.5974 18.8336C17.2485 19.565 17.201 20.6688 16.4506 21.3237C16.2922 21.4621 16.1232 21.5669 15.9531 21.6034C16.0929 21.5872 16.2269 21.5686 16.3547 21.5482C17.418 21.3786 18.3106 20.8104 19.1277 20.1932L21.2361 18.6005C21.9794 18.039 23.0826 18.0389 23.826 18.6002C24.4953 19.1056 24.6999 19.9376 24.2768 20.6159C23.7834 21.4068 23.0882 22.4186 22.4206 23.0369C21.7522 23.656 20.7569 24.2088 19.9445 24.601C19.0444 25.0354 18.0502 25.2857 17.0388 25.4494C14.9877 25.7814 12.8501 25.7307 10.8198 25.3124C9.67202 25.076 8.47999 24.9531 7.30065 24.9531Z" fill="#060A12" stroke="#B5B7BD" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M12.6741 3.92456C13.2652 2.86418 13.5607 2.33398 14.0026 2.33398C14.4445 2.33398 14.74 2.86418 15.3311 3.92456L15.4841 4.19889C15.652 4.50022 15.736 4.65088 15.867 4.75029C15.9979 4.8497 16.161 4.8866 16.4872 4.96041L16.7842 5.0276C17.932 5.28731 18.5059 5.41717 18.6425 5.85626C18.779 6.29535 18.3878 6.75288 17.6052 7.66795L17.4028 7.90469C17.1804 8.16472 17.0692 8.29474 17.0192 8.45559C16.9692 8.61643 16.986 8.7899 17.0196 9.13684L17.0502 9.4527C17.1685 10.6736 17.2277 11.284 16.8702 11.5554C16.5127 11.8268 15.9754 11.5794 14.9006 11.0845L14.6226 10.9565C14.3172 10.8159 14.1645 10.7456 14.0026 10.7456C13.8407 10.7456 13.688 10.8159 13.3826 10.9565L13.1046 11.0845C12.0299 11.5794 11.4925 11.8268 11.135 11.5554C10.7775 11.284 10.8367 10.6736 10.955 9.4527L10.9856 9.13684C11.0192 8.7899 11.036 8.61643 10.986 8.45559C10.936 8.29474 10.8248 8.16472 10.6024 7.90469L10.4 7.66795C9.61745 6.75288 9.22619 6.29535 9.36273 5.85626C9.49928 5.41717 10.0732 5.28731 11.2211 5.0276L11.518 4.96041C11.8442 4.8866 12.0073 4.8497 12.1382 4.75029C12.2692 4.65088 12.3532 4.50022 12.5212 4.19889L12.6741 3.92456Z" fill="#060A12"/>
<path d="M22.6717 8.9626C22.9672 8.43241 23.115 8.16732 23.3359 8.16732C23.5569 8.16732 23.7046 8.43241 24.0002 8.9626L24.0767 9.09977C24.1607 9.25044 24.2026 9.32577 24.2681 9.37547C24.3336 9.42518 24.4151 9.44363 24.5782 9.48053L24.7267 9.51412C25.3006 9.64398 25.5876 9.70891 25.6559 9.92845C25.7241 10.148 25.5285 10.3768 25.1373 10.8343L25.036 10.9527C24.9248 11.0827 24.8692 11.1477 24.8442 11.2281C24.8192 11.3085 24.8276 11.3953 24.8444 11.5687L24.8597 11.7267C24.9189 12.3371 24.9485 12.6423 24.7697 12.778C24.591 12.9137 24.3223 12.79 23.7849 12.5426L23.6459 12.4786C23.4932 12.4083 23.4169 12.3731 23.3359 12.3731C23.255 12.3731 23.1787 12.4083 23.026 12.4786L22.8869 12.5426C22.3496 12.79 22.0809 12.9137 21.9021 12.778C21.7234 12.6423 21.753 12.3371 21.8121 11.7267L21.8274 11.5687C21.8442 11.3953 21.8526 11.3085 21.8276 11.2281C21.8026 11.1477 21.747 11.0827 21.6359 10.9527L21.5346 10.8343C21.1434 10.3768 20.9477 10.148 21.016 9.92845C21.0843 9.70891 21.3712 9.64398 21.9452 9.51412L22.0936 9.48053C22.2567 9.44363 22.3383 9.42518 22.4038 9.37547C22.4692 9.32577 22.5112 9.25044 22.5952 9.09977L22.6717 8.9626Z" stroke="#B5B7BD" strokeWidth="1.5"/>
<path d="M4.00501 8.9626C4.30056 8.43241 4.44834 8.16732 4.66927 8.16732C4.89021 8.16732 5.03798 8.43241 5.33353 8.9626L5.41 9.09977C5.49398 9.25044 5.53598 9.32577 5.60145 9.37547C5.66693 9.42518 5.74847 9.44363 5.91156 9.48053L6.06005 9.51412C6.63397 9.64398 6.92093 9.70891 6.98921 9.92845C7.05748 10.148 6.86185 10.3768 6.47058 10.8343L6.36936 10.9527C6.25817 11.0827 6.20258 11.1477 6.17757 11.2281C6.15256 11.3085 6.16096 11.3953 6.17777 11.5687L6.19308 11.7267C6.25223 12.3371 6.28181 12.6423 6.10307 12.778C5.92433 12.9137 5.65565 12.79 5.11828 12.5426L4.97926 12.4786C4.82656 12.4083 4.7502 12.3731 4.66927 12.3731C4.58834 12.3731 4.51199 12.4083 4.35928 12.4786L4.22026 12.5426C3.6829 12.79 3.41421 12.9137 3.23547 12.778C3.05673 12.6423 3.08631 12.3371 3.14546 11.7267L3.16077 11.5687C3.17758 11.3953 3.18598 11.3085 3.16097 11.2281C3.13596 11.1477 3.08037 11.0827 2.96919 10.9527L2.86796 10.8343C2.4767 10.3768 2.28106 10.148 2.34934 9.92845C2.41761 9.70891 2.70457 9.64398 3.2785 9.51412L3.42698 9.48053C3.59007 9.44363 3.67162 9.42518 3.73709 9.37547C3.80257 9.32577 3.84456 9.25044 3.92855 9.09977L4.00501 8.9626Z" fill="#B5B7BD"/>
</svg>

  )
},
  {
    number: '04',
    title: 'Collaboration',
    description:
      'We believe in the power of collaboration, working closely with our clients to understand their needs and deliver tailored solutions.',
    icon: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3307 4.66732C16.3307 5.95598 15.2861 7.00065 13.9974 7.00065C12.7087 7.00065 11.6641 5.95598 11.6641 4.66732C11.6641 3.37865 12.7087 2.33398 13.9974 2.33398C15.2861 2.33398 16.3307 3.37865 16.3307 4.66732Z" stroke="#B5B7BD" strokeWidth="1.5"/>
<path d="M22.6986 16.916C24.546 17.8448 25.6693 19.0714 25.6693 20.416C25.6693 23.3155 20.4459 25.666 14.0026 25.666C7.55928 25.666 2.33594 23.3155 2.33594 20.416C2.33594 19.0714 3.45926 17.8448 5.30663 16.916" stroke="#060A12" strokeWidth="1.5" strokeLinecap="round"/>
</svg>

    ),
  },
]

const AUTOPLAY_DURATION = 4000 // ms per goal

export default function Goals() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progressKey, setProgressKey] = useState(0)
  const intervalRef = useRef(null)

  const active = goals[activeIndex]

  useEffect(() => {
    intervalRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % goals.length)
      setProgressKey((prev) => prev + 1)
    }, AUTOPLAY_DURATION)

    return () => clearTimeout(intervalRef.current)
  }, [activeIndex])

  const handleManualSelect = (i) => {
    clearTimeout(intervalRef.current)
    setActiveIndex(i)
    setProgressKey((prev) => prev + 1)
  }

  return (
    <section className="relative mb-6 md:mb-0 lg:mb-4 px-4  lg:max-w-[1050px] md:max-w-[700px] mx-auto mt-0 md:mt-0 lg:mt-[110px]">
      <style>{`
        @keyframes goalProgressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
        .goal-progress-fill {
          animation: goalProgressFill ${AUTOPLAY_DURATION}ms linear forwards;
        }
      `}</style>

      {/* Background subtle glow */}
      <div className="absolute bottom-0 right-0 w-[400px]  h-[400px] rounded-full  pointer-events-none" />



        {/* Main content card */}
              <div className="relative z-10  mx-auto">
 
        <div className="bg-[#091D3E] shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-2xl p-5 sm:p-6 md:p-6 lg:p-6 backdrop-blur-sm">
                           {/* Section header */}
        <div className="mb-4 sm:mb-5 md:mb-5 lg:mb-6">
          <p className="font-semibold text-[14px] sm:text-[15px] lg:text-[16px] leading-[16px] sm:leading-[17px] lg:leading-[18px] tracking-[0] text-[#04A3DA] mb-2">
            GOALS AND VALUES
          </p>
          <h2 className="font-bold text-[24px] sm:text-[32px] md:text-[30px] lg:text-[44px] leading-[28px] sm:leading-[36px] md:leading-[34px] lg:leading-[48px] tracking-[-0.5px]">
            Principles that shape{' '}
            <span className="text-[#04A3DA]">
              how we build
            </span>
          </h2>
        </div>
          <div className="flex flex-col md:flex-row lg:flex-row gap-3 md:gap-4 lg:gap-5 items-start">
    
            {/* Left: large number + detail */}
            <div className="flex items-start gap-2 sm:gap-6 md:gap-2.5 lg:gap-6 md:w-[38%] lg:w-[45%] ">
              <span className="font-extrabold text-[56px] sm:text-[88px] md:text-[52px] lg:text-[128px] leading-[64px] sm:leading-[104px] md:leading-[60px] lg:leading-[160px] tracking-[-0.5px] text-center bg-gradient-to-b from-white to-white/65 bg-clip-text text-transparent shrink-0">
                {active.number}
              </span>
              <div className="pt-1 space-y-2 sm:space-y-4 md:space-y-2 lg:space-y-4 min-w-0">
                <div className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] md:w-[26px] md:h-[26px] lg:w-[45px] lg:h-[45px] rounded-lg bg-[#91949D94] flex items-center justify-center text-white/8 mb-2 [&>svg]:w-full [&>svg]:h-full">
                  {active.icon}
                </div>
                <h3 className="font-semibold text-[19px] sm:text-[27px] md:text-[18px] lg:text-[36px] leading-[22px] sm:leading-[30px] md:leading-[21px] lg:leading-[40px] tracking-[-0.5px] mb-1.5">{active.title}</h3>
                <p className=" text-[13px] sm:text-[15px] md:text-[11px] lg:text-[17px] leading-[17px] sm:leading-[18px] md:leading-[14px] lg:leading-[20px] tracking-[-0.5px]">
                  {active.description}
                </p>
              </div>
            </div>

           

            {/* Right: grid of 4 items */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-2 lg:gap-4 md:w-[62%] lg:w-[55%] w-full mt-5 md:mt-0 lg:mt-[30px]">
              {goals.map((goal, i) => (
                <button
                  key={i}
                  onClick={() => handleManualSelect(i)}
                  className={`flex flex-col gap-1 sm:gap-1.5 md:gap-0.5 lg:gap-1.5 px-2.5 sm:px-3 md:px-2 lg:px-3 py-2 md:py-1.5 lg:py-2 rounded-2xl text-left transition-all duration-300 border border-[#B5B7BD40] ${
                    activeIndex === i
                      ? 'bg-sky-500/10 border-sky-400'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[14px] sm:text-[18px] md:text-[11px] lg:text-[inherit] w-7 h-7 text-[#B5B7BD] ${activeIndex === i ? 'text-sky-400' : 'text-slate-500'}`}>
                      {goal.number}
                    </span>
                    <div className={`shrink-0 w-[16px] h-[16px] sm:w-[22px] sm:h-[22px] md:w-[14px] md:h-[14px] lg:w-[28px] lg:h-[28px] [&>svg]:w-full [&>svg]:h-full ${activeIndex === i ? 'text-sky-400' : 'text-slate-500'}`}>
                      {goal.icon}
                    </div>
                  </div>
                  <span className={` text-[15px] sm:text-[19px] md:text-[12px] lg:text-[24px] leading-[18px] sm:leading-[22px] md:leading-[14px] lg:leading-[28px] tracking-[-0.5px] ${activeIndex === i ? 'text-white' : 'text-slate-300'}`}>
                    {goal.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Progress indicator bars */}
          <div className="grid grid-cols-4 gap-1 mt-6">
            {goals.map((goal, i) => (
              <div
                key={i}
                className="h-[2px] rounded-full bg-white/15 overflow-hidden"
              >
                {i === activeIndex && (
                  <div
                    key={progressKey}
                    className="goal-progress-fill h-full bg-sky-400"
                  />
                )}
                {i < activeIndex && (
                  <div className="h-full w-full bg-sky-400/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}