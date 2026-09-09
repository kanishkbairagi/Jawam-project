import { useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function ModelSection() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.model-cards-container .sa-reveal, .model-card.sa-reveal-left, .model-card.sa-reveal-right, .model-middle, .sa-stagger, .sa-feature, .sa-checklist-item'
    );
    if (!('IntersectionObserver' in window) || !targets.length) {
      targets.forEach(el => el.classList.add('sa-in'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('sa-in'); io.unobserve(e.target); } });
    }, { threshold: 0.25 });
    targets.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div class="mt-[10px] overflow-visible md:mt-[25px] lg:mt-0 mb-[50px] md:mb-0 lg:mb-0"> 
    <section className="max-w-[1150px] px-4 mx-auto mt-[-45px] md:mt-[-100px] lg:mt-16">
      <p className="font-semibold  text-[18px] leading-[18px] text-[#04A3DA] mb-8 text-center">THE MODEL</p>

      <div className="model-cards-container flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-12">
        <div className="w-full lg:w-[46%] flex items-stretch lg:items-center justify-center gap-1.5 sm:gap-2 lg:gap-3 shrink-0 mt-[-45px] md:mt-8 lg:mt-[100px] order-2 lg:order-none">
          <div className="model-card sa-reveal-left bg-[#091D3E33] border border-[#BDBDBDB0] rounded-[16px] md:rounded-2xl lg:rounded-[28px] p-2.5 md:p-3.5 lg:p-4 w-[42%] flex flex-col items-center text-center">
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#091D3E] shadow-[0_0_4.34px_0_#04A3DA,_inset_0_0_2.47px_0_rgba(255,255,255,0.25)] flex items-center justify-center mb-1.5 md:mb-2 lg:mb-3">
              <Icon icon="octicon:people-24" className="text-white text-[16px] md:text-[20px] lg:text-[24px]"/>
            </div>
            <h4 className="font-semibold text-[12px] md:text-[15px] lg:text-[17.55px] leading-[14px] md:leading-[17px] lg:leading-[19.74px] tracking-[0px] text-center">
              Your <span className="text-sky-400">Team</span>
            </h4>
            <p className="font-normal text-[9px] md:text-[11.5px] lg:text-[13.16px] leading-[11px] md:leading-[13px] lg:leading-[15.35px] text-center text-white mb-1.5 md:mb-2 lg:mb-3">In-house</p>
            <div className="grid grid-cols-3 gap-1 md:gap-1.5 mb-1.5 md:mb-2 lg:mb-3 w-full border border-[#BDBDBDB0] p-1.5 md:p-2.5 lg:p-3 bg-[#FFFFFF1A] rounded-lg">
              {[...Array(6)].map((_,i) => (
                <span key={i} className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center bg-[#091D3E] shadow-[0_0_4.34px_0_#04A3DA,_inset_0_0_2.47px_0_rgba(255,255,255,0.25)] mx-auto">
                  <svg className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4 0-8 2-8 5v2h16v-2c0-3-4-5-8-5z"/>
                  </svg>
                </span>
              ))}
            </div>
            <ul className="text-left md:text-center pl-1 md:pl-0 w-full space-y-1 md:space-y-1.5">
              {['Limited Bandwidth','Skill Gaps','Hiring Delays','Higher Overheads','Scaling Challenges'].map((t,i) => (
                <li key={i} className="flex items-center gap-1 md:gap-1.5 text-[8px] md:text-[10.5px] lg:text-[12px] text-white">
                  <Icon icon="si:warning-line" className="warning-icon text-sky-400 text-[9px] md:text-[11px] lg:text-[13px] shrink-0"/>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="model-middle sa-reveal flex flex-col items-center justify-center text-center w-[16%] px-0.5 lg:px-1">
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#091D3E] shadow-[0_0_4.34px_0_#04A3DA,_inset_0_0_2.47px_0_rgba(255,255,255,0.25)] flex items-center justify-center mb-1.5 md:mb-2 lg:mb-3">
              <svg className="text-white w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
                <path d="M12 5.36L8.87 8.5a2.13 2.13 0 000 3h0a2.13 2.13 0 003 0l2.26-2.26"/>
                <path d="M18 15l-6-6"/>
                <path d="M15 18l-6-6"/>
              </svg>
            </div>
            <p className="font-semibold text-[10px] md:text-[14px] lg:text-[17.55px] leading-[12px] md:leading-[16px] lg:leading-[19.74px] text-center mb-1.5 md:mb-2 lg:mb-4">
              Seamless<br/><span className="text-sky-400">Integration</span>
            </p>
            <p className="font-normal text-[7px] md:text-[9px] lg:text-[10px] leading-[9px] md:leading-[11px] lg:leading-[10.24px] text-center">
              Extend your team with expert talent and achieve more together
            </p>
          </div>

          <div className="model-card sa-reveal-right bg-[#0F2A45] border border-[#BDBDBDB0] rounded-[16px] md:rounded-2xl lg:rounded-[28px] p-2.5 md:p-3.5 lg:p-4 w-[42%] flex flex-col items-center text-center">
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#091D3E] shadow-[0_0_4.34px_0_#04A3DA,_inset_0_0_2.47px_0_rgba(255,255,255,0.25)] flex items-center justify-center mb-1.5 md:mb-2 lg:mb-3">
              <Icon icon="octicon:people-24" className="text-white text-[16px] md:text-[20px] lg:text-[24px]"/>
            </div>
            <h4 className="font-semibold text-[12px] md:text-[15px] lg:text-[17.55px] leading-[14px] md:leading-[17px] lg:leading-[19.74px] tracking-[0px] text-center">
              Jawam <span className="text-sky-400">Talent</span>
            </h4>
            <p className="font-normal text-[9px] md:text-[11.5px] lg:text-[13.16px] leading-[11px] md:leading-[13px] lg:leading-[15.35px] text-center text-white mb-1.5 md:mb-2 lg:mb-3">In-house</p>
            <div className="grid grid-cols-3 gap-1 md:gap-1.5 mb-1.5 md:mb-2 lg:mb-3 w-full border border-[#BDBDBDB0] p-1.5 md:p-2.5 lg:p-3 bg-[#FFFFFF1A] rounded-lg">
              {[...Array(6)].map((_,i) => (
                <span key={i} className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center bg-[#091D3E] shadow-[0_0_4.34px_0_#04A3DA,_inset_0_0_2.47px_0_rgba(255,255,255,0.25)] mx-auto">
                  <svg className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4 0-8 2-8 5v2h16v-2c0-3-4-5-8-5z"/>
                  </svg>
                </span>
              ))}
            </div>
            <ul className="text-left md:text-center pl-1 md:pl-0 w-full space-y-1 md:space-y-1.5">
              {['Access to Top Talent','Faster Onboarding','Specialized Skills','Cost Effective','Scalable on Demand'].map((t,i) => (
                <li key={i} className="flex items-center gap-1 md:gap-1.5 text-[8px] md:text-[10.5px] lg:text-[12px] text-white">
                  <svg className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 shrink-0" fill="#04A3DA" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9.5 12.5l2 2 4-4.5" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-[58%] text-left order-1 lg:order-none">
          <div className="sa-stagger">
            <h2 className="font-bold text-[28px] sm:text-[34px] lg:text-[44px] leading-[32px] sm:leading-[38px] lg:leading-[48px] mt-[-15px] md:mt-0 tracking-[-0.5px] mb-3 lg:mb-5">
              What is <span className="text-sky-400">Staff <br/> Augmentation?</span>
            </h2>
            <p className="font-normal text-[13px] lg:text-[15px] leading-[21px] lg:leading-[26px] tracking-[0px] text-[#E7E8EA] mb-6 lg:mb-8 max-w-[500px]">
              Staff Augmentation is a flexible hiring model that allows organizations to expand their existing teams with experienced professionals without the long-term commitment and overhead costs of traditional recruitment.<br/>
              At Jawam Infotech, we provide skilled developers, designers, QA engineers, project managers, and technology specialists who seamlessly integrate into existing workflows and contribute from day one.
            </p>
          </div>

          <div className="lg:hidden space-y-3 mb-6 mt-[-10px]">
            {['Real-time sales & revenue tracking','Top selling products & categories','Low Stock alerts & order management','Customer insights & purchase history'].map((t,i) => (
              <div key={i} className="sa-checklist-item flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="#04A3DA" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.5 12.5l2 2 4-4.5" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[13px] text-white">{t}</p>
              </div>
            ))}
          </div>

          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon:'at-icons:expand',                    label:'Flexible',       size:'40px' },
              { icon:'basil:stack-solid',                  label:'Scalable',       size:'50px' },
              { icon:'streamline-plump:dollar-coin-solid', label:'Cost Efficient', size:'40px' },
              { icon:'ion:rocket-sharp',                   label:'Fast Onboarding',size:'40px' },
            ].map(({icon,label,size},i) => (
              <div key={i} className="sa-feature flex items-start gap-3">
                <div className="w-14 h-14 rounded-lg bg-[#0F3A5C] flex items-center justify-center shrink-0">
                  <Icon icon={icon} className="text-sky-400" style={{ fontSize: size }}/>
                </div>
                <div>
                  <h4 className="font-semibold text-[18px] leading-[20px] mb-1.5">{label}</h4>
                  <p className="font-normal text-[15px] leading-[20px] text-[#E7E8EA] max-w-[150px]">Scale resources up or down as your roadmap shifts.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
