// src/components/TerminalCard.jsx
import React from "react";

export default function TerminalCard() {
  const output = `$ python solve_problem.py

Running test cases...
✓ Test case 1: PASSED
✓ Test case 2: PASSED
✓ Test case 3: PASSED

Score: 100/100
Time: 0.45s | Memory: 12MB`;

  return (
    <section className="section" id="terminal">
      <div className="card" style={{ padding: "1rem" }}>
        <h4>ATW Terminal — Live Coding</h4>
        <p style={{ color: "#666", marginTop: "0.4rem" }}>
          Run code, validate against tests, and get performance feedback instantly.
        </p>
        <pre
          style={{
            marginTop: "1rem",
            background: "#0b1220",
            color: "#e6eef8",
            borderRadius: 8,
            padding: "0.8rem",
            fontFamily: "monospace",
            fontSize: "0.9rem",
            whiteSpace: "pre-wrap",
            lineHeight: 1.4,
          }}
        >
          {output}
        </pre>
      </div>
    </section>
  );
}
