import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressOverview from "../components/ProgressOverview";
import ProgressStats from "../components/ProgressStats";
import LearningPath from "../components/LearningPath";
import GoalsTracker from "../components/GoalsTracker";
import "./Progress.css";

export default function Progress() {
  return (
    <>
      <Navbar />
      <main className="progress-page">
        <section className="progress-hero container">
          <div className="hero-top">
            <div>
              <h1 className="progress-title">Your Progress</h1>
              <p className="progress-sub">Track your learning journey and celebrate your achievements</p>
            </div>

            <div className="overview-cards" aria-hidden>
              <div className="card stat-card">
                <div className="stat-circle">68%</div>
                <div className="stat-label">Overall Progress</div>
                <div className="muted">Progress across challenges & projects</div>
              </div>

              <div className="card stat-card">
                <div className="stat-circle green">142</div>
                <div className="stat-label">Challenges Completed</div>
                <div className="muted">Solved problems & tasks</div>
              </div>

              <div className="card stat-card">
                <div className="stat-circle purple">8</div>
                <div className="stat-label">Projects Finished</div>
                <div className="muted">Group & solo projects</div>
              </div>

              <div className="card stat-card">
                <div className="stat-circle orange">324</div>
                <div className="stat-label">Hours Coded</div>
                <div className="muted">Total active coding time</div>
              </div>
            </div>
          </div>
        </section>

        <section className="container progress-grid">
          <div className="progress-left">
            <ProgressOverview />
            <LearningPath />

            <div className="card mt-20">
              <h3>This Week's Activity</h3>
              <div className="activity-chart" aria-hidden>
                <div className="chart-placeholder">Weekly activity chart</div>

                <div className="chart-axis">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>

                <div className="chart-stats">
                  <div className="chart-stat">
                    <div className="chart-value">25.0h</div>
                    <div className="muted">Total Hours</div>
                  </div>
                  <div className="chart-stat">
                    <div className="chart-value green">31</div>
                    <div className="muted">Challenges</div>
                  </div>
                  <div className="chart-stat">
                    <div className="chart-value purple">7</div>
                    <div className="muted">Active Days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="progress-right">
            <ProgressStats />
            <GoalsTracker />

            <div className="card mt-18">
              <h4>Milestones</h4>
              <div className="milestone">
                <div className="milestone-title">Reached 1000 points</div>
                <div className="muted">Unlocked: Problem Solver badge</div>
              </div>

              <div className="milestone mt-12">
                <div className="milestone-title">Completed Full Stack Path</div>
                <div className="muted">Certificate available</div>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
