import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Tài khoản, mật khẩu không được để trống!");
      return;
    } else {setError(null)};
    // try {
    //   const response = await axios.post('https://api.thanglele08.id.vn/Auth/login', {
    //     username,
    //     password
    //   });
    //   sessionStorage.setItem('role', response.data.role);
    //   navigate('/home');
    //   props.newState('rerender component App');
    //   // window.location.reload();
    // } catch (err) {
    //   console.log(err);
    //   setError("Tên đăng nhập hoặc mật khẩu không đúng!");
    // }
    sessionStorage.setItem('role', password);
    navigate('/home');
    window.location.reload();
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Sidebar */}
        <div className="col-md-4 col-lg-3 bg-dark text-white d-flex flex-column justify-content-center">
          <div className="text-center">
            <h2>Application Login Page</h2>
            <p>Login or register from here to access.</p>
          </div>
        </div>
        {/* Login Form */}
        <div className="col-md-8 col-lg-9 d-flex flex-column justify-content-center bg-white">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="User Name"
                  onChange={(e) => setUsername(e.target.value)}
                  // required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  // required
                />
              </div>
              {error && <p style={{color: 'red'}}>{error}</p>}
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-dark mr-2">Đăng nhập</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Login;
