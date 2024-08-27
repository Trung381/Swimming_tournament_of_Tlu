import { Link} from "react-router-dom";
import './Navbar.css';

function NavbarNotLogged(props) {
  // const navigate = useNavigate();

  // const handleLoginClick = () => {
  //   navigate('/login');
  //   window.location.reload();
  // }

  

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      {/* flex-row-reverse */}
        <div className="container-fluid ">
            
          {/* <Link className="navbar-brand" to="/">Trang chủ</Link> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to='' onClick={(e) =>props.handleReLoad(e, '/')}>TRANG CHỦ</Link>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" aria-current="page" to='/register'>Đăng ký dự thi</Link> */}
                <a className="nav-link" href="#registerModal" aria-current="page" data-bs-toggle="modal" data-bs-target="#registerModal">ĐĂNG KÝ DỰ THI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#lookUpInfoModal" aria-current="page" data-bs-toggle="modal" data-bs-target="#lookUpInfoModal">TRA CỨU THÔNG TIN DỰ THI</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">LIÊN HỆ</Link>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#login" to="#login" >Đăng nhập</Link> */}
                {/* <Link className="nav-link" to="" onClick={handleLoginClick}>Đăng nhập</Link> */}
                <a className="nav-link" href="/login" >ĐĂNG NHẬP</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>  
    </div>
  );
}

export default NavbarNotLogged;