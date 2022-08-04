import React from 'react'
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid'
import { Button, ButtonGroup } from '@mui/material'
import CalendarDay from './CalendarDay'

function Calendar() {

  const dayArray = Array.apply(null, {length: 35}).map(Number.call, Number)
  const dayHeaders = ["Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa.", "So."]

  return (
    <div className=' min-h-screen min-w-full bg-white shadow-md flex relative p-10 mt-4'>
      <div className='grid grid-cols-3 min-w-full min-h-full'>
        
        <div className='col-span-2 min-h-full min-w-full'>
          <div className=''>

            <div className='p-4  top-0 left-12 flex justify-start space-x-5'>
              <div className=' w-48 h-18 border-black border rounded-md bg-gray-200 text-center inline-block align-middle'>
                <h1 className=' mt-4 font-light text-lg'>Oktober 2022</h1>
              </div>
              <ButtonGroup size="large" aria-label="large button group">
                <Button>
                  <ArrowCircleLeftIcon className=' w-12 h-12'/>
                </Button>
                <Button>
                  <ArrowCircleRightIcon className=' w-12 h-12'/>
                </Button>
              </ButtonGroup>
            </div>

            <div className='mt-10 grid grid-cols-7 auto-cols-auto place-items-center'>
              {dayHeaders.map((dayHeader) => (
                <h1>{dayHeader}</h1>
              ))}
            </div>

            <div className=' mt-10 grid grid-cols-7 space-y-8 auto-cols-auto place-items-center'>
              {dayArray.map((day, index) => (
                <CalendarDay day={day} key={index}/>
              ))}
            </div>

          </div>         
        </div>

        <div className='shadow-md border-black border col-span-1 min-w-full min-h-fit'></div>

        </div>
      </div>
  )
}

export default Calendar