import React, { useState } from 'react';
import '../styles/CourseCard.css';

const CourseCard = ({ course }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`course-card${flipped ? ' flipped' : ''}`} onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
      <div className="card-inner">
        <div className="card-front">
          <div className="course-title">{course.title}</div>
          <div className="course-duration">Time to complete: {course.duration}</div>
        </div>
        <div className="card-back">
          <div className="course-description">
            {course.syllabusSummary}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
