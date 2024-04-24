import React from 'react'
import CardShimmer from './CardShimmer';

function ResCardShimmer() {
  const repeat = 16;
  return (
    <div className="w-full">
      <div className=" shimmer w-4/12 h-8 rounded mt-10 ml-10 "></div>
      <div className=" shimmer w-3/12 h-6  mt-3 rounded ml-10 "></div>
      <div className="flex flex-row flex-wrap ml-5 mt-3 mb-3  gap-6 justify-evenly w-full  scrollbar-hidden">

        <CardShimmer />
        <CardShimmer />
        <CardShimmer />
        <CardShimmer />
        <CardShimmer />
        <CardShimmer />
        <CardShimmer />
        <CardShimmer />
        <CardShimmer />
        <CardShimmer />
        <CardShimmer />
        <CardShimmer />
        <CardShimmer />
      </div>
    </div>







  )
}

export default ResCardShimmer;
