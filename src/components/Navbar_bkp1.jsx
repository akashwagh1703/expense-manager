import React from "react";
import { FaHome, FaChartBar, FaCog, FaUserCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 rounded">
      <div className="container-fluid">
        {/* Logo Section */}
        <a className="navbar-brand" href="#">
          <img src="https://via.placeholder.com/50" alt="Logo" />
          <span className="ms-2 font-weight-bold">Dashboard</span>
        </a>

        {/* Navbar Toggler for Small Screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links Section */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-outline-primary mx-2">
                <FaHome className="me-2" /> Home
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-success mx-2">
                <FaChartBar className="me-2" /> Reports
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-warning mx-2">
                <FaCog className="me-2" /> Settings
              </button>
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