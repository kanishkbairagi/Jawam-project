import { motion } from 'framer-motion'

const timelineItems = [
  {
    year: '2024',
    title: 'Strategic Establishment',
    description:
      'Expanded our team to 25–30 skilled professionals, strengthened expertise in cloud and digital transformation, and established a strong presence in global markets.',
    side: 'left',
  },
  {
    year: '2025',
    title: 'Future Ready Growth',
    description:
      'Driving sustainable innovation and human-centered design, delivering advanced AI, Blockchain and automation solutions.',
    side: 'right',
  },
  {
    year: '2026',
    title: 'Global Expansion',
    description:
      'Partnered with international clients, diversified service portfolio and positioned Jawam Infotech as a trusted global technology partner.',
    side: 'left',
  },
  {
    year: 'Vision',
    title: 'Future Beyond',
    description:
      'Shaping the future with emerging technologies, building sustainable solutions and enabling digital transformation at scale.',
    side: 'right',
    isVision: true,
  },
]

const DOT_DURATION = 0.2
const CARD_DURATION = 0.6
const YEAR_DURATION = 0.3
const STEP_DELAY = 0.15

export default function OurStory() {
  return (
    <section className="relative px-4 mt-0 md:mt-[-40px] lg:mt-[-100px] mb-[65px] md:mb-[60px] lg:mb-0">
      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <p className="font-semibold text-[16px] leading-[18px] tracking-[0] text-[#04A3DA] uppercase mb-3">
            OUR STORY
          </p>
          <h2 className="font-bold text-[18px] md:text-[34px] lg:text-[44px] leading-[28px] md:leading-[38px] lg:leading-[48px] tracking-[-0.5px] text-center">
            A Journey of{' '}
            <span className="text-sky-400">Bold Engineering</span>,
            <br />
            Building the <span className="text-sky-400">Future</span> Step by Step
          </h2>
        </div>

        {/* ============ MOBILE + TABLET: simple left-aligned vertical timeline ============ */}
        <div className="lg:hidden relative mt-[-25px] md:mt-[-25px] md:max-w-[650px] md:mx-auto lg:mt-0">
          {/* Vertical line on the left */}
          <div className="absolute top-2 bottom-2 left-[9px] w-px bg-[#91949D]" />

          <div className="flex flex-col gap-8 sm:gap-10">
            {timelineItems.map((item, i) => {
              const dotDelay = 0
              const cardDelay = dotDelay + DOT_DURATION + STEP_DELAY
              const yearDelay = cardDelay + CARD_DURATION + STEP_DELAY

              return (
                <div key={i} className="relative pl-8 sm:pl-10">
                  {/* Dot */}
                  <motion.div
                    className="absolute left-0 top-1 w-5 h-5 bg-[#04A3DA] backdrop-blur-[4px] rounded-full z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: DOT_DURATION, delay: dotDelay, ease: 'backOut' }}
                  />

                  {/* Year label */}
                  <div className="flex items-center gap-3 mb-3">
                    <motion.span
                      className={`font-black text-2xl sm:text-3xl leading-none select-none ${
                        item.isVision ? 'text-sky-400/80' : 'text-sky-400'
                      }`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: YEAR_DURATION, delay: yearDelay, ease: 'easeOut' }}
                    >
                      {item.year}
                    </motion.span>
                    <div className="flex-1 h-px border-t border-[#04A3DA]/60" />
                  </div>

                  {/* Card */}
                  <motion.div
                    className="bg-[#263C50]   border
         border-white/20 w-full rounded-2xl p-4 sm:p-5 flex flex-col justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: CARD_DURATION, delay: cardDelay, ease: 'easeOut' }}
                  >
                    <h3 className="font-semibold text-[18px] sm:text-[20px] leading-[22px] sm:leading-[24px] tracking-[-0.5px] mb-2">
                      {item.title}
                    </h3>
                    <p className=" text-[13px] sm:text-[14px] leading-[17px] sm:leading-[18px] tracking-[-0.5px]">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ============ DESKTOP (lg+): original alternating layout, unchanged ============ */}
        <div className="hidden lg:block relative">
          {/* Center vertical line */}
          <motion.div
            className="absolute top-0 bottom-0 border border-[#91949D] origin-top"
            style={{ left: 'calc(50% - 0.4px)' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />

          <div className="flex flex-col gap-0">
            {timelineItems.map((item, i) => {
              const dotDelay = 0
              const cardDelay = dotDelay + DOT_DURATION + STEP_DELAY
              const yearDelay = cardDelay + CARD_DURATION + STEP_DELAY

              return (
                <div
                  key={i}
                  className={`relative flex items-center gap-0 min-h-[150px] ${
                    item.side === 'left' ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Card side */}
                  <div className="w-1/2 flex items-center justify-center px-6 py-2">
                    <motion.div
                      className="bg-[#263C50]   border
         border-white/30 w-[420px] h-[200px] rounded-2xl p-6 flex flex-col justify-center"
                      initial={{ opacity: 0, x: item.side === 'left' ? -60 : 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: CARD_DURATION, delay: cardDelay, ease: 'easeOut' }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-semibold text-[20px] leading-[24px] tracking-[0] text-[#04A3DA] shrink-0">
                          {item.year}
                        </span>
                        <div className="flex-1 h-px border-t border-[#04A3DA]/60" />
                      </div>
                      <h3 className="font-semibold text-[24px] leading-[28px] tracking-[-0.5px] mb-2">
                        {item.title}
                      </h3>
                      <p className=" text-[16px] leading-[20px] tracking-[-0.5px]">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <motion.div
                    className="absolute flex items-center justify-center z-10"
                    style={{ left: 'calc(50% - 11.74px)' }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: DOT_DURATION, delay: dotDelay, ease: 'backOut' }}
                  >
                    <div className="w-[23.48px] h-[23.48px] bg-[#04A3DA] backdrop-blur-[4px] rounded-full" />
                  </motion.div>

                  {/* Year side */}
                  <div className="w-1/2 flex items-center justify-center px-6">
                    <div className="w-[384px] h-[160px] text-[#04A3DA] flex items-center justify-center rounded-xl">
                      <motion.span
                        className={`font-black leading-none select-none text-[100px] ${
                          item.isVision ? 'text-[#04A3DA]' : 'text-[#04A3DA]'
                        }`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: YEAR_DURATION, delay: yearDelay, ease: 'easeOut' }}
                      >
                        {item.year}
                      </motion.span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}