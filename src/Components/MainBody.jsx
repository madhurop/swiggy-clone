import React from 'react'
import FoodTypes from './FoodTypes'
import RestaurantChain from './RestaurantChain'
import { useState,useEffect } from 'react'

function MainBody() {
  
  return (
    <div className="flex flex-col items-center  w-screen h-screen bg-white mt-4">
      
      <FoodTypes/>
      {/* <RestaurantChain ch="flex-no-wrap overflow-x-auto"/> */}
      <RestaurantChain ch="flex-wrap"/>
      
    </div>
  )
}

export default MainBody
