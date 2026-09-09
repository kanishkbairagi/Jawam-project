import React from 'react';

export default function OutcomeCard({ text, icon }) {
  return (
    <div className="outcome-card group flex items-center justify-between px-6 py-5 text-left cursor-default">
      <span className="text-white text-sm font-semibold">{text}</span>
      <div className="outcome-icon-circle ml-4">
        {icon}
      </div>
    </div>
  );
}
