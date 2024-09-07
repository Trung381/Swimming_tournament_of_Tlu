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
import WholeGroup from '../components/home/wholeGroup.js';
import Help from '../components/welcome/help.js';

const Forbidden = (props) => {
  props.newState("Forbidden");
  return (
    <>
      <h1>403 Forbidden</h1>
    </>
  )
};

const NotFound = (props) => {
  props.newState("Not found");
  return (
    <>
      <h1>404 Not Found</h1>
    </>
  )
};

function AppRoutes(props) {
  return(
    <Routes>
      <Route path="/" element={<Welcom newState={props.newState} loading={props.loading}/>}/>
      {/* <Route path="/" element={<InfoManagement/>}/> */}
      {/* <Route path="/" element={<CompetitionCategoryManagement/>}/> */}
      {/* <Route path="/" element={<Score/>}/> */}
      <Route path="/login" element={<Login newState={props.newState} loading={props.loading}/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/lookup' element={<LookUpInfor/>}/>
      {/* <Route path='/register' element={<Register/>}/> */}
      <Route path='/403' element={<Forbidden newState={props.newState}/>}/>
      <Route path='*' element={<Navigate to='/404' />}/>
      <Route path='/404' element={<NotFound newState={props.newState} />} />

      <Route element={<ProtectedRoutes allowedRoles={['0', '1', '2', '3']}/>}>
        <Route path="/home" element={<Home newState={props.newState}/>}/>
        <Route path="/score" element={<Score/>}/>
      </Route>

      <Route element={<ProtectedRoutes allowedRoles={['0', '1']}/>}>
        <Route path="/contestant" element={<InfoManagement newState={props.newState} loading={props.loading}/>}/>
        <Route path="/reward" element={<Reward/>}/>
      </Route>

      <Route element={<ProtectedRoutes allowedRoles={['0', '1']}/>}>
        <Route path="/competition_category" element={<CompetitionCategoryManagement/>}/>
        <Route path="/whole_group" element={<WholeGroup loading={props.loading}/>}/>
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