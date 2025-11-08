import React from "react";

const TOP = [
  { id: "t1", title: "Interview Question Bank", type: "cheatsheet", views: 14000 },
  { id: "t2", title: "Deploying Node.js Apps", type: "article", views: 9200 },
  { id: "t3", title: "React Performance Tips", type: "video", views: 7800 },
];

const CATEGORIES = ["All", "Articles", "Videos", "Projects", "Cheat sheets", "Beginner", "Advanced"];

export default function ResourceSidebar() {
  const handleCategoryClick = (category) => {
    console.log(`Filtering by category: ${category}`);
    // Can be enhanced with state management to filter resources
  };

  const handleUpload = () => {
    console.log("Opening upload modal");
    alert("Upload resource feature coming soon! You'll be able to share articles, videos, and projects.");
    // Can be enhanced with upload modal or form
  };

  return (
    <aside className="resources-sidebar">
      <div className="card">
        <h4>Top Resources</h4>
        <ul className="top-list">
          {TOP.map(t => (
            <li key={t.id} className="top-row">
              <div className="top-title">{t.title}</div>
              <div className="top-meta muted">{t.views.toLocaleString()} views</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="card mt-14">
        <h4>Categories</h4>
        <ul className="cat-list">
          {CATEGORIES.map(c => (
            <li key={c}>
              <button className="link small" onClick={() => handleCategoryClick(c)}>
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="card mt-14">
        <h4>Upload Resource</h4>
        <p className="muted">Share a helpful article, video or project with the community.</p>
        <div style={{marginTop:10}}>
          <button className="btn primary full-width" onClick={handleUpload}>Upload</button>
        </div>
      </div>
    </aside>
  );
}
