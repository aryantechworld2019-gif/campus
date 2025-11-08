// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer(){
  const handleTalkWithUs = () => {
    // Can be enhanced with chat widget or modal
    window.location.href = "mailto:support@atwcampus.com";
  };

  return (
    <>
      <div style={{background:"linear-gradient(90deg,#2452f0,#6a35ff)", height:120}}></div>
      <footer className="footer-dark">
        <div className="footer-grid">
          <div>
            <h4>ATW Campus</h4>
            <p style={{color:"rgba(255,255,255,0.8)"}}>Empowering the next generation of developers through hands-on coding experience, real-time verification, and guaranteed placement opportunities.</p>
            <div className="socials">
              <a
                href="https://facebook.com/atwcampus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{width:36,height:36,borderRadius:18,background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",textDecoration:"none"}}
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://twitter.com/atwcampus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                style={{width:36,height:36,borderRadius:18,background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",textDecoration:"none"}}
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://linkedin.com/company/atwcampus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{width:36,height:36,borderRadius:18,background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",textDecoration:"none"}}
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="https://instagram.com/atwcampus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{width:36,height:36,borderRadius:18,background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",textDecoration:"none"}}
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul style={{listStyle:"none", padding:0, marginTop:12}}>
              <li style={{marginBottom:8}}><Link to="/" style={{color:"rgba(255,255,255,0.85)",textDecoration:"none"}}>Dashboard</Link></li>
              <li style={{marginBottom:8}}><Link to="/coding-lab" style={{color:"rgba(255,255,255,0.85)",textDecoration:"none"}}>Coding Lab</Link></li>
              <li style={{marginBottom:8}}><Link to="/progress" style={{color:"rgba(255,255,255,0.85)",textDecoration:"none"}}>Progress</Link></li>
              <li style={{marginBottom:8}}><Link to="/community" style={{color:"rgba(255,255,255,0.85)",textDecoration:"none"}}>Leaderboard</Link></li>
              <li style={{marginBottom:8}}><Link to="/resources" style={{color:"rgba(255,255,255,0.85)",textDecoration:"none"}}>Resources</Link></li>
              <li style={{marginBottom:8}}><Link to="/progress" style={{color:"rgba(255,255,255,0.85)",textDecoration:"none"}}>Certificates</Link></li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul style={{listStyle:"none", padding:0, marginTop:12}}>
              <li style={{marginBottom:8}}><a href="mailto:support@atwcampus.com" style={{color:"rgba(255,255,255,0.85)",textDecoration:"none"}}>Help Center</a></li>
              <li style={{marginBottom:8}}><a href="mailto:contact@atwcampus.com" style={{color:"rgba(255,255,255,0.85)",textDecoration:"none"}}>Contact Us</a></li>
              <li style={{marginBottom:8}}><Link to="/community" style={{color:"rgba(255,255,255,0.85)",textDecoration:"none"}}>FAQ</Link></li>
              <li style={{marginBottom:8}}><Link to="/community" style={{color:"rgba(255,255,255,0.85)",textDecoration:"none"}}>Community</Link></li>
              <li style={{marginBottom:8}}><a href="/privacy" style={{color:"rgba(255,255,255,0.85)",textDecoration:"none"}}>Privacy Policy</a></li>
              <li style={{marginBottom:8}}><a href="/terms" style={{color:"rgba(255,255,255,0.85)",textDecoration:"none"}}>Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div style={{borderTop:"1px solid rgba(255,255,255,0.06)", marginTop:18, paddingTop:18, textAlign:"center", color:"rgba(255,255,255,0.6)"}}>
          © 2025 ATW Campus - Aryan Tech World Pvt. Ltd. All rights reserved.
        </div>
      </footer>

      <button className="floating-talk" aria-label="Talk with us" onClick={handleTalkWithUs}>Talk with Us</button>
    </>
  )
}
