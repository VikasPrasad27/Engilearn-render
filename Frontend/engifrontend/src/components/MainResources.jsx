import React from 'react'
import { NavLink } from 'react-router-dom'
import PreviousYearPapers from './PreviousYearPapers'
import Compeditions from './Compeditions'
import Hero from './Hero'
import Hack from './Hack'
import './MainResources.css'

function MainResources() {
    const resources = [
        {
          title: 'Previous Year Papers',
          description: 'Access a comprehensive collection of past exam papers to help you prepare effectively for your engineering exams.',
          img: 'https://images.shiksha.com/mediadata/images/articles/1608125651phpB8j4et.jpeg?height=200&width=300',
          to:'/previous-papers',
        },
        {
          title: 'YouTube Resources',
          description: 'Explore curated playlists of educational videos covering various engineering topics and concepts.',
          img: 'https://i.ytimg.com/vi/hVQR0ZHFk-o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA5HuE2hKspN10h_PPxOjM2QRoayg?height=200&width=300',
          to:'/youtube-resources',
        },
        {
          title: 'Reference Books',
          description: 'Find a list of recommended textbooks and reference materials to supplement your engineering studies.',
          img: 'https://img.freepik.com/premium-vector/book-reference-concept-library-literature-education-concept-design-idea-brainstorming-flat-illustration-vector-template_128772-1203.jpg?height=200&width=300',
          to:'/reference-books',        
        },
        {
          title: 'Career Roadmaps',
          description: 'Discover potential career paths and progression routes in different engineering disciplines.',
          img: 'https://i0.wp.com/garrisonleykamphd.com/wp-content/uploads/2023/11/career-roadmap.jpg?fit=768%2C576&ssl=1?height=200&width=300',
          to:'/roadmaps',
        },
        {
          title: 'Hackathons & Competitions',
          description: 'Stay updated on upcoming engineering challenges and competitions to test your skills and network with peers.',
          img: 'https://english.news.cn/20231014/a7bb996d43b8480ea5c03e493058b418/20231014a7bb996d43b8480ea5c03e493058b418_20231014907c6c9f770d4d9086596457eda618e9.jpg?height=200&width=300',
          to:'/solve-doubts',
        },
        {
          title: 'Solve Your Doubts',
          description: 'Access our Q&A platform where you can ask questions and get answers from your peers.',
          img: 'https://www.yourtango.com/sites/default/files/images/brain.jpg?height=200&width=300',
          to:'/solve-doubts',
        },
      ]

  return (
    <div className="container mx-auto py-8">
      <Hero/>
      <h1 className="text-3xl font-bold mb-8 text-center">Engineering Resources</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {resources.map((resource) => (
          <div key={resource.title} className="p-4 border-2 border-gray-200">
            <img className="w-full h-48 object-cover" src={resource.img} alt={resource.title} />
            <h2 className="mt-4 text-xl font-bold text-gray-700">{resource.title}</h2>
            <p className="mt-2 text-gray-500">{resource.description}</p>
            <NavLink to={resource.to}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  VIEW RESOURSES
            </button>
            </NavLink>
            
          </div>
        ))}
      </div>
      <PreviousYearPapers/>
      <Hack/>
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

export default MainResources