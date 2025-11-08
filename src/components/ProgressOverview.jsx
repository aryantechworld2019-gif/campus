import React from "react";

const progressItems = [
  { title: "Overall Completion", value: 72, color: "#2563eb" },
  { title: "Challenges Completed", value: 58, color: "#10b981" },
  { title: "Projects Completed", value: "3", label: "of 6", color: "#7c3aed" },
  { title: "Average Score", value: 84, color: "#f59e0b" }
];

export default function ProgressOverview() {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Overview</h3>
        <span className="muted">Last 30 days</span>
      </div>

      <div className="overview-grid">
        {progressItems.map((p, i) => {
          const percent = typeof p.value === "number" ? Math.min(100, p.value) : (p.value === "3" ? 50 : 0);
          return (
            <div className="overview-item" key={i}>
              <div className="overview-title">{p.title}</div>
              <div className="overview-value-row">
                <div className="overview-value" style={{ color: p.color }}>
                  {typeof p.value === "number" && p.value <= 100 ? `${p.value}%` : p.value}
                </div>
                {p.label && <div className="muted label-small">{p.label}</div>}
              </div>

              <div className="overview-bar" aria-hidden>
                <div className="overview-progress" style={{ width: `${percent}%`, background: p.color }} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="card mt-14">
        <h4>Skill Breakdown</h4>

        <div className="skill-breakdown-grid">
          <div>
            <div className="skill-row">
              <div className="skill-label">JavaScript</div>
              <div className="skill-score muted">85%</div>
            </div>
            <div className="progress-bar"><div className="progress" style={{ width: "85%", background: "#f59e0b" }} /></div>

            <div className="skill-row mt-10">
              <div className="skill-label">Python</div>
              <div className="skill-score muted">72%</div>
            </div>
            <div className="progress-bar"><div className="progress" style={{ width: "72%", background: "#10b981" }} /></div>

            <div className="skill-row mt-10">
              <div className="skill-label">TypeScript</div>
              <div className="skill-score muted">60%</div>
            </div>
            <div className="progress-bar"><div className="progress" style={{ width: "60%", background: "#6366f1" }} /></div>
          </div>

          <div>
            <div className="skill-row">
              <div className="skill-label">React</div>
              <div className="skill-score muted">78%</div>
            </div>
            <div className="progress-bar"><div className="progress" style={{ width: "78%", background: "#2563eb" }} /></div>

            <div className="skill-row mt-10">
              <div className="skill-label">Node.js</div>
              <div className="skill-score muted">65%</div>
            </div>
            <div className="progress-bar"><div className="progress" style={{ width: "65%", background: "#0ea5ff" }} /></div>

            <div className="skill-row mt-10">
              <div className="skill-label">Git</div>
              <div className="skill-score muted">80%</div>
            </div>
            <div className="progress-bar"><div className="progress" style={{ width: "80%", background: "#fb923c" }} /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
