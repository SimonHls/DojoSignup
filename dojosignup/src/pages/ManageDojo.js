import React, { useEffect, useState } from 'react'
import { db } from "../firebase"
import { collection, onSnapshot, query } from 'firebase/firestore';
import Header from './components/global/Header';
import Sidebar from './components/global/Sidebar';
import { useRecoilState } from 'recoil';
import DojoDropdown from './components/ManageDojo/DojoDropdown'
import { manageSelectedDojoAtom } from '../atoms/manageSelectedDojoAtom';


function ManageDojo() {

  const [dojoList, setDojoList] = useState([]);
  const [selectedDojo, setSelectedDojo] = useRecoilState(manageSelectedDojoAtom);


  //firebase connections
  useEffect(() => {
    // listens for changes in the firestore db, returns new db state as snapshot
    const unsubscribe = onSnapshot(query(collection(db, 'dojos')), snapshot => {
      setDojoList(snapshot.docs);
    })
    // prevents multiple db listeners
    return unsubscribe;
  }, [db])

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