import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { sidebarVisibleAtom } from './atoms/sidebarVisibleAtom';

export const ApplicationControl = (props) => {
  //This wrapper stores global event listeners
  //It applies to every piece of rendered content in the App

  const [sidebarVisible, setSidebarVisible] = useRecoilState(sidebarVisibleAtom);
  const location = useLocation();

  //Listen for routing changes
  useEffect(() => {
    setSidebarVisible(false);
    console.log("trigger");
  }, [location])

  return (
    <>{props.children}</>
  )
}