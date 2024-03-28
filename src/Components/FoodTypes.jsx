import React from 'react'
 import FoodCard from './FoodCard';
 import {data} from './Api';

function FoodTypes() {
  const resList = [
    { id: 1, name: 'Vadapav', link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4' },
    { id: 2, name: 'Chole Bhature', link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4' },
    { id: 3, name: 'Paneer Tikka', link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4' },
    { id: 4, name: 'Idli Dosa', link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4' },
    { id: 5, name: 'Biryani', link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4' },
    { id: 6, name: 'Panipuri', link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4' },
    { id: 7, name: 'Tandoori Chicken',link:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4" },
    { id: 8, name: 'Aloo Paratha', link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4' },
    { id: 9, name: 'Dal Makhani',link:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4" },
    { id: 10, name: 'Gulab Jamun', link: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4' }
];

const finald = data.data.cards[0].card.card.imageGridCards.info;
console.log(finald)
  const myurl = "https://t.ly/EHT59"  // const myurl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
  return (
  <div className=" w-3/4  item-center border-b border-solid border-black ">
    <h1 className="ml-5 text-2xl font-bold">Whats on your mind?</h1>
    <div className="flex flex-no-wrap overflow-x-auto  ml-5 mt-3 mb-3   gap-6 justify-evenly w-auto h-48 scrollbar-hidden ">
    {finald.map(foods => (
      
                <FoodCard resData={foods} />
                
            ))}
  </div>
</div>
  

  )
}

export default FoodTypes
