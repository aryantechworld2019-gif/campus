// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session/token
    localStorage.removeItem('authToken');
    // Redirect to home
    navigate('/');
    // Show logout message (can be enhanced with toast notification)
    console.log('User logged out successfully');
  };

  return (
    <header className="navbar">
      <div className="container inner">
        <div className="brand">
          <Link to="/" className="brand-link">
            <img height={40} width={40} src="/atw_campus_logo.png" alt="ATW Campus Logo" />
          </Link>
          <h1>ATW Campus</h1>
        </div>

        <nav className="nav-links" aria-label="Main">
          <Link to="/coding-lab">Coding Lab</Link>
          <Link to="/progress">Progress</Link>
          <Link to="/mentors">Mentorship</Link>
          <Link to="/community">Community</Link>
          <Link to="/resources">Resources</Link>
        </nav>

        <div className="cta-logout">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: 18, background: "#eef4ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2e6df6" }}>JD</div>
              <div style={{ fontSize: 14, color: "var(--muted)" }}>John Doe</div>
            </div>
            <button className="btn btn-ghost" style={{ borderRadius: 10 }} onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </header>
  )
}
