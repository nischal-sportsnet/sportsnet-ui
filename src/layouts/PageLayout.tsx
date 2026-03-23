import React from 'react';

export interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/** Full-page wrapper with standard page background and padding */
export function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      {children}
    </div>
  );
}

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
}

/** Standard page header with title, optional subtitle, and action buttons */
export function PageHeader({ title, subtitle, actions, className = '' }: PageHeaderProps) {
  return (
    <div className={`flex items-center justify-between mb-6 ${className}`}>
      <div>
        <h1 className="sn-page-title">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
}

export interface ContentAreaProps {
  children: React.ReactNode;
  padded?: boolean;
  className?: string;
}

/** Padded content container */
export function ContentArea({ children, padded = true, className = '' }: ContentAreaProps) {
  return (
    <div className={`${padded ? 'px-6 py-6' : ''} ${className}`}>
      {children}
    </div>
  );
}
