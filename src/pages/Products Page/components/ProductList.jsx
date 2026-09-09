import { Link } from 'react-router-dom';
import productImage from '../../../assets/product2.webp';
import productLogo from '../../../assets/product3.png';

export default function ProductList() {
  return (
    <section
      className="md:px-4 lg:px-4 px-4 lg:max-w-[1000px] md:max-w-[700px] mt-0 lg:mt-0 md:mt-[-30px] mx-auto mb-[40px] md:mb-[-45px] lg:mb-[-60px]"
      id="jawam-products-section"
    >
      <div className="mb-4 md:mb-6">
        <h2 className="font-bold text-[24px] md:text-[36px] leading-[30px] md:leading-[40px] tracking-[-0.5px] md:text-left lg:text-left text-center">
          JAWAM <span className="text-[#04A3DA]">PRODUCTS</span>
        </h2>
      </div>

      <div className="border border-[#FFFFFF80] rounded-3xl overflow-hidden mt-[-10px] md:mt-0 lg:mt-0">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center p-4 md:p-8">
            <img
              src={productImage}
              alt="JMart 24 preview"
              className="w-full max-w-[220px] md:max-w-[320px] h-auto object-contain"
            />

            <div className="flex items-center gap-1 md:gap-1.5 mt-3 md:mt-4">
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              <span className="w-6 h-2 rounded-full bg-sky-500"></span>
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-5 py-5 md:px-6 md:py-0 flex flex-col justify-center">
            <div className="mb-4 md:mb-6 lg:mb-8">
              <img
                src={productLogo}
                alt="JMart 24 logo"
                className="w-[140px] h-[44px] md:w-[190px] md:h-[60px] lg:w-[255px] lg:h-[80px] mt-0 md:mt-0 lg:mt-[-20px] object-contain"
                style={{ opacity: 1, transform: "rotate(0deg)" }}
              />
            </div>

            <h4 className="font-semibold text-[17px] md:text-[17px] lg:text-[20px] leading-[21px] md:leading-[21px] lg:leading-[24px] tracking-[0px] mb-2 md:mb-3 lg:mb-4">
              JMart 24
            </h4>
            <p className="font-normal text-[13px] md:text-[13px] lg:text-[16px] leading-[18px] tracking-[0px] mb-4 md:mb-4 lg:mb-6">
              Smart Inventory and billing management system for businesses
              of all sizes.
            </p>

            <Link
              to="/jmart24"
              className="inline-flex items-center justify-center gap-1.5 md:gap-1.5 lg:gap-2 w-fit text-white text-xs md:text-xs lg:text-sm font-semibold px-4 py-2 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-full bg-[#EBF3FE80] border border-[#FFFFFF80] hover:bg-white/20 transition-all"
            >
              Explore Product
              <svg
                className="w-3.5 h-3.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
