import React from 'react'
import FoodTypes from './FoodTypes'
import RestaurantChain from './RestaurantChain'
import { useState,useEffect } from 'react'
import useOnlineStatus from '../utils/useOnlineStatus'

function MainBody() {
  const onlineStatus = useOnlineStatus()
  console.log(onlineStatus)
  
  return (
    <div className="flex flex-col items-center  w-screen md:(w-full m-4) h-full bg-white mt-2">
      
      <FoodTypes/>
      {/* <RestaurantChain ch="flex-no-wrap overflow-x-auto"/> */}
      <RestaurantChain ch="flex-wrap" csPro={"min-w-48 max-w-48"}/>
      
    </div>
  )
}

export default MainBody
