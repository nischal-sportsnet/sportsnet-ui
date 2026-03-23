import React from 'react';

export interface CardProps {
  padded?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Card({ padded = true, className = '', children }: CardProps) {
  return (
    <div className={`${padded ? 'sn-card-padded' : 'sn-card'} ${className}`}>
      {children}
    </div>
  );
}

export interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

export function CardHeader({ title, subtitle, action, className = '' }: CardHeaderProps) {
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
