import React from 'react';
import '../styles/storytelling.css';

const StorytellingSteps = () => {
  return (
    <section className="storytelling-section" id="storytelling">
      <h2 className="section-title">Your Journey to Success</h2>
      <div className="steps-container">
        <div className="step-card enroll">
          <h3>Step 1: Enroll</h3>
          <div className="animation enroll-animation">
            {/* Placeholder for course selection animation */}
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" alt="Course selection" style={{width: '100%', borderRadius: '8px'}} />
            <p>Select your course and get started!</p>
          </div>
        </div>
        <div className="step-card learn">
          <h3>Step 2: Learn with Mentors</h3>
          <div className="video-carousel">
            {/* Placeholder for video carousel of instructors */}
            <video controls muted loop className="instructor-video">
              <source src="https://cdn.videvo.net/videvo_files/video/free/2019-11/small_watermarked/191101_04_Drone_01_preview.webm" type="video/webm" />
              <source src="https://cdn.videvo.net/videvo_files/video/free/2019-11/small_watermarked/191101_04_Drone_01_preview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video controls muted loop className="instructor-video">
              <source src="https://cdn.videvo.net/videvo_files/video/free/2019-11/small_watermarked/191101_05_Drone_02_preview.webm" type="video/webm" />
              <source src="https://cdn.videvo.net/videvo_files/video/free/2019-11/small_watermarked/191101_05_Drone_02_preview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="step-card build">
          <h3>Step 3: Build Projects</h3>
          <div className="project-showcase">
            {/* Placeholder for interactive project showcase */}
            <div className="project-card" title="Project 1">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Project 1" style={{width: '100%', borderRadius: '8px'}} />
              <p>Hover to expand</p>
            </div>
            <div className="project-card" title="Project 2">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" alt="Project 2" style={{width: '100%', borderRadius: '8px'}} />
              <p>Hover to expand</p>
            </div>
          </div>
        </div>
        <div className="step-card job">
          <h3>Step 4: Get the Job</h3>
          <div className="success-stories-carousel">
            {/* Placeholder for success stories carousel */}
            <div className="success-story">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile 1" style={{borderRadius: '50%', width: '80px', height: '80px'}} />
              <p>John Doe - Software Engineer at TechCorp</p>
            </div>
            <div className="success-story">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile 2" style={{borderRadius: '50%', width: '80px', height: '80px'}} />
              <p>Jane Smith - Data Analyst at DataWorks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSteps;
