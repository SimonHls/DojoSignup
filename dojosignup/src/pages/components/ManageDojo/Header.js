import React from 'react'
import DojoDropdown from './DojoDropdown'

function Header() {
  return (
    <div className='min-w-full h-20 bg-white top-0 sticky z-50 shadow-md'>
        <DojoDropdown className='mt-5' />
    </div>
  )
}

export default Header