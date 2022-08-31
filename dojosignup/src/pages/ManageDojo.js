import React, { useEffect, useState } from 'react'
import { db } from "../firebase"
import { collection, onSnapshot, query } from 'firebase/firestore';
import DojoRow from './components/ManageDojo/DojoRow';
import Header from './components/ManageDojo/Header';



function ManageDojo() {

  const [dojoList, setDojoList] = useState([])

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
    <div className=' bg-gray-200 min-w-full min-h-full'>
      <Header />
    </div>
  )
}

export default ManageDojo