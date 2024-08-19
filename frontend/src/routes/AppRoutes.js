import React from "react";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TableManagement from '../components/home/TableManagement.js'
import Score from '../components/home/score.js';
import Login from '../components/home/login.js';
import Register from '../components/welcome/register.js';
import LookUpInfor from '../components/welcome/lookUpInfor.js';
function AppRoutes(props) {
    return(
        <Router>
            <Routes>
                <Route path="/" Component={LookUpInfor}/>
                <Route path="/score" Component={Score}/>
            </Routes>

            
        </Router>
        
    );
}

export default AppRoutes;