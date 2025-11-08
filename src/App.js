// src/App.jsx - add route (replace with this)
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CodingLab from "./pages/CodingLab";
import Progress from "./pages/Progress";
import Mentorship from "./pages/Mentorship";
import Community from "./pages/Community";
import Resources from "./pages/Resources";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/coding-lab" element={<CodingLab />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/mentors" element={<Mentorship />} />
        <Route path="/community" element={<Community />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}