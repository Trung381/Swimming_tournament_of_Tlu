import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import TableManagement from './components/home/TableManagement';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="container-fluid">
      <AppRoutes/>
    </div>
  );
}

export default App;