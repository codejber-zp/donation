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
    <div className='container-none flex justify-center'>
      <main className='my-[8rem] flex max-w-[37.5rem] flex-col items-center font-sans shadow-[0_16px_32px_0px_rgba(30,42,50,0.08)]'>
        <section className='p-xxl bg-salmon container'>
          <Heading
            icon={<img src='giving.svg' />}
            title='The giving block'
            subtitle='Set up your donation goal!'
          />
        </section>

        <section className='p-xxl gap-l flex flex-col'>
          <section className='gap-m flex flex-col sm:flex-row'>
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

          <section className='sm:gap-l border-blueGray50 flex flex-col border sm:border-0'>
            <section className='px-sm py-m m-w-button gap-m flex sm:gap-[14rem] sm:p-0'>
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
          </section>

          <section className='gap-m flex flex-col sm:flex-row'>
            <Button text='Cancel' variant='outlined' />
            <Button text='Continue' />
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
