import React from "react";
import MembersList from "./MembersList";
import EventsList from "./EventsList";

export default function Sidebar() {
  return (
    <aside className="aside-column">
      <div className="card sticky">
        <h4>Announcements</h4>
        <ul className="announcements">
          <li><strong>Live workshop:</strong> System design — Sat 5 PM</li>
          <li><strong>Placement drive:</strong> Register by July 10</li>
        </ul>
      </div>

      <div className="card mt-14">
        <h4>Upcoming Events</h4>
        <EventsList />
      </div>

      <div className="card mt-14">
        <h4>Top Members</h4>
        <MembersList />
      </div>
    </aside>
  );
}
