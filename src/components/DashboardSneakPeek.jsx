import React from 'react';
import '../styles/dashboardSneakPeek.css';

const DashboardSneakPeek = () => {
  return (
    <section className="dashboard-sneakpeek-section" id="dashboard-sneakpeek">
      <h2>Dashboard Sneak Peek</h2>
      <div className="dashboard-mockup">
        <img src="https://cdn.dribbble.com/users/123456/screenshots/1234567/dashboard_mockup.png" alt="Dashboard Mockup" style={{width: '100%', borderRadius: '12px'}} />
        <div className="modules">
          <h3>Modules</h3>
          <ul>
            <li>Introduction to Course</li>
            <li>Data Engineering Basics</li>
            <li>Cloud Platforms Overview</li>
            <li>Project Work</li>
            <li>Final Assessment</li>
          </ul>
        </div>
        <div className="mentor-chat">
          <h3>Mentor Chat</h3>
          <div className="chat-box">
            <p><strong>Mentor:</strong> How is your project coming along?</p>
            <p><strong>You:</strong> I am working on the data pipeline module.</p>
          </div>
        </div>
        <div className="certification-progress">
          <h3>Certification Progress</h3>
          <progress value="60" max="100"></progress>
          <p>60% completed</p>
        </div>
        <div className="job-applications">
          <h3>Job Applications</h3>
          <ul>
            <li>Applied: Data Engineer at TechCorp</li>
            <li>Interview Scheduled: Cloud Architect at Cloudify</li>
            <li>Offer Received: Junior Data Analyst at DataWorks</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashboardSneakPeek;
