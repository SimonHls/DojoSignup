import './App.css';
import React from 'react';
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

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
          <ApplicationControl>
            <Routes>

              <Route path='/' element={
                <Login />
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

            </Routes>
          </ApplicationControl>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
