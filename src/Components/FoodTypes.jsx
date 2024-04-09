import React from 'react'
 import FoodCard from './FoodCard';
 import { useState,useEffect } from 'react';
 
 import {data} from './Api';


function FoodTypes() {
  const [foodData,setfoodData]=useState([]);
  useEffect(() => {
    apiData();
  }, []);

  const apiData = async () => {
    const req = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const res = await req.json();
    
     setfoodData(res.data.cards[0].card.card.imageGridCards.info);
    
  }

 

const finald = data.data.cards[0].card.card.imageGridCards.info;
 
  const myurl = "https://t.ly/EHT59"  // const myurl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
  return (
  <div className=" w-3/4  item-center border-b border-solid border-black ">
    <h1 className="ml-5 text-2xl font-bold">Whats on your mind?</h1>
    <div className="flex flex-no-wrap overflow-x-auto  ml-5 mt-3 mb-3   gap-6 justify-evenly w-auto h-48 scrollbar-hidden">
    {foodData.map((foods,index) => (
      
                <FoodCard key={index} resData={foods} />
                
            ))}
  </div>
</div>
  

  )
}

export default FoodTypes
