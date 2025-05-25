import React, { useState } from 'react';
import CourseCard from './CourseCard';
import '../styles/courses.css';

const coursesByCategory = {
  "Data Engineer": [
  {
    title: "Snowflake Developer",
    duration: "4 Weeks",
    careerPath: "Snowflake Developer",
    syllabusSummary: "Learn how to design, develop, and manage scalable data solutions using Snowflake's cloud-based data platform. Master data warehousing, SQL scripting, and performance tuning.",
    category: "Data Engineer",
    image: "/assets/snowflake2.png",
    studentCount: "1200+"
  },
  {
    title: "Oracle",
    duration: "5 Weeks",
    careerPath: "Oracle Developer",
    syllabusSummary: "Understand Oracle database architecture and learn to build, manage, and optimize Oracle-based applications using SQL and PL/SQL.",
    category: "Data Engineer",
    image: "/assets/oracle3.jpg",
    studentCount: "950+"
  },
  {
    title: "Informatica IICS",
    duration: "5 Weeks",
    careerPath: "Informatica Developer",
    syllabusSummary: "Get hands-on experience with Informatica Intelligent Cloud Services (IICS) for cloud-based data integration, transformation, and migration.",
    category: "Data Engineer",
    image: "/assets/iics.jpg",
    studentCount: "1100+"
  },
  {
    title: "Informatica Power Center",
    duration: "6 Weeks",
    careerPath: "Informatica Developer",
    syllabusSummary: "Master ETL (Extract, Transform, Load) processes using Informatica Power Center and automate enterprise data workflows.",
    category: "Data Engineer",
    image: "/assets/powercenter3.webp",
    studentCount: "800+"
  },
  {
    title: "DBT",
    duration: "4 Weeks",
    careerPath: "Data Engineer",
    syllabusSummary: "Learn DBT (Data Build Tool) to transform raw data into structured insights using modern SQL-based modeling techniques.",
    category: "Data Engineer",
    image: "/assets/dbt1.webp",
    studentCount: "700+"
  },
  {
    title: "AWS Data Engineer",
    duration: "6 Weeks",
    careerPath: "AWS Data Engineer",
    syllabusSummary: "Build, deploy, and manage data pipelines on the AWS cloud platform using tools like S3, Redshift, Glue, and Lambda.",
    category: "Data Engineer",
    image: "/assets/awsde1.jpg",
    studentCount: "1300+"
  },
],

  
 "GenAI": [
  {
    title: "Generative AI & AI Agents Career Track",
    duration: "6 Weeks",
    careerPath: "GenAI Engineer",
    syllabusSummary: "Explore generative AI models like GPT and learn to build intelligent AI agents that interact, reason, and perform tasks autonomously.",
    category: "GenAI",
    image: "/assets/gen5.webp",
    studentCount: "1400+"
  },
  {
    title: "Vibe Coding using GenAI",
    duration: "4 Weeks",
    careerPath: "GenAI Developer",
    syllabusSummary: "Boost your coding productivity by learning how to use GenAI tools like GitHub Copilot and CodeWhisperer for real-time code generation and debugging.",
    category: "GenAI",
    image: "/assets/gen2.webp",
    studentCount: "900+"
  },
  {
    title: "Generative AI Engineer",
    duration: "5 Weeks",
    careerPath: "GenAI Engineer",
    syllabusSummary: "Understand the architecture behind generative AI models and learn how to train, fine-tune, and deploy them in production applications.",
    category: "GenAI",
    image: "/assets/gen3.webp",
    studentCount: "1000+"
  },
  {
    title: "Generative AI & Machine Learning Engineer",
    duration: "6 Weeks",
    careerPath: "ML Engineer",
    syllabusSummary: "Bridge traditional ML with generative models and learn hybrid AI workflows for smarter, more creative solutions.",
    category: "GenAI",
    image: "/assets/gen4.webp",
    studentCount: "1100+"
  },
  {
    title: "AI Agent Development",
    duration: "5 Weeks",
    careerPath: "AI Agent Developer",
    syllabusSummary: "Design and develop AI agents capable of decision-making, conversation, and automation using LLMs and prompt engineering.",
    category: "GenAI",
    image: "/assets/gen5.webp",
    studentCount: "850+"
  },
  {
    title: "Data Science With GenAI Interview Prep",
    duration: "3 Weeks",
    careerPath: "Data Scientist",
    syllabusSummary: "Prepare for data science interviews with a special focus on GenAI trends, practical applications, and prompt-based problem solving.",
    category: "GenAI",
    image: "/assets/gen6.jpg",
    studentCount: "750+"
  },
],

  "Cloud": [
  {
    title: "AWS Beginner to Advanced",
    duration: "8 Weeks",
    careerPath: "AWS Cloud Engineer",
    syllabusSummary: "Become an AWS pro by mastering EC2, S3, Lambda, IAM, and architecture best practices from the ground up.",
    category: "Cloud",
    image: "/assets/aws1.png",
    studentCount: "1200+"
  },
  {
    title: "GCP Professional Architect",
    duration: "7 Weeks",
    careerPath: "Google Cloud Architect",
    syllabusSummary: "Gain expert-level skills in Google Cloud Platform (GCP) services, design scalable systems, and prepare for certification.",
    category: "Cloud",
    image: "/assets/gcp1.png",
    studentCount: "900+"
  },
  {
    title: "Azure Fundamentals and Advanced",
    duration: "8 Weeks",
    careerPath: "Azure Cloud Engineer",
    syllabusSummary: "Master core and advanced services in Microsoft Azure including storage, compute, networking, and DevOps tools.",
    category: "Cloud",
    image: "/assets/azure1.jpg",
    studentCount: "1000+"
  },
],

  "Programming": [
  {
    title: "Java Full Stack Developer",
    duration: "12 Weeks",
    careerPath: "Full Stack Developer",
    syllabusSummary: "Full-stack development using Java, Spring Boot, Hibernate, and modern front-end tools like React and REST APIs.",
    category: "Programming",
    image: "/assets/java1.jpg",
    studentCount: "1300+"
  },
  {
    title: "Python Developer",
    duration: "10 Weeks",
    careerPath: "Python Developer",
    syllabusSummary: "Master Python programming from core syntax to frameworks like Django and Flask, plus real-world project development.",
    category: "Programming",
    image: "/assets/python1.png",
    studentCount: "1100+"
  },
  {
    title: "JavaScript Developer",
    duration: "8 Weeks",
    careerPath: "JavaScript Developer",
    syllabusSummary: "Become proficient in JavaScript, ES6+, Node.js, and modern frameworks like React or Vue to build full-stack apps.",
    category: "Programming",
    image: "/assets/javascript1.png",
    studentCount: "1200+"
  },
],

 "Digital Marketing": [
  {
    title: "Digital Marketing Fundamentals",
    duration: "6 Weeks",
    careerPath: "Digital Marketer",
    syllabusSummary: "Learn the core concepts of digital marketing including SEO, SEM, email marketing, and analytics tracking tools.",
    category: "Digital Marketing",
    image: "/assets/dm1.png",
    studentCount: "900+"
  },
  {
    title: "Content Marketing Strategy",
    duration: "4 Weeks",
    careerPath: "Content Marketer",
    syllabusSummary: "Craft impactful content strategies, develop content calendars, and learn to drive traffic and engagement organically.",
    category: "Digital Marketing",
    image: "/assets/dm2.jpg",
    studentCount: "800+"
  },
  {
    title: "Social Media Marketing",
    duration: "5 Weeks",
    careerPath: "Social Media Manager",
    syllabusSummary: "Master content planning, audience targeting, paid campaigns, and analytics across social platforms like Instagram, LinkedIn, and Facebook.",
    category: "Digital Marketing",
    image: "/assets/dm3.jpg",
    studentCount: "1000+"
  },
],

};

const mainHeadings = Object.keys(coursesByCategory);

const Courses = () => {
  const [selectedHeading, setSelectedHeading] = useState("Data Engineer");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterClick = (heading) => {
    setSelectedHeading(heading);
    setIsExpanded(false); // Reset expansion on category change
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Show courses for selectedHeading
  const displayHeading = selectedHeading;

  // Limit number of cards when collapsed
  const maxVisibleCards = 4;
  const coursesToShow = isExpanded ? coursesByCategory[displayHeading] : coursesByCategory[displayHeading].slice(0, maxVisibleCards);

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
      <div className="course-cards-container" data-expanded={isExpanded}>
        {coursesToShow.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      {coursesByCategory[displayHeading].length > maxVisibleCards && (
        <button className="toggle-button" onClick={toggleExpand} aria-label={isExpanded ? "Show less courses" : "Show more courses"}>
          {isExpanded ? '▲ Show Less' : '▼ Show More'}
        </button>
      )}
    </div>
  );
};

export default Courses;
