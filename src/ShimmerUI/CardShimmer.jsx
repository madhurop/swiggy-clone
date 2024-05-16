import React from 'react'

function CardShimmer() {
  return (
    <div className="w-full p-2 flex flex-col justify-evenly gap-y-2 border border-gray-400  md:w-1/4 lg:w-3/12 rounded-md">
      <div className="w-4/12 h-5  rounded-md shimmer"></div>
      <div className="w-6/12 h-5  rounded-md shimmer"></div>
      <div className="w-full h-24 rounded-md shimmer"></div>
      <div className="comment h-5 rounded-md shimmer"></div>

    </div>

  )
}

export default CardShimmer;
