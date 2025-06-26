import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import api from '../../api/axios';
import { useUser } from '../../context/UserContext'; // ✅ Import context

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { setUser } = useUser(); // ✅ Use the context setter

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/login', form);
      console.log('res.data:::', res.data);

      const { token, user } = res?.data?.data || {};

      if (token && user) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        setUser(user); // ✅ Update global user state
        navigate('/');
      } else {
        alert('Invalid response from server');
      }
    } catch (err) {
      console.error(err);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-100 justify-content-center">
        <div className="col-11 col-sm-8 col-md-6 col-lg-4">
          <div className="card shadow-lg p-4 rounded-4">
            <div className="text-center mb-4">
              <h3 className="fw-bold text-primary">Welcome Back 👋</h3>
              <p className="text-muted small">Log in to manage your farm expenses</p>
            </div>
            <form onSubmit={login}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <div className="input-group">
                  <span className="input-group-text"><FaEnvelope /></span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <div className="input-group">
                  <span className="input-group-text"><FaLock /></span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    name="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100 fw-semibold mt-2">
                Login
              </button>
              <div className="text-center mt-3 small">
                <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
                <span className="mx-2">|</span>
                <Link to="/register" className="text-decoration-none">Register</Link>
              </div>
            </form>
          </div>
          <div className="text-center mt-4 text-muted small">
            © {new Date().getFullYear()} FarmTrack — All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
