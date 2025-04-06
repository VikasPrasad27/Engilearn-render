import React from 'react'
import PreviousYearPapers from '../PreviousYearPapers'

function FirstYear() {
  return (
    <div>
      
      <h1 className='text-2xl mt-[29vh] font-bold'>First Year Engineering</h1>
      <button  type="submit"  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 mt-6 mb-56 px-4 rounded'><a href=" https://drive.google.com/drive/folders/1mXFXoF5KjRQihrcEBbWDbLl30ITgrHDm?usp=drive_link">
              FE Papers
              </a>
    </button>
    <PreviousYearPapers/>
    </div>
  )
}

export default FirstYear

     