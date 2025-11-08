import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mentors from "../components/mentorship/Mentors";
import HowItWorks from "../components/mentorship/HowItWorks";
import FAQ from "../components/mentorship/FAQ";
import CTA from "../components/mentorship/CTA";
import "./mentorship.css";

export default function Mentorship() {
  return (
    <>
      <Navbar />
      <main className="mentorship-page">
        <header className="mentorship-hero container">
          <div className="hero-left">
            <h1>Mentorship that accelerates your career</h1>
            <p className="lead">
              Work 1:1 with industry mentors, get code reviews, mock interviews and career guidance
              tailored to your goals — from interview prep to project architecture.
            </p>

            <div className="hero-actions">
              <a href="#mentors" className="btn primary">Find a Mentor</a>
              <a href="#how" className="btn ghost">How it Works</a>
            </div>

            <ul className="hero-highlights">
              <li><strong>5k+</strong> Mentorship hours</li>
              <li><strong>1200+</strong> Mentor matches</li>
              <li><strong>85%</strong> Placement help success</li>
            </ul>
          </div>

          <div className="hero-right" aria-hidden>
            <div className="hero-card">
              <img src="/assets/mentor-hero.jpg" alt="Mentorship" />
            </div>
          </div>
        </header>

        <section id="mentors" className="container mentors-section">
          <div className="section-header">
            <h2>Find your mentor</h2>
            <p className="muted">Browse vetted mentors by skill, experience, and availability.</p>
          </div>

          <Mentors />
        </section>

        <section id="how" className="container">
          <HowItWorks />
        </section>

        <section className="container faq-section">
          <FAQ />
        </section>

        <CTA />

      </main>
      <Footer />
    </>
  );
}
