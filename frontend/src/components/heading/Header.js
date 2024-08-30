import {forwardRef, React, useEffect, useState} from "react";
import Logo from "../welcome/logo";
import NavbarNotLogged from '../navbars/navbar_not_logged_in_yet';
import OrganizingCommitteeNavbar from '../navbars/OrganizingCommitteeNavbar';
import SecretaryNavbar from '../navbars/SecretaryNavbar';
import RefereeNavbar from '../navbars/RefereeNavbar';
import InspectorNavbar from '../navbars/InspectorNavbar';
import { useNavigate } from "react-router-dom";

const Header = forwardRef((props, ref) => {

  const [role, setRole] = useState(props.role);

  const navigate = useNavigate();

  useEffect(() => {
    setRole(sessionStorage.getItem('role'));
    props.newRole(sessionStorage.getItem('role'));
  }, [sessionStorage.getItem('role')]);
  
  const handleLogout = () => {
    sessionStorage.removeItem('role');
  };

  const handleReLoad = (e,  path) => {
    e.preventDefault();
    if (window.location.pathname === path) {
      window.location.reload();
    } else {
      navigate(path)
    }
  }

  const headerComponent = {
    '0': <OrganizingCommitteeNavbar logoutClick={handleLogout} handleReLoad={handleReLoad}/>,
    '1': <SecretaryNavbar logoutClick={handleLogout} handleReLoad={handleReLoad}/>,
    '2': <RefereeNavbar logoutClick={handleLogout} handleReLoad={handleReLoad}/>,
    '3': <InspectorNavbar logoutClick={handleLogout} handleReLoad={handleReLoad}/>
  }

  // const role = props.role;

  return (
    <>
      <div ref={ref} className="header-container">
        <Logo/>
        {headerComponent[role] || <NavbarNotLogged handleReLoad={handleReLoad} newState={props.newState}/>}
      </div>
    </>
  );
});

export default Header;