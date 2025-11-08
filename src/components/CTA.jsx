// src/components/CTA.jsx
import React from "react";

export default function CTA(){
  return (
    <section className="cta-full">
      <div className="container">
        <h3>Ready to Start Your Coding Journey?</h3>
        <p>Join thousands of students who have transformed their careers through our comprehensive internship program. Start coding today and land your dream job in tech.</p>

        <div className="cta-forms">
          <input className="input-cta" placeholder="Enter your email" />
          <button className="btn btn-ghost" style={{borderRadius:10, borderColor:"rgba(255,255,255,0.35)", color:"white"}}>Schedule Demo</button>
        </div>

        <div className="check-glass" role="list" aria-label="Program highlights">
          <div style={{minWidth:180}}>
            <div style={{fontWeight:700}}>3-Month Program</div>
            <div style={{color:"rgba(255,255,255,0.9)"}}>Intensive training from basics to advanced concepts</div>
          </div>
          <div style={{minWidth:180}}>
            <div style={{fontWeight:700}}>Placement Guarantee</div>
            <div style={{color:"rgba(255,255,255,0.9)"}}>85% placement rate with top companies</div>
          </div>
          <div style={{minWidth:180}}>
            <div style={{fontWeight:700}}>24/7 Support</div>
            <div style={{color:"rgba(255,255,255,0.9)"}}>Get help whenever you need from our mentors</div>
          </div>
        </div>
      </div>
    </section>
  )
}
