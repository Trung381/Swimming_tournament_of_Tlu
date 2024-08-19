import {Navigate, Outlet} from 'react-router-dom';

function ProtectedRoutes({allowedRoles}) {
  const session = sessionStorage.getItem('loginData');

  if (!session) {
    return <Navigate to='/login'/>;
  }

  const role = JSON.parse(session);

  const users = ['1', '2', '3', '4'];
  const passes = ['1','2','3','4'];

  if (!users.includes(role.username) || !passes.includes(role.password)) {
    alert('Thông tin đăng nhập không đúng!');
    return <Navigate to='/login'/>;
  }

  return allowedRoles.includes(role.username) ? <Outlet/> : <Navigate to='/403'/>;
}

export default ProtectedRoutes;

//Chỉ xử lý logic code kiểm tra đăng nhập