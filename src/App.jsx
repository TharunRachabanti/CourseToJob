import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import StorytellingSteps from "./components/StorytellingSteps";
import ProgressTracker from "./components/ProgressTracker";
import DashboardSneakPeek from "./components/DashboardSneakPeek";
import Testimonials from "./components/Testimonials";
import JobGuaranteeBadge from "./components/JobGuaranteeBadge";
import DarkLightToggle from "./components/DarkLightToggle";
import Courses from "./components/courses";
import SnowflakeCourse from "./components/snowflakecourse";
import GenAICourse from "./components/GenAICourse";
import OracleCourse from "./components/OracleCourse";
import JavaCourse from "./components/JavaCourse";
import PythonCourse from "./components/PythonCourse";
import './App.css';
import './styles/verticalStorytelling.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
        <>
            <Navbar />
            <Hero />
            <DarkLightToggle />

            
            <div className="vertical-storytelling">
              <Courses />
            </div>



   

            <StorytellingSteps />
              <JobGuaranteeBadge />
            <ProgressTracker />
            <DashboardSneakPeek />
            <Testimonials />
            
          </>
        } />
        <Route path="/snowflake" element={<SnowflakeCourse />} />
      </Routes>
    </Router>
  );
}

export default App;
