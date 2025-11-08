import React from "react";

export default function MentorFilters({ skills = [], filters, onChange, sort, setSort }) {
  const availabilityOptions = ["Any", "Weekdays", "Weekends", "Flexible"];

  function update(field, value) {
    onChange({ ...filters, [field]: value });
  }

  return (
    <div className="filters">
      <div className="filter-item">
        <label className="sr-only">Skill</label>
        <select value={filters.skill} onChange={e => update("skill", e.target.value)}>
          {skills.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="filter-item">
        <label className="sr-only">Availability</label>
        <select value={filters.availability} onChange={e => update("availability", e.target.value)}>
          <option value="Any">Any</option>
          {availabilityOptions.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>

      <div className="filter-item">
        <label className="sr-only">Minimum experience</label>
        <select value={filters.minYears} onChange={e => update("minYears", Number(e.target.value))}>
          <option value={0}>Any experience</option>
          <option value={2}>2+ years</option>
          <option value={4}>4+ years</option>
          <option value={6}>6+ years</option>
        </select>
      </div>

      <div className="filter-item sort">
        <label className="sr-only">Sort by</label>
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="recommended">Recommended</option>
          <option value="experience">Most experienced</option>
          <option value="rate">Lowest rate</option>
        </select>
      </div>
    </div>
  );
}
