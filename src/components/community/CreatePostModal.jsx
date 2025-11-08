import React, { useState } from "react";

export default function CreatePostModal() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  function handleFile(e) {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: replace with API call
    console.log("post:", { text, image });
    setText("");
    setImage(null);
    setOpen(false);
  }

  return (
    <>
      <div className="createbar card">
        <div className="avatar-placeholder">JD</div>
        <button className="create-input" onClick={() => setOpen(true)} aria-haspopup="dialog">Share something with the community...</button>
        <div className="create-actions">
          <button className="btn small outline" onClick={() => setOpen(true)}>Post</button>
        </div>
      </div>

      {open && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Create post">
          <div className="modal card modal-sm">
            <button className="modal-close" aria-label="Close" onClick={() => setOpen(false)}>✕</button>
            <form onSubmit={handleSubmit}>
              <h3>Create post</h3>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Share an update, ask a question or post a resource..."
                rows={6}
                required
              />
              <div className="file-row">
                <input id="file" type="file" accept="image/*" onChange={handleFile} />
                {image && <img src={image} alt="preview" className="img-preview" />}
              </div>
              <div className="modal-actions">
                <button type="submit" className="btn primary">Publish</button>
                <button type="button" className="btn outline" onClick={() => setOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
