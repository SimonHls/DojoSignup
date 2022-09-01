import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="min-h-screen min-w-full flex justify-center items-center bg-slate-900">
      <div className=" flex flex-col text-center">
        <h1 className='text-6xl font-bold text-white'>ERROR</h1>
        <h1 className=' text-9xl font-extrabold text-white underline'>404</h1>
        <h1 className='mt-8 text-3xl font-bold text-white'>page not found</h1>
        <Link className='text-gray-300 mt-10 underline font-light hover:text-blue-300 cursor-pointer' to='/'>
          zur Startseite
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound