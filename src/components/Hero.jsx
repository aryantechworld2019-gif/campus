// src/components/Hero.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import TerminalCard from "./TerminalCard";

export default function Hero(){
  const navigate = useNavigate();

  const handleStartCoding = () => {
    navigate('/coding-lab');
  };

  const handleWatchDemo = () => {
    // Can be enhanced with a modal video player
    window.open('https://www.youtube.com/watch?v=demo', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="hero"
    style={{
        backgroundImage: `url("/assets/hero.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >
      <div className="container hero-inner">
        <div className="hero-left">
          <h2>
            Master Coding <br/>
            with <span className="accent" style={{ color: "white" }}>Real-Time Practice</span>
          </h2>
          <p style={{ color: "white" }}>Join ATW Campus — the ultimate internship platform where you code, learn, and grow. Practice in our built-in terminal, get instant feedback, and earn your way to placement.</p>

          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={handleStartCoding}>Start Coding Now</button>
            <button className="btn btn-ghost" onClick={handleWatchDemo}>Watch Demo</button>
          </div>

          <div style={{display:"flex", gap:22, marginTop:20, color:"var(--muted)"}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#10b981"><circle cx="12" cy="12" r="6"/></svg>
              <small style={{ color: "white" }}>No External IDE Required</small>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#60a5fa"><circle cx="12" cy="12" r="6"/></svg>
              <small style={{ color: "white" }}>Real-time Code Verification</small>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24"><circle cx="12" cy="12" r="6"/></svg>
              <small style={{ color: "white" }}>Placement Guarantee</small>
            </div>
          </div>
        </div>

        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:18}}>
        <TerminalCard />
        </div>
      </div>
    </section>
  )
}
