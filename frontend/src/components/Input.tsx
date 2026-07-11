import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="font-medium text-gray-700">{label}</label>}
      <input
        className={`border-2 border-gray-300 px-3 py-2 rounded focus:border-accent focus:outline-none ${
          error ? 'border-error' : ''
        } ${className}`}
        {...props}
      />
      {error && <span className="text-error text-sm">{error}</span>}
    </div>
  );
};
