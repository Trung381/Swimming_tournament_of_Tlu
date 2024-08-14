import logo from './logo.svg';
import './App.css';
import Navbar from './components/welcome/navbar.js';
import Logo from './components/welcome/logo.js';
import Banner from './components/welcome/banner.js';
// import logo_tlu from "../../public/image/logo.png"

function App() {
  return (
    <div className="container-fluid">
      <header className="">

        <Logo/>
        <Navbar/>
        <Banner/>
        {/* <img src="/image/logo.png"></img> */}
      </header>
    </div>
  );
}

export default App;


