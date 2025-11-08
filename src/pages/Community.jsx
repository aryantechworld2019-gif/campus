import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CommunityHeader from "../components/community/CommunityHeader";
import CreatePostModal from "../components/community/CreatePostModal";
import Feed from "../components/community/Feed";
import Sidebar from "../components/community/Sidebar";
import "./community.css";

export default function Community() {
  return (
    <>
      <Navbar />
      <main className="community-page">
        <CommunityHeader />
        <section className="container community-grid">
          <div className="community-main">
            <CreatePostModal />
            <Feed />
          </div>
          <aside className="community-aside">
            <Sidebar />
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
