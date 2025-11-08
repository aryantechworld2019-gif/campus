import React, { useState, useEffect } from "react";

/*
  Emits a custom event 'resources:filter' containing filter state,
  so ResourceList can subscribe. This keeps components decoupled and simple.
  In a larger app use context or state manager.
*/

const INITIAL = { query: "", type: "all", sort: "recent", tags: [] };

export default function ResourceFilters() {
  const [filters, setFilters] = useState(INITIAL);
  const tags = ["all", "react", "node", "algorithms", "frontend", "backend", "database", "career"];

  useEffect(() => {
    const ev = new CustomEvent("resources:filter", { detail: filters });
    window.dispatchEvent(ev);
  }, [filters]);

  return (
    <div className="filters-card card">
      <div className="filters-row">
        <input
          className="search-input"
          placeholder="Search resources, e.g. 'binary search', 'react hooks'"
          value={filters.query}
          onChange={(e) => setFilters(f => ({ ...f, query: e.target.value }))}
          aria-label="Search resources"
        />

        <select
          value={filters.type}
          onChange={(e) => setFilters(f => ({ ...f, type: e.target.value }))}
          aria-label="Filter by type"
        >
          <option value="all">All types</option>
          <option value="article">Article</option>
          <option value="video">Video</option>
          <option value="project">Project</option>
          <option value="cheatsheet">Cheat sheet</option>
        </select>

        <select
          value={filters.sort}
          onChange={(e) => setFilters(f => ({ ...f, sort: e.target.value }))}
          aria-label="Sort resources"
        >
          <option value="recent">Most recent</option>
          <option value="popular">Most popular</option>
          <option value="rating">Top rated</option>
        </select>

        <div className="tag-scroll" role="list">
          {tags.map(t => (
            <button
              type="button"
              key={t}
              className={`tag-chip ${filters.tags.includes(t) ? "active" : ""}`}
              onClick={() => {
                setFilters(f => {
                  if (t === "all") return { ...f, tags: [] };
                  const exists = f.tags.includes(t);
                  const tags = exists ? f.tags.filter(x => x !== t) : [...f.tags, t];
                  return { ...f, tags };
                });
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
