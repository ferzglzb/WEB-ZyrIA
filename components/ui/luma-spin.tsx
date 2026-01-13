import React from 'react';

export const LumaSpin = () => {
  return (
    <div className="relative w-[65px] aspect-square">
      {/* 
        Adaptation for ZyrIA:
        Using brand-lime and brand-action colors instead of generic gray.
        Using shadow-current to inherit text color.
      */}
      <span className="absolute rounded-[50px] animate-luma-loader shadow-[inset_0_0_0_3px] text-brand-lime shadow-current" />
      <span className="absolute rounded-[50px] animate-luma-loader shadow-[inset_0_0_0_3px] text-brand-action shadow-current" style={{ animationDelay: '-1.25s' }} />
    </div>
  );
};