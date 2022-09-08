import React from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { sidebarVisibleAtom } from '../../../atoms/sidebarVisibleAtom';
import { useRecoilState } from 'recoil';
import { Transition } from '@headlessui/react';

export const Header = (props) => {
  const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarVisibleAtom);
  return (
    <div className='sticky top-0 z-50 border-b bg-white shadow-sm h-20'>
      <div className=' min-h-full mx-auto md:max-w-6xl flex justify-between items-center'>

        <div className='text-gray-700 w-8 h-8 cursor-pointer mx-5 hover:text-gray-800 transition-all ease-out'>

          <Transition show={sidebarOpen}>
            <Transition.Child
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Transition.Child
                enter="transition ease-linear duration-300"
                enterFrom="-translate-x-6"
                enterTo="translate-x-0"
                leave="transition ease-linear duration-300"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-6"
              >
                <XIcon className='absolute w-8 h-8' onClick={ () => {setSidebarOpen(false)}}/>
              </Transition.Child>
            </Transition.Child>
          </Transition>

          <Transition show={!sidebarOpen} >
            <Transition.Child
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Transition.Child
                enter="transition ease-linear duration-300"
                enterFrom="-translate-x-6"
                enterTo="translate-x-0"
                leave="transition ease-linear duration-300"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-6"
              >
                <MenuIcon className='absolute w-8 h-8' onClick={ () => {setSidebarOpen(true)}}/>
              </Transition.Child>
            </Transition.Child>
          </Transition>

        </div>

        <div className=''>
          {props.children}
        </div>

        <div className='flex-1'/>

        <div className='mr-5 flex gap-4 items-center'>
          <p className='font-light invisible sm:visible'>Max Mustermann</p>
          <img className='rounded-full object-contain w-10 h-10 border shadow-md' alt='avatar' src="https://i.pravatar.cc/500" />
        </div>

      </div>
    </div>
  )
}

export default Header