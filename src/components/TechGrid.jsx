// src/components/TechGrid.jsx
import React from "react";
import {
  FaReact,
  FaAngular,
  FaPython,
  FaPhp,
  FaJsSquare,
  FaHtml5,
  FaAndroid,
  FaDatabase,
} from "react-icons/fa";

export default function TechGrid() {
  const tech = [
    { name: "React.js", icon: <FaReact color="#2e6df6" size={28} /> },
    { name: "Angular", icon: <FaAngular color="#e93c3c" size={28} /> },
    { name: "Python", icon: <FaPython color="#f6b93c" size={28} /> },
    { name: "PHP", icon: <FaPhp color="#a060f6" size={28} /> },
    { name: "JavaScript", icon: <FaJsSquare color="#f0db4f" size={28} /> },
    { name: "HTML/CSS", icon: <FaHtml5 color="#f67c2e" size={28} /> },
    { name: "Android", icon: <FaAndroid color="#2eaf5d" size={28} /> },
    { name: "MySQL", icon: <FaDatabase color="#2e6df6" size={28} /> },
  ];

  return (
    <div
      className="tech-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: 16,
        marginTop: 24,
        justifyItems: "center",
      }}
    >
      {tech.map((t, i) => (
        <div
          className="tech-pill"
          key={i}
          style={{
            background: "#1a1f2e",
            color: "#fff",
            borderRadius: 10,
            padding: "20px 10px",
            textAlign: "center",
            width: 120,
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-4px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <div style={{ marginBottom: 8 }}>{t.icon}</div>
          <div style={{ fontWeight: 600, fontSize: 13 }}>{t.name}</div>
        </div>
      ))}
    </div>
  );
}
