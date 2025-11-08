// src/components/SkillProgress.jsx
import React from "react";

const skills = [
  { name: "JavaScript", pct: 85, color: "#f59e0b" },
  { name: "React", pct: 78, color: "#2563eb" },
  { name: "Python", pct: 72, color: "#10b981" },
  { name: "Node.js", pct: 65, color: "#0ea5ff" },
  { name: "TypeScript", pct: 60, color: "#6366f1" },
  { name: "MongoDB", pct: 50, color: "#16a34a" }
];

export default function SkillProgress(){
  return (
    <div>
      {skills.map(s => (
        <div key={s.name} className="skill-row">
          <div className="skill-label">
            <span>{s.name}</span>
            <span className="muted">{s.pct}%</span>
          </div>
          <div className="progress-bar" role="progressbar" aria-valuenow={s.pct} aria-valuemin="0" aria-valuemax="100">
            <div className="progress" style={{width: `${s.pct}%`, background: s.color}} />
          </div>
        </div>
      ))}
    </div>
  )
}
