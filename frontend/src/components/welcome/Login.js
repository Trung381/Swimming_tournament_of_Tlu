import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleHashChange = () => {
      if (props.newState) {
        props.newState('Login page: Back or forward click');
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Tài khoản, mật khẩu không được để trống!");
      return;
    } else {
      setError(null);
    }

    // sessionStorage.setItem('role', password);
    // navigate('/home');
    // if (props.newState) {
    //   props.newState('rerender component App');
    // }

    props.loading(true);
    try {
      const response = await axios.post('https://api.thanglele08.id.vn/Auth/login', {
        username,
        password
      });

      if (response.data.token) {
        sessionStorage.setItem('role', response.data.role);
        sessionStorage.setItem('token', response.data.token);
        // sessionStorage.setItem('role', 3);
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
    } finally {
      props.loading(false);
    }
  };

  const handleExits = (e) => {
    e.preventDefault();
    // window.history.pushState({page: 'login'}, 'Login', '/login');
    // navigate('/');
    window.location.replace('/');
    if (props.newState) {
      props.newState('Exits login page');
    }
  }

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
              // required
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
              // required
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn bg-white border-danger text-danger mr-2 mt-2 me-2"
                onClick={e => handleExits(e)}
              >Thoát</button>
              <button
                type="submit"
                className="btn bg-primary border-primary bg-gradient text-white mr-2 mt-2"
              >Đăng nhập</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;