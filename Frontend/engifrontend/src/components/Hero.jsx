import React from 'react';

function Hero() {
  const handleClick = () => {
    // Scroll down by a specific amount (e.g., 600 pixels)
    window.scrollBy({
      top: 600, // Adjust this value to control the scroll distance
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <div 
      className="relative h-[70vh] mb-10 flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://www.fraserinstitute.org/sites/default/files/field/image/students-high-school_1.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-5xl font-bold">EngiLearn!</h1>
        <p className="text-xl mt-4 tracking-wide">
          (STUDY, COLLABORATE & GROW)
        </p>
        <p className="mt-6 max-w-2xl">
          EngiLearn is dedicated to empowering engineers with top-notch resources 
          and a vibrant community. Dive into our courses, forums, and expert insights 
          to advance your career and passion.
        </p>
        <button 
          className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-500"
          onClick={handleClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
