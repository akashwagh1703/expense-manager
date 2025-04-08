import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
            <div className="row w-100 justify-content-center">
                <div className="col-11 col-sm-8 col-md-6 col-lg-4">
                    <div className="card shadow-lg p-4 rounded-4">
                        <div className="text-center mb-4">
                            <h3 className="fw-bold text-primary">Welcome Back 👋</h3>
                            <p className="text-muted small">Log in to manage your farm expenses</p>
                        </div>
                        <form>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Email</label>
                                <div className="input-group">
                                    <span className="input-group-text"><FaEnvelope /></span>
                                    <input type="email" className="form-control" placeholder="Enter email" required />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text"><FaLock /></span>
                                    <input type="password" className="form-control" placeholder="Enter password" required />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 fw-semibold mt-2">Login</button>
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
