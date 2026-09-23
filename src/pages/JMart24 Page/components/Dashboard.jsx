import jmartImg from '../../../assets/dashboard.webp';
import '../jmart.css';

export default function Dashboard() {
  const features = [
    "Real-time sales & revenue tracking",
    "Top selling products & categories",
    "Low Stock alerts & order management",
    "Customer insights & purchase history"
  ];

  return (
    <div class="mt-[-35px] md:mt-[-65px] lg:mt-[130px]">
    <section className="py-10 md:py-14 lg:py-0 px-4 md:px-8 lg:px-16  ">


      <div className="max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <p className="db-text db-label font-semibold text-[14px] md:text-[15px] lg:text-[18px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[0] text-[#04A3DA] mb-2 md:mb-3">
              All in one Dashboard
            </p>
            <h2 className="db-text db-heading font-bold text-[26px] md:text-[28px] lg:text-[44px] leading-[32px] md:leading-[34px] lg:leading-[48px] tracking-[-0.5px] mb-3 md:mb-4">
              Everything You Need, <span className="text-sky-400">Right at Your Fingertip</span>
            </h2>
            <p className="db-text db-desc text-[14px] md:text-[13px] lg:text-[17px] leading-[20px] md:leading-[17px] lg:leading-[25px] tracking-[0] text-white mb-5 md:mb-6">
              Get complete visibility of your business with real time analytics, sales insights, and inventory management all in one place.
            </p>
            <ul className="space-y-3 md:space-y-3 lg:space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="db-check-item flex items-start gap-2.5 md:gap-2.5 lg:gap-3">
                  <div className="db-check-badge lg:mt-[-0.5px] w-4 h-4 bg-sky-400 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3  md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[13px] md:text-[13px] mt-[2px] md:mt-0 lg:mt-0 lg:text-[16px] leading-[18px] md:leading-[16px] lg:leading-[16px] tracking-[0]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Dashboard Image */}
          <div className="relative mt-8 md:mt-0 mt-[5px] md:mt-0 lg:mt-0">
            <div className="db-img-wrap rounded-2xl shadow-2xl">
              <img
                src={jmartImg}
                alt="JMart 24 Employee Dashboard"
                className="db-img-float w-full max-w-[320px] md:max-w-[340px] lg:max-w-[500px] max-h-[400px] rounded-2xl shadow-2xl object-cover mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
