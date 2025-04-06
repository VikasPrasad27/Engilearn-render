import React from 'react'
import PreviousYearPapers from '../PreviousYearPapers'

function Computer() {
  return (
    <div>
      
      <h1 className='text-2xl mt-[29vh] font-bold'>Computer Engineering</h1>
      <div className="year mt-[5vh] mb-[25vh] flex justify-center gap-4 ">
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/1Lr4_LsWr0Y9JYqMz0air8mMXR2C_D-f4?usp=drive_link">
              Second Year
              </a>
    </button>
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/1udNCAmNdpk-DvwCLBrPUvOOfMyZaKnKg?usp=drive_link">
              Third Year
              </a>
    </button>
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/13hZ5Qa7s-SRyGZWR9A0e1BbTN1hamKh1?usp=drive_link">
              Fourth Year
              </a>
    </button>
        
      </div>
      <PreviousYearPapers/>
    </div>
  )
}

export default Computer
