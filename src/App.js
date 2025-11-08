// src/App.jsx - Updated with authentication routes and challenge detail
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CodingLab from "./pages/CodingLab";
import ChallengeDetail from "./pages/ChallengeDetail";
import Progress from "./pages/Progress";
import Mentorship from "./pages/Mentorship";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Main App Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/coding-lab" element={<CodingLab />} />
        <Route path="/coding-lab/challenge/:id" element={<ChallengeDetail />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/mentors" element={<Mentorship />} />
        <Route path="/community" element={<Community />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}
