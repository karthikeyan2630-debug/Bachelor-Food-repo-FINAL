import React from 'react';

interface LogoProps {
  compact?: boolean;
  className?: string;
}

export const BachelorFoodLogo: React.FC<LogoProps> = ({ compact = false, className = '' }) => (
  <div className={`flex items-center ${compact ? 'gap-2' : 'gap-2.5'} ${className}`}>
    <img
      src="/bachelor-food-icon.png"
      alt="Bachelor Food"
      className={compact ? 'w-8 h-8 shrink-0' : 'w-10 h-10 shrink-0'}
    />
    <div className="leading-none">
      <span
        className={`font-black tracking-tight block ${compact ? 'text-base' : 'text-xl'} text-[#ff6a00]`}
        style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
      >
        Bachelor Food
      </span>
      {!compact && (
        <span className="text-[8px] font-bold text-[#a14000] tracking-[0.16em] uppercase">
          Home food · Real stories
        </span>
      )}
    </div>
  </div>
);
