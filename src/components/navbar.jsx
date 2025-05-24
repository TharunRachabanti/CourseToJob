import React from 'react';
import '../styles/navbar.css';
import Button from './Button';
import { FaHome, FaBook, FaChalkboardTeacher, FaUsers, FaBriefcase, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          CourseToJob
        </div>
        <ul className="navbar-links">
          <li onClick={() => scrollToSection('hero')}><FaHome /> Home</li>
          <li onClick={() => scrollToSection('courses')}><FaBook /> Courses</li>
          <li onClick={() => scrollToSection('mentorship')}><FaChalkboardTeacher /> Mentorship</li>
          <li onClick={() => scrollToSection('success-stories')}><FaUsers /> Success Stories</li>
          <li onClick={() => scrollToSection('hire')}><FaBriefcase /> Hire from Us</li>
          <li onClick={() => scrollToSection('contact')}><FaEnvelope /> Contact</li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="apply-now-btn">
          Apply Now <FaArrowRight className="arrow-icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
