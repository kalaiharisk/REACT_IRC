// Login.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className='log'>
    <h2>Sign in to us</h2>
    <div className="login-container">
      <div className="login-form text-center m-5-auto">
        <form action="/home">
          <p className="form-field">
            <label>Username</label>
            <input type="text" id="username" name="username" required />
          </p>
          <p className="form-field">
            <label htmlFor="password">Password</label>
            <Link to="/forget-password"><label className="right-label">Forgot password?</label></Link><br />
           <input type="password" id="password" name="password" required />
          </p>
          <p className="form-field">
          <Link to='/'><button id="sub_btn" type="submit">Login</button></Link>
          </p>
        </form>
        <footer>
          <p>First time? <Link to="/register">Create an account</Link>.</p>
          <p><Link to="/">Back to Homepage</Link></p>
        </footer>
      </div>
    </div>
    </div>
  );
};

export default Login;
