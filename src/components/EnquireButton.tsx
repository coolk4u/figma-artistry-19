
import React from 'react';

interface EnquireButtonProps {
  className?: string;
  onClick?: () => void;
}

export const EnquireButton: React.FC<EnquireButtonProps> = ({ className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 px-6 py-3 rounded-md transition-all duration-200 hover-lift overflow-hidden ${className}`}
    >
      <span className="relative z-10">Enquire Now</span>
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
    </button>
  );
};
