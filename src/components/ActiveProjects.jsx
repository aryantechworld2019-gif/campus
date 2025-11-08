// src/components/ActiveProjects.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  { id: 1, title: "E-commerce Platform", progress: 75, tags: ["React","Node.js","MongoDB"], members: 3, due: "2024-02-15", status: "In Progress" },
  { id: 2, title: "Mobile Weather App", progress: 45, tags: ["React Native","TypeScript"], members: 2, due: "2024-02-28", status: "In Progress" },
  { id: 3, title: "Data Visualization Dashboard", progress: 90, tags: ["D3.js","Python","Flask"], members: 3, due: "2024-01-30", status: "Review" }
];

export default function ActiveProjects(){
  const navigate = useNavigate();

  const handleOpenProject = (project) => {
    console.log(`Opening project: ${project.title}`);
    navigate(`/coding-lab/project/${project.id}`);
    // Can be enhanced to open project workspace
  };

  return (
    <div>
      {projects.map((p,i) => (
        <div key={i} className="project-card" role="group" aria-label={p.title}>
          <div className="project-top">
            <div>
              <h4>{p.title}</h4>
              <div className="tag small"> {p.status} </div>
            </div>
            <button className="small-btn open" onClick={() => handleOpenProject(p)}>Open</button>
          </div>

          <p className="muted">Full-stack web application with React and Node.js</p>

          <div className="progress-row">
            <div className="progress-bar">
              <div className="progress" style={{width:`${p.progress}%`, background:"#2563eb"}}/>
            </div>
            <div className="muted">{p.progress}%</div>
          </div>

          <div className="project-meta">
            <div className="tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
            <div className="muted">{p.members} members • Due {p.due}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
