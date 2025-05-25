import React from 'react';
import '../styles/dashboardSneakPeek.css';

const DashboardSneakPeek = () => {
  return (
    <section className="dashboard-sneakpeek-section" id="dashboard-sneakpeek">
      <h2>Dashboard Sneak Peek</h2>
      <div className="dashboard-mockup">
        <div className="mockup-image">
          <img
            src="https://img.freepik.com/premium-psd/browser-mockup-customisable_752362-14.jpg"
            alt="Dashboard Mockup"
          />
        </div>

        <div className="info-card modules">
          <h3>Modules</h3>
          <ul>
            <li>Introduction to Course</li>
            <li>Data Engineering Basics</li>
            <li>Cloud Platforms Overview</li>
            <li>Project Work</li>
            <li>Final Assessment</li>
          </ul>
        </div>

        <div className="info-card mentor-chat">
          <h3>Mentor Chat</h3>
          <div className="chat-box">
            <p><strong>Mentor:</strong> How is your project coming along?</p>
            <p><strong>You:</strong> I am working on the data pipeline module.</p>
          </div>
        </div>

        <div className="info-card certification-progress">
          <h3>Certification Progress</h3>
          <progress value="60" max="100"></progress>
          <p>60% completed</p>
        </div>

        <div className="info-card job-applications">
          <h3>Job Applications</h3>
          <ul>
            <li><strong>Applied:</strong> Data Engineer at TechCorp</li>
            <li><strong>Interview:</strong> Cloud Architect at Cloudify</li>
            <li><strong>Offer:</strong> Junior Data Analyst at DataWorks</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashboardSneakPeek;
