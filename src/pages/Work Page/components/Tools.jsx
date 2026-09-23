import React from 'react';

export default function Tools() {
  const toolCategories = [
    {
      title: 'Communication',
      tools: ['Slack', 'Google Meet', 'Loom']
    },
    {
      title: 'Project Management',
      tools: ['JIRA', 'Linear', 'Notion']
    },
    {
      title: 'Development',
      tools: ['GitHub', 'GitLab', 'VS Code']
    },
    {
      title: 'CI/CD & DevOps',
      tools: ['GitHub Actions', 'Docker', 'AWS']
    }
  ];

  return (
    <section className="px-4 pt-0 md:pt-0 lg:pt-0 pb-12 w-[350px] md:w-[610px] lg:w-full mx-auto md:pb-20 lg:pb-20">
      <style>{`
        @keyframes toolsFloat1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes toolsFloat2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes toolsFloat3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        .tools-float-0 { animation: toolsFloat1 2s ease-in-out infinite; }
        .tools-float-1 { animation: toolsFloat2 2s ease-in-out infinite; animation-delay: 0.25s; }
        .tools-float-2 { animation: toolsFloat3 2s ease-in-out infinite; animation-delay: 0.5s; }
        @media (prefers-reduced-motion: reduce) {
          .tools-float-0, .tools-float-1, .tools-float-2 {
            animation: none !important;
          }
        }
      `}</style>

      <div className="max-w-[1150px] mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-bold text-[24px] md:text-[30px] lg:text-[45px] leading-tight tracking-[-0.5px] text-white mb-2.5">
            Tools &<span className="text-sky-400"> Practices</span>
          </h2>
          <p className="text-slate-400 font-normal text-[13px] sm:text-[15px] md:text-[16px] leading-snug max-w-[600px] mx-auto">
            We use industry standard tools and practices for seamless collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {toolCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF1A] border border-white/40 rounded-xl p-4 transition-colors duration-300"
            >
              <h3 className="font-semibold text-[13px] sm:text-[14px] text-white mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className={`tools-float-${toolIndex % 3} inline-flex items-center bg-sky-400/10 border border-sky-400/25 text-sky-300 font-medium text-[11px] sm:text-[12px] leading-none px-2.5 py-1.5 rounded-md`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}