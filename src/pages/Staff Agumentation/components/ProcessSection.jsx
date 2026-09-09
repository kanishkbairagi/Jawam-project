import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  useEffect(() => {
    const pathEl   = document.getElementById('curveDraw');
    const trackEl  = document.getElementById('curveTrack');
    const pDesktop = document.getElementById('process-desktop');
    const pWrap    = document.getElementById('process-desktop-wrap');
    const mOuter   = document.getElementById('process-mobile-outer');
    const mInner   = document.getElementById('process-mobile-inner');
    const mPathEl  = document.getElementById('curveDrawMobile');

    const CURVE_DESKTOP_D = pathEl ? pathEl.getAttribute('d') : null;
    const CURVE_TABLET_D =
      'M 380 103 C 617 103, 860 124, 860 234 ' +
      'C 860 344, 745 440, 571 440 ' +
      'C 424 440, 110 474, 110 625 ' +
      'C 110 776, 424 824, 607 824 ' +
      'C 777 824, 860 893, 860 1017 ' +
      'C 860 1147, 617 1182, 400 1182';

    let curveIsTabletMode = null;

    function updateCurvePathForBreakpoint(isTablet) {
      if (!pathEl || curveIsTabletMode === isTablet) return;
      curveIsTabletMode = isTablet;
      const d = isTablet ? CURVE_TABLET_D : CURVE_DESKTOP_D;
      if (trackEl) trackEl.setAttribute('d', d);
      pathEl.setAttribute('d', d);
      const len = pathEl.getTotalLength();
      gsap.set(pathEl, { strokeDasharray: len, strokeDashoffset: len });
    }

    let tl;
    if (pathEl) {
      const pathLen = pathEl.getTotalLength();
      gsap.set(pathEl, { strokeDasharray: pathLen, strokeDashoffset: pathLen });

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: pWrap,
          start: 'top 75%',
          end:   'bottom 60%',
          scrub: 0.6,
        }
      });

      tl.to(pathEl, { strokeDashoffset: 0, ease: 'none', duration: 1 }, 0);

      const times = [0.02, 0.22, 0.43, 0.63, 0.82];
      document.querySelectorAll('.milestone').forEach(card => {
        const at   = times[parseInt(card.dataset.order, 10) - 1];
        const icon = card.querySelector('.milestone-icon');
        if (icon) tl.to(icon, { opacity: 1, scale: 1, duration: 0.06, ease: 'back.out(2)' }, at);
        tl.to(card, { opacity: 1, x: 0, duration: 0.08, ease: 'power2.out' }, at + (icon ? 0.01 : 0));
      });
    }

    const rightMilestones   = pDesktop ? pDesktop.querySelectorAll('.milestone-right[data-left-tablet]') : [];
    const measuredW = { tablet: null, laptop: null };

    function applyBreakpointPositions(isTablet) {
      rightMilestones.forEach(el => {
        el.style.left = (isTablet ? el.dataset.leftTablet : el.dataset.leftDesktop) + 'px';
      });
    }

    function measureContentWidth() {
      if (!pDesktop) return 1200;
      const prev = pDesktop.style.transform;
      pDesktop.style.transform = 'none';
      let maxRight = 0;
      pDesktop.querySelectorAll(':scope > .milestone').forEach(el => {
        maxRight = Math.max(maxRight, el.offsetLeft + el.offsetWidth);
      });
      pDesktop.style.transform = prev;
      return maxRight ? maxRight + 24 : 1200;
    }

    function fitTabletProcessCanvas() {
      if (!pDesktop || !pWrap) return;
      const w = window.innerWidth;
      if (w >= 768 && w < 1280) {
        const isTablet = w < 1024;
        applyBreakpointPositions(isTablet);
        updateCurvePathForBreakpoint(isTablet);
        const key = isTablet ? 'tablet' : 'laptop';
        if (measuredW[key] === null) measuredW[key] = measureContentWidth();
        const scale = Math.min(1, pWrap.clientWidth / measuredW[key]);
        pDesktop.style.transform       = `scale(${scale})`;
        pDesktop.style.transformOrigin = 'top left';
        pWrap.style.height             = 1350 * scale + 'px';
      } else {
        applyBreakpointPositions(false);
        updateCurvePathForBreakpoint(false);
        pDesktop.style.transform       = '';
        pDesktop.style.transformOrigin = '';
        pWrap.style.height             = '';
      }
      ScrollTrigger.refresh();
    }

    function fitMobileCanvas() {
      if (!mOuter || !mInner || window.innerWidth >= 768) return;
      const aw = mOuter.clientWidth;
      if (!aw) return;
      const scale = aw / 380;
      mInner.style.transform       = `scale(${scale})`;
      mInner.style.transformOrigin = 'top left';
      mOuter.style.height          = 940 * scale + 'px';
      ScrollTrigger.refresh();
    }

    fitTabletProcessCanvas();
    fitMobileCanvas();

    let mTl;
    if (mPathEl && mOuter) {
      const mLen = mPathEl.getTotalLength();
      gsap.set(mPathEl, { strokeDasharray: mLen, strokeDashoffset: mLen });
      mTl = gsap.timeline({ scrollTrigger: { trigger: mOuter, start: 'top 80%', once: true } });

      const cards = Array.from(document.querySelectorAll('.milestone-m'))
        .sort((a, b) => parseInt(a.dataset.order) - parseInt(b.dataset.order));
      const segs = cards.length - 1;

      if (cards[0]) {
        const ic = cards[0].querySelector('.milestone-m-icon');
        if (ic) mTl.to(ic, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' });
        mTl.to(cards[0], { opacity: 1, x: 0, duration: 0.35, ease: 'power2.out' }, '<0.05');
      }
      for (let i = 0; i < segs; i++) {
        mTl.to(mPathEl, {
          strokeDashoffset: mLen - mLen * ((i + 1) / segs),
          duration: 0.5, ease: 'power1.inOut'
        }, '+=0.05');
        const nc = cards[i + 1];
        if (nc) {
          const ni = nc.querySelector('.milestone-m-icon');
          if (ni) mTl.to(ni, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.15');
          mTl.to(nc, { opacity: 1, x: 0, duration: 0.35, ease: 'power2.out' }, '<0.05');
        }
      }
    }

    let resizeTimer;
    const onResize = () => {
      fitTabletProcessCanvas();
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(fitMobileCanvas, 120);
    };
    window.addEventListener('resize', onResize);

    const onLoad = () => {
      measuredW.tablet = null; measuredW.laptop = null;
      fitTabletProcessCanvas();
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onLoad);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div class="mt-[25px] md:mt-0 lg:mt-0">
    <section className="px-4 max-w-[1200px] mx-auto md:mt-16 mt-10">
      <div className="text-center mb-12 md:mb-16">
        <p className="mb-3 font-semibold md:text-[13px] text-[13px] md:text-[15px] leading-[18px] tracking-[2px] text-center text-[#04A3DA] uppercase">OUR PROCESS</p>
        <h2 className="font-bold text-[30px] md:text-[44px] leading-[38px] md:leading-[48px] tracking-[-0.5px] text-center text-white">
          A clear path from <span className="text-[#04A3DA]">brief to delivery</span>
        </h2>
      </div>

      <div id="process-desktop-wrap" className="hidden md:block relative mx-auto overflow-hidden" style={{ width:'100%', maxWidth:'1200px' }}>
        <div id="process-desktop" className="relative" style={{ width:'1200px', height:'1350px', transformOrigin:'top left' }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 1350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B1E2F4" stopOpacity="0"/>
                <stop offset="50.48%" stopColor="#04A3DA"/>
                <stop offset="100%" stopColor="#B1E2F4" stopOpacity="0"/>
              </linearGradient>
              <filter id="glowEffect" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <path id="curveTrack" d="M 380 103 C 750 103, 1130 124, 1130 234 C 1130 344, 950 440, 678 440 C 424 440, 110 474, 110 625 C 110 776, 424 824, 734 824 C 1000 824, 1130 893, 1130 1017 C 1130 1147, 750 1182, 400 1182" fill="none" stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="5px" strokeLinecap="round"/>
            <path id="curveDraw" d="M 380 103 C 750 103, 1130 124, 1130 234 C 1130 344, 950 440, 678 440 C 424 440, 110 474, 110 625 C 110 776, 424 824, 734 824 C 1000 824, 1130 893, 1130 1017 C 1130 1147, 750 1182, 400 1182" fill="none" stroke="url(#curveGradient)" strokeWidth="5px" strokeLinecap="round" filter="url(#glowEffect)"/>
          </svg>

          <div className="milestone milestone-left absolute flex items-start gap-4 z-10" data-order="1" style={{ top:'20px', left:'40px' }}>
            <div className="milestone-icon w-[70px] h-[70px] rounded-[14px] bg-[#0494C633] shadow-[0px_0px_8.3px_0px_#B1E2F478] border border-[#BDBDBDB0] flex items-center justify-center shrink-0 mt-1">
              <Icon icon="mingcute:clipboard-line" className="text-sky-400" style={{ fontSize:'50px' }}/>
            </div>
            <div className="max-w-[300px] w-full border border-[#BDBDBDB0] bg-[#263C51] rounded-2xl shadow-xl text-left rounded-tl-[18px] rounded-tr-[18px] rounded-bl-[0px] rounded-br-[42px] px-6 py-6">
              <p className="text-[16px] font-bold tracking-wider text-[#04A3DA] uppercase mb-2">01 - MILESTONE</p>
              <h3 className="font-bold text-[17px] leading-[21px] text-white mb-2">Requirement Analysis</h3>
              <p className="text-[14px] leading-[18px] text-white">We define skills, scope and team shape with you.</p>
            </div>
          </div>

          <div className="milestone milestone-right absolute flex items-start gap-4 z-10" data-order="2" data-left-desktop="774" data-left-tablet="500" style={{ top:'290px', left:'774px' }}>
            <div className="max-w-[300px] w-full border border-[#BDBDBDB0] bg-[#263C51] rounded-2xl rounded-tl-[18px] rounded-tr-[18px] rounded-bl-[0px] rounded-br-[42px] px-6 py-6 shadow-xl text-right">
              <p className="text-[16px] font-bold tracking-wider text-[#04A3DA] uppercase mb-2">02 - MILESTONE</p>
              <h3 className="font-bold text-[17px] leading-[21px] text-white mb-2">Talent Selection</h3>
              <p className="text-[14px] leading-[18px] text-white">Curated profiles from our pre-vetted bench.</p>
            </div>
            <div className="milestone-icon w-[70px] h-[70px] rounded-[14px] bg-[#0494C633] shadow-[0px_0px_8.3px_0px_#B1E2F478] border border-[#BDBDBDB0] flex items-center justify-center shrink-0 mt-1">
              <Icon icon="ic:outline-people" className="text-sky-400" style={{ fontSize:'50px' }}/>
            </div>
          </div>

          <div className="milestone milestone-left absolute flex items-start gap-4 z-10" data-order="3" style={{ top:'555px', left:'40px' }}>
            <div className="milestone-icon w-[70px] h-[70px] rounded-[14px] bg-[#0494C633] shadow-[0px_0px_8.3px_0px_#B1E2F478] border border-[#BDBDBDB0] flex items-center justify-center shrink-0 mt-1">
              <Icon icon="ic:outline-message" className="text-sky-400" style={{ fontSize:'50px' }}/>
            </div>
            <div className="max-w-[300px] w-full border border-[#BDBDBDB0] bg-[#263C51] rounded-2xl rounded-tl-[18px] rounded-tr-[18px] rounded-bl-[0px] rounded-br-[42px] px-6 py-6 shadow-xl text-left">
              <p className="text-[16px] font-bold tracking-wider text-[#04A3DA] uppercase mb-2">03 - MILESTONE</p>
              <h3 className="font-bold text-[17px] leading-[21px] text-white mb-1.5">Interview &amp; Evaluation</h3>
              <p className="text-[14px] leading-[18px] text-white">You interview. We support technical screening.</p>
            </div>
          </div>

          <div className="milestone milestone-right absolute flex items-start gap-4 z-10" data-order="4" data-left-desktop="774" data-left-tablet="500" style={{ top:'816px', left:'774px' }}>
            <div className="max-w-[300px] w-full border border-[#BDBDBDB0] bg-[#263C51] rounded-2xl rounded-tl-[18px] rounded-tr-[18px] rounded-bl-[0px] rounded-br-[42px] px-6 py-6 shadow-xl text-right">
              <p className="text-[16px] font-bold tracking-wider text-[#04A3DA] uppercase mb-2">04 - MILESTONE</p>
              <h3 className="font-bold text-[17px] leading-[21px] text-white mb-2">Onboarding</h3>
              <p className="text-[14px] leading-[18px] text-white">Tools, access and rituals — productive in days.</p>
            </div>
            <div className="milestone-icon w-[70px] h-[70px] rounded-[14px] bg-[#0494C633] shadow-[0px_0px_8.3px_0px_#B1E2F478] border border-[#BDBDBDB0] flex items-center justify-center shrink-0 mt-1">
              <Icon icon="ion:rocket-sharp" className="text-sky-400" style={{ fontSize:'50px' }}/>
            </div>
          </div>

          <div className="milestone milestone-left absolute flex items-start gap-4 z-10" data-order="5" style={{ top:'1077px', left:'40px' }}>
            <div className="milestone-icon w-[70px] h-[70px] rounded-[14px] bg-[#0494C633] shadow-[0px_0px_8.3px_0px_#B1E2F478] border border-[#BDBDBDB0] flex items-center justify-center shrink-0 mt-1">
              <Icon icon="fluent:shield-12-regular" style={{ fontSize:'50px', color:'#04A3DA' }}/>
            </div>
            <div className="max-w-[300px] w-full border border-[#BDBDBDB0] bg-[#263C51] rounded-2xl rounded-tl-[18px] rounded-tr-[18px] rounded-bl-[0px] rounded-br-[42px] px-6 py-6 shadow-xl text-left">
              <p className="text-[16px] font-bold tracking-wider text-[#04A3DA] uppercase mb-2">05 - MILESTONE</p>
              <h3 className="font-bold text-[17px] leading-[21px] text-white mb-2">Ongoing Support</h3>
              <p className="text-[14px] leading-[18px] text-white">Delivery, retention and replacement guarantees.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="process-mobile-outer" className="md:hidden relative w-full overflow-hidden mt-[-30px] md:mt-[-50px] lg:mt-0">
        <div id="process-mobile-inner" style={{ width:'380px', height:'940px', position:'relative' }}>
          <svg id="mobileCurveSvg" width="380" height="940" viewBox="0 0 380 940" style={{ position:'absolute', top:0, left:0, pointerEvents:'none', zIndex:0 }}>
            <defs>
              <linearGradient id="curveGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B1E2F4" stopOpacity="0"/>
                <stop offset="50.48%" stopColor="#04A3DA"/>
                <stop offset="100%" stopColor="#B1E2F4" stopOpacity="0"/>
              </linearGradient>
              <filter id="glowEffectMobile" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <path id="curveTrackMobile" d="M 31 41 C 200 41, 349 90, 349 231 C 349 300, 150 380, 31 421 C 31 480, 200 560, 349 611 C 349 680, 150 760, 31 801" fill="none" stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="3.5px" strokeLinecap="round"/>
            <path id="curveDrawMobile" d="M 31 41 C 200 41, 349 90, 349 231 C 349 300, 150 380, 31 421 C 31 480, 200 560, 349 611 C 349 680, 150 760, 31 801" fill="none" stroke="url(#curveGradientMobile)" strokeWidth="3.5px" strokeLinecap="round" filter="url(#glowEffectMobile)"/>
          </svg>

          {[
            { order:1, top: 20,  left: 10,  side:'left',  title:'01 - MILESTONE', h:'Requirement Analysis',   p:'We define skills, scope and team shape with you.',   icon:'mingcute:clipboard-line' },
            { order:2, top:210,  left: 68,  side:'right', title:'02 - MILESTONE', h:'Talent Selection',       p:'Curated profiles from our pre-vetted bench.',          icon:'ic:outline-people' },
            { order:3, top:400,  left: 10,  side:'left',  title:'03 - MILESTONE', h:'Interview & Evaluation', p:'You interview. We support technical screening.',        icon:'ic:outline-message' },
            { order:4, top:590,  left: 68,  side:'right', title:'04 - MILESTONE', h:'Onboarding',             p:'Tools, access and rituals — productive in days.',       icon:'ion:rocket-sharp' },
            { order:5, top:780,  left: 10,  side:'left',  title:'05 - MILESTONE', h:'Ongoing Support',        p:'Delivery, retention and replacement guarantees.',       icon:'fluent:shield-12-regular' },
          ].map(m => (
            <div key={m.order}
              className={`milestone-m milestone-m-${m.side} absolute flex items-start gap-2.5 z-10`}
              data-order={m.order}
              style={{ top:`${m.top}px`, left:`${m.left}px` }}>
              {m.side === 'left' && (
                <div className="milestone-m-icon w-[42px] h-[42px] rounded-[10px] bg-[#0494C633] border border-[#BDBDBDB0] flex items-center justify-center shrink-0">
                  <Icon icon={m.icon} className="text-sky-400 text-[22px]"/>
                </div>
              )}
              <div className={`max-w-[250px] w-full border border-[#BDBDBDB0] bg-[#263C51] rounded-xl rounded-bl-none rounded-br-[26px] shadow-lg px-3.5 py-3.5 ${m.side === 'right' ? 'text-right' : 'text-left'}`}>
                <p className="text-[10px] font-bold tracking-wider text-[#04A3DA] uppercase mb-1">{m.title}</p>
                <h3 className="font-bold text-[13.5px] leading-[16px] text-white mb-1">{m.h}</h3>
                <p className="text-[11px] leading-[14px] text-white">{m.p}</p>
              </div>
              {m.side === 'right' && (
                <div className="milestone-m-icon w-[42px] h-[42px] rounded-[10px] bg-[#0494C633] border border-[#BDBDBDB0] flex items-center justify-center shrink-0">
                  <Icon icon={m.icon} className="text-sky-400 text-[22px]"/>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
