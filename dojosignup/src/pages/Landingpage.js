import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../firebase'
import SignoutAndRedirect from './components/global/SignoutAndRedirect';

function Landingpage() {

  return (
    <div className='flex flex-col gap-8 justify-center items-center min-h-full min-w-full
         bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 background-animate'>

        <h1 className="text-7xl font-black p-4 text-transparent bg-clip-text
            bg-gradient-to-r from-indigo-100 to-pink-100">
          Dojo Anmeldung
        </h1>

      <div className='p-6 flex flex-col gap-4 text-center justify-center items-center'>
        <Link className='blue-button' to='/dojosignup'>
          Neue Anmeldung
        </Link>
        <Link className='blue-button ' to='/managedojo'>
          Dojos verwalten
        </Link>
        <div className='text-light text-gray-100 underline hover:text-blue-100 cursor-pointer'>
          <SignoutAndRedirect>
            sign out
          </SignoutAndRedirect>
        </div>
      </div>

    </div>
  )
}

export default Landingpage