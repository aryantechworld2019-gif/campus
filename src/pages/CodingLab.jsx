// src/pages/CodingLab.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChallengeCard from "../components/ChallengeCard";
import SkillProgress from "../components/SkillProgress";
import ActiveProjects from "../components/ActiveProjects";
import "./CodingLab.css";

const challenges = [
  { id: 1, title: "Two Sum Problem", difficulty: "Easy", tags: ["Arrays"], points: 50, status: "review", desc: "Find two numbers in an array that add up to a target sum" },
  { id: 2, title: "Binary Tree Traversal", difficulty: "Medium", tags: ["Trees"], points: 100, status: "start", desc: "Implement in-order, pre-order, and post-order traversal" },
  { id: 3, title: "Dynamic Programming - Fibonacci", difficulty: "Medium", tags: ["DP"], points: 120, status: "start", desc: "Optimize fibonacci sequence calculation using memoization" },
  { id: 4, title: "Graph Shortest Path", difficulty: "Hard", tags: ["Graphs"], points: 200, status: "start", desc: "Find shortest path between two nodes using Dijkstra's algorithm" },
  { id: 5, title: "String Manipulation", difficulty: "Easy", tags: ["Strings"], points: 75, status: "review", desc: "Reverse words in a sentence while preserving spaces" }
];

export default function CodingLab(){
  return (
    <>
      <Navbar />
      <main className="cl-page">
        <section className="cl-hero container">
          <div className="cl-hero-left">
            <h1 className="cl-title">Coding Lab</h1>
            <p className="cl-sub">Practice coding challenges, work on projects, and track your progress</p>

            <div className="cl-quick-actions">
              <button className="cl-action blue">
                <div className="cl-action-icon">&lt;&gt;</div>
                <div className="cl-action-text"><span>New Challenge</span><small>Start coding</small></div>
              </button>

              <button className="cl-action green">
                <div className="cl-action-icon">📁</div>
                <div className="cl-action-text"><span>New Project</span><small>Create project</small></div>
              </button>

              <button className="cl-action purple">
                <div className="cl-action-icon">👥</div>
                <div className="cl-action-text"><span>Join Team</span><small>Collaborate</small></div>
              </button>

              <button className="cl-action orange">
                <div className="cl-action-icon">🏆</div>
                <div className="cl-action-text"><span>Leaderboard</span><small>View rankings</small></div>
              </button>
            </div>
          </div>

          <div className="cl-hero-right">
            <img src="/assets/coding-lab_page-0001.jpg" alt="Coding lab hero" />
          </div>
        </section>

        <section className="container cl-grid">
          <section className="cl-left">
            <div className="card">
              <div className="card-header">
                <h3>Coding Challenges</h3>
                <a className="view-all" href="#/challenges">View All</a>
              </div>

              <div className="challenge-list">
                {challenges.map(c => <ChallengeCard key={c.id} challenge={c} />)}
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
          </aside>
        </section>
      </main>

      <Footer />
    </>
  )
}
