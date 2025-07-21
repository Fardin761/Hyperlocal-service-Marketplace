import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";
import AdminPanel from "./components/AdminPanel";
import PaymentSummary from "./components/PaymentSummary";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Marketplace</Link>
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/login">Login</Link>
            <Link className="nav-item nav-link" to="/register">Register</Link>
            <Link className="nav-item nav-link" to="/dashboard">Dashboard</Link>
            <Link className="nav-item nav-link" to="/admin">Admin</Link>
            <Link className="nav-item nav-link" to="/payment">Payment</Link>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/payment" element={<PaymentSummary />} />
            <Route path="/" element={<h2>Welcome to Marketplace</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
