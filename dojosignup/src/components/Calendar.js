import React from 'react'
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid'
import { Button, ButtonGroup } from '@mui/material'

function Calendar() {
  return (
      <div className=' min-h-screen min-w-full bg-white shadow-md flex relative p-10'>
        <div className='p-8 absolute top-0 right-4 flex justify-end space-x-5'>

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
        

        <div className='bg-black min-w-full min-h-full mt-20'>
          <h1>hi</h1>
        </div>
      </div>
  )
}

export default Calendar