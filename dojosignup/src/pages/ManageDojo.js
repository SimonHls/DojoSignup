import React from 'react'
import Header from './components/global/Header';
import Sidebar from './components/global/Sidebar';
import { useRecoilState } from 'recoil';
import DojoDropdown from './components/ManageDojo/DojoDropdown'
import { manageSelectedDojoAtom } from '../atoms/manageSelectedDojoAtom';


function ManageDojo() {

  const [selectedDojo, setSelectedDojo] = useRecoilState(manageSelectedDojoAtom);

  return (
    <div className=' bg-gray-50 h-screen scrollbar-hide'>

      {/* HEADER & SIDEBAR */}
      <Header>
        <DojoDropdown/>
      </Header>
      <div className='absolute'>
        <Sidebar title={"moin"}/>
      </div>

      {/* CONTENT */}
      <div className='flex justify-center mt-20'>

        {selectedDojo[0] !== "" ? (
          // A dojo has been selected:
          <div>

          </div>
        ) : (
          // No dojo selected:
          <div className='p-4 flex justify-center items-center'>
            <p className='text-black text-xl font-light'>Bitte zum starten ein Dojo auswählen...</p>
          </div>
        )}

      </div>

    </div>
  )
}

export default ManageDojo