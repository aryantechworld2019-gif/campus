// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Check authentication status
    const token = localStorage.getItem('authToken');
    const name = localStorage.getItem('userName');

    setIsAuthenticated(!!token);
    setUserName(name || "User");
  }, [location]); // Re-check on route change

  const handleLogout = () => {
    // Clear user session/token
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');

    setIsAuthenticated(false);

    // Redirect to home
    navigate('/');

    // Show logout message
    alert('You have been logged out successfully!');
  };

  // Get user initials
  const getUserInitials = () => {
    if (!userName) return "U";
    const names = userName.split(" ");
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase();
    }
    return userName.substring(0, 2).toUpperCase();
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
          {isAuthenticated ? (
            // Authenticated: Show user profile and logout
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 34,
                  height: 34,
                  borderRadius: 18,
                  background: "#eef4ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2e6df6",
                  fontWeight: 600,
                  fontSize: 13
                }}>
                  {getUserInitials()}
                </div>
                <div style={{ fontSize: 14, color: "var(--muted)" }}>{userName}</div>
              </div>
              <button className="btn btn-ghost" style={{ borderRadius: 10 }} onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            // Not Authenticated: Show login and signup buttons
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Link to="/login">
                <button className="btn btn-ghost" style={{ borderRadius: 10 }}>
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-primary" style={{ borderRadius: 10 }}>
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
