import React from 'react'
import Moment from 'moment';
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid'
import { Button, ButtonGroup } from '@mui/material'
import { useRecoilState } from 'recoil'
import { selectedMonthAtom } from '../atoms/selectedMonthAtom'

function MonthPicker() {

  const [selectedMonth, setSelectedMonth] = useRecoilState(selectedMonthAtom)

  const handleNextMonth = () => {
    var newDate = new Date(selectedMonth.setMonth(selectedMonth.getMonth()+1));
    setSelectedMonth(newDate);
  }

  const handlePrevMonth = () => {
    var newDate = new Date(selectedMonth.setMonth(selectedMonth.getMonth()-1));
    setSelectedMonth(newDate);
  }


  return (
    <div className='p-4 flex justify-start space-x-5'>
      <div className=' w-48 h-18 border-black border rounded-md bg-gray-200 text-center inline-block align-middle'>
        <h1 className=' mt-4 font-light text-lg'> { Moment(selectedMonth).format('MMM YYYY') } </h1>
      </div>
      <ButtonGroup size="large" aria-label="large button group">
        <Button>
          <ArrowCircleLeftIcon className=' w-12 h-12' onClick={handlePrevMonth}/>
        </Button>
        <Button>
          <ArrowCircleRightIcon className=' w-12 h-12' onClick={handleNextMonth}/>
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default MonthPicker