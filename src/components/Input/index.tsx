import React, { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { formatAmount } from '../../utils/amount';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
}

const getCursorAddIndex = (prevValue: string, currValue: string): number => {
  const prevAmount = prevValue?.split('.')?.at(0)?.replace(/\D/g, '') || '';
  const currAmount = currValue?.split('.')?.at(0)?.replace(/\D/g, '') || '';
  return currAmount.length % 3 === 1 && prevAmount.length % 3 === 0 ? 1 : 0;
};

export default function Input({ label, ...props }: InputProps) {
  const [value, setValue] = useState<string>('');
  const [cursor, setCursor] = useState<number | null>(null);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = ref.current;
    if (input) input?.setSelectionRange(cursor, cursor);
  }, [cursor, value]);

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    getCursorAddIndex(value, e.target.value);
    setCursor(
      (e.target.selectionStart || 0) + getCursorAddIndex(value, e.target.value),
    );
    setValue(e.target.value);
  };

  return (
    <div className='text-midnightGray flex flex-col text-sm font-medium'>
      <label htmlFor={props.name || 'amount'}>{label}</label>
      <input
        ref={ref}
        value={formatAmount(value)}
        placeholder='0.00'
        onChange={handleOnChange}
        name='amount'
        aria-label='amount'
        className={twMerge(
          "text-purpleGray bg-transparent p-sm border-blueGray50 focus:outline-purpleMidnight h-button w-button rounded-md border bg-[url('/public/dollar.svg')] bg-[position:0%_50%] bg-no-repeat text-2xl font-medium leading-7 focus:outline-1",
          'pl-m',
        )}
        {...props}
      />
    </div>
  );
}
