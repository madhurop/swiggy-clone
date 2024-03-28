import React, { useState } from 'react';
import RestaurantCards from './RestaurantCards';
import { finald1 } from './Api';

function RestaurantChain(props) {
  const [restaurants, setRestaurants] = useState(finald1);

  const filterTopRatedRestaurants = () => {
    const topRatedRestaurants = finald1.filter(restaurant => restaurant.info.avgRating > 4);
    setRestaurants(topRatedRestaurants);
  };
  const filterDelivery = () => {
    const topRatedRestaurants = finald1.filter(restaurant => restaurant.info.sla.deliveryTime < 40);
    setRestaurants(topRatedRestaurants);
  };

  return (
    <div className="w-3/4 item-center border-b border-solid border-black h-auto">
      <h1 className="ml-5 text-2xl font-bold">What's on your Restaurant?</h1>
      <div className="flex flex-row justify-evenly">
        <button className="bg-orange-200 boxShad" onClick={filterTopRatedRestaurants}>
          4+ Rating</button>
        <button className="bg-orange-200 boxShad" onClick={filterDelivery}>Delhivey</button>
        <button className="bg-orange-200 boxShad">Delhivey</button>
        <button className="bg-orange-200 boxShad">Delhivey</button>
      </div>

      <div className={`flex ${props.ch} ml-5 mt-3 mb-3 gap-6 justify-evenly w-auto h-auto scrollbar-hidden`}>
        {restaurants.map(restaurant => (
          <RestaurantCards  restData={restaurant} />
        ))}
      </div>
    </div >
  );
}

export default RestaurantChain;
