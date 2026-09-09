import React from 'react';

export default function ExpertiseCard({ icon, title, description }) {
  return (
    <div class="">
    <div className="expertise-card bg-[#111E2E] border border-[#22354F] rounded-[24px] text-left flex flex-col gap-6">
      <div className="w-8 h-8 text-sky-400 shrink-0 expertise-icon">
        {icon}
      </div>
      <h3 className="text-[20px] font-bold text-white leading-tight">{title}</h3>
      <p className="text-slate-400 text-[12px] leading-[1.5]">{description}</p>
    </div>
    </div>
  );
}
