import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-24 md:pt-22 lg:pt-36 pb-8 md:pb-12 px-4 md:px-6 hero-glow bg-[#0F172A] overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px]  rounded-full blur-[100px] pointer-events-none animate-pulse" />

      <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center relative z-10">

        {/* Badge */}
        <div
          className="
            inline-flex items-center gap-2
            bg-white text-slate-700
            text-xs md:text-sm font-medium
            px-4 md:px-5 py-1.5 md:py-2
            rounded-full shadow-md
            mb-6 md:mb-10

            opacity-0
            animate-[heroFadeDown_0.7s_ease-out_forwards]
            hover:scale-105
            transition-transform duration-300
          "
        >
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-sky-500 shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
            />
          </svg>

          Our Technology
        </div>

        {/* Heading */}
        <h1
          className="
            text-3xl md:text-5xl lg:text-6xl
            font-extrabold
            leading-[1.1]
            mb-4 md:mb-8
            tracking-tight
            lg:mt-[-20px] md:mt-0 mt-0
            opacity-0
            animate-[heroFadeUp_0.8s_ease-out_0.15s_forwards]
          "
        >
          Data{' '}
          <span
            className="
              text-sky-400
              animate-[heroGlow_2.5s_ease-in-out_infinite]
            "
          >
            Engineering
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            text-sm md:text-base lg:text-[17px]
            text-white/85
            max-w-[850px]
            leading-relaxed
            mb-6 md:mb-8
            px-2
            font-medium
            lg:mt-[-10px] md:mt-0 mt-0
            opacity-0
            animate-[heroFadeUp_0.8s_ease-out_0.35s_forwards]
          "
        >
          We build robust, scalable data infrastructure that transforms
          scattered, messy data into clean, trustworthy assets  powering
          fast, reliable analytics and AI across your business.
        </p>

        {/* CTA */}
        <Link
          to="/work"
          className="
            btn-gradient
            inline-flex items-center
            gap-1.5 lg:gap-3
            text-white
            font-semibold
            text-xs lg:text-base
            px-4 lg:px-8
            py-2 lg:py-2.5
            rounded-full
            lg:mt-[-5px] md:mt-0 mt-0
            opacity-0
            animate-[heroFadeUp_0.8s_ease-out_0.55s_forwards]

            transition-all duration-300
            shadow-lg
            shadow-blue-500/20

            hover:-translate-y-1
            hover:scale-105
            hover:shadow-[0_10px_35px_rgba(14,165,233,0.35)]
            active:scale-95
          "
        >
          Let's Build Your Data Pipeline

          <svg
            className="
              w-3 h-3 lg:w-5 lg:h-5
              transition-transform duration-300
              group-hover:translate-x-1
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
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
    </section>
  );
}