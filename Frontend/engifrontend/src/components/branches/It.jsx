import React from 'react'
import PreviousYearPapers from '../PreviousYearPapers'

function It() {
  return (
    <div>
      
      <h1 className='text-2xl mt-[29vh] font-bold'>Information Technology Engineering</h1>
      <div className="year mt-[5vh] mb-[25vh] flex justify-center gap-4 ">
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/1qxTmjyP9kL9dc8JTOBHGCbun7sz8ODfm?usp=drive_link">
              Second Year
              </a>
    </button>
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/11wnR02kzB0jGxTh15FTNHtD6N-6yOduK?usp=drive_link">
              Third Year
              </a>
    </button>
    <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'><a href="https://drive.google.com/drive/folders/19nHW3qy89Uz6LnWF_QQSRjvAarLBat2H?usp=drive_link">
              Fourth Year
              </a>
    </button>
        
      </div>
      <PreviousYearPapers/>
    </div>
  )
}

export default It
