import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { UserRound, Mail, Lock, LockKeyhole } from 'lucide-react'

import './Register.css'
import { Helmet } from 'react-helmet'

const Register = () => {
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    const [passwordError, setPasswordError] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));

      // Check passwords match when either password field changes
      if (name === 'password' || name === 'confirmPassword') {
        if (name === 'confirmPassword' && value !== formData.password) {
          setPasswordError('Passwords do not match');
        } else if (name === 'password' && value !== formData.confirmPassword) {
          setPasswordError('Passwords do not match');
        } else {
          setPasswordError('');
        }
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Sign Up attempted with", formData);
    }

  return (
    <div className='register-container'>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="register-box">
        <h1>Create An Account</h1>
        <p className="register-subtitle">Welcome. Register an account</p>

        <form onSubmit={handleSubmit} className='register-form'>
        {/* First name input field */}
        <div className="input-group">
            <UserRound className='input-icon' />
            <input 
              type="text"
              id='name'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder='' 
            />
            <label htmlFor="email">First Name</label>
          </div>

          {/* Last name input field */}
          <div className="input-group">
            <UserRound className='input-icon' />
            <input 
              type="text"
              id='name'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder='' 
            />
            <label htmlFor="email">Last Name</label>
          </div>

          {/* Email input field */}
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

          {/* Password input field */}
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

          {/* Confirm password input field */}
          <div className="input-group">
            <LockKeyhole className='input-icon' />
            <input 
              type="password" 
              id='confirmPassword'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder=''
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>

          {passwordError && <p className="error-message">{passwordError}</p>}

          {/* Sign up button */}
          <button 
            type='submit' 
            className='register-btn'
            disabled={!!passwordError || !formData.password || !formData.confirmPassword}
          >
            Register
          </button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
