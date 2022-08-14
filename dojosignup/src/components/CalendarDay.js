import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { selectedDayAtom } from '../atoms/selectedDayAtom'

function CalendarDay(props) {

  const [selectedDay, setSelectedDay] = useRecoilState(selectedDayAtom);
  const [isSelected, setIsSelected] = useState(false);

  const handleDayClick = () => {
    if (selectedDay !== props.day) {
      setSelectedDay(props.day);
    }
  };
  
  useEffect(() => {
    const handleSelectionChange = () => {
      setIsSelected(false);
      if (props.day === selectedDay) {
        setIsSelected(true);
      }
    }
    handleSelectionChange();
  }, [selectedDay, props.day]);
  
  
  return (
    <div className={`w-20 h-20 rounded-sm flex justify-center shadow-md
          hover:cursor-pointer transition ease-in
          ${isSelected ? 'bg-yellow-300' : 'bg-gray-100 hover:bg-gray-200 hover:shadow-lg'}`}
          onClick={handleDayClick}>
      <h1 className='m-auto font-light text-2xl'> {props.day} </h1>
    </div>
  )
}

export default CalendarDay