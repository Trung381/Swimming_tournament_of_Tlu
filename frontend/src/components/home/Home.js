import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SecretaryRoutes from '../../routes/SecretaryRoutes.js';
import RefereeRoutes from '../../routes/RefereeRoutes.js';
import OrganizingCommitteeRoutes from '../../routes/OrganizingCommitteeRoutes.js';
import InspectorRoutes from '../../routes/InspectorRoutes.js';

function Home() {

  const data = JSON.parse(sessionStorage.getItem('loginData'));
  const [roleComponent, setRoleComponent] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    if (data) {
      if (data.username === '1' && data.password === '1') {
        setRoleComponent(<SecretaryRoutes/>);
      } else if (data.username === '2' && data.password === '2') {
        setRoleComponent(<RefereeRoutes/>);
      } else if (data.username === '3' && data.password === '3') {
        setRoleComponent(<OrganizingCommitteeRoutes/>);
      } else if (data.username === '4' && data.password === '4') {
        setRoleComponent(<InspectorRoutes/>);
      }
    }
  }, []);

  return (
    <div className="home-page" style={{margin: '50px 120px'}}>
      <h1>XIN CHAO</h1>
      <h2>HỆ THỐNG QUẢN LÝ GIẢI BƠI</h2>
      <div>
        {roleComponent}
      </div>
      <button onClick={(e) => {e.preventDefault(); sessionStorage.removeItem('loginData'); navigate('/login')}}>Đăng xuất</button>
    </div>
  );
}

export default Home;