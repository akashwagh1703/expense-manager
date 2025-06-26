import React, { useState } from "react";
import { FaPlus, FaArrowLeft, FaChartPie, FaWallet, FaClipboardList, FaArrowRight, FaTags, FaTag } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { Link } from "react-router-dom";

const CollapsibleSidebar = ({ setIsSidebarOpen, isSidebarOpen }) => {
    return (
        <div
            className={`fixed-right d-flex flex-column align-items-center justify-content-start transition-all ${isSidebarOpen ? "open" : ""}`}
            style={{
                position: "fixed",
                right: "0",
                top: "50%",
                transform: "translateY(-50%)",
                width: isSidebarOpen ? "100px" : "50px",
                height: "auto",
                // backgroundColor: "#343a40",
                borderRadius: "10px 0 0 10px",
                // boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                padding: "10px",
                transition: "width 0.3s",
            }}
        >
            {/* Toggle Button */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="mb-3 d-flex justify-content-center align-items-center"
                style={{
                    cursor: "pointer",
                    backgroundColor: "#007bff",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                }}
            >
                {isSidebarOpen ? <FaArrowRight style={{ color: "#fff" }} /> : <FaPlus style={{ color: "#fff" }} />}
            </motion.div>

            {/* Sidebar Buttons */}
            {isSidebarOpen && (
                <>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="mb-3"
                    >
                        <Link to="/add">
                            <button
                                className="btn btn-primary d-flex align-items-center justify-content-center p-2"
                                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                            >
                                <FaPlus style={{ fontSize: "20px", color: "#fff" }} />
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="mb-3"
                    >

                        <Link to={'/category'} className="btn btn-success d-flex align-items-center justify-content-center p-2"
                            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                        >
                            <FaTag style={{ fontSize: "20px", color: "#fff" }} />
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="mb-3"
                    >
                        <button
                            className="btn btn-warning d-flex align-items-center justify-content-center p-2"
                            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                        >
                            <FaWallet style={{ fontSize: "20px", color: "#fff" }} />
                        </button>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="mb-3"
                    >
                        <button
                            className="btn btn-info d-flex align-items-center justify-content-center p-2"
                            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                        >
                            <FaClipboardList style={{ fontSize: "20px", color: "#fff" }} />
                        </button>
                    </motion.div>
                </>
            )}
        </div>
    );
};

export default CollapsibleSidebar;
