// src/components/Testimonials.jsx
import React from "react";

const stories = [
  { name:"Priya Sharma", role:"Full Stack Developer at TCS", quote:"ATW Campus transformed my coding skills completely. The real-time verification helped me learn faster than any traditional course. Now I'm working at TCS with a great salary!", tag:"React.js & Node.js", avatar:"/assets/avatar1.jpg" },
  { name:"Rahul Patel", role:"Python Developer at Infosys", quote:"The built-in terminal feature is amazing! I could practice coding without any setup. The mentorship and placement support helped me land my dream job.", tag:"Python & Django", avatar:"/assets/avatar2.jpg" },
  { name:"Sneha Reddy", role:"Frontend Developer at Wipro", quote:"The progress tracking and leaderboard motivated me to keep improving. The certificate I earned here opened doors to multiple job opportunities.", tag:"Angular & TypeScript", avatar:"/assets/avatar3.jpg" },
  { name:"Arjun Kumar", role:"Mobile Developer at Accenture", quote:"From zero coding knowledge to getting placed at Accenture in just 3 months! The structured learning path and hands-on practice made all the difference.", tag:"Android & Java", avatar:"/assets/avatar4.jpg" }
];

export default function Testimonials(){
  return (
    <section className="testimonials">
      <div className="container">
        <h3 style={{textAlign:"center", fontSize:32, fontWeight:800}}>Success Stories from Our Interns</h3>
        <p style={{textAlign:"center", color:"var(--muted)", maxWidth:840, margin:"8px auto 20px"}}>Hear from our graduates who have successfully transitioned into rewarding tech careers through our comprehensive internship program.</p>

        <div className="test-grid">
          {stories.map((s, i)=>(
            <div className="test-card" key={i}>
              <img src={s.avatar} alt={s.name} />
              <div className="content">
                <div style={{color:"#fbbf24"}}>★★★★★</div>
                <p>"{s.quote}"</p>
                <div className="meta">{s.name}</div>
                <div style={{color:"var(--muted)"}}>{s.role}</div>
                <div style={{marginTop:8, display:"inline-block", background:"#eaf2ff", padding:"6px 10px", borderRadius:999, color:"#2563eb", fontSize:12}}>{s.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
