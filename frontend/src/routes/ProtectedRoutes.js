import { useEffect, useState } from 'react';
import {useNavigate, Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes(props) {
  const [role, setRole] = useState(sessionStorage.getItem('role'))
  const navigate = useNavigate();

  useEffect(() => {
    if (!role) {
      navigate('/login');
      window.location.reload();
    } else {
      if (!props.allowedRoles.includes(role)) {
        // <Navigate to='/403' />
        navigate('/403')
      }
    }
  }, []);

  return <Outlet />;
}

export default ProtectedRoutes;