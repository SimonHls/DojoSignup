import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { currentUserDataAtom } from './atoms/currentUserDataAtom';
import { sidebarVisibleAtom } from './atoms/sidebarVisibleAtom';
import { db } from './firebase';

export const ApplicationControl = (props) => {
  //This wrapper stores global event listeners
  //It applies to every piece of rendered content in the App

  const [sidebarVisible, setSidebarVisible] = useRecoilState(sidebarVisibleAtom);
  const [currentUserData, setCurrentUserData] = useRecoilState(currentUserDataAtom);
  const location = useLocation();

  //Listen for routing changes
  useEffect(() => {
    sidebarVisible && setSidebarVisible(false);
  }, [location])

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const getCurrentUserData = async () => {
        //console.log("fetching data");
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        //console.log("docs loaded");
        const data = doc.docs[0].data();
        setCurrentUserData({
          username: data.username,
          userId: data.uid,
          role: data.role,
          firstName: data.firstName,
          lastName: data.lastName,
          persNr: data.persNr,
          department: data.department,
          email: data.email
        });
      }
      getCurrentUserData();
    } else {
      // User is signed out, do nothing
    }
    });
    return unsubscribe();
  }, [auth])


  return (
    <>{props.children}</>
  )
}