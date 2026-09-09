import React from 'react'
import '../modern.css'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import card1 from '../../../assets/card1.png'
import card2 from '../../../assets/card2.png'
import card3 from '../../../assets/card3.png'
import card4 from '../../../assets/card4.png'
import card5 from '../../../assets/card5.png'
import card6 from '../../../assets/card6.png'

export default function OurTechnology() {
  const techCards = [
    {
      image: card1,
      title: 'Data Engineering',
      description: 'Empowering scalable solutions with robust Backend Technologies.',
      link: '/data-engineering',
    },
    {
      image: card2,
      title: 'AI/ML Technology',
      description: 'Driving intelligent innovation with advanced AI & ML Technologies.',
      link: '/ai-ml-technology',
    },
    {
      image: card3,
      title: 'Blockchain Technology',
      description: 'Building secure digital ecosystems with modern Blockchain.',
      link: '/blockchain-technology',
    },
    {
      image: card4,
      title: 'Full Stack Development',
      description: 'Shaping digital experiences with our Frontend Tech expertise.',
      link: '/about',
    },
    {
      image: card5,
      title: 'Mobile App Development',
      description: 'Crafting seamless mobile experiences with innovative tech.',
      link: '/mobile-app-development',
    },
    {
      image: card6,
      title: 'DevOps Technology',
      description: 'Bridging the gap between code and operations with DevOps.',
      link: '/devops-technology',
    },
  ]

  return (
    <section className="py-20 text-white relative lg:mt-[-70px] md:mt-[-60px] ">
      {/* Background Subtle Gradient Glow */}
      <div className="" />

      <div className="max-w-[1050px] mx-auto px-4 sm:px-6 lg:px-8 md:mt-0 mt-[-70px]">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-6 lg:mb-6">
          <div className="mb-2 md:mb-0 lg:mb-0">
          <span className="mb-[100px] md:mb-6 lg:mb-6 font-semibold md:text-[18px] lg:text-[18px] text-[16px] leading-[18px] tracking-[0] text-[#04A3DA]">
            OUR TECHNOLOGY
          </span>
          </div>
<h2 className="
  font-bold
  text-[19px]  md:text-[40px] lg:text-[44px]
  leading-[25px]  md:leading-[44px] lg:leading-[48px]
  tracking-[-0.5px]
  text-center
  px-4
  lg:mt-4
">
  Elevating businesses with{' '}
  <span className="text-[#04A3DA]">
    state-of-the-art
  </span>{' '}
  technology at Jawam Infotech
</h2>
        </div>

        {/* 6 Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
          {techCards.map((card, idx) => (
            // Outer wrapper: owns ONLY the entrance animation
            <div
              key={idx}
              className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              {/* Inner wrapper: handles background transition, hover color, border glow, and lift */}
              <div
                className="group bg-[#FFFFFF1A]  rounded-2xl p-6 flex flex-col h-full
                  transition-all duration-300 ease-out
                  hover:bg-[#1E293B] hover:border-[#04A3DA] hover:-translate-y-3 hover:shadow-lg hover:shadow-[#04A3DA]/10"
              >
                {/* Card Image inside cyan container */}
                <div
                  className="mb-5 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                    transition-transform duration-500 ease-out
                    group-hover:rotate-[360deg]"
                  style={{ background: '#04A3DA' }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-7 h-7 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="font-semibold lg:max-w-[200px] text-[20px] md:text-[28px] leading-[22px] md:leading-[36px] tracking-[-0.5px] mb-3 whitespace-nowrap overflow-hidden text-ellipsis md:whitespace-normal md:overflow-visible">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-normal text-[16px] leading-[18px] tracking-[-0.5px] text-[#B5B7BD] mb-4">
                  {card.description}
                </p>

                {/* Learn More Link */}
                <Link
                  to={card.link}
                  className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 text-sm font-semibold transition-all duration-300 mt-auto"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
