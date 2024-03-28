import React from 'react'

function RestaurantCards(props) {
    const{name,cloudinaryImageId,cuisines,areaName,avgRating,sla,aggregatedDiscountInfoV3}=props.restData.info;
    const cuisines1 = cuisines.join(" ")
    const size ="text-wrap"
    
 
  const restImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+cloudinaryImageId;
  return (
    <div  className=" flex flex-col w-42 min-w-48 max-w-48 h-auto mb-3  rounded-xl text-start boxShad ">
                    <img className=" w-48 bg-cover bg-no-repeat  rounded-xl boxShad  h-32  " src={restImg}  alt="" />
                    <h1 className="font-bold">{name}</h1>
                    <h1 className=" font-bold">{avgRating} {sla.slaString}</h1>
                    <p className="overflow-hidden whitespace-nowrap text-ellipsis">{cuisines1}</p>
                    <p className="">{areaName}</p>
                                     
                </div>
  )
}

export default RestaurantCards
