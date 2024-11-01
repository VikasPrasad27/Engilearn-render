import React from 'react'
import PreviousYearPapers from '../PreviousYearPapers'

function Entc() {
  return (
    <div>
      
      <h1 className='text-2xl mt-[29vh] font-bold'>Electronics and Telecommunication Engineering</h1>
      <div className="year mt-[5vh] mb-[25vh] flex justify-center gap-4 ">
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/1LpkaBlUiqvJ6ioV0_4OCXYBZgN69i3AF?usp=drive_link">
              Second Year
              </a>
    </button>
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/1XAocesQlHhi6Vu1pMJNN8iMRuibKyH90?usp=drive_link">
              Third Year
              </a>
    </button>
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/1PSXiSkIA2e0IuhTq2dvku5ldvSKn-1_q?usp=drive_link">
              Fourth Year
              </a>
    </button>
        
      </div>
      <PreviousYearPapers/>
    </div>
  )
}

export default Entc
