import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { selectedDateAtom } from '../../../atoms/selectedDateAtom';
import { sidebarVisibleAtom } from '../../../atoms/sidebarVisibleAtom';
import { getDaysInMonth, getFirstDayOfMonth } from '../../../functions/calendarFunctions';
import CalendarDay from './CalendarDay';
import MonthPicker from './MonthPicker';

function Calendar() {

  const dayHeaders = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom);
  const [dayArray, setDayArray] = useState([])

  useEffect(() => {
    //create an array with leading 0 up to first calender day of month, then 1 - days of month
    const createDayArray = () => {
      var dayArray = Array(35);
      //WHow many days in a month
      var daysInMonth = getDaysInMonth(selectedDate.getFullYear(), selectedDate.getMonth());
      //console.log(daysInMonth);

      //Gibt de ersten Tag des Monats als Zahl wieder 0=Sonntag, 1=Montag, bis 6 = Samstag
      var firstDayOfMonth = getFirstDayOfMonth(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
      ).getDay();
      //because sunday is 0 for some reason. Not an elegant solution but for now its ok
      if (firstDayOfMonth === 0) {
        firstDayOfMonth = 7
      };

      for (let j = 1; j < firstDayOfMonth; j++){
        dayArray[j] = null;
      }

      for (let i = 1; i < daysInMonth + 1; i++) {
        dayArray[i + firstDayOfMonth] = i;
      }
      //console.log(dayArray)
      return(dayArray);
    }
    setDayArray(createDayArray);
  }, [selectedDate])


  return (
    <div className='grid min-w-full mt-4'>

      <MonthPicker/>

      <div className='max-w-fit h-96'>
              <div className='mt-4 grid grid-cols-7 gap-3'>
                {dayHeaders.map((dayHeader, index) => (
                  <div className=' w-12 h-12 flex items-center justify-center' key={index}>
                    <h1 className='font-extralight p-1 text-xl'> {dayHeader} </h1>
                  </div>
                ))}

                {dayArray.map((day, index) => (
                  <CalendarDay day={day} key={index} id={index}/>
                ))}

              </div>
            </div>
    </div>
  )
}

export default Calendar