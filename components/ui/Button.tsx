import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link';
  children: React.ReactNode;
  className?: string;
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  withArrow = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full";
  
  const variants = {
    // Primary: Brand Green background, Dark text (High Contrast)
    primary: "bg-brand-action text-black hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(74,222,128,0.3)] px-6 py-3 font-bold",
    
    // Secondary: Dark semi-transparent background, White text, Visible border
    secondary: "bg-black/30 text-white border border-white/30 backdrop-blur-md hover:bg-black/50 hover:border-white/60 px-6 py-3",
    
    // Link: White text
    link: "bg-transparent text-white hover:underline px-0 py-2 group"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <ArrowUpRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${variant === 'link' ? 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5' : ''}`} />}
    </button>
  );
};