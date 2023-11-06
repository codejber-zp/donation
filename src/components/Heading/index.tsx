import React, { ReactNode } from 'react';
import { Text } from '../';

export interface HeadingProps extends React.ComponentPropsWithoutRef<'header'> {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}

export default function Heading({
  title,
  subtitle,
  icon,
  ...props
}: HeadingProps) {
  return (
    <header
      className='gap-m flex'
      aria-label={props['aria-label'] || 'header'}
      {...props}
    >
      {icon && (
        <div role='img' aria-label='heading icon'>
          {icon}
        </div>
      )}
      <div className='flex flex-col justify-around'>
        <Text
          text={title}
          size='xl'
          className='text-purpleMidnight font-semibold'
        />
        {subtitle && <Text size='s' text={subtitle} />}
      </div>
    </header>
  );
}
