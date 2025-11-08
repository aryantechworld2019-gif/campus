import React from "react";

const steps = [
  { title: "Choose a mentor", desc: "Search by skill, experience and availability" },
  { title: "Request a session", desc: "Pick a time and send a short agenda" },
  { title: "Get feedback", desc: "Live session, code review and follow-up tasks" }
];

export default function HowItWorks() {
  return (
    <div className="howitworks card">
      <div className="section-header">
        <h2>How mentorship works</h2>
        <p className="muted">A simple, proven process to help you learn and grow faster.</p>
      </div>

      <div className="how-grid">
        {steps.map((s,i)=>(
          <div key={i} className="how-step">
            <div className="how-index">{i+1}</div>
            <h4>{s.title}</h4>
            <p className="muted">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
