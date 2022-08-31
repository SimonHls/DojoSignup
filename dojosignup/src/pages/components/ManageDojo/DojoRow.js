import React from 'react'
import { DotsHorizontalIcon } from '@heroicons/react/solid'

function DojoRow(props) {
  return (
    <div className='min-w-full h-8 bg-gray-200 shadow-md mb-2 rounded-sm
          flex flex-row items-center relative cursor-pointer hover:bg-gray-300 transition-all ease-out'>
      <p className='ml-2 w-5/6 font-light truncate'>{props.dojoname}</p>
      <p className='w-1/6 font-light truncate'>1/4</p>
    </div>
  )
}

export default DojoRow