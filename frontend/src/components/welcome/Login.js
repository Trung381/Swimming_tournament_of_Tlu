import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    sessionStorage.setItem('loginData', JSON.stringify(formData));
    navigate('/home');
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
            <form>
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="User Name"
                  onChange={(e) => handleChange(e)}
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
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="d-flex justify-content-start">
                <button type="submit" className="btn btn-dark mr-2" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Login;
