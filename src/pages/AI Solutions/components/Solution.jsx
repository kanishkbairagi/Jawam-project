import React, { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const solutionsData = [
  {
    id: 'chatbot',
    tabTitle: 'AI Chatbot Development',
    contentTitle: 'AI Chatbot for Business',
    description:
      'Provide 24/7 support, automate conversations, capture leads and boost customer satisfaction with intelligent chatbots.',
    bullets: [
      '24/7 Customer Support',
      'Lead generation and qualification',
      'Seamless Integration',
    ],
  },
  {
    id: 'testing',
    tabTitle: 'AI Testing Dashboard',
    contentTitle: 'AI Testing & Quality Dashboard',
    description:
      'Monitor AI model performance, evaluate accuracy metrics, detect data drift, and ensure reliable execution in real time.',
    bullets: [
      'Real-time Accuracy & Drift Monitoring',
      'Automated Model Benchmark Testing',
      'Custom Performance Analytics & Alerts',
    ],
  },
  {
    id: 'genai',
    tabTitle: 'Generative AI Solutions',
    contentTitle: 'Generative AI & LLM Integration',
    description:
      'Empower your team with custom fine tuned LLMs, automated content generation, and RAG architectures tailored to enterprise data.',
    bullets: [
      'Custom LLM Fine Tuning & Prompting',
      'Enterprise RAG Knowledge Base Retrieval',
      'Automated Multi modal Content Creation',
    ],
  },
  {
    id: 'agents',
    tabTitle: 'AI Automation & Agents',
    contentTitle: 'Autonomous AI Agents & Workflows',
    description:
      'Deploy smart autonomous agents that execute multi step business workflows, parse unstructured documents, and trigger external APIs seamlessly.',
    bullets: [
      'End to End Task Automation',
      'Document Parsing & Information Extraction',
      'Multi Agent Collaborative Systems',
    ],
  },
  {
    id: 'healthcare',
    tabTitle: 'AI for Healthcare',
    contentTitle: 'Healthcare AI & Clinical Intelligence',
    description:
      'Improve patient outcomes, streamline clinical documentation, and enable diagnostic assistance with HIPAA compliant medical AI.',
    bullets: [
      'Predictive Health Analytics & Triage',
      'Medical Image Analysis & Diagnostics',
      'HIPAA Compliant Patient Assist Chatbots',
    ],
  },
  {
    id: 'data',
    tabTitle: 'Data Engineering & Analytics',
    contentTitle: 'Data Engineering & Predictive Analytics',
    description:
      'Transform raw unstructured data into actionable insights with robust ETL pipelines, data lakes, and real time predictive analytics.',
    bullets: [
      'Scalable Data Lake & Pipeline Engineering',
      'Predictive Business Intelligence Dashboards',
      'Data Warehouse Cleaning & Optimization',
    ],
  },
]

export default function Solution() {
  const [activeTab, setActiveTab] = useState(0)
  const current = solutionsData[activeTab]

  return (
    <div class="lg:mt-12 mt-[0px] md:mt-[50px]">
    <section className="lg:mt-12 mt-[0px] md:mt-[30px]  px-4 sm:px-6 max-w-[1200px] mx-auto text-center lg:mb-[-20px] md:mb-[50px] mb-[-40px]">
      {/* Category Tag */}
      <span className="font-semibold text-[15px] md:text-[16px] lg:text-[16px] leading-[18px] tracking-[0] text-center text-[#04A3DA] md:mb-3 lg:mb-3 ">
        SOLUTIONS & SERVICES
      </span>

      {/* Main Title */}
      <h2 className="md:mt-0 lg:mt-0 mt-[-5px] font-bold text-[22px] md:text-[44px] lg:text-[44px] leading-[48px] tracking-[-0.5px] text-center mb-4">
        Our <span className="text-sky-400">AI Solutions</span> & Services
      </h2>

      {/* Main Container */}
      <div className=" md:mt-0 lg:mt-0 mt-[-10px] border border-[#BDBDBDB0] rounded-3xl p-2 md:p-6 lg:p-6 lg:max-w-5xl md:max-w-[680px] mx-auto shadow-2xl backdrop-blur-md text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center ">

          {/* Left Sidebar Tabs */}
          <div className=" md:col-span-4 flex flex-col gap-1.5 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-4">
            {solutionsData.map((item, index) => {
              const isActive = activeTab === index
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.tabTitle}
                </button>
              )
            })}
          </div>

          {/* Right Content Panel */}
          <div className="md:col-span-8 p-4 sm:p-6 flex  flex-col justify-center rounded-2xl bg-[#3BAFCF1A]">
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">
              {current.contentTitle}
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              {current.description}
            </p>

            <ul className="space-y-2">
              {current.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm">
                  <div className="w-3 h-3 rounded-full bg-[#04A3DA] shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}
