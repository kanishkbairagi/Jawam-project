import { Link } from 'react-router-dom';
import jmartLogoColor from '../../../assets/jmart-logo-color.png';
import productLogo from '../../../assets/product3.png';
import schoolHealthWhiteLogo from '../../../assets/schoolhealth-logo-white.png';
import schoolHealthDarkLogo from '../../../assets/schoolhealth-logo-dark.png';

const PRODUCTS = [
  {
    id: 'jmart24',
    title: 'JMart 24',
    description: 'Smart Inventory and billing management system for businesses of all sizes.',
    image: jmartLogoColor,
    imageAlt: 'JMart 24 preview',
    imageClass: 'w-full max-w-[220px] md:max-w-[270px] h-[65px] md:h-[85px] object-contain transition-transform duration-300 group-hover:scale-105',
    logo: productLogo,
    logoAlt: 'JMart 24 logo',
    link: '/jmart24',
  },
  {
    id: 'schoolhealth',
    title: 'SchoolHealth',
    description: 'All-in-one ERP platform for schools, colleges, and coaching centres to manage students, attendance, fees, transport, exams, and more.',
    image: schoolHealthDarkLogo,
    imageAlt: 'SchoolHealth preview',
    imageClass: 'w-full max-w-[220px] md:max-w-[270px] h-[65px] md:h-[85px] object-contain transition-transform duration-300 group-hover:scale-105',
    logo: schoolHealthWhiteLogo,
    logoAlt: 'SchoolHealth logo',
    link: '/schoolhealth',
  },
];

export default function ProductList() {
  return (
    <section
      className="md:px-4 lg:px-4 px-4 lg:max-w-[1050px] md:max-w-[720px] mt-0 lg:mt-0 md:mt-[-30px] mx-auto mb-[40px] md:mb-[-45px] lg:mb-[-60px]"
      id="jawam-products-section"
    >
      <div className="mb-6 md:mb-8">
        <h2 className="font-bold text-[24px] md:text-[36px] leading-[30px] md:leading-[40px] tracking-[-0.5px] md:text-left lg:text-left text-center">
          JAWAM <span className="text-[#04A3DA]">PRODUCTS</span>
        </h2>
      </div>

      {/* Both Products Displayed as Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="border border-[#FFFFFF80] rounded-3xl overflow-hidden bg-[#0F172A] hover:border-[#04A3DA] transition-all duration-300 flex flex-col justify-between shadow-xl group hover:shadow-[0_12px_36px_rgba(4,163,218,0.2)] hover:-translate-y-1"
          >
            {/* Top White Preview Area */}
            <div className="w-full bg-white flex items-center justify-center p-6 md:p-8 h-[190px] md:h-[220px]">
              <img
                src={product.image}
                alt={product.imageAlt}
                className={product.imageClass}
              />
            </div>

            {/* Bottom Dark Info Area */}
            <div className="p-6 md:p-7 lg:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="mb-3 md:mb-4 h-[44px] md:h-[50px] flex items-center">
                  <img
                    src={product.logo}
                    alt={product.logoAlt}
                    className="product-brand-logo w-[130px] md:w-[160px] h-[38px] md:h-[46px] object-contain object-left"
                    style={{ opacity: 1, transform: 'rotate(0deg)' }}
                  />
                </div>

                <h4 className="font-semibold text-[18px] md:text-[20px] lg:text-[22px] leading-[24px] text-white mb-2">
                  {product.title}
                </h4>

                <p className="font-normal text-[13px] md:text-[14px] leading-[20px] text-slate-300 mb-6 min-h-[40px]">
                  {product.description}
                </p>
              </div>

              <Link
                to={product.link}
                className="inline-flex items-center justify-center gap-1.5 md:gap-2 w-fit text-white text-xs md:text-sm font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-[#EBF3FE80] border border-[#FFFFFF80] hover:bg-white/20 transition-all mt-auto"
              >
                Explore Product
                <svg
                  className="w-3.5 h-3.5 md:w-4 md:h-4"
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
        ))}
      </div>
    </section>
  );
}
