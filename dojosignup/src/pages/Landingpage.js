import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SignoutAndRedirect from './components/global/SignoutAndRedirect';
import { getUserData } from '../functions/getUserData';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

function Landingpage() {

  const auth = getAuth();
  const [user, status] = useAuthState(auth);
  const [username, setUserName] = useState("");

  const getUserName = async () => {
    if (!user) return null;
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      //console.log("USER:" + data.username);
      setUserName(doc.docs[0].data().username);
    } catch (err) {
      console.error(err);
    }
  }
  getUserName
  useEffect( () => {
    const getUserName = async () => {
      if (!user) return null;
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        //console.log("USER:" + data.username);
        setUserName(doc.docs[0].data().username);
      } catch (err) {
        console.error(err);
      }
    }
  }, [user])

  return (
    <div className='flex flex-col justify-center items-center min-h-full min-w-full
         bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 background-animate'>

        <h1 className="text-7xl font-black p-4 mb-2 text-transparent bg-clip-text
            bg-gradient-to-r from-indigo-100 to-pink-100">
          Dojo Anmeldung
        </h1>
        <h1 className=' font-thin text-white'>Angemeldet als { username } </h1>

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