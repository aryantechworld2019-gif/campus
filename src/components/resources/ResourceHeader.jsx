import React from "react";

export default function ResourceHeader() {
  return (
    <header className="resources-hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">Resources</h1>
          <p className="hero-sub">
            Curated articles, cheat sheets, video lessons and starter projects — organized for the ATW community.
          </p>

          <ul className="hero-meta">
            <li><strong>1.2k</strong><span>Articles</span></li>
            <li><strong>300</strong><span>Videos</span></li>
            <li><strong>150</strong><span>Projects</span></li>
          </ul>
        </div>

        <div className="hero-right" aria-hidden>
          <div className="hero-card">
            <img src="/assets/resources-hero.jpg" alt="Resources hero" loading="lazy" />
          </div>
        </div>
      </div>
    </header>
  );
}
