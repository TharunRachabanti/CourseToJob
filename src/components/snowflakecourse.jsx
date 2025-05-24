import React from 'react';
import '../styles/snowflakecourse.css';

const SnowflakeCourse = () => {
  return (
    <div id="snowflake-course" className="course-container">
      <h1 className="course-title">Snowflake Course</h1>
      <p className="course-description">
        Welcome to the Snowflake Course! In this course, you'll learn how to work with the Snowflake
        data platform, including data warehousing concepts, cloud integration, SQL development,
        performance tuning, and advanced analytics.
        <br /><br />
        This course is designed for data engineers, analysts, and developers who want to build scalable, cloud-native data solutions.
      </p>
    </div>
  );
};

export default SnowflakeCourse;
