import React, { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useRecoilState } from 'recoil'
import { displayAsMonth } from '../../../functions/calendarFunctions';
import { selectedDateAtom } from '../../../atoms/selectedDateAtom';
import { signupAvailableDatesAtom } from '../../../atoms/signupAvailableDatesAtom';
import { collection, getDocs } from 'firebase/firestore';
import { dojoSignupSelectedDojoAtom } from '../../../atoms/dojoSignupSelectedDojoAtom';
import { db } from '../../../firebase';

function MonthPicker() {

  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom);
  const [globalAvailableDates, setGlobalAvailableDates] = useRecoilState(signupAvailableDatesAtom);
  const [selectedDojo, setSelectedDojo] = useRecoilState(dojoSignupSelectedDojoAtom);


  const handleNextMonth = () => {
    clearSelection();
    var newDate = new Date(selectedDate.setDate(1));
    newDate.setMonth(selectedDate.getMonth()+1)
    setSelectedDate(newDate);
  }

  const handlePrevMonth = () => {
    clearSelection();
    var newDate = new Date(selectedDate.setDate(1));
    newDate.setMonth(selectedDate.getMonth()-1)
    setSelectedDate(newDate);
  }
  useEffect(() => {
    const getAvailableDates = async () => {
      let availableDates = [];
      try {
        const availableDatesRef = collection(db, "/dojos/" + selectedDojo[1] + "/dojoDates/")
        const availableDatesDocs = await getDocs(availableDatesRef);
        let i = 0;
        availableDatesDocs.forEach((doc) => {
          availableDates[i, 0] = doc.id;
          availableDates[i, 1] = doc.data().availableSpaces;
          i++;
        });
        setGlobalAvailableDates(availableDates);
        console.log("rep");
      } catch (error) {
        console.log(error);
      }
    }
    return () => {
      getAvailableDates();
    }
  }, [setGlobalAvailableDates, selectedDojo[1], db])

  return (
    <div className='flex justify-center w-fit'>

      <div className=' p-1 rounded-bl-md rounded-tl-md cursor-pointer text-gray-500
          hover:text-black transition-all ease-in-out'
            onClick={handlePrevMonth}>
        <ChevronLeftIcon className='w-8 h-8'/>
      </div>

      <div className=' w-32 min-h-full rounded-md bg-white flex justify-center items-center'>
        <h1 className=' font-light text-lg text-black'>
          { displayAsMonth(selectedDate) }
        </h1>
      </div>

      <div className=' p-1 rounded-br-md rounded-tr-md cursor-pointer text-gray-600
          hover:text-black  transition-all ease-in-out'
            onClick={handleNextMonth}>
        <ChevronRightIcon className='w-8 h-8'/>
      </div>

    </div>
  )
}

export default MonthPicker

function clearSelection() {
  if(document.selection && document.selection.empty) {
      document.selection.empty();
  } else if(window.getSelection) {
      var sel = window.getSelection();
      sel.removeAllRanges();
  }
}
