import React from 'react'
import NavBar from './Header'
import FoodTypes from './FoodTypes'

function SearchPage() {
  return (
    <div>
     
     <div className="flex flex-col justify-center items-center border border-solid border-black  w-screen h-screen bg-white mt-4">
      <div className="flex flex-col items-center  border border-solid border-black  w-9/12 h-screen bg-white mt-4">
         <div className="flex flex-col items-center w-full border border-solid border-black">
        <input placeholder='Search Here.....' type="text" className="w-9/12 h-10" />
        <h1 className=''>Popular Cusines</h1>
         </div>
         

      </div>

     </div>
    </div>
  )
}

export default SearchPage
