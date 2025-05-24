import React from 'react';
import '../styles/testimonials.css';

const testimonials = [
  {
    avatar: '/assets/avatar1.jpg',
    quote: "CourseToJob helped me land my dream job in just 6 months!",
    name: "Alice Johnson",
    title: "Software Engineer",
    companyLogo: "/assets/company1.png",
  },
  {
    avatar: '/assets/avatar2.jpg',
    quote: "The mentorship and projects were invaluable for my career growth.",
    name: "Bob Smith",
    title: "Data Analyst",
    companyLogo: "/assets/company2.png",
  },
  {
    avatar: '/assets/avatar3.png',
    quote: "I highly recommend CourseToJob for anyone serious about tech careers.",
    name: "Carol Lee",
    title: "Cloud Architect",
    companyLogo: "/assets/company3.png",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2>What Our Learners Say</h2>
      <div className="testimonials-container">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-bubble">
            <div className="avatar-3d">
              <img src={t.avatar} alt={`${t.name} avatar`} />
            </div>
            <p className="quote">"{t.quote}"</p>
            <p className="name">{t.name}</p>
            <p className="title">{t.title}</p>
            <img src={t.companyLogo} alt="Company logo" className="company-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
