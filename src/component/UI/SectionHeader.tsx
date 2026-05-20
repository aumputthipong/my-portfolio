import React from "react";

type SectionHeaderProps = {
  label: string;
  index?: string;
  className?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, index, className = "" }) => {
  return (
    <div className={`flex items-center justify-between mb-5 sm:mb-6 ${className}`}>
      <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-gray-400 uppercase flex items-center gap-2">
        <span className="w-5 sm:w-6 h-px bg-gray-400" /> {label}
      </p>
      {index && <p className="text-[10px] sm:text-xs font-mono text-gray-400">{index}</p>}
    </div>
  );
};

export default SectionHeader;
