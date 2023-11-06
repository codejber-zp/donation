import React from 'react';
import { Input, DatePicker, Button, Banner, Text, Heading } from './components';

function App() {
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
            <Input name='donationAmount' label='I can donate' />
            <DatePicker label='Every month until' />
          </section>

          <section className='flex gap-[11rem]'>
            <Text text='Total amount' />
            {/* TODO: add state amount*/}
            <Text size='xl' text={'$200,000'} />
          </section>

          {/* TODO: add state amount and date*/}
          <Banner
            text={
              <>
                You will be sending <span className='font-bold'>$25,000</span>{' '}
                every month, until{' '}
                <span className='font-bold'>August 2023</span>. Thank you!
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
