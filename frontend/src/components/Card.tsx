import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`border-2 border-gray-200 rounded p-6 bg-white hover:shadow-lg transition-shadow ${className}`}>
      {children}
    </div>
  );
};
