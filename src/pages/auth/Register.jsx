import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const Register = () => {
    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
            <div className="row w-100 justify-content-center">
                <div className="col-11 col-sm-8 col-md-6 col-lg-4">
                    <div className="card shadow-lg p-4 rounded-4">
                        <div className="text-center mb-4">
                            <h3 className="fw-bold text-success">Create Account 🌱</h3>
                            <p className="text-muted small">Register to start managing your farm</p>
                        </div>
                        <form>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Full Name</label>
                                <div className="input-group">
                                    <span className="input-group-text"><FaUser /></span>
                                    <input type="text" className="form-control" placeholder="Enter full name" required />
                                </div>
                            </div>
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
                                    <input type="password" className="form-control" placeholder="Create password" required />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success w-100 fw-semibold mt-2">Register</button>
                            <div className="text-center mt-3 small">
                                Already have an account? <Link to="/" className="text-decoration-none">Login</Link>
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

export default Register;
