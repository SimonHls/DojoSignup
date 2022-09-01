import React from 'react'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../firebase'

export default function SignoutAndRedirect(props) {
  const navigate = useNavigate();
  const handleSignout = () => {
    navigate('/');
    logout();
  }
  return (
    <div onClick={handleSignout}>
      {props.children}
    </div>
  )
}
