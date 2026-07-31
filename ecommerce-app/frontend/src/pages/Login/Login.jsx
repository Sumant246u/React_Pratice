import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

import { login } from '../../services/authService';
import { setUser } from '../../redux/slices/AuthSlice';
import "./Login.css"

const Login = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setformData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setformData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(formData);
      dispatch(setUser(data.user))

      toast.success(data.message)

      navigate('/')

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Login Failed");
    }
  }
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>

        <div className="login-footer">
          Don't have an account? <a href="/register">Register</a>
        </div>
      </div>
    </div>
  )
}

export default Login