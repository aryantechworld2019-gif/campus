// src/components/Features.jsx
import React from "react";

export default function Features(){
  const items = [
    { img: "/assets/page-0002.jpg", title: "Built-in Coding Terminal", desc: "Code directly in your browser with our secure, sandboxed terminal. No need for external IDEs or setup." },
    { img: "/assets/page-0003.jpg", title: "Real-time Code Verification", desc: "Get instant feedback on your code with automated test cases and performance metrics." },
    { img: "/assets/page-0004.jpg", title: "Progress Tracking", desc: "Monitor your learning journey with detailed analytics, scores, and skill progression charts." },
    { img: "/assets/page-0005.jpg", title: "Collaborative Learning", desc: "Learn with peers, participate in coding challenges, and climb the leaderboard together." },
    { img: "/assets/page-0006.jpg", title: "Industry Certification", desc: "Earn recognized certificates and get placement assistance with our partner companies." },
    { img: "/assets/page-0007.jpg", title: "Multi-Language Support", desc: "Practice with PHP, Python, JavaScript, React, Angular, and more programming languages." }
  ];

  return (
    <section className="container" id="features" style={{paddingTop:36}}>
      <div style={{textAlign:"center"}}>
        <h3 style={{fontSize:28, fontWeight:800}}>Everything You Need to Excel</h3>
        <p style={{color:"var(--muted)", maxWidth:880, margin:"8px auto 18px"}}>Our comprehensive platform provides all the tools and resources you need to master programming and land your dream job in tech.</p>
      </div>

      <div className="features-grid" style={{marginTop:20}}>
        {items.map((it, idx) => (
          <div className="feature-card" key={idx}>
            <img className="hero-img" src={it.img} alt={it.title} />
            <div style={{display:"flex", alignItems:"center", gap:12, marginTop:12}}>
              <div style={{width:44,height:44,borderRadius:10, background:"#eef6ff", display:"flex",alignItems:"center",justifyContent:"center"}}> </div>
              <div>
                <h4 style={{margin:0, fontSize:18, fontWeight:700}}>{it.title}</h4>
                <p style={{marginTop:8, color:"var(--muted)"}}>{it.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
