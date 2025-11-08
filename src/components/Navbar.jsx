// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container inner">
        <div className="brand" href="home">
          <a href="/home" className="brand-link">
            <img height={40} width={40} src="atw_campus_logo.png" />
          </a>
            <h1>ATW Campus</h1>
        </div>

        <nav className="nav-links" aria-label="Main">
          {/* <a href="home">Home</a> */}
          <a href="coding-lab">Coding Lab</a>
          <a href="progress">Progress</a>
          <a href="mentors">Mentorship</a>
          <a href="community">Community</a>
          <a href="resources">Resources</a>
        </nav>

        <div className="cta-logout">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: 18, background: "#eef4ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2e6df6" }}>JD</div>
              <div style={{ fontSize: 14, color: "var(--muted)" }}>John Doe</div>
            </div>
            <button className="btn btn-ghost" style={{ borderRadius: 10 }}>Logout</button>
          </div>
        </div>
      </div>
    </header>
  )
}
