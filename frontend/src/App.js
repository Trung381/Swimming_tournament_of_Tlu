import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import TableManagement from './components/home/TableManagement';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/welcome/navbar';
function App() {
  return (
    <div className="container-fluid">
      <div>
        {/* {sessionStorage.getItem('loginData') && <Navbar/>} */}
      </div>
      <div>
        <AppRoutes/>
      </div>
    </div>
  );
}

export default App;