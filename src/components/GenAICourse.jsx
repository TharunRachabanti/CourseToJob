
import React, { useEffect, useRef } from 'react';
import '../styles/genai.css';

const GenAICourse = () => {
  // Array of 10 courses with dummy data
  const courses = [
    {
      title: "Microsoft Azure Data Engineer Associate (DP-700)",
      duration: "4 Weeks",
      students: "5.5K Students Enrolled",
      sessionType: "Instructor-Led Live Sessions",
      originalPrice: "₹65000",
      discountedPrice: "₹6500",
      badge: "Azure Data Engineer",
      live: true,
    },
    {
      title: "AWS Certified Solutions Architect (SAA-C03)",
      duration: "6 Weeks",
      students: "8K Students Enrolled",
      sessionType: "Instructor-Led Live Sessions",
      originalPrice: "₹70000",
      discountedPrice: "₹7000",
      badge: "AWS Solutions",
      live: true,
    },
    {
      title: "Google Cloud Data Engineer Professional",
      duration: "5 Weeks",
      students: "6.2K Students Enrolled",
      sessionType: "Instructor-Led Live Sessions",
      originalPrice: "₹68000",
      discountedPrice: "₹6800",
      badge: "GCP Data Engineer",
      live: false,
    },
    {
      title: "Snowflake Data Platform Certification",
      duration: "3 Weeks",
      students: "4.8K Students Enrolled",
      sessionType: "Self-Paced Learning",
      originalPrice: "₹55000",
      discountedPrice: "₹5500",
      badge: "Snowflake Expert",
      live: false,
    },
    {
      title: "Databricks Certified Data Engineer",
      duration: "4 Weeks",
      students: "7K Students Enrolled",
      sessionType: "Instructor-Led Live Sessions",
      originalPrice: "₹72000",
      discountedPrice: "₹7200",
      badge: "Databricks Pro",
      live: true,
    },
    {
      title: "Microsoft Power BI Data Analyst (PL-300)",
      duration: "5 Weeks",
      students: "5K Students Enrolled",
      sessionType: "Instructor-Led Live Sessions",
      originalPrice: "₹60000",
      discountedPrice: "₹6000",
      badge: "Power BI Analyst",
      live: true,
    },
    {
      title: "Tableau Desktop Specialist Certification",
      duration: "3 Weeks",
      students: "4.2K Students Enrolled",
      sessionType: "Self-Paced Learning",
      originalPrice: "₹50000",
      discountedPrice: "₹5000",
      badge: "Tableau Specialist",
      live: false,
    },
    {
      title: "Big Data Hadoop and Spark Developer",
      duration: "6 Weeks",
      students: "9K Students Enrolled",
      sessionType: "Instructor-Led Live Sessions",
      originalPrice: "₹75000",
      discountedPrice: "₹7500",
      badge: "Big Data Expert",
      live: true,
    },
    {
      title: "Python for Data Science and AI",
      duration: "4 Weeks",
      students: "6.5K Students Enrolled",
      sessionType: "Instructor-Led Live Sessions",
      originalPrice: "₹62000",
      discountedPrice: "₹6200",
      badge: "Python AI",
      live: true,
    },
    {
      title: "Machine Learning with TensorFlow",
      duration: "5 Weeks",
      students: "7.5K Students Enrolled",
      sessionType: "Self-Paced Learning",
      originalPrice: "₹67000",
      discountedPrice: "₹6700",
      badge: "ML TensorFlow",
      live: false,
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 20;

    const scroll = () => {
      if (container) {
        scrollAmount += scrollStep;
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }
        container.scrollLeft = scrollAmount;
      }
    };

    const intervalId = setInterval(scroll, scrollInterval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="genai-course" className="course-container1">
      <h1 className="course-title">Gen AI Course</h1>
      <p className="course-description">
        Welcome to the Gen AI Course! In this course, you'll learn about the fundamentals of Generative AI,
        including models, applications, and hands-on projects to build AI-powered solutions.
      </p>
      <div className="course-cards-container" ref={containerRef}>
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="card-header">
              {course.live && <span className="live-badge">LIVE CLASSES</span>}
              <span className="badge-text">{course.badge}</span>
            </div>
            <div className="card-body">
              <h3 className="card-title">{course.title}</h3>
              <div className="card-info">
                <div className="info-item">
                  <span className="icon">🕒</span>
                  <span>{course.duration}</span>
                </div>
                <div className="info-item">
                  <span className="icon">👥</span>
                  <span>{course.students}</span>
                </div>
                <div className="info-item">
                  <span className="icon">📡</span>
                  <span>{course.sessionType}</span>
                </div>
              </div>
              <div className="card-footer">
                <div className="price-section">
                  <span className="fees-label">FEES</span>
                  <span className="original-price">{course.originalPrice}</span>
                  <span className="discounted-price">{course.discountedPrice}</span>
                </div>
                <button className="know-more-btn">KNOW MORE</button>
              </div>
            </div>
            <div className="ribbon">
              <span>E</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenAICourse;