import React from 'react';
import '../styles/footer.css';

const coursesList = [
  "Snowflake",
  "Gen AI",
  "Oracle",
  "Java",
  "Python",
  "Storytelling",
  "Data Engineering",
  "Cloud Architect",
  "Software Engineering",
  "Data Analysis",
];

const Footer = () => {
  return (
    <footer className="footer-section">
      <video autoPlay muted loop className="footer-video-bg" aria-hidden="true">
        <source src="/assets/video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="footer-overlay" />
      <div className="footer-container">
        <div className="footer-about">
          <h3>About CourseToJob</h3>
          <p>
            CourseToJob is dedicated to helping you achieve your career goals with expert-led courses, mentorship, and real-world projects.
          </p>
        </div>
        <div className="footer-courses">
          <h3>Our Courses</h3>
          <ul>
            {coursesList.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@coursetojob.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Learning St, Education City, USA</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon facebook">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="32" height="32" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon twitter">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="32" height="32" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon linkedin">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQX30xLHQLHB04xcgSlGqQA9BsUmcjEj0dkFll9Peso6rWLMIGyeygAzeNqXqgiSEcfJM&usqp=CAU" alt="LinkedIn" width="32" height="32" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon instagram">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" width="32" height="32" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CourseToJob. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
