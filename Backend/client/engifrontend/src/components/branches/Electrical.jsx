import React from 'react'
import PreviousYearPapers from '../PreviousYearPapers'

function Electrical() {
  return (
    <div>
      
      <h1 className='text-2xl mt-[29vh] font-bold'>Electrical Engineering</h1>
      <div className="year mt-[5vh] mb-[25vh] flex justify-center gap-4 ">
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/1VHJ7R6z3lf1L0DwnL3O0Of4cqkLJ3NFY?usp=drive_link">
              Second Year
              </a>
    </button>
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/11Xf-eB_hmElD558KoKWqfZWp449l9M_1?usp=drive_link">
              Third Year
              </a>
    </button>
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/11coT7wMyCvR18RWacZnRFxPuMve0Fp_T?usp=drive_link">
              Fourth Year
              </a>
    </button>
        
      </div>
      <PreviousYearPapers/>
    </div>
  )
}

export default Electrical
