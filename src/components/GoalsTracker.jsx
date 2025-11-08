import React, { useState } from "react";

const goals = [
  { title: "Complete 200 Challenges", current: 142, target: 200, color: "#2563eb", status: "Overdue" },
  { title: "Build 10 Projects", current: 8, target: 10, color: "#10b981", status: "On Track" },
  { title: "Learn TypeScript", current: 60, target: 100, color: "#7c3aed", status: "Overdue" }
];

export default function GoalsTracker() {
  const handleSetNewGoal = () => {
    // Can be enhanced with a modal form to create new goals
    const goalTitle = prompt("Enter your new goal:");
    if (goalTitle) {
      console.log(`New goal created: ${goalTitle}`);
      alert(`Goal "${goalTitle}" has been added to your tracker!`);
      // In production: dispatch to state management or API call
    }
  };

  return (
    <div className="card mt-18">
      <h4>Goals Tracker</h4>

      <div className="goals-list">
        {goals.map((g, i) => {
          const pct = Math.round((g.current / g.target) * 100);
          return (
            <div className="goal-row" key={i}>
              <div className="goal-head">
                <div className="goal-title">{g.title}</div>
                <div className="muted small">{g.status}</div>
              </div>

              <div className="goal-meta">
                <div className="muted small">{g.current} / {g.target}</div>
                <div className="goal-pct">{pct}%</div>
              </div>

              <div className="progress-bar">
                <div className="progress" style={{ width: `${Math.min(pct, 100)}%`, background: g.color }} />
              </div>
            </div>
          );
        })}
      </div>

      <button className="small-btn full-width mt-12" onClick={handleSetNewGoal}>Set New Goal</button>
    </div>
  );
}
