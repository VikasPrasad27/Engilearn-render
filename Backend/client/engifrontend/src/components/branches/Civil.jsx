import React from 'react'
import PreviousYearPapers from '../PreviousYearPapers'

function Civil() {
  return (
    <div>
      
      <h1 className='text-2xl mt-[29vh] font-bold'>Civil Engineering</h1>
      <div className="year mt-[5vh] mb-[25vh] flex justify-center gap-4 ">
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/1LEzLj8Uv8JBBlQ7i4EPQmvsEXoNJl9zM?usp=drive_link">
              Second Year
              </a>
    </button>
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/1uCSYE_bsVUMBg2qWN8ZAC2fB80eX8PLt?usp=drive_link">
              Third Year
              </a>
    </button>
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/11LCVK8RyH5OqLIWzrV5Yi9T-EFq57Z9_?usp=drive_link">
              Fourth Year
              </a>
    </button>
        
      </div>
      <PreviousYearPapers/>
    </div>
  )
}

export default Civil
