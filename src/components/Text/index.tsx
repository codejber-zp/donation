import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TextProps extends React.ComponentPropsWithoutRef<'p'> {
  text: string;
  size?: 's' | 'm' | 'xl';
}

export default function Text({
  text,
  size = 'm',
  className,
  ...props
}: TextProps) {
  return (
    <p
      role='note'
      aria-label={props['aria-label'] || 'text'}
      {...props}
      className={twMerge(
        size === 's' && 'text-base font-normal',
        size === 'm' && 'text-2xl font-medium',
        size === 'xl' && 'text-[2rem] font-bold',
        'text-purpleGray leading-6',
        className,
      )}
    >
      {text}
    </p>
  );
}
