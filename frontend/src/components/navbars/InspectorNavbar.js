import { Link } from "react-router-dom";
import './Navbar.css';

function InspectorNavbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      {/* flex-row-reverse */}
      <div className="container-fluid ">

        {/* <Link className="navbar-brand" to="/" onClick={props.homePageClick}>Trang chủ</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='' onClick={(e) => props.handleReLoad(e, '/home')}>TRANG CHỦ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/score'>GIÁM SÁT KẾT QUẢ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">LIÊN HỆ</Link>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="" onClick={(e) => props.logoutClick(e)}>Đăng xuất</Link> */}
              <a className="nav-link" href="/" onClick={props.logoutClick}>ĐĂNG XUẤT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default InspectorNavbar;