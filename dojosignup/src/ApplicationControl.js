import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { sidebarVisibleAtom } from './atoms/sidebarVisibleAtom';
import { auth } from './firebase';

export const ApplicationControl = (props) => {
  //This wrapper stores global event listeners
  //It applies to every piece of rendered content in the App

  const [sidebarVisible, setSidebarVisible] = useRecoilState(sidebarVisibleAtom);
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  //Listen for routing changes
  useEffect(() => {
    setSidebarVisible(false);
  }, [location])


  return (
    <>{props.children}</>
  )
}