import React from 'react'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <div className='flex flex-col gap-8 justify-center items-center min-h-full min-w-full
         bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'>

        <h1 className="text-7xl font-black p-4 text-transparent bg-clip-text
            bg-gradient-to-r from-indigo-100 to-pink-100">
          Dojo Anmeldung
        </h1>

      <div className='p-8 flex flex-col gap-8 text-center justify-center items-center'>
        <Link className='blue-button' to='/dojosignin'>
          Neue Anmeldung
        </Link>
        <Link className='blue-button ' to='/managedojo'>
          Dojos verwalten
        </Link>
      </div>

    </div>
  )
}

export default Landingpage