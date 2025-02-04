import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Lock } from 'lucide-react'
import { Helmet } from 'react-helmet'

import './Login.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with", formData);
  }


  return (
    <div className='login-container'>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="login-box">
        <h1>Login</h1>
        <p className="login-subtitle">Welcome back! Please login to your account</p>

        <form onSubmit={handleSubmit} className='login-form'>
          <div className="input-group">
            <Mail className='input-icon' />
            <input 
              type="email"
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='' 
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-group">
            <Lock className='input-icon' />
            <input 
              type="password" 
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
              placeholder=''
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />Remember me
            </label>
            <a href="#" className='forgot-password'>Forgot Password</a>
          </div>
          <button type='submit' className='login-btn'>Login</button>
        </form>
        <p className="register-link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
