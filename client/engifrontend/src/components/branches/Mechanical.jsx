import React from 'react'
import PreviousYearPapers from '../PreviousYearPapers'

function Mechanical() {
  return (
    <div className=' '>
      
      <h1 className='text-2xl mt-[29vh] font-bold'>Mechanical Engineering</h1>
      <div className="year mt-[5vh] mb-[25vh] flex justify-center gap-4 ">
      
    <button  type="submit" className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/1HZQvZbWVMzO_93TORKs38q9ECW0byZX3?usp=drive_link">
              Second Year
              </a>
    </button>
    <button  type="submit" className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/1jQ-renuYx6l8v-1hfpKja3_fOX4woIEV?usp=drive_link">
              Third Year
              </a>
    </button>
    <button  type="submit" className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/1Q9zIDe-OBYzv_3GclQEN9zEnVEepmuVF?usp=drive_link">
              Fourth Year
              </a>
    </button>
        
      </div>
      <PreviousYearPapers/>
    </div>
    
  )
}

export default Mechanical
