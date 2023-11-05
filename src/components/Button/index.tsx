import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonVariants = {
  contained: string;
  outlined: string;
};

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
  variant?: keyof ButtonVariants;
}

const BUTTON_VARIANTS: ButtonVariants = {
  contained:
    'bg-purpleMidnight hover:bg-purpleLight text-white active:bg-purpleDark',
  outlined:
    'text-purpleMidnight bg-transparent hover:bg-purpleTransparent10 active:bg-purpleTransparent25',
};

export default function Button({
  text,
  variant = 'contained',
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'h-button w-button rounded-md border px-space3 py-space2 text-base font-semibold leading-5',
        BUTTON_VARIANTS[variant],
      )}
      {...props}
    >
      {text}
    </button>
  );
}
