import React from 'react'
import InputSection from './components/DojoSignupPage/InputSection'
import Header from './components/global/Header'
import Sidebar from './components/global/Sidebar'

function DojoSignupPage() {


  return (
    <div className='min-w-full min-h-screen inline-block'>
      <Header>Anmeldung</Header>
      <Sidebar />
      <div className='grid grid-cols-3 max-w-6xl mx-auto min-h-full'>

        {/* Input section */}

        <div className='min-w-full min-h-full col-span-2 p-6 bg-white border-r border-r-gray-200'>
          <InputSection />
        </div>

        {/* Overview Section */}

        <div className='min-w-full col-span-1 p-6 bg-white min-h-full'>
          moin
        </div>

      </div>
    </div>
  )
}

export default DojoSignupPage