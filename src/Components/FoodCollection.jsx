import React, { useState, useEffect } from 'react';
import { foodCuisine } from './constants';
import RestaurantCards from './RestaurantCards';
import { useParams } from 'react-router-dom';
import ResCardShimmer from '../ShimmerUI/ResCardShimmer';
import { Link } from 'react-router-dom';

function FoodCollection() {
  const { collId } = useParams();
  //console.log(collId);

  const [foodCollection, setFoodCollection] = useState([]);
  const [foodCollectionNew, setFoodCollectionNew] = useState([]);
  const [food, setFood] = useState([]);
  const [timeLess, setTimeLess] = useState(true);

  useEffect(() => {
    fetchFoodCollection();
  }, [collId]);

  const fetchFoodCollection = async () => {
    try {
      // Manually parse the collId to extract query parameters
      const params = collId.split('?')[1].split('&').reduce((acc, curr) => {
        const [key, value] = curr.split('=');
        acc[key] = decodeURIComponent(value);
        return acc;
      }, {});

      //console.log("Parsed query parameters:", params);

      // Use the extracted parameters in your fetch request
      const apiData = `https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0644917&lng=72.8637579&collection=${params.collection_id}&tags=${params.tags}&type=${params.type}`;

      const response = await fetch(apiData, {
        headers: {
          'x-cors-api-key': 'temp_5851881bfc243383ecc5830f30b80393'
        }
      });
      const data = await response.json();
      console.log(data);

      //console.log(data?.data?.cards[0]?.card?.card?.title);
      console.log(data?.data?.cards.slice(3));
      setFoodCollection(data?.data?.cards.slice(3));
      setFoodCollectionNew(data?.data?.cards.slice(3));
      setFood(data?.data?.cards[0]?.card?.card);
    } catch (error) {
      console.error('Error fetching food collection:', error);
    }
  };
  const handleLessDeliveryTime = () => {
    if (timeLess==true){

      const filteredDeliveryTime = foodCollection.filter(lessTime => lessTime.card.card.info.sla.deliveryTime < 30)
      setFoodCollectionNew(filteredDeliveryTime)
      setTimeLess(false)
    }
    else{
      setFoodCollectionNew(foodCollection)
      setTimeLess(true)
    }

  }


  if (foodCollection.length === 0) {
    return <ResCardShimmer />;
  }


  return (
    <div className="w-full h-full bg-white pl-20 conFoodColl ">
      <div className='mt-10 headText'>
        <h1 className="font-bold sm:text-3xl text-xl">{food?.title}</h1>
        <h5 className="text-sm sm:text-md text-gray-600">{food?.description}</h5>
        <div className="flex flex-row justify-between w-full lg:w-6/12  mt-3 gap-x-2">
          <button className="bg-gray-200 text-sm md:text-md lg:text-lg text-center shadow-xl w-auto p-2 h-10 rounded-xl ">Pure Veg</button>
          <button className="bg-gray-200 text-sm md:text-md lg:text-lg text-center shadow-xl w-auto p-2 h-10 rounded-xl " onClick={handleLessDeliveryTime}>Less Than 30 Min</button>
          <button className="bg-gray-200 text-sm md:text-md lg:text-lg text-center shadow-xl w-auto p-2 h-10 rounded-xl ">300-600</button>
          <button className="bg-gray-200 text-sm md:text-md lg:text-lg text-center shadow-xl w-auto p-2 h-10 rounded-xl ">Less than 300</button>
        </div>
        <h1 className='mt-3'>{food.count} Restaurants to explore</h1>
        <div className="w-11/12 flex flex-wrap gap-6 justify-evenly mt-5 conFoodRes">
          {foodCollectionNew.map((item, index) => (
            <Link key={index} to={"/restaurant/" + item?.card?.card?.info?.id}><RestaurantCards restData={item?.card?.card?.info} /></Link>

          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodCollection;
