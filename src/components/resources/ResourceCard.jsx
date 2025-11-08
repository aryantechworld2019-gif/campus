import React from "react";

export default function ResourceCard({ resource, onOpen }) {
  return (
    <article className="resource-card card" tabIndex="0" aria-labelledby={`res-${resource.id}`}>
      <div className="res-media" role="img" aria-label={resource.title}>
        <img src={resource.image} alt={resource.title} loading="lazy" />
      </div>

      <div className="res-body">
        <div className="res-top">
          <span className="res-type">{resource.type}</span>
          <div className="res-meta muted">{resource.author} • {resource.minutes ? `${resource.minutes}m` : "—"} • {resource.views.toLocaleString()} views</div>
        </div>

        <h3 id={`res-${resource.id}`} className="res-title">{resource.title}</h3>
        <p className="res-excerpt">{resource.excerpt}</p>

        <div className="res-bottom">
          <div className="res-tags">
            {resource.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>

          <div className="res-actions">
            <button className="btn small outline" onClick={() => window.open(resource.url, "_blank", "noopener")}>Open</button>
            <button className="btn small" onClick={onOpen}>Preview</button>
          </div>
        </div>
      </div>
    </article>
  );
}
