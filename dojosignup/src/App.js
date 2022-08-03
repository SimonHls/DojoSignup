import './App.css';
import React from 'react';
import Calendar from './components/Calendar';

function App() {
  return (
    <>
      <div className=''>

        <div className='min-w-screen h-20 z-50 sticky bg-white shadow-md'>
          <h1 className=' text-center font-bold text-xl pt-6'>Calendar</h1>
        </div>

        <div className=' min-w-screen min-h-screen bg-gray-100 p-10'>
          <Calendar />
        </div>

      </div>
    </>
  );
}

export default App;
