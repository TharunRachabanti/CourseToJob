import React, { useState, useEffect } from 'react';
import '../styles/darkLightToggle.css';

const DarkLightToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle dark/light mode">
      {darkMode ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default DarkLightToggle;
