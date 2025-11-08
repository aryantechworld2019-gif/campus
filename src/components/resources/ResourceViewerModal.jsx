import React, { useEffect, useState } from "react";

export default function ResourceViewerModal() {
  const [open, setOpen] = useState(false);
  const [resource, setResource] = useState(null);

  useEffect(() => {
    function onOpen(e) {
      setResource(e.detail);
      setOpen(true);
    }
    window.addEventListener("resources:open", onOpen);
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resources:open", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  if (!open || !resource) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`${resource.title} preview`}>
      <div className="modal modal-large card">
        <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>

        <div className="viewer-grid">
          <div className="viewer-media">
            <img src={resource.image} alt={resource.title} loading="lazy" />
          </div>

          <div className="viewer-body">
            <h2>{resource.title}</h2>
            <div className="muted">{resource.author} • {resource.type} • {resource.views.toLocaleString()} views</div>
            <p className="mt-12">{resource.excerpt}</p>

            <div className="mt-16">
              <a className="btn primary" href={resource.url} target="_blank" rel="noopener noreferrer">Open resource</a>
              <button className="btn outline" onClick={() => window.print()} style={{marginLeft:12}}>Print</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
