import React from "react";

const paths = [
  { icon: "✓", title: "JavaScript Fundamentals", lessons: "12/12", color: "#10b981" },
  { icon: "✓", title: "React Basics", lessons: "8/8", color: "#10b981" },
  { icon: "▶", title: "Advanced React", lessons: "6/10", color: "#2563eb" },
  { icon: "▶", title: "Node.js Backend", lessons: "4/15", color: "#2563eb" },
  { icon: "🔒", title: "Database Design", lessons: "0/12", color: "#9ca3af" },
  { icon: "🔒", title: "Full Stack Project", lessons: "0/6", color: "#9ca3af" }
];

export default function LearningPath() {
  return (
    <div className="card mt-20">
      <h3>Learning Path</h3>

      <div className="learning-path-list">
        {paths.map((p, i) => {
          const [done, total] = p.lessons.split("/").map(v => Number(v));
          const pct = total ? Math.round((done / total) * 100) : 0;
          return (
            <div key={i} className="learning-row">
              <div className="learning-icon" style={{ background: p.color }}>
                <span className="icon-content">{p.icon}</span>
              </div>

              <div className="learning-body">
                <div className="learning-head">
                  <div className="learning-title">{p.title}</div>
                  <div className="muted">{p.lessons} lessons</div>
                </div>

                <div className="progress-bar small">
                  <div className="progress" style={{ width: `${pct}%`, background: p.color }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
