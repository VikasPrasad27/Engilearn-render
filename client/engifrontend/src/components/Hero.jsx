import React from 'react';
import { useAuth } from '../store/auth';

function Hero() {
  

  const handleClick = () => {
    // Scroll down by a specific amount (e.g., 600 pixels)
    window.scrollBy({
      top: 600, // Adjust this value to control the scroll distance
      behavior: 'smooth', // Smooth scroll
    });
  };
  const {user} = useAuth();
  return (
    <>
      <p className='mb-6 text-xl font-bold'>Welcome {user.name}  to Engilearn!</p>
      <div 
      className="relative h-[70vh] mb-10 flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://th.bing.com/th/id/R.89fedf20f92fb1d51465d8f3942488ee?rik=7mJ0njmWyTE4qA&riu=http%3a%2f%2fwww.thinkingdimensions.com%2fhubfs%2fimg%2fBlog_Photos%2fGlobalCollaboration.jpg%23keepProtocol&ehk=eojNLm6e%2fHGxUxblIP1gyJzqLtgPV90uXTeugXNqlaE%3d&risl=&pid=ImgRaw&r=0')" }}
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
    </>
   
  );
}

export default Hero;
