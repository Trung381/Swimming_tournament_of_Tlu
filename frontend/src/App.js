import './App.css';
import AppRoutes from './routes/AppRoutes';
import Header from './components/heading/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddContestantIntoTable from './components/modals/addContestantIntoTable'
import RegisterModal from './components/modals/registerModal';
import LookUpInforModal from './components/modals/lookUpInfoModal';
import Footer from './components/footer/footer';

function App() {
  const [role, setRole] = useState(sessionStorage.getItem('role'));
  useEffect(() => {
    setRole(sessionStorage.getItem('role'));
  }, []);
  
  return (
    <>
      {/* <div className='container-fluid'> */}
      <Router>
        <div>
          <div>
            {(window.location.pathname === '/403' || window.location.pathname === '/404' || window.location.pathname === '/login') || <Header role={role}/>}
          </div>

          <div>
            <AppRoutes/>
          </div>

          <div>
            {(window.location.pathname === '/403' || window.location.pathname === '/404' || window.location.pathname === '/login') || <Footer />}
          </div>
        </div>
      </Router>

      <div>
        <AddContestantIntoTable />
        <RegisterModal />
        <LookUpInforModal />
      </div>
    {/* </div> */}
    </>
  );
}

export default App;