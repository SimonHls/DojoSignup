import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useRecoilState } from 'recoil'
import { displayAsMonth } from '../../functions/calendarFunctions';
import { selectedDateAtom } from '../../atoms/selectedDateAtom';

function MonthPicker() {

  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom)

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

  return (
    <div className='flex justify-center space-x-5'>

      <div className=' p-1 rounded-bl-md rounded-tl-md cursor-pointer text-gray-500
          hover:text-black transition-all ease-in-out'
            onClick={handlePrevMonth}>
        <ChevronLeftIcon className='w-10 h-10'/>
      </div>

      <div className=' w-32 min-h-full rounded-md bg-white flex justify-center items-center'>
        <h1 className=' font-light text-lg text-black'>
          { displayAsMonth(selectedDate) }
        </h1>
      </div>

      <div className=' p-1 rounded-br-md rounded-tr-md cursor-pointer text-gray-600
          hover:text-black  transition-all ease-in-out'
            onClick={handleNextMonth}>
        <ChevronRightIcon className='w-10 h-10'/>
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
