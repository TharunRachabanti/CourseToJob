import React from 'react';
import '../styles/progressTracker.css';

const steps = [
  { label: 'Course Start', completed: true },
  { label: 'Midway Progress', completed: true },
  { label: 'Project Submission', completed: false },
  { label: 'Interview Preparation', completed: false },
  { label: 'Job Offer', completed: false },
];

const ProgressTracker = () => {
  return (
    <section className="progress-tracker-section" id="progress-tracker">
      <h2>Your Progress</h2>
      <div className="timeline">
        {steps.map((step, index) => (
          <div key={index} className={`timeline-step ${step.completed ? 'completed' : ''}`}>
            <div className="step-circle" />
            <div className="step-label">{step.label}</div>
            {index < steps.length - 1 && <div className="step-line" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgressTracker;
