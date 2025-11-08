// src/components/CodeEditor.jsx
import React from "react";
import "./CodeEditor.css";

export default function CodeEditor({ code, onChange, language }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const handleTab = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      onChange(newCode);

      // Set cursor position after the tab
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 4;
      }, 0);
    }
  };

  return (
    <div className="code-editor">
      <div className="line-numbers">
        {code.split('\n').map((_, idx) => (
          <div key={idx} className="line-number">{idx + 1}</div>
        ))}
      </div>
      <textarea
        className="code-textarea"
        value={code}
        onChange={handleChange}
        onKeyDown={handleTab}
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />
    </div>
  );
}
