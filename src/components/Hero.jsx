import React, { useEffect, useRef } from 'react';
import '../styles/hero.css';
import Button from './Button';
import BrandCard from './BrandCard';

const brands = [
  
  { name: 'Brand A', logo: '/assets/bgimg10.png' },
  { name: 'Brand B', logo: '/assets/bgimg9.png' },
  { name: 'Brand C', logo: '/assets/bgimg3.png' },
  { name: 'Brand D', logo: '/assets/bgimg8.png' },
  { name: 'Brand E', logo: '/assets/bgimg13.png' },
  { name: 'Brand F', logo: '/assets/bgimg11.png' },
];

const Hero = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollStep = 1; // pixels per frame

    let animationFrameId;

    const scrollStepFunction = () => {
      if (scrollContainer) {
        scrollAmount += scrollStep;
        // Reset scroll when reaching the end minus visible width
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
        animationFrameId = requestAnimationFrame(scrollStepFunction);
      }
    };

    animationFrameId = requestAnimationFrame(scrollStepFunction);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="hero-section" id="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/assets/bgvd6.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay" />
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1 className="hero-tagline">
            <span className="animated-text">From Learning to Earning – We Guarantee It.</span>
          </h1>
          <div className="hero-buttons">
            <Button onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}>
              Explore Courses
            </Button>
            <Button onClick={() => alert('Get Job Guaranteed Plan coming soon!')}>
              Get Job Guaranteed Plan
            </Button>
          </div>
        </div>
      </div>
      <div className="brand-scroll-container" ref={scrollRef}>
        <div className="brand-scroll-content">
          {brands.concat(brands).map((brand, index) => (
            <BrandCard key={index} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
