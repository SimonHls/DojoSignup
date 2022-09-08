import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { sidebarVisibleAtom } from './atoms/sidebarVisibleAtom';

export const ApplicationControl = (props) => {
  //This wrapper stores global event listeners
  //It applies to every piece of rendered content in the App

  const [sidebarVisible, setSidebarVisible] = useRecoilState(sidebarVisibleAtom);
  const location = useLocation();

  //Listen for routing changes
  useEffect(() => {
    sidebarVisible && setSidebarVisible(false);
  }, [location])

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    console.log("signed in");
  } else {
    // User is signed out
    console.log("signed out");
  }
  });

  return (
    <>{props.children}</>
  )
}