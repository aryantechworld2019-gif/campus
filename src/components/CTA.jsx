// src/components/CTA.jsx
import React, { useState } from "react";

export default function CTA(){
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - replace with actual API endpoint
    try {
      console.log('Demo scheduled for:', email);
      // await fetch('/api/schedule-demo', { method: 'POST', body: JSON.stringify({ email }) });
      alert(`Thank you! We'll contact you at ${email} to schedule your demo.`);
      setEmail('');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="cta-full">
      <div className="container">
        <h3>Ready to Start Your Coding Journey?</h3>
        <p>Join thousands of students who have transformed their careers through our comprehensive internship program. Start coding today and land your dream job in tech.</p>

        <form className="cta-forms" onSubmit={handleSubmit}>
          <input
            className="input-cta"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <button
            type="submit"
            className="btn btn-ghost"
            style={{borderRadius:10, borderColor:"rgba(255,255,255,0.35)", color:"white"}}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Scheduling...' : 'Schedule Demo'}
          </button>
        </form>

        <div className="check-glass" aria-label="Program highlights">
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
