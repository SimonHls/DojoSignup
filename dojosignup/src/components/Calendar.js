import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { selectedMonthAtom } from '../atoms/selectedMonthAtom';
import CalendarDay from './CalendarDay'
import InputSection from './InputSection'
import MonthPicker from './MonthPicker'

function Calendar() {


  const dayHeaders = ["Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa.", "So."];
  const [selectedMonth, setSelectedMonth] = useRecoilState(selectedMonthAtom);
  const [dayArray, setDayArray] = useState([])


  useEffect(() => {
    //create an array with leading 0 up to first calender day of month, then 1 - days of month
    const createDayArray = () => {
      var dayArray = Array(35);
      //WHow many days in a month
      var daysInMonth = getDaysInMonth(selectedMonth.getFullYear(), selectedMonth.getMonth());
      console.log(daysInMonth);

      //Gibt de ersten Tag des Monats als Zahl von 1 (Montag) bis 7 (Sonntag)
      var firstDayOfMonth = getFirstDayOfMonth(
        selectedMonth.getFullYear(),
        selectedMonth.getMonth(),
      ).getDay();

      for (let j = 1; j < firstDayOfMonth; j++){
        console.log("loop");
        dayArray[j] = 0;
      }

      for (let i = 1; i < daysInMonth + 1; i++) {
        dayArray[i + firstDayOfMonth] = i;
      }
      return(dayArray);
    }
    setDayArray(createDayArray);
  }, [selectedMonth])


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

function getDaysInMonth(year, month) {
  return new Date(year, month  + 1, 0).getDate(); //no idea why +1 is necessary
}