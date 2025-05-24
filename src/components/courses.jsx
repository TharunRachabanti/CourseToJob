import React, { useState } from 'react';
import CourseCard from './CourseCard';
import '../styles/courses.css';

const coursesByCategory = {
  "GenAI": [
    { title: "Generative AI & AI Agents Career Track", duration: "6 Weeks", careerPath: "GenAI Engineer", syllabusSummary: "Learn generative AI concepts and AI agent development.", category: "GenAI" },
    { title: "Vibe Coding using GenAI", duration: "4 Weeks", careerPath: "GenAI Developer", syllabusSummary: "Hands-on coding with generative AI tools.", category: "GenAI" },
    { title: "Generative AI Engineer", duration: "5 Weeks", careerPath: "GenAI Engineer", syllabusSummary: "Build and deploy generative AI models.", category: "GenAI" },
    { title: "Generative AI & Machine Learning Engineer", duration: "6 Weeks", careerPath: "ML Engineer", syllabusSummary: "Combine generative AI with machine learning techniques.", category: "GenAI" },
    { title: "AI Agent Development", duration: "5 Weeks", careerPath: "AI Agent Developer", syllabusSummary: "Develop intelligent AI agents.", category: "GenAI" },
    { title: "Data Science With GenAI Interview Prep", duration: "3 Weeks", careerPath: "Data Scientist", syllabusSummary: "Prepare for data science interviews with GenAI focus.", category: "GenAI" },
  ],
  "Cloud": [
    { title: "Aws Solutions Architect (SAA-C03)", duration: "6 Weeks", careerPath: "AWS Solutions Architect", syllabusSummary: "Design and deploy scalable systems on AWS.", category: "Cloud" },
    { title: "Google Cloud Architect", duration: "5 Weeks", careerPath: "Google Cloud Architect", syllabusSummary: "Architect solutions on Google Cloud Platform.", category: "Cloud" },
    { title: "Multi-cloud & Devops Interview Prep", duration: "4 Weeks", careerPath: "Cloud Engineer", syllabusSummary: "Prepare for multi-cloud and DevOps interviews.", category: "Cloud" },
    { title: "Splunk SIEM Security", duration: "4 Weeks", careerPath: "Security Engineer", syllabusSummary: "Learn Splunk SIEM for security monitoring.", category: "Cloud" },
    { title: "Microsoft Azure Fundamentals Certification (AZ-900)", duration: "3 Weeks", careerPath: "Azure Engineer", syllabusSummary: "Fundamentals of Microsoft Azure.", category: "Cloud" },
    { title: "Microsoft Azure Career Track", duration: "6 Weeks", careerPath: "Azure Engineer", syllabusSummary: "Comprehensive Azure career preparation.", category: "Cloud" },
  ],
  "DevOps": [
    { title: "Aws & Devops Engineer", duration: "6 Weeks", careerPath: "DevOps Engineer", syllabusSummary: "AWS and DevOps tools and practices.", category: "DevOps" },
    { title: "Certified Kubernetes Administrator", duration: "5 Weeks", careerPath: "Kubernetes Administrator", syllabusSummary: "Manage Kubernetes clusters.", category: "DevOps" },
    { title: "Docker Certified Associate", duration: "4 Weeks", careerPath: "Docker Engineer", syllabusSummary: "Docker containerization and orchestration.", category: "DevOps" },
    { title: "Devops Engineer", duration: "6 Weeks", careerPath: "DevOps Engineer", syllabusSummary: "End-to-end DevOps practices.", category: "DevOps" },
  ],
  "Data Engineer": [
    { title: "Snowflake Developer", duration: "4 Weeks", careerPath: "Snowflake Developer", syllabusSummary: "Develop data solutions using Snowflake.", category: "Data Engineer" },
    { title: "Oracle", duration: "5 Weeks", careerPath: "Oracle Developer", syllabusSummary: "Oracle database development and management.", category: "Data Engineer" },
    { title: "SQL Developer", duration: "4 Weeks", careerPath: "SQL Developer", syllabusSummary: "SQL programming and database design.", category: "Data Engineer" },
    { title: "AWS Data Engineer", duration: "6 Weeks", careerPath: "AWS Data Engineer", syllabusSummary: "Data engineering on AWS platform.", category: "Data Engineer" },
  ],
};

const mainHeadings = Object.keys(coursesByCategory);

const Courses = () => {
  const [selectedHeading, setSelectedHeading] = useState("Data Engineer");

  const handleFilterClick = (heading) => {
    setSelectedHeading(heading);
  };

  // Show courses for selectedHeading
  const displayHeading = selectedHeading;

  return (
    <div className="courses-section" id="courses">
      <h2>Explore Our Courses</h2>
      <div className="main-heading-filters">
        {mainHeadings.map(heading => (
          <button
            key={heading}
            className={`filter-button${selectedHeading === heading ? ' active' : ''}`}
            onClick={() => handleFilterClick(heading)}
          >
            {heading}
          </button>
        ))}
      </div>
      <div className="course-cards-container">
        {coursesByCategory[displayHeading].map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;