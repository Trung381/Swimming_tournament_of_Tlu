import { Link } from "react-router-dom";
import './Navbar.css';

function SecretaryNavbar(props) {
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
                    <Link className="nav-link" aria-current="page" to='/table'>Hạng mục thi đấu</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link" aria-current="page" to='/contestant'>Thí sinh dự thi<i className="bi bi-caret-down-fill"></i></Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/contestant">Quản lý thông tin</Link></li>
                      <li><Link className="dropdown-item" to="">Gửi email dự thi</Link></li>
                      <li><Link className="dropdown-item" to="">In thẻ dự thi</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="/score" aria-expanded="false">Kết quả</Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="">Action</Link></li>
                      <li><Link className="dropdown-item" to="">Another action</Link></li>
                      <li><Link className="dropdown-item" to="">Something else here</Link></li>
                    </ul>
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
  
  export default SecretaryNavbar;