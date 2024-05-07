import React, { useState, useEffect } from 'react';
import RestaurantCards from './RestaurantCards';
import { finald1 } from './Api';
import ResCardShimmer from '../ShimmerUI/ResCardShimmer';
import { Link } from 'react-router-dom';



function RestaurantChain(props) {
  const [restaurants, setRestaurants] = useState([]);
  const [newRestaurants, setNewRestaurants] = useState([]);
  
  


  useEffect(() => {
    apiData();
  }, []);

  const [searchText, setSearchText] = useState("");

  const filterTopRatedRestaurants = () => {
    const topRatedRestaurants = restaurants.filter(restaurant => restaurant.info.avgRating > 4.5);
    setNewRestaurants(topRatedRestaurants);
  };

  const filterDelivery = () => {
    const fastDeliveryRestaurants = restaurants.filter(restaurant => restaurant.info.sla.deliveryTime < 40);
    setNewRestaurants(fastDeliveryRestaurants);
  };

  const apiData = async () => {
    try {
      const req = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0644917&lng=72.8637579&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {
        headers: {
        'x-cors-api-key': 'temp_5851881bfc243383ecc5830f30b80393'
        }
      });
      if (!req.ok) {
        throw new Error('Network response was not ok');
      }
      const res = await req.json();
      
      
      setRestaurants(res.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setNewRestaurants(res.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state, maybe display an error message to the user
    }
  }
  if(newRestaurants.length==0){
    // console.log("length is zero man")
    return(
      <ResCardShimmer/>
    )
    
   }
  console.log(newRestaurants)

  const handleSearch = () => {
    const filteredRestaurants = restaurants.filter(ev => ev.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setNewRestaurants(filteredRestaurants);
  };
 
  return (
    <div className=" w-3/4 item-center border-b border-solid border-black h-auto custom">

      <h1 className="ml-5 text-2xl font-bold">What's on your Restaurant?</h1>
      <div className="flex flex-row items-center justify-around">
        <div className='flex flex-row  items-center justify-evenly ' >
          <input placeholder='Search Your Restaurant' type="text" className=" w-4/12 h-10 bg-gray-200  border border-solid border-gray-200   rounded-xl" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <button className=" h-8 p-2 bg-xl border border-solid border-black hover:bg-gray-200 rounded-xl ml-3" onClick={handleSearch}>Search</button>

        </div>

        <button className="h-10 p-2 rounded-xl bg-gray-200 boxShad w-3/12 text-xs" onClick={filterTopRatedRestaurants}>4+ Rating</button>
        <button className="h-10 p-2 rounded-xl bg-gray-200 boxShad w-3/12 text-xs" onClick={filterDelivery}>Fast Delivery</button>
        
      </div>

      <div className={`flex ${props.ch} ml-5 mt-3 mb-3 gap-6 justify-evenly w-auto h-auto scrollbar-hidden`}>
        {newRestaurants.map((restaurant, index) => (
          <Link to={"/restaurant/"+restaurant.info.id} key={index} ><RestaurantCards  restData={restaurant.info} /></Link>

          
        ))}
      </div>
    </div>
  );
}

export default RestaurantChain;
