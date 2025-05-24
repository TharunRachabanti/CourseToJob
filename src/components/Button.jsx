import React from 'react';
import '../styles/Button.css';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button className={`btn-gold ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
