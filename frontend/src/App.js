import './App.css';
import Navbar from './components/welcome/navbar.js';
import Logo from './components/welcome/logo.js';
import Banner from './components/welcome/banner.js';
import LookUpInfor from './components/welcome/lookUpInfor.js';
import Register from './components/welcome/register.js';
import { useEffect, useRef } from 'react';
// import logo_tlu from "../../public/image/logo.png"

function App() {

  const registerRef = useRef(null);

  useEffect(() => {

  }, []);

  function scrollToSection(ref) {
    if (!ref.current) return;
    console.log("1111");
    const yOffset = -50;
    const y = ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
  
  return (
    <div className="container-fluid">
      <header className="">

        <Logo/>
        <Navbar/>
        <Banner/>
        <Register/>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at ducimus voluptatibus quia nisi corrupti quo nobis cum, doloremque facere sint ipsum soluta dicta quisquam corporis reiciendis eum eos placeat.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores, vero eum adipisci aliquid nihil sequi corrupti ipsam laborum est doloremque delectus a. Recusandae, obcaecati molestias. Numquam veritatis illum quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at ducimus voluptatibus quia nisi corrupti quo nobis cum, doloremque facere sint ipsum soluta dicta quisquam corporis reiciendis eum eos placeat.</p>
          </div>
        <LookUpInfor/>
      </header>
    </div>
  );
}

export default App;


