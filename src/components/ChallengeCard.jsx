// src/components/ChallengeCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChallengeCard({ challenge }){
  const { title, difficulty, tags, points, status, desc } = challenge;
  const diffClass = difficulty.toLowerCase();
  const navigate = useNavigate();

  const handleStartChallenge = () => {
    // Navigate to challenge detail page or open code editor
    console.log(`Starting challenge: ${title}`);
    navigate(`/coding-lab/challenge/${challenge.id}`);
    // Can be enhanced to open a modal with code editor
  };

  const handleReviewChallenge = () => {
    // Navigate to review/solution page
    console.log(`Reviewing challenge: ${title}`);
    navigate(`/coding-lab/challenge/${challenge.id}/review`);
  };

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
          <button className="small-btn start" onClick={handleStartChallenge}>Start</button>
        ) : (
          <button className="small-btn review" onClick={handleReviewChallenge}>Review</button>
        )}
      </div>
    </div>
  )
}
