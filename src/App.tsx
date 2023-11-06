import React, { useState } from 'react';
import { Input, DatePicker, Button, Banner, Text, Heading } from './components';

type Donation = {
  dateUntil: Date;
  amount: string;
};

const initialDonation: Donation = {
  dateUntil: new Date(),
  amount: '',
};

function App() {
  const [donateUntil, setDonateUntil] = useState<Date>(
    initialDonation.dateUntil,
  );
  const [amount, setAmount] = useState<string>(initialDonation.amount);

  const handleOnDateChange = (newDate: Date) => {
    setDonateUntil(newDate);
  };
  const handleOnInputChange = (amount: string) => {
    setAmount(amount);
  };

  return (
    <div className='container-none m-[4rem] flex justify-center'>
      <main className='flex w-[37.5rem] flex-col items-center font-sans shadow-[0_16px_32px_0px_rgba(30,42,50,0.08)]'>
        <section className='p-xxl bg-salmon container'>
          <Heading
            icon={<img src='giving.svg' />}
            title='The giving block'
            subtitle='Set up your donation goal!'
          />
        </section>

        <section className='p-xxl gap-l flex flex-col '>
          <section className='gap-m flex'>
            <Input
              onAmountChange={handleOnInputChange}
              name='donationAmount'
              value={amount}
              label='I can donate'
            />
            <DatePicker
              pastLimitationDate={new Date()}
              date={donateUntil}
              onDateChange={handleOnDateChange}
              label='Every month until'
            />
          </section>

          <section className='flex gap-[11rem]'>
            <Text text='Total amount' />
            <Text size='xl' text={`$${amount || '0.00'}`} />
          </section>

          <Banner
            text={
              <>
                You will be sending{' '}
                <span className='font-bold'>{`$${amount || '0.00'}`}</span>{' '}
                every month, until{' '}
                <span className='font-bold'>{`${donateUntil.toLocaleString(
                  'en',
                  { month: 'long' },
                )} ${donateUntil.getFullYear()}`}</span>
                . Thank you!
              </>
            }
          />

          <section className='gap-m flex'>
            <Button text='Cancel' variant='outlined' />
            <Button text='Continue' />
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
