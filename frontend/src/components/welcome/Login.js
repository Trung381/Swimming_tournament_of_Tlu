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
    } else {
      setError(null);
    }
    try {
      const response = await axios.post('https://api.thanglele08.id.vn/Auth/login', {
        username,
        password
      });

      if (response.data.token) {
        sessionStorage.setItem('role', response.data.role);
        // sessionStorage.setItem('role', 1);
        navigate('/home');
        if (props.newState) {
          props.newState('rerender component App');
        }
      } else {
        setError(response.data.messages || "Tên đăng nhập hoặc mật khẩu không đúng!");
      }
    } catch (err) {
      console.error('Login error:', err);
      setError("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div className="row h-100">
      {/* Sidebar */}
      <div className="col-md-6 col-lg-6 bg-dark text-white d-flex flex-column justify-content-center">
        <div className="text-center">
          <h2>HỆ THỐNG QUẢN LÝ GIẢI BƠI</h2>
          <p>Login or register from here to access.</p>
        </div>
      </div>
      {/* Login Form */}
      <div className="col-md-6 col-lg-6 d-flex flex-column justify-content-center bg-white">
        <h3 style={{ textAlign: 'center' }}>ĐĂNG NHẬP</h3>
        <div className="container d-flex justify-content-center">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Tài khoản</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-dark mr-2 mt-2">Đăng nhập</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;