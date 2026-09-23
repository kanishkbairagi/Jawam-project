import React from 'react';

export default function WhoWeWorkWithSection() {
  return (
    <section id="who-we-work-with-section" className="pt-8  pb-12 md:py-16 lg:py-20 px-4 mt-[-50px] md:mt-[-60px] lg:mt-[-60px] mb-0 md:mb-6 lg:mb-4">
      <div className="max-w-[960px] mx-auto">
        <div className="text-center mb-8 md:mb-8 lg:mb-16">
          <p className="mb-4 md:mb-2 lg:mb-4  font-semibold text-[14px] md:text-[15px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[0px] text-center text-[#04A3DA]">WHO WE WORK WITH?</p>
          <h2 className="font-bold text-[28px] md:text-[32px] lg:text-[44px] leading-[32px] md:leading-[36px] lg:leading-[48px] tracking-[-0.5px] text-center text-white ">
            Strong <span className="text-sky-400">Partnerships</span> Meaning Result
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mt-[-15px] md:mt-[-20px] lg:mt-[-25px]">
          {/* Startups Card */}
          <div className="collab-card2 rounded-2xl p-5 md:p-5 lg:p-7 shadow-lg border border-white/5 outline outline-1 outline-[#BDBDBDB0] relative overflow-visible">
            <div className="flex gap-2 md:gap-3 mb-3" style={{ alignItems: 'flex-start' }}>
              <div
                className="collab-icon2 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  width: '36px',
                  height: '36px',
                  minWidth: '36px',
                  minHeight: '36px',
                  maxWidth: '36px',
                  maxHeight: '36px',
                  alignSelf: 'flex-start',
                  marginTop: 0,
                }}
              >
                <svg className="text-center font-extrabold text-sky-600" style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.25c.36 0 .703.164.928.446.85 1.06 2.573 3.412 3.372 6.104.31 1.045.45 2.11.336 3.15a9.75 9.75 0 01-.53 2.183l1.96 1.096a.75.75 0 01.384.79l-.5 2.75a.75.75 0 01-1.14.49L14.4 17.85c-.55.42-1.19.76-1.9 1v2.4a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-2.4c-.71-.24-1.35-.58-1.9-1l-2.41 1.409a.75.75 0 01-1.14-.49l-.5-2.75a.75.75 0 01.384-.79l1.96-1.096a9.75 9.75 0 01-.53-2.183c-.114-1.04.026-2.105.336-3.15.8-2.692 2.522-5.044 3.372-6.104A1.2 1.2 0 0112 2.25zm0 6a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"/>
                </svg>
              </div>
              <div className="flex flex-col pr-2 md:pr-3 lg:pr-4">
                <h3 className="text-lg md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3 lg:mb-4">Startups</h3>
                <p className="text-xs md:text-xs lg:text-sm text-[13px] md:text-[13px] lg:text-[14px] leading-[14px] md:leading-[15px] lg:leading-[16px] tracking-[0px] text-[#E7E8EA]">Agile teams to help you build, validate, and scale your ideas.</p>
              </div>
            </div>
          </div>

          {/* Enterprises Card */}
          <div className="collab-card2 rounded-2xl p-5 md:p-5 lg:p-7 shadow-lg border border-white/5 outline outline-1 outline-[#BDBDBDB0] relative overflow-visible">
            <div className="flex gap-2 md:gap-3 mb-3" style={{ alignItems: 'flex-start' }}>
              <div
                className="collab-icon2 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  width: '36px',
                  height: '36px',
                  minWidth: '36px',
                  minHeight: '36px',
                  maxWidth: '36px',
                  maxHeight: '36px',
                  alignSelf: 'flex-start',
                  marginTop: 0,
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="font-extrabold text-sky-600" style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4zm8 0c-.29 0-.62.02-.97.05C16.26 13.83 17 14.85 17 16v2h7v-1c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="flex flex-col pr-2 md:pr-3 lg:pr-4">
                <h3 className="text-lg md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3 lg:mb-4">Enterprises</h3>
                <p className="text-xs md:text-xs lg:text-sm font-normal text-[13px] md:text-[13px] lg:text-[14px] leading-[14px] md:leading-[15px] lg:leading-[16px] tracking-[0px] text-[#E7E8EA]">Scalable engineering teams to drive digital transformation.</p>
              </div>
            </div>
          </div>

          {/* Agencies Card */}
          <div className="collab-card2 rounded-2xl p-5 md:p-5 lg:p-7 shadow-lg border border-white/5 outline outline-1 outline-[#BDBDBDB0] relative overflow-visible">
            <div className="flex gap-2 md:gap-3 mb-3" style={{ alignItems: 'flex-start' }}>
              <div
                className="collab-icon2 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  width: '36px',
                  height: '36px',
                  minWidth: '36px',
                  minHeight: '36px',
                  maxWidth: '36px',
                  maxHeight: '36px',
                  alignSelf: 'flex-start',
                  marginTop: 0,
                }}
              >
                <svg className="font-extrabold text-sky-600" style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21s-6.716-4.35-9.428-8.06C.86 10.42 1.2 7.02 3.9 5.4a5.4 5.4 0 017.35 1.42L12 8.1l.75-1.28A5.4 5.4 0 0120.1 5.4c2.7 1.62 3.04 5.02 1.33 7.54C18.716 16.65 12 21 12 21z"/>
                </svg>
              </div>
              <div className="flex flex-col pr-2 md:pr-3 lg:pr-4">
                <h3 className="text-lg md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3 lg:mb-4">Agencies</h3>
                <p className="text-xs md:text-xs lg:text-sm font-normal text-[13px] md:text-[13px] lg:text-[14px] leading-[14px] md:leading-[15px] lg:leading-[16px] tracking-[0px] text-[#E7E8EA]">Reliable technology partner to deliver for your client.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}