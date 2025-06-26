import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { UserProvider, useUser } from "./context/UserContext";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AddExpenseIncomePage from "./pages/AddExpenseIncomePage";
import CategoryPage from "./pages/CategoryPage";
import FarmerSettingsPage from "./pages/settings/FarmerSettingsPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

const AppRoutes = () => {
  const { user } = useUser();
  const isAuthenticated = !!user;

  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/add" element={<ProtectedRoute element={<AddExpenseIncomePage />} />} />
          <Route path="/category" element={<ProtectedRoute element={<CategoryPage />} />} />
          <Route path="/settings" element={<ProtectedRoute element={<FarmerSettingsPage />} />} />

          {!isAuthenticated && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </>
          )}

          <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
};

const App = () => (
  <UserProvider>
    <AppRoutes />
  </UserProvider>
);

export default App;
