import React from 'react'

function CategoryItemCards({ data }) {
  //console.log(data)
  const imgUrl = "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/"
  return (
    <div className='w-5/12 h-44 sm:h-auto  bg-gray-100 shadow-lg border border-gray-300 rounded-md flex flex-col '>
      <div className="w-full flex justify-center">
        <img src={imgUrl + data.images[0]} alt="" className=" w-10/12 h-24 sm:h-auto p-2 drop-shadow-xl" />

      </div>
      <div className="flex flex-col w-full h-auto bg-gray-200 flex-nowrap justify-evenly overflow-hidden ">
        <h2 className="pl-2 text-wrap">{data.brand}</h2>
        <h2 className="pl-2 text-wrap text-sm sm:text-md">{data.product_name_without_brand}</h2>
        <h2 className="pl-2 text-wrap text-sm sm:text-md">{data.product_name_without_brand}</h2>

      </div>





    </div>
  )
}

export default CategoryItemCards
