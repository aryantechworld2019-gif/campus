import React, { useEffect } from "react";

export default function MentorProfileModal({ mentor, onClose }) {
  useEffect(()=> {
    function onKey(e){
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return ()=> document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`${mentor.name} profile`}>
      <div className="modal-card">
        <button className="modal-close" aria-label="Close" onClick={onClose}>✕</button>

        <div className="modal-grid">
          <div className="modal-left">
            <img src={mentor.avatar} alt={`${mentor.name}`} />
            <h3>{mentor.name}</h3>
            <div className="muted">{mentor.title} • {mentor.company}</div>
            <div className="modal-stats">
              <div><strong>{mentor.years}y</strong><span>Experience</span></div>
              <div><strong>₹{mentor.rate}/hr</strong><span>Rate</span></div>
              <div><strong>{mentor.skills.length}</strong><span>Skills</span></div>
            </div>
            <div className="modal-contact">
              <button className="btn primary">Request Session</button>
              <button className="btn outline">Message</button>
            </div>
          </div>

          <div className="modal-right">
            <h4>About</h4>
            <p className="muted">{mentor.bio} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel diam at sapien euismod gravida.</p>

            <h4 className="mt-16">Skills & Focus</h4>
            <div className="skill-list">
              {mentor.skills.map(s => <span className="skill-pill" key={s}>{s}</span>)}
            </div>

            <h4 className="mt-16">Availability</h4>
            <p className="muted">{mentor.availability}</p>

            <h4 className="mt-16">What they can help with</h4>
            <ul className="muted">
              <li>Code reviews & architecture</li>
              <li>Interview prep & mock rounds</li>
              <li>Project guidance & debugging</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
