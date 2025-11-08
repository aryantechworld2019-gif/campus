import React from "react";

const EVENTS = [
  { id: 1, title: "System Design Workshop", date: "Sat, Jul 12", time: "17:00" },
  { id: 2, title: "Mock Interviews", date: "Sun, Jul 13", time: "11:00" }
];

export default function EventsList() {
  return (
    <ul className="events-list">
      {EVENTS.map(e => (
        <li key={e.id} className="event-row">
          <div className="event-date">{e.date}</div>
          <div>
            <div className="event-title">{e.title}</div>
            <div className="muted">{e.time}</div>
          </div>
        </li>
      ))}
      <li className="more-link"><a className="link small" href="#events">View all events</a></li>
    </ul>
  );
}
