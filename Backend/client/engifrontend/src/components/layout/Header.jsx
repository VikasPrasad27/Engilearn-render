import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../store/auth';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const {isLoggedIn}=useAuth();
  return (
    <div className='bg-slate-100 shadow-md w-full lg:flex lg:justify-between'>
      <div className='h-16 flex items-center justify-between px-4 lg:px-10'>
        {/* Logo Section */}
        <NavLink to='/'>
          <h1 className='flex text-center justify-center items-center gap-2 text-2xl italic font-bold'>
            <img 
              src="https://png.pngtree.com/png-vector/20211202/ourmid/pngtree-education-logo-with-shape-of-student-who-wear-a-orange-hat-png-image_4046738.png" 
              alt='Logo' 
              className='h-10' 
            />
            EngiLearn
          </h1>
        </NavLink>
        
        {/* Hamburger for mobile/tablet */}
        <button 
          className='lg:hidden p-2 rounded-md focus:outline-none' 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Navigation Section */}
      <nav className={`${isOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center bg-slate-100 w-full lg:w-auto`}>
        <ul className='flex flex-col lg:flex-row gap-4 text-gray-700 w-full lg:w-auto'>
          <NavLink 
            to='/' 
            className={({ isActive }) => isActive ? "nav-link active font-bold text-blue-600" : "nav-link hover:text-blue-600"} 
            onClick={() => setIsOpen(false)}
          >
            <li className='p-2 lg:p-0'>Resources</li>
          </NavLink>
          <NavLink 
            to='/previous-papers' 
            className="nav-link hover:text-blue-600" 
            onClick={() => setIsOpen(false)}
          >
            <li className='p-2 lg:p-0'>Previous Year Papers</li>
          </NavLink>
          <NavLink 
            to='/solve-doubts' 
            className="nav-link hover:text-blue-600" 
            onClick={() => setIsOpen(false)}
          >
            <li className='p-2 lg:p-0'>Solve Doubts</li>
          </NavLink>
          <NavLink 
            to='/youtube-resources' 
            className="nav-link hover:text-blue-600" 
            onClick={() => setIsOpen(false)}
          >
            <li className='p-2 lg:p-0'>Youtube Res</li>
          </NavLink>
          <NavLink 
            to='/roadmaps' 
            className="nav-link hover:text-blue-600" 
            onClick={() => setIsOpen(false)}
          >
            <li className='p-2 lg:p-0'>Roadmaps</li>
          </NavLink>
        </ul>

        {/* AI Bot Button */}
        <div className='flex flex-col lg:flex-row gap-2 lg:ml-6 w-full lg:w-auto p-2 lg:p-0'>
          {/* <NavLink 
            to="/aibot" 
            className="inline-flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md text-sm"
            onClick={() => setIsOpen(false)}
          >
            <img 
              src="https://st5.depositphotos.com/4226061/73051/v/450/depositphotos_730516270-stock-illustration-robot-head-speech-bubble-blue.jpg" 
              alt="aibot" 
              width={34} 
              height={34} 
              className="w-6 h-6 rounded-full mr-2 object-cover" 
            />
            AI Bot
          </NavLink> */}
           <NavLink 
            to="/internship" 
            className="inline-flex items-center justify-center text-white bg-orange-500 hover:bg-blue-600 px-3 py-1 rounded-md text-sm"
            onClick={() => setIsOpen(false)}
          >
            StartupJobs
          </NavLink>
          {isLoggedIn ?(
              <NavLink
              to="/logout"
               className="inline-flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md text-sm"
              >
              Logout
              </NavLink>
          ):(
            <>
             <NavLink 
            to="/register" 
            className="inline-flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md text-sm"
            onClick={() => setIsOpen(false)}
          >
            Register
          </NavLink>
        
          <NavLink 
            to="/login" 
            className="inline-flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md text-sm"
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
            </>
          )}
           
        </div>
      </nav>
    </div>
  );
}

export default Header;
