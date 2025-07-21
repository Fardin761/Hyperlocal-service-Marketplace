import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserDashboard from './components/UserDashboard';
import AdminPanel from './components/AdminPanel';
import PaymentSummary from './components/PaymentSummary';
import logo from './assets/logo.png';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
            Hyperlocal Marketplace
          </Link>
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/login">Login</Link>
            <Link className="nav-item nav-link" to="/register">Register</Link>
            <Link className="nav-item nav-link" to="/dashboard">Dashboard</Link>
            <Link className="nav-item nav-link" to="/admin">Admin</Link>
            <Link className="nav-item nav-link" to="/payment">Payment</Link>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/payment" element={<PaymentSummary />} />
          <Route path="/" element={<h2>Welcome to Hyperlocal Marketplace</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
