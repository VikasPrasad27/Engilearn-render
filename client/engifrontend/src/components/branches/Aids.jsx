import React from 'react'
import PreviousYearPapers from '../PreviousYearPapers'

function Aids() {
  return (
    <div>
      
      <h1 className='text-2xl mt-[29vh] font-bold'>Artificial Intelligence & Data Science Engineering</h1>
      <div className="year mt-[5vh] mb-[25vh] flex justify-center gap-4 ">
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/1uFAbumeNy99wL32dxqDmm93KqJp-eNFS?usp=drive_link">
              Second Year
              </a>
    </button>
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/1Gbjks4JITeseZbmzqkSlh1_SVBTJeIh0?usp=drive_link">
              Third Year
              </a>
    </button>
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/1R5D3Riu5yVxl53qJWY7w_8byzF3-WixG?usp=drive_link">
              Fourth Year
              </a>
    </button>
        
      </div>
      <PreviousYearPapers/>
    </div>
  )
}

export default Aids
