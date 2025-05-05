import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  headerColor?: string; // Tailwind color class, e.g., 'bg-red-700'
  children: ReactNode;
  className?: string; // For outer container
}

const Card: React.FC<CardProps> = ({ title, headerColor = 'bg-red-700', children, className = '' }) => {
  return (
    <div className={`w-full rounded-xl shadow-lg border border-gray-200 bg-white overflow-hidden ${className}`}>
      <div className={`${headerColor} px-6 py-4 rounded-t-xl`}>
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      <div className="p-8 text-left">
        {children}
      </div>
    </div>
  );
};

export default Card; 