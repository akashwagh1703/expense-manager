// make some new design and attractive desing
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddExpenseIncomePage from "./pages/AddExpenseIncomePage";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Register from "./pages/auth/Register";
import FarmerSettingsPage from "./pages/settings/FarmerSettingsPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <>
      {isAuthenticated ? (<Router>
        <div className="min-h-screen bg-gray-50 text-gray-900">
          <Navbar />
          <div className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddExpenseIncomePage />} />
              <Route path="/category" element={<CategoryPage />} />
              <Route path="/settings" element={<FarmerSettingsPage />} />
            </Routes>
          </div>
        </div>
      </Router >) : (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </Router>
        </>
      )
      }
    </>
  );
}

export default App;
