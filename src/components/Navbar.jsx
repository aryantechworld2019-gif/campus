// src/components/Navbar.jsx
import React from "react";

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="container inner">
        <div className="brand">
          <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="12" fill="#2e6df6"/>
            <text x="50%" y="50%" textAnchor="middle" fill="#fff" fontSize="18" dy="6" fontFamily="Inter, Arial">ATW</text>
          </svg>
          <h1>ATW Interns</h1>
        </div>

        <nav className="nav-links" aria-label="Main">
          <a href="home">Home</a>
          <a href="coding-lab">Coding Lab</a>
          <a href="progress">Progress</a>
          <a href="mentors">Mentorship</a>
          <a href="community">Community</a>
          <a href="resources">Resources</a>
        </nav>

        <div className="cta-logout">
          <div style={{display:"flex", alignItems:"center", gap:10}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:34,height:34,borderRadius:18,background:"#eef4ff",display:"flex",alignItems:"center",justifyContent:"center",color:"#2e6df6"}}>JD</div>
              <div style={{fontSize:14,color:"var(--muted)"}}>John Doe</div>
            </div>
            <button className="btn btn-ghost" style={{borderRadius:10}}>Logout</button>
          </div>
        </div>
      </div>
    </header>
  )
}
