import React from "react";

const weekly = [
  { label: "Challenges Solved", value: 6, color: "#2563eb" },
  { label: "Hours Coded", value: 14, color: "#10b981" },
  { label: "Code Reviews", value: 3, color: "#7c3aed" },
  { label: "Points Earned", value: 120, color: "#f59e0b" }
];

const achievements = [
  { title: "First Steps", desc: "Completed your first coding challenge", earned: true, date: "2024-01-15" },
  { title: "Problem Solver", desc: "Solved 50 coding challenges", earned: true, date: "2024-02-20" },
  { title: "Team Player", desc: "Collaborated on 5 projects", earned: true, date: "2024-03-10" },
  { title: "Speed Demon", desc: "Complete a challenge in under 10 minutes", earned: false },
  { title: "Mentor", desc: "Help 10 other students", earned: false },
  { title: "Consistency King", desc: "Code for 30 days straight", earned: true, date: "2024-03-25" }
];

export default function ProgressStats() {
  return (
    <div className="card">
      <h4>This Week</h4>

      <div className="stat-list">
        {weekly.map((w, i) => (
          <div className="stat-row" key={i}>
            <div className="stat-label">{w.label}</div>
            <div className="stat-value" style={{ color: w.color }}>{w.value}</div>
          </div>
        ))}
      </div>

      <div className="card mt-16">
        <h4>Achievements</h4>

        <div className="achievements">
          {achievements.map((a, i) => (
            <div
              key={i}
              className={`achievement-row ${a.earned ? "earned" : "not-earned"}`}
              role="listitem"
            >
              <div className="achievement-icon" aria-hidden>
                {a.earned ? "✓" : "○"}
              </div>

              <div className="achievement-body">
                <div className="achievement-title">{a.title}</div>
                <div className="muted achievement-desc">{a.desc}</div>
                {a.earned && <div className="muted achievement-date">Earned on {a.date}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
