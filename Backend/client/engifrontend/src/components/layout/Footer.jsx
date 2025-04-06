import React from 'react'
import { Github, Linkedin } from "lucide-react"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer 
      className="relative h-[70vh] flex flex-col items-center justify-center text-center bg-cover bg-center text-black" 
      style={{ backgroundImage: "url('https://img.freepik.com/free-vector/v915-red-blue_53876-174923.jpg')" }}
    >
      <div className="absolute inset-0 text-black"></div> {/* Dark overlay for readability */}

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-12">
        {/* Logo and Contact Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center mb-6">
            <img 
              src="https://png.pngtree.com/png-vector/20211202/ourmid/pngtree-education-logo-with-shape-of-student-who-wear-a-orange-hat-png-image_4046738.png" 
              alt="EngiLearn Logo" 
              width={60} 
              height={60} 
              className="mr-2"
            />
            <h1 className="text-3xl font-bold text-black">EngiLearn</h1>
          </div>

          <h2 className="text-lg font-semibold mb-4">CONTACT US</h2>
          <div className="flex w-full max-w-md items-center bg-white rounded-md overflow-hidden border-2 border-gray-300 shadow-lg">
            <input  
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 text-black outline-none"
            />
            <a 
              href="mailto:vikasicem123@gmail.com" 
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-black font-semibold"
            >
              MAIL
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-500">
          <div>
            <h3 className="text-lg font-semibold text-black mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link to='/previous-papers' className="hover:text-blue-300">Past Papers</Link></li>
              <li><Link to='/youtube-resources' className="hover:text-blue-300">YouTube Resources</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link to='https://vikasprasad-portfolio.vercel.app/' className="hover:text-blue-300">About Us</Link></li>
              <li><Link to='/' className="hover:text-blue-300">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center border-t border-gray-500 pt-6">
          <span className="text-sm text-gray-600">© 2025 EngiLearn, Inc. All Rights Reserved.</span>
          
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link to="https://github.com/VikasPrasad27" className="text-gray-400 hover:text-white">
              <Github className="h-6 w-6" />
            </Link>
            <Link to="https://www.linkedin.com/in/vikas-prasad-47b8642b0/" className="text-gray-400 hover:text-white">
              <Linkedin className="h-6 w-6" />
            </Link>
            
          </div>
        </div>

        {/* Developer Credit */}
        <div className="mt-6 text-white text-sm font-semibold">
          Designed & Developed by: <span className="text-blue-400">VIKAS PRASAD</span>
        </div>
      </div>
    </footer>
  )
}
