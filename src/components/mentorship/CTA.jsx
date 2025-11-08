import React from "react";

export default function CTA(){
  return (
    <section className="mentorship-cta">
      <div className="container cta-grid">
        <div>
          <h3>Ready to accelerate your growth?</h3>
          <p className="muted">Book a mentorship session, schedule mock interviews, or get a career roadmap today.</p>
        </div>

        <div className="cta-actions">
          <a href="#mentors" className="btn primary large">Find a mentor</a>
          <a href="#how" className="btn ghost large">See how it works</a>
        </div>
      </div>
    </section>
  );
}
