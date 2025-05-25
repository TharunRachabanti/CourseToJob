import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import Button from './Button';
import { FaHome, FaBook, FaChalkboardTeacher, FaUsers, FaEnvelope, FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const sidebarRef = useRef(null);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      // Navigate to home page with hash using react-router navigate
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setSidebarOpen(false); // close sidebar on link click
      }
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
            CourseToJob
          </div>
        </div>
        <div className="navbar-center">
          <ul className="navbar-links">
            <li onClick={() => scrollToSection('hero')}><FaHome /> Home</li>
            <li onClick={() => scrollToSection('storytelling')}><FaChalkboardTeacher /> Storytelling</li>
            <li onClick={() => scrollToSection('courses')}><FaBook /> Courses</li>
            <li onClick={() => scrollToSection('dashboard-sneakpeek')}><FaUsers /> Dashboard</li>
            <li onClick={() => scrollToSection('testimonials')}><FaUsers /> Testimonials</li>
            <li onClick={() => scrollToSection('contact-us')}><FaEnvelope /> Contact</li>
          </ul>
        </div>
        <div className="navbar-right">
          <button className="apply-now-btn">
            Apply Now <FaArrowRight className="arrow-icon" />
          </button>
          <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle menu">
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      <aside ref={sidebarRef} className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-links">
          <li onClick={() => scrollToSection('hero')}><FaHome /> Home</li>
          <li onClick={() => scrollToSection('storytelling')}><FaChalkboardTeacher /> Storytelling</li>
          <li onClick={() => scrollToSection('courses')}><FaBook /> Courses</li>
          <li onClick={() => scrollToSection('dashboard-sneakpeek')}><FaUsers /> Dashboard</li>
          <li onClick={() => scrollToSection('testimonials')}><FaUsers /> Testimonials</li>
          <li onClick={() => scrollToSection('contact-us')}><FaEnvelope /> Contact</li>
        </ul>
        <button className="apply-now-btn sidebar-apply-btn">
          Apply Now <FaArrowRight className="arrow-icon" />
        </button>
      </aside>
    </>
  );
};

export default Navbar;
