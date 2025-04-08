import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChartBar, FaCog, FaHome, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    // Simulating user data (Can be replaced with props or context API)
    const [user, setUser] = useState({
        name: "John Doe",
        avatar: "user.png", // Replace with a default avatar if needed
    });

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
                                    <FaUserCircle className="me-2" /> User
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
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