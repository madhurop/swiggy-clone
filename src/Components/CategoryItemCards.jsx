import React from 'react'

function CategoryItemCards({data}) {
    //console.log(data)
    const imgUrl = "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/"
  return (
    <div className='w-4/12 bg-gray-200 flex flex-col'>
        <img src={imgUrl+data.images[0]} alt="" className="w-full p-2"  />
        <h2 className="">{data.display_name}</h2>
        
      
    </div>
  )
}

export default CategoryItemCards
