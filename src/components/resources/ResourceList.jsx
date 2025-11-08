import React, { useState, useEffect, useMemo } from "react";
import ResourceCard from "./ResourceCard";

/* Sample data for immediate usage. Replace with API fetch. */
const SAMPLE = [
  { id: "r1", type: "article", title: "Understanding JavaScript Closures", excerpt: "Closures are a core concept ...", tags: ["javascript","frontend"], author: "Priya", minutes: 8, views: 4200, rating: 4.8, image: "/assets/res-1.jpg", url: "#" },
  { id: "r2", type: "video", title: "React Hooks Deep Dive", excerpt: "UseEffect, useMemo, useCallback explained ...", tags: ["react","frontend"], author: "Rahul", minutes: 34, views: 15200, rating: 4.9, image: "/assets/res-2.jpg", url: "#" },
  { id: "r3", type: "project", title: "Build a CRUD App with Node & MongoDB", excerpt: "Step-by-step full-stack project ...", tags: ["node","backend","database"], author: "Sneha", minutes: 0, views: 6200, rating: 4.7, image: "/assets/res-3.jpg", url: "#" },
  { id: "r4", type: "cheatsheet", title: "Algorithms Cheat Sheet", excerpt: "Common patterns and complexity cheat sheet", tags: ["algorithms"], author: "Arjun", minutes: 0, views: 3200, rating: 4.6, image: "/assets/res-4.jpg", url: "#" },
  // more items...
];

export default function ResourceList() {
  const [resources, setResources] = useState(SAMPLE);
  const [filters, setFilters] = useState({ query: "", type: "all", sort: "recent", tags: [] });
  const [page, setPage] = useState(1);
  const perPage = 8;

  useEffect(() => {
    function onFilter(e) {
      setFilters(e.detail);
      setPage(1);
    }
    window.addEventListener("resources:filter", onFilter);
    return () => window.removeEventListener("resources:filter", onFilter);
  }, []);

  const filtered = useMemo(() => {
    const q = filters.query?.trim().toLowerCase();
    let list = resources.slice();

    if (filters.type && filters.type !== "all") list = list.filter(r => r.type === filters.type);
    if (filters.tags && filters.tags.length) list = list.filter(r => filters.tags.every(t => r.tags.includes(t)));
    if (q) list = list.filter(r => (r.title + " " + r.excerpt + " " + (r.tags || []).join(" ")).toLowerCase().includes(q));

    if (filters.sort === "popular") list.sort((a,b)=> b.views - a.views);
    else if (filters.sort === "rating") list.sort((a,b)=> b.rating - a.rating);
    else list.sort((a,b)=> b.id.localeCompare(a.id)); // pseudo recent: reverse id

    return list;
  }, [resources, filters]);

  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / perPage));
  const visible = filtered.slice((page - 1) * perPage, page * perPage);

  function openResource(resource) {
    const ev = new CustomEvent("resources:open", { detail: resource });
    window.dispatchEvent(ev);
  }

  return (
    <section className="resource-list">
      <div className="list-grid">
        {visible.map(r => (
          <ResourceCard key={r.id} resource={r} onOpen={() => openResource(r)} />
        ))}
      </div>

      <div className="pagination">
        <button className="page-btn" disabled={page <= 1} onClick={() => setPage(p => Math.max(1, p - 1))}>Prev</button>
        <div className="page-info">Page {page} of {pages} • {total} resources</div>
        <button className="page-btn" disabled={page >= pages} onClick={() => setPage(p => Math.min(pages, p + 1))}>Next</button>
      </div>
    </section>
  );
}
