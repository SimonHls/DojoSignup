/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HomeIcon, PlusIcon} from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { sidebarVisibleAtom } from '../../../atoms/sidebarVisibleAtom';
import { PencilIcon } from '@heroicons/react/solid';
import { logout } from '../../../firebase';
import SignoutAndRedirect from './SignoutAndRedirect';

export default function Sidebar() {

  const [sidebarVisible, setSidebarVisible] = useRecoilState(sidebarVisibleAtom)

  return (
    <Transition.Root show={sidebarVisible} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden"
        open={sidebarVisible}
        onClose={() => {setSidebarVisible(false)}}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-200 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 lift-0 pr-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300 sm:duration-500"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300 sm:duration-500"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative w-screen max-w-sm mt-20">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-auto">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-lg font-normal text-gray-900">
                      Menu
                    </Dialog.Title>
                  </div>
                  <div className="mt-6 relative flex-1 flex flex-col px-4 sm:px-6">

                    {/* CONTENT OF SIDEBAR */}

                    <Link className='min-w-full flex justify-start items-center p-2 pl-4 hover:bg-gray-100 transition-all ease-out'
                          to='/home'>
                      <HomeIcon className='w-5 h-5 mr-2' />
                      Startseite
                    </Link>

                    <Link className='min-w-full flex justify-start items-center p-2 pl-4 hover:bg-gray-100 transition-all ease-out'
                          to='/dojosignup'>
                      <PlusIcon className='w-5 h-5 mr-2' />
                      Neue Anmeldung erstellen
                    </Link>

                    <Link className='min-w-full flex justify-start items-center p-2 pl-4 hover:bg-gray-100 transition-all ease-out'
                          to='/managedojo'>
                      <PencilIcon className='w-5 h-5 mr-2' />
                      Dojos verwalten
                    </Link>

                    <div className='absolute bottom-0 right-8 text-light text-gray-800 underline hover:text-blue-800 cursor-pointer'>
                      <SignoutAndRedirect>
                        sign out
                      </SignoutAndRedirect>
                    </div>

                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}