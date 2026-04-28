import { type ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Container({ children, className = '', narrow = false }: ContainerProps) {
  const maxW = narrow ? 'max-w-3xl' : 'max-w-7xl';
  return (
    <div className={`mx-auto w-full ${maxW} px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}
