import './App.css';
import React from 'react';
import Landingpage from './pages/Landingpage'
import DojoSignin from './pages/DojoSignin';
import {
  RecoilRoot
} from 'recoil';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import ManageDojo from './pages/ManageDojo';

function App() {
  return (
    <RecoilRoot>
      <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">

        <BrowserRouter>
          <Routes>

            <Route path='/' element={
              <Landingpage />
            }/>

            <Route path='/dojosignin' element={
              <div className='flex justify-center relative'>
                <DojoSignin />
              </div>
            }/>

            <Route path='/managedojo' element={
              <ManageDojo />
            }/>


          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
