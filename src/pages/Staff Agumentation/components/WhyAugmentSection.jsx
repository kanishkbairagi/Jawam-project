import { useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function WhyAugmentSection() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('wa-in'); io.unobserve(e.target); } });
    }, { threshold: 0.2 });
    document.querySelectorAll('.wa-fade-up, .wa-item, .wa-divider').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="px-4 max-w-[1150px] mx-auto mt-8 md:mt-8 lg:mt-24 mb-8 md:mb-0 lg:mb-0">
      <div className="text-center mb-6 md:mb-8">
        <p className="mb-2 font-semibold text-[13px] md:text-[16px] leading-[18px] tracking-[0px] text-center text-[#04A3DA] uppercase wa-fade-up" style={{'--d':'0s'}}>WHY AUGMENT</p>
        <h2 className="font-bold text-[28px] md:text-[44px] leading-[34px] md:leading-[48px] tracking-[-0.5px] text-center wa-fade-up" style={{'--d':'0.08s'}}>
          A smarter path to <span className="text-sky-400">faster outcomes</span>
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-y-6 gap-x-2 text-center md:hidden my-6">
        {[
          { icon:'mdi:flash-outline',                    color:'#04A3DA', label:'Faster Hiring',    desc:'Onboard talent in days, not months.' },
          { icon:'streamline-plump:dollar-coin-solid',   color:'',        label:'Cost Efficiency',  desc:'Scale resources up or down as needed.' },
          { icon:'at-icons:expand',                      color:'',        label:'Flexible Scaling', desc:'Ramp teams up or down freely.' },
          { icon:'uil:brain',                            color:'#04A3DA', label:'Specialized Skills',desc:'Access niche, vetted expertise.' },
          { icon:'ion:rocket-sharp',                     color:'',        label:'Faster Delivery',  desc:'Ship roadmaps without delays.' },
          { icon:'fluent:shield-12-regular',             color:'#04A3DA', label:'Less Burden',      desc:'We handle HR, payroll, retention.' },
        ].map(({icon,color,label,desc},i) => (
          <div key={i} className="flex flex-col items-center text-center wa-item" style={{'--d': `${0.05 + i*0.07}s`}}>
            <div className="wa-icon-wrap">
              <Icon icon={icon} style={{ fontSize:'36px', color: color || undefined }} className={color ? '' : 'text-sky-400'}/>
            </div>
            <h3 className="font-semibold text-[11px] leading-[13px] mt-1.5 mb-1 text-center">{label}</h3>
            <p className="font-normal text-[9px] leading-[11px] text-[#E7E8EA] text-center">{desc}</p>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <div className="why-augment-icons flex flex-row items-stretch justify-center">
          {[
            { icon:'mdi:flash-outline',                   color:'#04A3DA', sizeClass:'md:text-[54px] lg:text-[70px]', d:'0.05s' },
            { icon:'streamline-plump:dollar-coin-solid',  color:'',        sizeClass:'md:text-[54px] lg:text-[70px]', d:'0.12s' },
            { icon:'at-icons:expand',                     color:'',        sizeClass:'md:text-[54px] lg:text-[70px]', d:'0.19s' },
            { icon:'uil:brain',                           color:'#04A3DA', sizeClass:'md:text-[54px] lg:text-[70px]', d:'0.26s' },
            { icon:'ion:rocket-sharp',                    color:'',        sizeClass:'md:text-[54px] lg:text-[70px]', d:'0.33s' },
            { icon:'fluent:shield-12-regular',            color:'#04A3DA', sizeClass:'md:text-[54px] lg:text-[75px]', d:'0.40s' },
          ].map(({icon,color,sizeClass,d},i) => (
            <div key={i} className="flex-1 flex justify-center pb-6 md:px-5 wa-item" style={{'--d':d}}>
              <div className="wa-icon-wrap">
                <Icon icon={icon} style={{ color: color || undefined }} className={`${sizeClass} ${color ? '' : 'text-sky-400'}`}/>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-4 mt-[-5px] border-[2.5px] [border-image:linear-gradient(90deg,rgba(177,226,244,0)_0%,#04A3DA_50.48%,rgba(177,226,244,0)_100%)_1] wa-divider"/>
        <div className="why-augment-text flex flex-col md:flex-row items-stretch justify-center">
          {[
            { label:'Faster Hiring',    desc:'Onboard talent in days, not months.',       d:'0.5s'  },
            { label:'Cost Efficiency',  desc:'Onboard talent in days, not months.',       d:'0.57s' },
            { label:'Flexible Scaling', desc:'Ramp teams up or down freely.',             d:'0.64s' },
            { label:'Specialized Skills',desc:'Access niche, vetted expertise.',          d:'0.71s' },
            { label:'Faster Delivery',  desc:'Ship roadmaps without delays.',             d:'0.78s' },
            { label:'Less Burden',      desc:'We handle HR, payroll, retention.',         d:'0.85s' },
          ].map(({label,desc,d},i) => (
            <div key={i} className="flex-1 py-2 md:px-5 text-center wa-item" style={{'--d':d}}>
              <h3 className="font-semibold text-left text-[16px] leading-[16px] mb-1.5">{label}</h3>
              <p className="font-normal text-left text-[14px] leading-[16px] text-[#E7E8EA]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
