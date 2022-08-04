import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { selectedDayAtom } from '../atoms/selectedDayAtom';

function InputSection() {

  const [selectedDay, setSelectedDay] = useRecoilState(selectedDayAtom);

  return (
    <div className='col-span-1 min-w-full min-h-fit text-center'>
      <h1 className=' font-light text-3xl text-black mt-10 underline underline-offset-2'>Auswahl</h1>

      <div className=' w-72 h-20 mt-10 border border-gray-600 bg-gray-200 mx-auto flex justify-center'>
        <p className='m-auto text-xl'> {selectedDay} </p>
      </div>

    </div>
  )
}

export default InputSection