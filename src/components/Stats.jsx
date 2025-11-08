// src/components/Stats.jsx
import React from "react";

export default function Stats(){
  const stats = [
    { v: "₹12,000", label: "Average Starting Salary", color: "#2563eb" },
    { v: "85%", label: "Placement Success Rate", color: "#10b981" },
    { v: "3 Months", label: "Average Time to Placement", color: "#7c3aed" }
  ];
  return (
    <section style={{paddingTop:28, paddingBottom:20}}>
      <div className="container">
        <div style={{display:"flex", justifyContent:"center", gap:16}}>
          {stats.map((s, i)=>(
            <div key={i} className="highlight" style={{minWidth:220}}>
              <div style={{fontSize:28, fontWeight:800, color:s.color}}>{s.v}</div>
              <div style={{color:"var(--muted)", marginTop:6}}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
