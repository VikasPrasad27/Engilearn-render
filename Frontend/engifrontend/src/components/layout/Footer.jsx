import React from 'react'
import { Twitter, Github, Linkedin, Youtube } from "lucide-react"
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 relative h-[70vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://img.freepik.com/free-vector/v915-red-blue_53876-174923.jpg')" }}>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center mb-10">
            <img src="https://png.pngtree.com/png-vector/20211202/ourmid/pngtree-education-logo-with-shape-of-student-who-wear-a-orange-hat-png-image_4046738.png" alt="EngiLearn Logo" width={60} height={60} className="mr-2" />
            <h1 className="text-2xl font-bold">EngiLearn</h1>
          </div>
          <h2 className="text-xl font-semibold mb-4">CONTACT US</h2>
          <div className="flex w-full max-w-sm items-center border-4 border-black border-dotted rounded-md space-x-2">
            <input  type="email" placeholder="Input your email" />
            <button  type="submit"><a href="mailto:vikasicem123@gmail.com">
              MAIL
              </a>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 flex md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to='/previous-papers' className="text-gray-600 hover:text-gray-900">PastPapers</Link></li>
              <li><Link to='/youtube-resources' className="text-gray-600 hover:text-gray-900">YoutubeResources</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to='https://vikasportfolio.vercel.app' className="text-gray-600 hover:text-gray-900">About us</Link></li>
              <li><Link to='/' className="text-gray-600 hover:text-gray-900">Contact us</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center border-t mb-6 ">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <span className="text-sm text-gray-500">© EngiLearn, Inc.</span>
          </div>
          <div className="flex space-x-4">
            <Link to="https://github.com/VikasPrasad27" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Github</span>
              <Github className="h-6 w-6" />
            </Link>
            <Link to="https://www.linkedin.com/in/vikas-prasad-47b8642b0/" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
            <h1 className='text-xl sm:text-black text-white md:text-black '>MADE BY:- VIKAS PRASAD</h1>
          </div>
        </div>
      </div>
    </footer>
  )
}