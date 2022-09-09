import { Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { selectedDateAtom } from '../../../atoms/selectedDateAtom';
import { getDaysInMonth, getFirstDayOfMonth } from '../../../functions/calendarFunctions';
import CalendarDay from './CalendarDay';
import MonthPicker from './MonthPicker';
import Moment from 'moment';

function Calendar() {

  const dayHeaders = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom);
  const [dayArray, setDayArray] = useState([])
  const [calendarIsExtended, setCalendarIsExtended] = useState(false);

  //This useEffect hook creates a day array when selected month changes
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

  const handleToggleCalendar = () => {
    calendarIsExtended ? setCalendarIsExtended(false) : setCalendarIsExtended(true);
  }

  return (
      <div className='mt-2'>
        <div className='flex min-w-full justify-start'>
          <div className="flex w-56 h-12 items-center rounded-md border border-gray-300
                                      bg-white px-4 py-2 text-gray-700 shadow-sm
                                      hover:bg-gray-100 cursor-pointer"
                onClick={() => handleToggleCalendar()}>
            <p className='w-64 truncate text-base font-normal'> { selectedDate ? Moment(selectedDate).format('D MMMM YYYY') : "Kalender öffnen" } </p>
            { calendarIsExtended ?
            <ChevronUpIcon className="ml-2 mr-2 h-8 w-8 sticky right-0 text-gray-800" aria-hidden="true" />
            :
            <ChevronDownIcon className="ml-2 mr-2 h-8 w-8 sticky right-0 text-gray-800" aria-hidden="true" />
            }

          </div>
        </div>

        {/* SHOW CALENDAR */}

        <Transition show={calendarIsExtended}>
          <Transition.Child
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >

            <div className='absolute top-0 left-0 min-h-screen min-w-full'
                onClick={() => handleToggleCalendar()}/>

            <Transition.Child
              enter="transform transition ease-in-out duration-300 sm:duration-500"
              enterFrom="translate-y-full"
              enterTo="translate-y-0"
              leave="transform transition ease-in-out duration-300 sm:duration-500"
              leaveFrom="translate-y-0"
              leaveTo="translate-y-full"
            >

              <div className=' absolute origin-right'>
                <div className='flex flex-col w-fit p-4 bg-white border border-gray-200 shadow-md rounded-md'>

                  <MonthPicker/>

                  <div className='flex flex-col'>
                    <div className='grid grid-cols-7'>
                      {dayHeaders.map((dayHeader, index) => (
                        <div className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center' key={index}>
                          <h1 className='font-extralight text-lg'> {dayHeader} </h1>
                        </div>
                      ))}

                      <div className='col-span-7 grid grid-cols-7'>
                        {dayArray.map((day, index) => (
                          <CalendarDay day={day} key={index} id={index}/>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </Transition.Child>
        </Transition>

    </div>
  )
}

export default Calendar