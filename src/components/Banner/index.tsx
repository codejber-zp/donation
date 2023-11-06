import React, { ReactNode } from 'react';

export interface BannerProps extends React.ComponentPropsWithoutRef<'section'> {
  text: string | ReactNode;
}

export default function Banner({ text, ...props }: BannerProps) {
  return (
    <section
      role='note'
      aria-label={props['aria-label'] || 'banner'}
      className='bg-lightGray3 container px-4 py-6 text-center text-xs font-normal sm:text-left'
      {...props}
    >
      {text}
    </section>
  );
}
