import React from 'react'
import { useRecoilState } from 'recoil';
import { selectedMonthAtom } from '../atoms/selectedMonthAtom';
import CalendarDay from './CalendarDay'
import InputSection from './InputSection'
import MonthPicker from './MonthPicker'

function Calendar() {

  
  const dayHeaders = ["Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa.", "So."];
  const [selectedMonth, setSelectedMonth] = useRecoilState(selectedMonthAtom);

  const generateDayArray = () => {
    var dayArray = Array(35);
    
    //Gibt de ersten Tag des Monats als Zahl von 1 (Montag) bis 7 (Sonntag)
    var firstDayOfMoth = getFirstDayOfMonth(
      selectedMonth.getFullYear(),
      selectedMonth.getMonth(),
    ).getDay();
    
    
    for (let i = 0; i < dayArray.length; i++) {
      dayArray[i] = i;
    }
    return dayArray;
  }

  const dayArray = generateDayArray();

  return (
    <div className=' min-h-screen bg-white shadow-md flex relative p-10'>
      <div className='grid grid-cols-3 gap-x-12 min-w-fit min-h-full'>
        
        <div className='col-span-2 min-h-fit min-w-fit'>
          
          <MonthPicker className='top-0 left-12'/>
           
          <div className='mt-10 grid grid-cols-7 gap-4 place-items-center'>
            {dayHeaders.map((dayHeader, index) => (
              <h1 className=' mb-4 font-light text-xl' key={index}> {dayHeader} </h1>
            ))}

            {dayArray.map((day, index) => (
              <CalendarDay day={day} key={index}/>
            ))}
            
          </div>

        </div>

        <InputSection/>

        </div>
      </div>
  )
}

export default Calendar

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1);
}