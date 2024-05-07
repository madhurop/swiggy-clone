import React from 'react';

function RestaurantCards({restData}) {
    
    const { name, cloudinaryImageId, cuisines, areaName, avgRating, sla } = restData;
    const cuisines1 = cuisines.join(" ");
    // console.log(cuisines)

    // Constructing the image URL
    const restImg = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${cloudinaryImageId}`;
    const restImgSmall = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_144,h_180/${cloudinaryImageId}`;
    const restImgMedium = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_216,h_270/${cloudinaryImageId}`;
    const restImgLarge = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${cloudinaryImageId}`;

    return (
        <div className="flex flex-col min-w-48 max-w-48 h-auto mb-3 rounded-xl text-start boxShad dropResCard">
            <img
                src={restImg}
                srcSet={`${restImgSmall} 144w, ${restImgMedium} 216w, ${restImgLarge} 288w`}
                sizes="(max-width: 640px) 144px, (max-width: 768px) 216px, 288px"
                alt=""
                className="w-full h-40 rounded-xl boxShad object-cover size-full"
            />
            <h1 className="sm:text-md font-bold text-sm">{name}</h1>
            <h1 className="sm:text-md font-bold text-sm">{avgRating} {sla.slaString}</h1>
            <p  className="sm:text-md overflow-hidden whitespace-nowrap text-ellipsis text-xs">{cuisines1}</p>
            <p  className='sm:text-md text-xs'>{areaName}</p>
        </div>
    );
}

export default RestaurantCards;
