import React from 'react';

export interface DatePickerProps extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
  date: Date;
  pastLimitationDate?: Date;
  futureLimitationDate?: Date;
  onDateChange?: (newDate: Date) => void;
}

export default function DatePicker({
  label,
  date,
  pastLimitationDate,
  futureLimitationDate,
  onDateChange,
  ...props
}: DatePickerProps) {
  const isPrevDisabled =
    pastLimitationDate &&
    new Date(date.getFullYear(), date.getMonth()) <=
      new Date(pastLimitationDate.getFullYear(), pastLimitationDate.getMonth());

  const isNextDisabled =
    futureLimitationDate &&
    new Date(
      futureLimitationDate.getFullYear(),
      futureLimitationDate.getMonth(),
    ) <= new Date(date.getFullYear(), date.getMonth());

  const handleOnChange = (months: number) => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + months);
    onDateChange?.(newDate);
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
          disabled={isPrevDisabled}
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
          disabled={isNextDisabled}
          onClick={() => handleOnChange(1)}
          className="hover:bg-lightGray active:bg-lightGray2 h-4 w-4 bg-[url('/public/chevron-right.svg')] bg-center bg-no-repeat disabled:hover:cursor-not-allowed "
        ></button>
      </div>
    </div>
  );
}
