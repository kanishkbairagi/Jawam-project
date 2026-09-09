import { useEffect, useState } from 'react';
import { Crown, Lightbulb, Users, Headphones } from 'lucide-react';

const benefits = [
  {
    icon: Crown,
    title: 'Best in industry',
    description: 'Setting benchmarks with top tier industry solutions, delivering excellence that defines us as the best in business.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Hub',
    description: 'Driving progress through creative, customer-focused solutions that redefine innovation in every project we handle.'
  },
  {
    icon: Users,
    title: 'Professional Staff',
    description: 'Empowering excellence with a team of dedicated and highly professional staff committed to your lasting success.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Delivering round the clock support to ensure your business runs smoothly without boundaries or interruptions.'
  },
];

export default function Benefits() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % benefits.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-[-120px] md:mt-[-90px] lg:mt-0">
      <section className="bg-[#0F172A] px-4 md:px-6 lg:px-8 lg:mt-[-70px] mt-[-50px] mb-[100px] md:mb-[80px] lg:mb-0">
        <div className="max-w-[900px] mx-auto text-center mb-6 sm:mb-8 lg:mb-14">
          <span className="font-semibold text-[16px] leading-[18px] tracking-[0] text-[#04A3DA] mb-6 md:mb-4 lg:mb-4 block">
            WHY BUSINESSES TRUST US?
          </span>
          <h2 className="font-bold text-[18px] md:max-w-[650px] md:mx-auto mt-[-15px] md:mt-[-5px] lg:mt-0 md:text-[32px] lg:text-[44px] mt-2 lg:mt-4 leading-[25px] md:leading-[38px] lg:leading-[48px] tracking-[-0.5px] text-center lg:max-w-[800px] lg:mx-auto">
            We go beyond delivering services, we build <span className="text-sky-400">lasting partnerships</span>
          </h2>
        </div>

        <div className="lg:max-w-[920px] md:max-w-[700px] mx-auto mt-[-15px] md:mt-[-15px] lg:mt-[-25px]">

          {/* MOBILE ONLY: auto-sliding carousel, taller cards */}
          <div className="md:hidden">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="w-full shrink-0 px-1.5">
                      <div className="bg-[#FBFCFD33] rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-sky-400 rounded-full flex items-center justify-center mb-4 sm:mb-5 shrink-0">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-[20px] sm:text-[24px] leading-[26px] sm:leading-[32px] tracking-[-0.5px] text-center mb-2 sm:mb-3">
                          {benefit.title}
                        </h3>
                        <p className="font-normal text-[14px] sm:text-[15px] text-center leading-[20px] sm:leading-[22px] tracking-[-0.5px] text-[var(--Color-background-default,#E7E8EA)]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {benefits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === index ? 'w-6 bg-sky-400' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* MD+ : original grid, unchanged */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-3 lg:gap-x-6 lg:gap-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-[#FBFCFD33]  rounded-2xl p-5 sm:p-6 md:p-5 lg:p-8 flex flex-col items-center text-center hover:bg-slate-700/70 hover:border-sky-400/50 lg:hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-sky-400 rounded-full flex items-center justify-center mb-4 sm:mb-5 md:mb-3 lg:mb-5 shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-[20px] sm:text-[24px] md:text-[19px] lg:text-[26px] leading-[26px] sm:leading-[32px] md:leading-[26px] lg:leading-[32px] tracking-[-0.5px] text-center mb-2 sm:mb-3 md:mb-2 lg:mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-normal text-[14px] sm:text-[15px] md:text-[13px] lg:text-[15px] text-center md:text-center lg:text-center leading-[20px] sm:leading-[22px] md:leading-[19px] lg:leading-[22px] tracking-[-0.5px] text-[var(--Color-background-default,#E7E8EA)] lg:max-w-[360px]">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
