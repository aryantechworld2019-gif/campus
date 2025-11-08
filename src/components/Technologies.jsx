// src/components/Technologies.jsx
import React from "react";
import TechGrid from "./TechGrid";

export default function Technologies() {
  const tech = ["React.js", "Angular", "Python", "PHP", "JavaScript", "HTML/CSS", "Android", "MySQL"];
  return (
    <section className="tech-dark" id="technologies">
      <div className="tech-inner">
        <h3 style={{ fontSize: 28, fontWeight: 800 }}>Master Industry-Standard Technologies</h3>
        <p style={{ color: "rgba(230,238,248,0.8)", maxWidth: 820, margin: "8px auto 18px" }}>Learn the most in-demand programming languages and frameworks used by top tech companies worldwide.</p>
{/* 
        <div className="tech-grid" aria-hidden>
          {tech.map((t, i) => (
            <div className="tech-pill" key={i}>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>{t}</div>
            </div>
          ))}
        </div> */}
        <TechGrid />

        <div className="learning-path" style={{ marginTop: 22 }}>
          <strong>Learning Path</strong>
          <div
            style={{
              display: "flex",
              gap: 8,
              marginTop: 10,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { name: "Basics", color: "#2e6df6" },
              { name: "Frontend", color: "#2eaf5d" },
              { name: "Backend", color: "#a060f6" },
              { name: "Database", color: "#f67c2e" },
              { name: "Full Stack", color: "#e93c3c" },
              { name: "Deployment", color: "#d29a0e" },
            ].map((item, i) => (
              <span
                key={i}
                style={{
                  background: item.color,
                  color: "#fff",
                  padding: "8px 14px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 500,
                  boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
                }}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
