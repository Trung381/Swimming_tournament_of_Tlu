import { Link } from "react-router-dom";
import './Navbar.css';

function SecretaryNavbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      {/* flex-row-reverse */}
      <div className="container-fluid ">

        {/* <a className="navbar-brand" href="#">Trang chủ</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='' onClick={(e) => props.handleReLoad(e, '/home')}>TRANG CHỦ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/competition_category'>THỐNG KÊ KẾT QUẢ</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" aria-current="page" to='/contestant'>THÍ SINH DỰ THI<i className="bi bi-caret-down-fill"></i></Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/contestant">Quản lý thông tin</Link></li>
                <li><Link className="dropdown-item" to="">Gửi email dự thi</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/score" aria-expanded="false">KẾT QUẢ</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/score">Kết quả thi đấu</Link></li>
                <li><Link className="dropdown-item" to="/whole_group">Thống kê toàn đoàn</Link></li>
              </ul>
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

export default SecretaryNavbar;