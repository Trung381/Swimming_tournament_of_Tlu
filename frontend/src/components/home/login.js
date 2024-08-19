function Login() {
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
                  placeholder="User Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="d-flex justify-content-start">
                <button type="submit" className="btn btn-dark mr-2">
                  Login
                </button>
                <button type="button" className="btn btn-secondary">
                  Register
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
