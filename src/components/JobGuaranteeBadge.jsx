import React from 'react';
import '../styles/jobGuaranteeBadge.css';

const JobGuaranteeBadge = () => {
  return (
    <div className="job-guarantee-badge" title="100% Job Guarantee - or full refund">
      <div className="badge-content">
        <span role="img" aria-label="badge">🏅</span>
        <span>Job Guarantee</span>
      </div>
    </div>
  );
};

export default JobGuaranteeBadge;
