import React, { useState, useMemo } from "react";
import PostCard from "./PostCard";

/* sample posts - replace with API */
const SAMPLE = [
  { id: 1, author: "Priya Sharma", avatar: "/assets/avatar1.jpg", time: "2h", content: "Solved the two-sum problem with an optimized approach. Sharing my code snippet.", likes: 12, comments: 4, tags: ["algorithms","help"] },
  { id: 2, author: "Rahul Patel", avatar: "/assets/avatar2.jpg", time: "5h", content: "Anyone ready for a mock interview tomorrow? 4 slots available.", likes: 8, comments: 7, tags: ["interview","mock"] },
  { id: 3, author: "Sneha Reddy", avatar: "/assets/avatar3.jpg", time: "1d", content: "Sharing resources on React performance tuning and profiling.", likes: 20, comments: 5, tags: ["react","performance"] }
];

export default function Feed() {
  const [filter, setFilter] = useState("all");
  const [posts, setPosts] = useState(SAMPLE);

  const tags = useMemo(() => {
    const set = new Set(SAMPLE.flatMap(p => p.tags));
    return ["all", ...Array.from(set)];
  }, []);

  function handleLike(id) {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  }

  const visible = posts.filter(p => filter === "all" ? true : p.tags.includes(filter));

  return (
    <section className="feed">
      <div className="feed-controls">
        <div className="tabs">
          {tags.map(t => (
            <button key={t} className={`tab ${filter === t ? "active" : ""}`} onClick={() => setFilter(t)}>{t}</button>
          ))}
        </div>
        <div className="feed-search">
          <input placeholder="Search posts..." />
        </div>
      </div>

      <div className="post-list">
        {visible.map(p => <PostCard key={p.id} post={p} onLike={() => handleLike(p.id)} />)}
      </div>
    </section>
  );
}
