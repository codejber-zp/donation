import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import DatePicker from './components/DatePicker';

function App() {
  return (
    <div className='p-sm gap-sm flex flex-col items-center font-sans'>
      <Input name='donationAmount' label='I can donate' />
      <DatePicker label='Every month until' />
      <Button text='Donation' />
    </div>
  );
}

export default App;
