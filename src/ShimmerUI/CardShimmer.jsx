import React from 'react'

function CardShimmer() {
  return (
    <div className=" flex flex-col min-w-42 min-h-52">
         <div className="bg-gray-200 h-32 w-32 animate-pulse"></div>
    <div className="bg-gray-200 w-32 h-6 animate-pulse "></div>            
    <div className="bg-gray-200 h-6 w-32 animate-pulse "></div>

    </div> 
   
  )
}

export default CardShimmer
