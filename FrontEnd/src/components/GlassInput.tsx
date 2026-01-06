import React, { InputHTMLAttributes } from 'react';

interface GlassInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const GlassInput: React.FC<GlassInputProps> = ({ label, id, className, ...props }) => {
  return (
    <div className="flex flex-col gap-1 w-full relative group">
      <label 
        htmlFor={id} 
        className="text-xs font-medium ml-1 text-gray-800 font-sans tracking-wide"
      >
        {label}
      </label>
      <input
        id={id}
        className={`
          w-full px-4 py-3 rounded-2xl
          bg-white/10 backdrop-blur-md
          border border-white/40
          text-gray-900 placeholder:text-gray-600
          outline-none
          focus:bg-white/20 focus:border-white/60 focus:ring-1 focus:ring-white/30
          transition-all duration-300 ease-out
          shadow-sm
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

export default GlassInput;
