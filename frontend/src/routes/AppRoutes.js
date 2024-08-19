import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Welcom from '../components/welcome/Welcom.js';
import Home from '../components/home/Home.js'
import Login from "../components/welcome/Login.js";
import InfoManagement from '../components/home/info_management.js';
import TableManagement from '../components/home/TableManagement.js';
import Score from '../components/home/score.js';


import Register from '../components/welcome/register.js';
import LookUpInfor from '../components/welcome/lookUpInfor.js';


import Reward from '../components/home/reward.js';
import ProtectedRoutes from './ProtectedRoutes.js';
import Navbar from '../components/welcome/navbar.js';
import { useEffect, useState } from 'react';


function AppRoutes(props) {
  const roles = {
    secretary: {
      
    }
  }

  const [check, setCheck] = useState(false);

  

  useEffect(() => {
    const data = sessionStorage.getItem('loginData');
    if (data) {
      setCheck(true)
    }
  }, []);

  console.log(check);

  return(
    <>
      <Router>
        <div>
          {check && <Navbar/>}
          <Routes>
            <Route path="/" element={<Welcom/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/403' element={<h1>403 Forbidden</h1>}/>

            <Route element={<ProtectedRoutes allowedRoles={['1', '2', '3', '4']}/>}>
              <Route path="/home" element={<Home/>}/>
              <Route path="/score" element={<Score/>}/>
            </Route>

            <Route element={<ProtectedRoutes allowedRoles={['1']}/>}>
              <Route path="/table" element={<TableManagement/>}/>
            </Route>

            <Route element={<ProtectedRoutes allowedRoles={['1', '3']}/>}>
              <Route path="/contestant" element={<InfoManagement/>}/>
              <Route path="/reward" element={<Reward/>}/>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );

}

export default AppRoutes;

// 1: thu ky
// 2: trong tai
// 3: BTC
// 4: giam sat

// Routes element: truyền {<Component />} - <Route path="/" element={<Welcom/>}/>
// Routes Component: truyền {Component} - <Route path="/" Component={Welcom}/>