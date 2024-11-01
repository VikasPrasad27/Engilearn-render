import React from 'react'
import { NavLink } from 'react-router-dom'
function Hack() {
  return (
    <div 
    className="relative h-[80vh] flex flex-col items-center justify-center text-center bg-cover bg-slate-100 bg-center"
    style={{ backgroundImage: "url('https://blog.legaler.com/wp-content/uploads/2015/02/Positively-Futuristic_Header-e1423805233517.jpg')" }}
  >
     <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50 z-0"></div>
    {/* Content */}
    <div className="relative text-white z-10 text-black">
      <h1 className="text-2xl sm:text-5xl font-bold">Join Upcoming Hackathons & Compeditions</h1>

      <p className="mt-6 mx-[10vw] max-w-2xl">
        Get Hands-on experience and enhance your skills by participating in upcoming Hackathons and Compeditions.Dont miss the chance to innovate and collabrote !
      </p>
      <NavLink to='/solve-doubts'>
      <button className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-500">
        JOIN
      </button>
      </NavLink>
    </div>
    <br />
    <div className='relative text-white'>
      <h1 className=" mt-16 text-2xl sm:text-5xl font-bold">SOLVE YOUR DOUBTS & DISCUSS</h1>
      <p className="mt-6 mx-[10vw] max-w-2xl">Join your Branch & Year wise Rooms and Discuss about Question Papers & Solve your Doubts With Other Peers. And Ace Your Exams!</p>
      <NavLink to='/solve-doubts'>
      <button className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-500">
        JOIN
      </button>
      </NavLink>
    </div>
  </div>
  )
}

export default Hack
