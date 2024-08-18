import React from "react";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TableManagement from '../components/home/TableManagement.js'
import Score from '../components/home/score.js';
function AppRoutes(props) {
    return(
        <Router>
            <Routes>
                <Route path="/" Component={TableManagement}/>
                <Route path="/score" Component={Score}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;