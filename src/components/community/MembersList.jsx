import React from "react";

const MEMBERS = [
  { name: "Priya Sharma", avatar: "/assets/avatar1.jpg", badge: "Mentor" },
  { name: "Rahul Patel", avatar: "/assets/avatar2.jpg", badge: "Top Contributor" },
  { name: "Sneha Reddy", avatar: "/assets/avatar3.jpg", badge: "Moderator" },
  { name: "Arjun Kumar", avatar: "/assets/avatar4.jpg", badge: "" }
];

export default function MembersList() {
  return (
    <ul className="members-list">
      {MEMBERS.map((m,i)=>(
        <li key={i} className="member-row">
          <img src={m.avatar} alt={m.name} loading="lazy"/>
          <div>
            <div className="member-name">{m.name}</div>
            {m.badge && <div className="member-badge">{m.badge}</div>}
          </div>
        </li>
      ))}
      <li className="more-link"><a className="link small" href="#members">View all members</a></li>
    </ul>
  );
}
