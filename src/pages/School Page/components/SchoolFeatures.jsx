import { Icon } from '@iconify/react';

export default function SchoolFeatures() {
  const features = [
    {
      icon: 'solar:square-academic-cap-bold',
      title: 'Student Management',
      desc: 'Complete student profiles with academics, attendance, and parent communication in one place.',
    },
    {
      icon: 'solar:calendar-bold',
      title: 'Attendance Tracking',
      desc: 'Mark attendance digitally with real-time reports. Track student and staff attendance effortlessly.',
    },
    {
      icon: 'mdi:currency-inr',
      title: 'Fee Management',
      desc: 'Automated fee collection, receipts, and payment tracking. Support for installments and discounts.',
    },
    {
      icon: 'solar:bus-bold',
      title: 'Transport Management',
      desc: 'Track buses in real-time, manage routes, and keep parents informed about pickup and drop status.',
    },
    {
      icon: 'solar:document-text-bold',
      title: 'Exam & Report Cards',
      desc: 'Create exams, record marks, and generate beautiful report cards automatically.',
    },
    {
      icon: 'solar:chat-round-dots-bold',
      title: 'Parent Communication',
      desc: 'Send notifications, share updates, and enable two-way communication with parents instantly.',
    },
  ];

  return (
    <div className="mt-[-15px] md:mt-[-25px] lg:mt-10">
      <section className="px-4 max-w-[1130px] mx-auto md:mb-[80px] mb-[25px]" id="challenge-section">
        <div className="bg-[linear-gradient(277.37deg,rgba(230,246,251,0.2)_1.45%,rgba(177,226,244,0.2)_99.6%)] border border-[#BDBDBDB0] rounded-2xl p-6 md:p-6">
          <div className="grid grid-cols-2 md:flex md:flex-row md:items-start md:justify-between gap-6 md:gap-8 lg:gap-10">
            {features.map((feature) => (
              <div key={feature.title} className="font-semibold text-[16px] leading-[18px] tracking-[0] flex-1">
                <div className="challenge-icon-wrap">
                  <Icon icon={feature.icon} className="w-[38px] h-[38px] text-sky-400 mb-4" />
                </div>
                <h3 className="font-bold text-[15px] md:text-[16px] leading-[18px] text-white mb-4">
                  {feature.title}
                </h3>
                <p className="font-normal text-[14px] leading-[18px] tracking-[0] text-white mt-[-13px] md:mt-0 lg:mt-0">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
