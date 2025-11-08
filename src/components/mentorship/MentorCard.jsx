import React from "react";

export default function MentorCard({ mentor, onView }) {
  const handleSchedule = () => {
    console.log(`Scheduling session with ${mentor.name}`);
    alert(`Scheduling a session with ${mentor.name}. You'll receive a confirmation email shortly.`);
    // Can be enhanced with a calendar modal or booking system
  };

  return (
    <article className="mentor-card">
      <div className="mentor-avatar">
        <img src={mentor.avatar} alt={`${mentor.name} avatar`} loading="lazy" />
      </div>

      <div className="mentor-body">
        <div className="mentor-top">
          <h3 className="mentor-name">{mentor.name}</h3>
          <div className="mentor-rate">₹{mentor.rate}/hr</div>
        </div>

        <div className="mentor-meta">
          <div className="mentor-title">{mentor.title} • {mentor.company}</div>
          <div className="mentor-years">{mentor.years} yrs</div>
        </div>

        <div className="mentor-skills">
          {mentor.skills.map(s => <span key={s} className="skill-pill">{s}</span>)}
        </div>

        <p className="mentor-bio muted">{mentor.bio}</p>

        <div className="mentor-actions">
          <button className="btn small" onClick={onView}>View profile</button>
          <button className="btn outline small" onClick={handleSchedule}>Schedule</button>
        </div>
      </div>
    </article>
  );
}
