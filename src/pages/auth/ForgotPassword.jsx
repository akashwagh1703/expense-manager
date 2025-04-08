import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelopeOpen } from 'react-icons/fa';

const ForgotPassword = () => {
    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
            <div className="row w-100 justify-content-center">
                <div className="col-11 col-sm-8 col-md-6 col-lg-4">
                    <div className="card shadow-lg p-4 rounded-4">
                        <div className="text-center mb-4">
                            <h3 className="fw-bold text-warning">Reset Password 🔐</h3>
                            <p className="text-muted small">We'll send you a link to reset your password</p>
                        </div>
                        <form>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Email Address</label>
                                <div className="input-group">
                                    <span className="input-group-text"><FaEnvelopeOpen /></span>
                                    <input type="email" className="form-control" placeholder="Enter your email" required />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-warning w-100 fw-semibold mt-2">Send Reset Link</button>
                            <div className="text-center mt-3 small">
                                <Link to="/" className="text-decoration-none">Back to Login</Link>
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

export default ForgotPassword;
