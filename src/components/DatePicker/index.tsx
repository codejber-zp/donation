import React, { useState } from 'react';

export interface DatePickerProps extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
}

export default function DatePicker({ label, ...props }: DatePickerProps) {
  const now = new Date();
  const [date, setValue] = useState<Date>(now);
  const isNextPast =
    new Date(date.getFullYear(), date.getMonth()) <=
    new Date(now.getFullYear(), now.getMonth());

  const handleOnChange = (months: number) => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + months);
    setValue(newDate);
  };

  return (
    <div
      role='listbox'
      className='text-midnightGray flex flex-col text-sm font-medium'
      {...props}
      aria-label={label}
    >
      <div>{label}</div>
      <div className='text-purpleGray bg-transparent border-purpleMidnight py-xs flex h-button w-button items-center justify-between rounded-md border p-2 font-medium leading-7'>
        <button
          aria-label='chevron left'
          disabled={isNextPast}
          onClick={() => handleOnChange(-1)}
          className="hover:bg-lightGray active:bg-lightGray2 h-4 w-4 bg-[url('/public/chevron-left.svg')] bg-center bg-no-repeat disabled:hover:cursor-not-allowed "
        ></button>
        <div className='flex-col'>
          <div aria-label='picked month' className='text-center text-base'>
            {date.toLocaleString('en', { month: 'long' })}
          </div>
          <div aria-label='picked year' className='text-center text-xs'>
            {date.getFullYear()}
          </div>
        </div>
        <button
          aria-label='chevron right'
          onClick={() => handleOnChange(1)}
          className="hover:bg-lightGray active:bg-lightGray2 h-4 w-4 bg-[url('/public/chevron-right.svg')] bg-center bg-no-repeat "
        ></button>
      </div>
    </div>
  );
}
