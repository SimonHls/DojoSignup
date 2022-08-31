import React from 'react'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <div className='flex justify-center items-center min-h-full min-w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <div className='w-80 h-52 bg-white rounded-xl shadow-md flex flex-col text-center justify-center items-center'>
        <h1 className='text-2xl  mb-2'>Router</h1>
        <Link className='blue-button m-2' to='/dojosignin'>
          Neue Anmeldung
        </Link>
        <Link className='blue-button m-2' to='/managedojo'>
          Dojos verwalten
        </Link>
      </div>
    </div>
  )
}

export default Landingpage