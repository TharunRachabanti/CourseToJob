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
            <img src="https://specials-images.forbesimg.com/imageserve/66827d52a65f2b36f9c14f28/960x0.jpg" alt="Course selection" style={{width: '100%', borderRadius: '8px'}} />
            <p>Select your course and get started!</p>
          </div>
        </div>
        <div className="step-card learn">
          <h3>Step 2: Learn with Mentors</h3>
          <div className="video-carousel">
            {/* YouTube video carousel of instructors */}
            <iframe
              className="instructor-video"
              src="https://www.youtube.com/embed/I2oQuBRNiHs"
              title="Instructor Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="instructor-video"
              src="https://www.youtube.com/embed/I2oQuBRNiHs"
              title="Instructor Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="step-card build">
          <h3>Step 3: Build Projects</h3>
          <div className="project-showcase">
            {/* Placeholder for interactive project showcase */}
            <div className="project-card" title="Project 1">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Project 1" style={{width: '100%', borderRadius: '8px'}} />
              <p>Data Engineer Project</p>
            </div>
            <div className="project-card" title="Project 2">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" alt="Project 2" style={{width: '100%', borderRadius: '8px'}} />
              <p>Software Development</p>
            </div>
          </div>
        </div>
        <div className="step-card realtime">
          <h3>Step 4: Can See Realtime Work</h3>
          <div className="project-showcase">
            <div className="project-card" title="Realtime Project 1">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80" alt="Realtime Project 1" style={{width: '100%', borderRadius: '8px'}} />
              <p>Live Collaboration</p>
            </div>
            <div className="project-card" title="Realtime Project 2">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" alt="Realtime Project 2" style={{width: '100%', borderRadius: '8px'}} />
              <p>Real-time Project Updates</p>
            </div>
          </div>
        </div>
        <div className="step-card job">
          <h3>Step 5: Get the Job</h3>
          <div className="success-stories-carousel">
            {/* Placeholder for success stories carousel */}
            <div className="success-story">
              <img src="https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg" alt="Profile 1" style={{borderRadius: '50%', width: '80px', height: '80px'}} />
              <p>Ajay - Software Engineer at TechCorp</p>
            </div>
            <div className="success-story">
              <img src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg" alt="Profile 2" style={{borderRadius: '50%', width: '80px', height: '80px'}} />
              <p>Venkat - Data Analyst at DataWorks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSteps;
