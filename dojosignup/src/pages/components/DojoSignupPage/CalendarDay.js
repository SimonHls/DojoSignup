import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { selectedDateAtom } from '../../../atoms/selectedDateAtom'

function CalendarDay(props) {

  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom);
  const [isSelected, setIsSelected] = useState(false);

  const handleDayClick = () => {
    //selectedDate.getDate() returns 31 for the 31st of october
    if (selectedDate.getDate() !== props.day && props.day !== 0) {
      var newDate = new Date(selectedDate.setDate(props.day));
      setSelectedDate(newDate);
    }
  };

  useEffect(() => {
    //Set isSelected to true, if day is clicked and not already selected
    const handleSelectionChange = () => {
      //selectedDate.getDate() - 1 returns 31 for the 31st of october
      if (props.day === selectedDate.getDate()  && props.day !== 0) {
        setIsSelected(true);
        return;
      }
      else {
        setIsSelected(false);
      }
    }
    handleSelectionChange();
  }, [selectedDate, props.day])

  //check if real day is selected (wrong days have props.day = 0)
  if (props.day !== null) {
  return (
    <div className={`w-10 h-10 sm:w-12 sm:h-12 flex justify-center
          hover:cursor-pointer transition ease-out
          ${isSelected ? 'bg-yellow-400' : 'bg-white hover:bg-yellow-100'}
          ${props.id % 7 === 1 || props.id % 7 === 0 ? 'text-red-700' : 'text-black'}`}
          onClick={handleDayClick}>
      <h1 className='m-auto font-light text-md sm:text-xl'> {props.day} </h1>
    </div>
  )}
  else {
    return (
      <div className='w-10 h-10 sm:w-12 sm:h-12 opacity-0' />
    )}
}

export default CalendarDay