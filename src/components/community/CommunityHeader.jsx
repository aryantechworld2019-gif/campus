import React from "react";

export default function CommunityHeader() {
  return (
    <header className="community-hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">ATW Community</h1>
          <p className="hero-sub">Connect with peers, participate in discussions, find study groups and collaborate on projects.</p>
          <ul className="hero-stats">
            <li><strong>2.5k</strong><span>Members</span></li>
            <li><strong>12k</strong><span>Posts</span></li>
            <li><strong>750</strong><span>Active Today</span></li>
          </ul>
        </div>

        <div className="hero-right" aria-hidden>
          <div className="hero-card">
            <img src="/assets/community-hero.jpg" alt="" loading="lazy"/>
          </div>
        </div>
      </div>
    </header>
  );
}
