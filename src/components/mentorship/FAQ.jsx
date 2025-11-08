import React, { useState } from "react";

const QUESTIONS = [
  { q: "How do I book a mentor?", a: "Click 'Schedule' or 'View profile' — you can request a session and propose times. Mentor confirms." },
  { q: "What are rates?", a: "Mentor rates vary by experience and specialization; shown on each profile." },
  { q: "Can I get a refund?", a: "Refund/cancellation policies depend on mentor. We show policies during booking." },
  { q: "How is mentor quality ensured?", a: "All mentors are vetted — background, sample review, and interview checks." },
];

export default function FAQ(){
  const [open, setOpen] = useState(0);
  return (
    <div className="faq card">
      <div className="section-header">
        <h2>Frequently asked questions</h2>
        <p className="muted">Quick answers about mentorship, booking and policies.</p>
      </div>

      <div className="faq-list">
        {QUESTIONS.map((item, i) => (
          <div key={i} className={`faq-item ${open===i ? "open":""}`}>
            <button className="faq-q" onClick={()=> setOpen(open===i ? -1: i)} aria-expanded={open===i}>
              <span>{item.q}</span>
              <span className="chev">{open===i ? "−" : "+"}</span>
            </button>
            <div className="faq-a" hidden={open!==i}>{item.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
