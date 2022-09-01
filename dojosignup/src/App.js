import './App.css';
import React, { useEffect, useState } from 'react';
import Landingpage from './pages/Landingpage'
import {
  RecoilRoot
} from 'recoil';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import ManageDojo from './pages/ManageDojo';
import { ApplicationControl } from './ApplicationControl';
import DojoSignupPage from './pages/DojoSignupPage';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {

  const [userIsSignedIn, setUserIsSignedIn] = useState(false)

  //Verify login status. Only logged in users can see certain pages
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserIsSignedIn(true);
    } else {
      setUserIsSignedIn(false);
    }
  });

  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
          <ApplicationControl>


              {userIsSignedIn ? (

              //Check if user is logged in
              <Routes>

                <Route path='/' element={
                  <Landingpage />
                }/>

                <Route path='/home' element={
                  <Landingpage />
                }/>

                <Route path='/dojosignup' element={
                  <div className='flex justify-center relative'>
                    <DojoSignupPage />
                  </div>
                }/>

                <Route path='/managedojo' element={
                  <ManageDojo />
                }/>

                <Route path='*' element={
                  <PageNotFound />
                }/>
              </Routes>

              ) : (

              // => User is not logged in
              <Routes>
                <Route path='/' element={
                  <Login />
                }/>
                <Route path='/home' element={
                  <Login />
                }/>
                <Route path='*' element={
                  <PageNotFound />
                }/>
              </Routes>

              )}


          </ApplicationControl>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
