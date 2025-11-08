import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResourceHeader from "../components/resources/ResourceHeader";
import ResourceFilters from "../components/resources/ResourceFilters";
import ResourceList from "../components/resources/ResourceList";
import ResourceSidebar from "../components/resources/ResourceSidebar";
import ResourceViewerModal from "../components/resources/ResourceViewerModal";
import "./resources.css";

export default function Resources() {
  return (
    <>
      <Navbar />
      <main className="resources-page">
        <ResourceHeader />

        <section className="container resources-grid">
          <div className="resources-main">
            <ResourceFilters />
            <ResourceList />
          </div>

          <aside className="resources-aside">
            <ResourceSidebar />
          </aside>
        </section>

        <ResourceViewerModal /> {/* modal is controlled via local event bus inside components */}
      </main>
      <Footer />
    </>
  );
}
