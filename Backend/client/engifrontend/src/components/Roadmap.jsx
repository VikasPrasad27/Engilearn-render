import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function Roadmap() {
  const [activeTab, setActiveTab] = useState('interview')

  const interviewResources = [
    { title: "DSA", href: "https://lnkd.in/gJ_uFnYi" },
    { title: "Operating System", href: "https://lnkd.in/gfWSeh3g" },
    { title: "Computer Networks", href: "https://lnkd.in/gJeJVzsP" },
    { title: "DBMS", href: "https://lnkd.in/gCTbAJy7" },
    { title: "Competitive Programming", href: "https://lnkd.in/gM3pjQAx" },
    { title: "System Design", href: "https://lnkd.in/g9HGiAvk" },
    { title: "Aptitude", href: "https://lnkd.in/g3F9GAvs" }
  ]

  const developerResources = [
    { title: "Frontend Developer", href: "https://lnkd.in/gSu2thDB" },
    { title: "MERN Stack", href: "https://lnkd.in/gZQpQZUQ" },
    { title: "Java Developer", href: "https://lnkd.in/gRAs-n6p" },
    { title: "C Developer", href: "https://lnkd.in/gTX4cJrB" },
    { title: "C++ Developer", href: "https://lnkd.in/gKCBdseM" },
    { title: "Python Developer", href: "https://lnkd.in/gVirMqGZ" },
    { title: "Javascript Developer", href: "https://lnkd.in/gWxrdQyE" },
    { title: "React Developer", href: "https://lnkd.in/gasXyX6V" },
    { title: "Flutter Developer", href: "https://lnkd.in/gmJgf3ma" },
    { title: "Angular Developer", href: "https://lnkd.in/gXrvfjuH" },
    { title: "Typescript Developer", href: "https://lnkd.in/gNYtKVrR" },
    { title: "Node Js Developer", href: "https://lnkd.in/gYHqW2xr" },
    { title: "React Native Developer", href: "https://lnkd.in/gT8QTEGd" },
    { title: "Android Developer", href: "https://lnkd.in/gvuDCbzJ" },
    { title: "MongoDB", href: "https://lnkd.in/gZ_8KhpD" },
    { title: "DevOps", href: "https://lnkd.in/gViv4sbW" },
    { title: "AWS", href: "https://lnkd.in/gtyrDBYs" }
  ]

  const dataResources = [
    { title: "Data Analyst", href: "https://lnkd.in/gTjmxXeK" },
    { title: "Data Engineer", href: "https://lnkd.in/gKtrSJVi" },
    { title: "Machine Learning", href: "https://lnkd.in/gzF6QsWs" },
    { title: "Data Science", href: "https://lnkd.in/gfm8mnxm" },
    { title: "Deep Learning", href: "https://lnkd.in/gB--xgsj" },
    { title: "SQL", href: "https://lnkd.in/gAJiAf2Q" }
  ]

  const otherResources = [
    { title: "Software Testing", href: "https://lnkd.in/g7GtGzuZ" },
    { title: "QA Engineer", href: "https://lnkd.in/g7G67kcE" },
    { title: "Cyber Security", href: "https://lnkd.in/gSMmJ5MF" },
    { title: "Software Architect", href: "https://lnkd.in/ge_tTppc" },
    { title: "Prompt Engineer", href: "https://lnkd.in/gevm62uM" },
    { title: "Cloud Computing", href: "https://lnkd.in/gJ_b37qc" }
  ]

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Learning Roadmaps</h1>
        <p className="text-gray-600">Comprehensive guides and resources for different tech career paths</p>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {['interview', 'developer', 'data', 'other'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        {activeTab === 'interview' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Software Engineering Interview Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {interviewResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  className="p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                >
                  {resource.title}
                </a>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'developer' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Developer Role Resources</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {developerResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  className="p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                >
                  {resource.title}
                </a>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'data' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Data Role Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {dataResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  className="p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                >
                  {resource.title}
                </a>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'other' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Other Tech Role Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {otherResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  className="p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                >
                  {resource.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <NavLink to='/aibot' className="fixed bottom-4 right-4 z-50 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out">
            <img
              src="https://st5.depositphotos.com/4226061/73051/v/450/depositphotos_730516270-stock-illustration-robot-head-speech-bubble-blue.jpg?height=96&width=96"
              alt="Floating Logo"
              width={96}
              height={96}
              className="w-12 h-12 md:w-20 md:h-20 object-cover"
            />
          </NavLink>
    </div>
  )
}