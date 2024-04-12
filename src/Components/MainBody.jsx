import React from 'react'
import FoodTypes from './FoodTypes'
import RestaurantChain from './RestaurantChain'
import { useState,useEffect } from 'react'

function MainBody() {
  
  return (
    <div className="flex flex-col items-center  w-screen h-full bg-white mt-4">
      
      <FoodTypes/>
      {/* <RestaurantChain ch="flex-no-wrap overflow-x-auto"/> */}
      <RestaurantChain ch="flex-wrap" csPro={"min-w-48 max-w-48"}/>
      
    </div>
  )
}

export default MainBody
