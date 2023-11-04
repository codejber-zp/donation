import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
}

const BUTTON_VARIANTS = {
  primary: 'bg-purpleLight hover:bg-blue-600 text-white',
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  danger: 'bg-red-500 hover:bg-red-600 text-white',
};

export default function Button({ text, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'text-white h-button w-button rounded-br-md border px-space3 py-space2 text-base font-semibold leading-5',
        true && BUTTON_VARIANTS['primary'],
      )}
      {...props}
    >
      {text}
    </button>
  );
}
