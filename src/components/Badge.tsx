import React from 'react';

const variantClasses = {
  success: 'sn-badge-success',
  warning: 'sn-badge-warning',
  error: 'sn-badge-error',
  info: 'sn-badge-info',
  neutral: 'sn-badge-neutral',
} as const;

export interface BadgeProps {
  variant?: keyof typeof variantClasses;
  className?: string;
  children: React.ReactNode;
}

export function Badge({ variant = 'neutral', className = '', children }: BadgeProps) {
  return (
    <span className={`${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
