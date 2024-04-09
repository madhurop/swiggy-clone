import React from 'react'
import CardShimmer from './CardShimmer';

function ResCardShimmer() {
    const repeat = 16;
  return (
    <div className="w-3/4 item-center border-b border-solid border-black h-auto">

  {/* Shimmer effect for title */}
  <div className="ml-5 text-2xl font-bold bg-gray-200 h-10 w-60 animate-pulse"></div>

  <div className="flex flex-row ">
    <div>
      {/* Shimmer effect for input */}
      <input type="text" className="w-60 h-10 bg-gray-200 hover:w-72 border border-solid border-gray-200 mt-3 rounded-xl animate-pulse" />
      {/* Shimmer effect for button */}
      <button className="w-12 h-10 bg-gray-200 rounded-xl animate-pulse"> </button>
    </div>


  </div>

  {/* Shimmer effect for content */}
  
  <div className={`flex flex-row flex-wrap ml-5 mt-3 mb-3 gap-6 justify-evenly w-auto h-auto scrollbar-hidden`}>
    
    <CardShimmer/>
    <CardShimmer/>
    <CardShimmer/>
    <CardShimmer/>
    <CardShimmer/>
    <CardShimmer/>
    <CardShimmer/>
    <CardShimmer/>
    <CardShimmer/>
    <CardShimmer/>
    <CardShimmer/>
    <CardShimmer/>
    <CardShimmer/>
  </div>
</div>

  )
}

export default ResCardShimmer
