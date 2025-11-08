import React, { useState } from "react";

export default function PostCard({ post, onLike }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="post-card card" aria-labelledby={`post-${post.id}`}>
      <img className="post-avatar" src={post.avatar} alt={`${post.author} avatar`} loading="lazy"/>
      <div className="post-body">
        <div className="post-head">
          <div>
            <h4 id={`post-${post.id}`} className="post-author">{post.author}</h4>
            <div className="post-meta muted">{post.time} • {post.tags.join(", ")}</div>
          </div>
          <div className="post-actions">
            <button className="icon-btn" onClick={onLike} aria-label="Like post">❤ {post.likes}</button>
          </div>
        </div>

        <p className={`post-content ${expanded ? "expanded" : ""}`}>{post.content}</p>

        <div className="post-footer">
          <button className="link small" onClick={() => setExpanded(s => !s)}>{expanded ? "Show less" : "Read more"}</button>
          <div className="comments muted">{post.comments} comments</div>
        </div>
      </div>
    </article>
  );
}
