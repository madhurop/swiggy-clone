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
      const apiData = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0644917&lng=72.8637579&collection=${params.collection_id}&tags=${params.tags}&type=${params.type}`;
      
      const response = await fetch(apiData);
      const data = await response.json();
      console.log(data);

      console.log(data?.data?.cards[0]?.card?.card?.title);
      console.log(data?.data?.cards.slice(3));
      setFoodCollection(data?.data?.cards.slice(3));
      setFood(data?.data?.cards[0]?.card?.card);
    } catch (error) {
      console.error('Error fetching food collection:', error);
    }
  };

  if (foodCollection.length === 0) {
    return <ResCardShimmer />;
  }
  

  return (
    <div className="w-full h-full bg-white pl-20 ">
      <div className='mt-10'>
        <h1 className="font-bold text-3xl">{food?.title}</h1>
        <h5 className="text-md text-gray-600">{food?.description}</h5>
        <div className="flex flex-row justify-between w-full sm:w-6/12  mt-3">
          <button className="bg-gray-200 text-center shadow-xl w-auto p-2 h-10 rounded-xl ">Pure Veg</button>
          <button className="bg-gray-200 text-center shadow-xl w-auto p-2 h-10 rounded-xl ">Less Than 30 Min</button>
          <button className="bg-gray-200 text-center shadow-xl w-auto p-2 h-10 rounded-xl ">300-600</button>
          <button className="bg-gray-200 text-center shadow-xl w-auto p-2 h-10 rounded-xl ">Less than 300</button>
        </div>
        <h1 className='mt-3'>{food.count} Restaurants to explore</h1>
        <div className="w-11/12 flex flex-wrap gap-6 justify-evenly mt-5">
          {foodCollection.map((item, index) => (
            <Link key={index}  to={"/restaurant/"+item?.card?.card?.info?.id}><RestaurantCards restData={item?.card?.card?.info} /></Link>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodCollection;
