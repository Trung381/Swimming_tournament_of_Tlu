import { Routes, Route, Navigate } from 'react-router-dom';
import Welcom from '../components/welcome/Welcom.js';
import Home from '../components/home/Home.js'
import Login from "../components/welcome/Login.js";
import InfoManagement from '../components/home/info_management.js';
import CompetitionCategoryManagement from '../components/home/competition_category_management.js';
import Score from '../components/home/score.js';
import Reward from '../components/home/reward.js';
import ProtectedRoutes from './ProtectedRoutes.js';
import Contact from '../components/Contact.js';
import LookUpInfor from '../components/welcome/lookUpInfor.js';
// import Register from '../components/welcome/register.js';
import Account from '../components/home/AccountManagement.js';

function AppRoutes(props) {
  return(
    <Routes>
      {/* <Route path="/" element={<Welcom/>}/> */}
      <Route path="/" element={<InfoManagement/>}/>
      {/* <Route path="/" element={<CompetitionCategoryManagement/>}/> */}
      {/* <Route path="/" element={<Score/>}/> */}
      <Route path="/login" element={<Login/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/lookup' element={<LookUpInfor/>}/>
      {/* <Route path='/register' element={<Register/>}/> */}
      <Route path='/403' element={<h1>403 Forbidden</h1>}/>
      <Route path='*' element={<Navigate to='/404' />}/>
      <Route path='/404' element={<h1>404 Not Found</h1>} />

      <Route element={<ProtectedRoutes allowedRoles={['0', '1', '2', '3']}/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/score" element={<Score/>}/>
      </Route>

      <Route element={<ProtectedRoutes allowedRoles={['0', '1']}/>}>
        <Route path="/contestant" element={<InfoManagement/>}/>
        <Route path="/reward" element={<Reward/>}/>
      </Route>

      <Route element={<ProtectedRoutes allowedRoles={['1']}/>}>
        <Route path="/competition_category" element={<CompetitionCategoryManagement/>}/>
      </Route>

      <Route element={<ProtectedRoutes allowedRoles={['0']}/>}>
        <Route path="/account" element={<Account/>}/>
      </Route>
    </Routes>
  );
}

export default AppRoutes;

// 0: BTC
// 1: thu ky
// 2: trong tai
// 3: giam sat