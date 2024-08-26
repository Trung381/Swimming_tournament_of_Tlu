import { Link } from "react-router-dom";
import './Navbar.css';

function RefereeNavbar(props) {
    return (
        <div className="">
          <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          {/* flex-row-reverse */}
            <div className="container-fluid ">
                
              {/* <a className="navbar-brand" href="#">Trang chủ</a> */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
              </button>
              
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='' onClick={(e) =>props.handleReLoad(e, '/home')}>Trang chủ</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to='/score'>Nhập kết quả</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Liên hệ</Link>
                  </li>
                  <li className="nav-item">
                    {/* <Link className="nav-link" to="" onClick={(e) => props.logoutClick(e)}>Đăng xuất</Link> */}
                    <a className="nav-link" href="/" onClick={props.logoutClick}>Đăng xuất</a>
                  </li>
                    
                </ul>
              </div>
            </div>
          </nav>  
        </div>
      );
  }
  
  export default RefereeNavbar;