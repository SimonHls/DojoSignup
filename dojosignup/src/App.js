import './App.css';
import React from 'react';
import Calendar from './components/Calendar';
import {
  RecoilRoot
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">

        <div className='h-20 z-50 sticky bg-white shadow-md'>
          <h1 className='relative text-center font-bold text-xl pt-6'>Calendar</h1>
        </div>
        
        <Calendar />
          
      </div>
    </RecoilRoot>
  );
}

export default App;
