import React from 'react';

interface BadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isActive?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ label, isActive = false, ...props }) => (
  <button 
    className={`ui-badge ${isActive ? 'active' : ''}`} 
    aria-pressed={isActive}
    {...props}
  >
    {label}
  </button>
);