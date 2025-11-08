// src/components/Footer.jsx
import React from "react";

export default function Footer(){
  return (
    <>
      <div style={{background:"linear-gradient(90deg,#2452f0,#6a35ff)", height:120}}></div>
      <footer className="footer-dark">
        <div className="footer-grid">
          <div>
            <h4>ATW Campus</h4>
            <p style={{color:"rgba(255,255,255,0.8)"}}>Empowering the next generation of developers through hands-on coding experience, real-time verification, and guaranteed placement opportunities.</p>
            <div className="socials">
              <div style={{width:36,height:36,borderRadius:18,background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center"}}>f</div>
              <div style={{width:36,height:36,borderRadius:18,background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center"}}>t</div>
              <div style={{width:36,height:36,borderRadius:18,background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center"}}>in</div>
              <div style={{width:36,height:36,borderRadius:18,background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center"}}>ig</div>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul style={{listStyle:"none", padding:0, marginTop:12, color:"rgba(255,255,255,0.85)"}}>
              <li>Dashboard</li>
              <li>Coding Lab</li>
              <li>Progress</li>
              <li>Leaderboard</li>
              <li>Resources</li>
              <li>Certificates</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul style={{listStyle:"none", padding:0, marginTop:12, color:"rgba(255,255,255,0.85)"}}>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Community</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <div style={{borderTop:"1px solid rgba(255,255,255,0.06)", marginTop:18, paddingTop:18, textAlign:"center", color:"rgba(255,255,255,0.6)"}}>
          © 2025 ATW Campus - Aryan Tech World Pvt. Ltd. All rights reserved.
        </div>
      </footer>

      <button className="floating-talk" aria-label="Talk with us">Talk with Us</button>
    </>
  )
}
