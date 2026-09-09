import React from 'react';

export default function ProcessStep({ index, label, icon, isStaticGlow }) {
  return (
    <div className="flex flex-col items-center gap-1.5 group relative">
      <div 
        className={`absolute -top-3 w-20 h-20 bg-[#00b4d8]/25 rounded-full blur-lg pointer-events-none transition-opacity duration-300 ${
          isStaticGlow ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      ></div>
      
      <div 
        className={`relative z-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
          isStaticGlow ? 'shadow-[0_0_16px_rgba(56,189,248,0.35)]' : 'shadow-[0_0_16px_rgba(56,189,248,0.25)]'
        }`}
        style={{ width: '54.6px', height: '54.6px', backgroundColor: 'white', borderRadius: '50%', opacity: 1 }}
      >
        {icon}
      </div>
      <span className="relative z-10 text-sky-400 text-xl font-extrabold leading-none mt-1">{index}</span>
      <span 
        className="relative z-10 text-[14px] font-semibold leading-4 tracking-normal" 
        style={{ 
          color: 'var(--Color-background-subtle, #B5B7BD)', 
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '16px',
          letterSpacing: 0
        }}
      >
        {label}
      </span>
    </div>
  );
}