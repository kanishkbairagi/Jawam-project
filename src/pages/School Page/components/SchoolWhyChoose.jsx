import { Icon } from '@iconify/react';

export default function SchoolWhyChoose() {
  const benefits = [
    {
      icon: 'solar:cursor-bold',
      title: 'Easy to Use',
      desc: 'Intuitive interface that requires minimal training. Your staff will be up and running in minutes.',
    },
    {
      icon: 'solar:settings-bold',
      title: 'Fast Setup',
      desc: 'Get started in under 24 hours. We handle migration and onboarding so you can focus on teaching.',
    },
    {
      icon: 'solar:smartphone-bold',
      title: 'Mobile Friendly',
      desc: 'Access everything from any device. Parents and staff can use the mobile app on the go.',
    },
    {
      icon: 'solar:shield-check-bold',
      title: 'Secure Data',
      desc: "Bank-grade encryption and role-based access control. Your school's data is always safe.",
    },
    {
      icon: 'solar:clock-circle-bold',
      title: 'Save Administrative Time',
      desc: 'Save 10+ hours per week on administrative tasks.',
    },
    {
      icon: 'solar:users-group-two-rounded-bold',
      title: 'Improve Parent Communication',
      desc: 'Improve communication with parents through notifications, updates, and two-way communication.',
    },
  ];

  return (
    <div className="md:mt-[-100px] mt-0 lg:mt-[35px] lg:mb-[120px] mb-[-40px]">
      <section
        className="why-hire-section py-10 md:py-0 lg:py-0 px-4 max-w-[1000px] mx-auto mt-[-50px] md:mt-[-150px] lg:mt-0 mb-[-100px] md:mb-16 lg:mb-[-30px]"
        id="why-product-section"
      >
        <div className="text-center mb-12 md:mb-4 lg:mb-8">
          <p className="font-semibold text-[16px] leading-[18px] tracking-[0] text-center text-[#04A3DA] mb-4 uppercase">
            WHY SCHOOLS CHOOSE US
          </p>
          <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[44px] leading-[34px] md:leading-[42px] lg:leading-[48px] tracking-[-0.5px] text-center text-white">
            Everything Your{' '}
            <span className="text-sky-400">
              School Needs
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2 lg:gap-8 mt-0 md:mt-[-10px] lg:mt-0">
          {benefits.map((item) => (
            <div key={item.title} className="feature-card-outer">
              <div className="feature-card group bg-[#0F172A] border border-[#BDBDBDB0] p-6 md:p-8 flex flex-col items-start text-left">
                <div className="feature-card-header w-full">
                  <div className="icon-wrap w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] shrink-0">
                    <Icon icon={item.icon} className="text-[#04A3DA] text-[26px]" />
                  </div>
                  <h3 className="font-semibold text-[20px] leading-[24px] tracking-[0px] text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="font-normal text-[14px] leading-[16px] tracking-[0px] text-white">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
