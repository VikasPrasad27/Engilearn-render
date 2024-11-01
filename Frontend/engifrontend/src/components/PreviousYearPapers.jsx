import React from 'react'
import { NavLink } from 'react-router-dom'
function PreviousYearPapers() {
    const papers = [
       {title:"FirstYear Engineering",description:"Access pas previous year papers of First Year engineering and Enhance your preparations with these resources.",img:"https://img.jagranjosh.com/imported/images/E/Articles/enginetips01.webp?height=200&width=300",to:'/firstyear-engineering'},
        {title:"Computer Engineering",description:"Access pas previous year papers of computer engineering and Enhance your preparations with these resources.",img:"https://www.ncuindia.edu/wp-content/uploads/2024/05/Mechanical.Engineering.Research2.webp?height=200&width=300",to:'/computer-engineering'},
        {title:"Electrical Engineering",description:"Access previous year papers of electrical engineering and Enhance your preparations with these resources.",img:"https://www.unsw.edu.au/engineering/sites/default/files/styles/extra_large/public/images/shutterstock_1718014291.jpg?itok=Cdy4kxnZ?height=200&width=300",to:'/electrical-engineering'},
        {title:"Mechanical Engineering",description:"Access previous year papers of mechanical engineering and Enhance your preparations with these resources.",img:"https://exploreengineering.ca/sites/default/files/2020-02/NEM_mechanical.jpg?height=200&width=300",to:'/mechanical-engineering'},
        {title:"Civil Engineering",description:"Access previous year papers of civil engineering and Enhance your preparations with these resources.",img:"https://i.pinimg.com/736x/4d/02/02/4d02028e50438beafedc9297c01bcab3.jpg?height=200&width=30",to:'/civil-engineering'},
        {title:"ENTC",description:"Access previous year papers of ENTC and Enhance your preparations with these resources.",img:"https://i0.wp.com/www.tawicolleges.com/wp-content/uploads/2019/05/eceminiproject.jpg?fit=443%2C250&ssl=1?height=200&width=00",to:'/entc-engineering'},
        {title:"AIDS",description:"Access previous year papers of AIDS and Enhance your preparations with these resources.",img:"https://cdn.itm.ac.in/2024/05/tech-jobs-in-India--6--3.webp?height=200&width=00",to:'/aids-engineering'},
        {title:"IT Engineering",description:"Access pas previous year papers of IT engineering and Enhance your preparations with these resources.",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsgJU9zu4oNgyGmvvu5cIfwWBtjwoZzqeUA&s?height=200&width=300",to:'/it-engineering'},
    ]
  return (
    <div className="container mx-auto px-4 py-8  items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('')" }}>
      
      <h1 className="text-3xl font-bold mb-6 text-black">Previous Year Papers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {papers.map((paper) => (
          <div key={paper.title} className="mb-6 flex-wrap mt-16">
            <div className="structure flex flex-col md:flex-row">
              <div className="img-container w-full md:w-1/3 mb-4 md:mb-0">
                <img src={paper.img} alt={paper.title} className="w-full h-auto object-cover"/>
              </div>
              <div className="text-container w-full md:w-2/3 md:pl-4">
                <h2 className="text-xl font-semibold mb-2 text-black">{paper.title}</h2>
                <p className="mb-4 text-black">{paper.description}</p>
                <NavLink to={paper.to} onClick={() => window.scrollTo(0, 0)}>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    VIEW
                  </button>
                </NavLink>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PreviousYearPapers