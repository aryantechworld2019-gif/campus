// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Technologies from "../components/Technologies";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home(){
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="section-trust">
          <div className="container">
            <h3>Trusted by Thousands of Aspiring Developers</h3>
            <p>Join a community of learners who have transformed their careers through our comprehensive internship program.</p>
            <div className="stats-row" style={{marginTop:28}}>
              <div className="stat">
                <div className="icon">👥</div>
                <div className="value">2,500+</div>
                <div className="label">Active Interns</div>
              </div>
              <div className="stat">
                <div className="icon">💻</div>
                <div className="value">50,000+</div>
                <div className="label">Code Submissions</div>
              </div>
              <div className="stat">
                <div className="icon">🏆</div>
                <div className="value">85%</div>
                <div className="label">Placement Rate</div>
              </div>
              <div className="stat">
                <div className="icon">🏢</div>
                <div className="value">200+</div>
                <div className="label">Partner Companies</div>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <Technologies />
        <Testimonials />
        <Stats />
        <CTA />
      </main>

      <Footer />
    </>
  )
}
