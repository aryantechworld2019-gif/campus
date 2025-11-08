// src/pages/CodingLab.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChallengeCard from "../components/ChallengeCard";
import SkillProgress from "../components/SkillProgress";
import ActiveProjects from "../components/ActiveProjects";
import { challenges } from "../data/challenges";
import "./CodingLab.css";

export default function CodingLab(){
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const filteredChallenges = challenges.filter(challenge => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "free") return challenge.isFree;
    if (selectedFilter === "premium") return !challenge.isFree;
    return challenge.difficulty.toLowerCase() === selectedFilter;
  });

  return (
    <>
      <Navbar />
      <main className="cl-page">
        <section className="cl-hero container">
          <div className="cl-hero-left">
            <h1 className="cl-title">Coding Lab</h1>
            <p className="cl-sub">Practice coding challenges with our built-in code editor and runner</p>

            <div className="cl-stats-row">
              <div className="cl-stat">
                <div className="cl-stat-value">{challenges.filter(c => c.isFree).length}</div>
                <div className="cl-stat-label">Free Challenges</div>
              </div>
              <div className="cl-stat">
                <div className="cl-stat-value">{challenges.filter(c => !c.isFree).length}</div>
                <div className="cl-stat-label">Premium</div>
              </div>
              <div className="cl-stat">
                <div className="cl-stat-value">{challenges.length}</div>
                <div className="cl-stat-label">Total</div>
              </div>
            </div>

            <div className="cl-quick-actions">
              <button className="cl-action blue" onClick={() => setSelectedFilter("all")}>
                <div className="cl-action-icon">&lt;&gt;</div>
                <div className="cl-action-text"><span>All Challenges</span><small>Browse all</small></div>
              </button>

              <button className="cl-action green" onClick={() => setSelectedFilter("easy")}>
                <div className="cl-action-icon">📗</div>
                <div className="cl-action-text"><span>Easy</span><small>Beginner level</small></div>
              </button>

              <button className="cl-action orange" onClick={() => setSelectedFilter("medium")}>
                <div className="cl-action-icon">📙</div>
                <div className="cl-action-text"><span>Medium</span><small>Intermediate</small></div>
              </button>

              <button className="cl-action purple" onClick={() => setSelectedFilter("hard")}>
                <div className="cl-action-icon">📕</div>
                <div className="cl-action-text"><span>Hard</span><small>Advanced level</small></div>
              </button>
            </div>
          </div>

          <div className="cl-hero-right">
            <div className="code-preview-card">
              <div className="code-preview-header">
                <div className="code-preview-dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="code-preview-title">challenge.js</div>
              </div>
              <div className="code-preview-content">
                <pre>{`function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        <section className="container cl-grid">
          <section className="cl-left">
            <div className="card">
              <div className="card-header">
                <h3>Coding Challenges</h3>
                <div className="filter-badges">
                  <button
                    className={`filter-badge ${selectedFilter === "all" ? "active" : ""}`}
                    onClick={() => setSelectedFilter("all")}
                  >
                    All
                  </button>
                  <button
                    className={`filter-badge ${selectedFilter === "free" ? "active" : ""}`}
                    onClick={() => setSelectedFilter("free")}
                  >
                    Free
                  </button>
                  <button
                    className={`filter-badge ${selectedFilter === "premium" ? "active" : ""}`}
                    onClick={() => setSelectedFilter("premium")}
                  >
                    Premium
                  </button>
                </div>
              </div>

              <div className="challenge-list">
                {filteredChallenges.map(c => (
                  <ChallengeCard
                    key={c.id}
                    challenge={c}
                    isAuthenticated={isAuthenticated}
                  />
                ))}
                {filteredChallenges.length === 0 && (
                  <div className="no-challenges">
                    No challenges found for this filter.
                  </div>
                )}
              </div>
            </div>

            <div className="card mt-24">
              <div className="card-header">
                <h3>Active Projects</h3>
                <a className="view-all" href="#/projects">View All</a>
              </div>

              <ActiveProjects />
            </div>
          </section>

          <aside className="cl-right">
            <div className="card sticky">
              <h4>Skill Progress</h4>
              <SkillProgress />
            </div>

            <div className="card mt-18">
              <h4>Achievements</h4>
              <div className="achievements-grid">
                <div className="mini-card">🏆 <div>First Challenge</div></div>
                <div className="mini-card">👥 <div>Team Player</div></div>
                <div className="mini-card">💡 <div>Problem Solver</div></div>
                <div className="mini-card">🧾 <div>Code Reviewer</div></div>
              </div>
            </div>

            <div className="card mt-18">
              <h4>This Week</h4>
              <ul className="this-week">
                <li>Challenges Solved <span className="accent">12</span></li>
                <li>Code Reviews <span className="green">8</span></li>
                <li>Hours Coded <span className="purple">24</span></li>
                <li>Points Earned <span className="orange">450</span></li>
              </ul>
            </div>

            {!isAuthenticated && (
              <div className="card mt-18 premium-cta">
                <h4>🔒 Unlock All Challenges</h4>
                <p className="muted">Sign up to access premium challenges and track your progress</p>
                <a href="/signup" className="btn btn-primary full-width" style={{marginTop: 12}}>
                  Get Started Free
                </a>
              </div>
            )}
          </aside>
        </section>
      </main>

      <Footer />
    </>
  )
}
