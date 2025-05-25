import React from 'react';
import '../styles/CourseCard.css';
import Button from './Button';

const CourseCard = ({ course }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* FRONT SIDE */}
        <div className="flip-card-front">
          <img src={course.image || "/assets/bgimg10.png"} alt="Course" className="card-img" /> {/* Use dynamic image if available */}
          <div className="card-front-content">
            <h3>{course.title}</h3>
            <p>👥 {course.studentCount || "1200+"} students enrolled</p> {/* Use dynamic student count */}
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="flip-card-back">
          <div className="card-back-content">
            <p>{course.syllabusSummary}</p>
            <p className="price">💰 ₹9,999</p> {/* You can replace this with course.price if it exists */}
            <Button>Enroll Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
