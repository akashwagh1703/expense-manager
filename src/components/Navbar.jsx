import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChartBar, FaCog, FaHome, FaUserCircle } from "react-icons/fa";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useUser } from "../context/UserContext";

const Navbar = () => {
    const { user, setUser } = useUser();

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    if (!user) return null; // Hide navbar if not logged in


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-2 shadow-sm">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand fw-bold fs-3 text-dark d-flex align-items-center">
                    <i className="fas fa-wallet me-2 text-primary"></i>
                    Expense Manager
                </NavLink>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/"} className="btn btn-outline-primary mx-2">
                                <FaHome className="me-2" /> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-success mx-2">
                                <FaChartBar className="me-2" /> Reports
                            </button>
                        </li>
                        <li className="nav-item">
                            <Link to={"/settings"} className="btn btn-outline-warning mx-2">
                                <FaCog className="me-2" /> Settings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <div className="btn-group">
                                <button
                                    className="btn btn-outline-secondary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <FaUserCircle className="me-2" /> {user?.name}
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                    <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;