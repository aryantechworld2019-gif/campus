import React, { useState, useMemo } from "react";
import MentorCard from "./MentorCard";
import MentorProfileModal from "./MentorProfileModal";
import MentorFilters from "./MentorFilters";

/*
  Sample mentor data. Replace with API integration as needed.
  Put mentor photos in /public/assets/ (e.g. mentor-1.jpg ...).
*/
const MENTORS = [
  { id: 1, name: "Priya Sharma", title: "Senior Frontend Engineer", company: "TCS", skills: ["React","TypeScript","CSS"], years: 6, rate: 35, avatar:"/assets/mentor-1.jpg", bio: "Front-end lead, loves architecture & accessibility.", availability: "Weekdays" },
  { id: 2, name: "Rahul Patel", title: "Backend Engineer", company: "Infosys", skills: ["Node.js","Databases","System Design"], years: 7, rate: 40, avatar:"/assets/mentor-2.jpg", bio: "Distributed systems and backend performance", availability: "Weekends" },
  { id: 3, name: "Sneha Reddy", title: "UI/UX Engineer", company: "Wipro", skills: ["Design","React","Figma"], years: 5, rate: 30, avatar:"/assets/mentor-3.jpg", bio: "Design systems + accessibility", availability: "Flexible" },
  { id: 4, name: "Arjun Kumar", title: "Mobile Engineer", company: "Accenture", skills: ["Android","Kotlin","Architecture"], years: 8, rate: 45, avatar:"/assets/mentor-4.jpg", bio: "Mobile performance & clean code", availability: "Weekdays" },
  { id: 5, name: "Meera Iyer", title: "Data Scientist", company: "TechLabs", skills: ["Python","ML","SQL"], years: 6, rate: 50, avatar:"/assets/mentor-5.jpg", bio: "ML systems and model deployment", availability: "Flexible" },
];

export default function Mentors() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ skill: "All", availability: "Any", minYears: 0 });
  const [sort, setSort] = useState("recommended");
  const [selected, setSelected] = useState(null);

  const skills = useMemo(() => {
    const setSkills = new Set(MENTORS.flatMap(m => m.skills));
    return ["All", ...Array.from(setSkills)];
  }, []);

  const filtered = useMemo(() => {
    let list = MENTORS.slice();
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(m =>
        m.name.toLowerCase().includes(q) ||
        m.title.toLowerCase().includes(q) ||
        m.skills.join(" ").toLowerCase().includes(q)
      );
    }
    if (filters.skill && filters.skill !== "All") list = list.filter(m => m.skills.includes(filters.skill));
    if (filters.availability && filters.availability !== "Any") list = list.filter(m => m.availability === filters.availability);
    if (filters.minYears) list = list.filter(m => m.years >= filters.minYears);
    if (sort === "experience") list.sort((a,b)=> b.years - a.years);
    if (sort === "rate") list.sort((a,b)=> a.rate - b.rate);
    return list;
  }, [query, filters, sort]);

  return (
    <div className="mentors-wrapper">
      <div className="mentors-controls">
        <div className="search">
          <input
            aria-label="Search mentors by name, skill or title"
            placeholder="Search mentors, skills, or companies"
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
          />
        </div>

        <MentorFilters
          skills={skills}
          filters={filters}
          onChange={setFilters}
          sort={sort}
          setSort={setSort}
        />
      </div>

      <div className="mentors-grid">
        {filtered.map(m => (
          <MentorCard key={m.id} mentor={m} onView={() => setSelected(m)} />
        ))}
      </div>

      {selected && (
        <MentorProfileModal mentor={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
