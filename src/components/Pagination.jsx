import React from 'react'

function Pagination({handlePrev, handleNext,pageNo}) {
  return (
    <div className='bg-gray-400 m-8 p-4 flex justify-center'>
        <div onClick={handlePrev} className='px-8 hover:cursor-pointer'><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{pageNo} </div>
        <div onClick={handleNext} className='px-8 hover:cursor-pointer'><i class="fa-solid fa-arrow-right"></i></div> 
    </div>
  )
}

export default Pagination
