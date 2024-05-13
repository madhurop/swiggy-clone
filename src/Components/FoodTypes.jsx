import React from 'react'
import FoodCard from './FoodCard';
import { useState, useEffect } from 'react';
import { data } from './Api';
import { finald } from './Api';
import ShimmerFood from '../ShimmerUI/ShimmerFood';
import { Link } from 'react-router-dom';
import UserClass from './UserClass';

function FoodTypes() {
  const [foodData, setfoodData] = useState([]);
  useEffect(() => {
    apiData();
  }, []);
  // console.log(data.data.cards.length)

  const apiData = async () => {
    try {
        //const req = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0644917&lng=72.8637579&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {
        const req = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0644917&lng=72.8637579", {
          headers: {
          'x-cors-api-key': 'temp_5851881bfc243383ecc5830f30b80393'
          }
        });
       // const req1 = await fetch("https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2")
        const res = await req.json();
        
        // console.log(res);
        // // Assuming setfoodData is a function to handle the received data
        // console.log(res.data.cards.length)
        //console.log(res.data.cards[0].card.card.imageGridCards.info)
        if(res.data.cards.length==12){
          setfoodData(res.data.cards[0].card.card.imageGridCards.info);

        }else{
          setfoodData(finald)
        }

        
    } catch (error) {
        console.error('Error fetching API data:', error);
        // Handle the error as needed, such as displaying an error message to the user or logging it for further analysis
    }
};






  const finald = data.data.cards[0].card.card.imageGridCards.info;

  const myurl = "https://t.ly/EHT59"  // const myurl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
  if (foodData.length == 0) {
    return(
      <div className=" w-3/4   item-center border-b border-solid border-black ">
        <div className="flex flex-no-wrap overflow-x-auto  ml-5 mt-3 mb-3   gap-6 justify-evenly w-auto h-48  overflow-hidden scrollbar-hidden">
          <ShimmerFood/>
          <ShimmerFood/>
          <ShimmerFood/>
          <ShimmerFood/>
          <ShimmerFood/>
          <ShimmerFood/>
        </div>

      </div>
    )
   
  }
  return (
    <div className=" w-3/4   item-center border-b border-solid border-black custom ">
      <h1 className="ml-5 text:xl sm:text-2xl font-bold">Whats on your mind?</h1>
      <UserClass fakeData={"Madhur Borade"}/>
      <div className="flex flex-no-wrap overflow-x-auto  ml-5 mt-3 mb-3   gap-6 justify-around w-full h-48  overflow-hidden scrollbar-hidden dropFoodDiv">
        {foodData.map((foods, index) => (
          
          <Link key={index} to={`/collection/${encodeURIComponent(foods.action.link)}`}>
          <FoodCard resData={foods} />
        </Link>
        
          

          

        ))}
      </div>
    </div>


  )
}

export default FoodTypes
