// src/components/ChallengeCard.jsx
import React from "react";

export default function ChallengeCard({ challenge }){
  const { title, difficulty, tags, points, status, desc } = challenge;
  const diffClass = difficulty.toLowerCase();
  return (
    <div className="challenge-card" role="article" aria-labelledby={`c-${challenge.id}`}>
      <div className="challenge-left">
        <div className="challenge-title-row">
          <h4 id={`c-${challenge.id}`}>{title}</h4>
          <div className={`badge ${diffClass}`}>{difficulty}</div>
          {status === "review" && <div className="check" aria-hidden>✔</div>}
        </div>
        <p className="muted">{desc}</p>
        <div className="meta">
          <span>☆ {points} points</span>
        </div>
      </div>

      <div className="challenge-right">
        {status === "start" ? (
          <button className="small-btn start">Start</button>
        ) : (
          <button className="small-btn review">Review</button>
        )}
      </div>
    </div>
  )
}
