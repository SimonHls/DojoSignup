import React from 'react'
import InputSection from './components/DojoSignupPage/InputSection'
import Header from './components/global/Header'
import Sidebar from './components/global/Sidebar'

function DojoSignupPage() {


  return (
    <div className='min-w-full min-h-screen inline-block'>
      <Header>Anmeldung</Header>
      <Sidebar />
      <div className='flex flex-col items-stretch max-w-4xl mx-auto min-h-screen'>

        {/* Input section */}

        <div className='max-w-4xl min-h-screen col-span-2 p-2 bg-white border-r border-r-gray-200'>
          <InputSection />
        </div>


      </div>
    </div>
  )
}

export default DojoSignupPage