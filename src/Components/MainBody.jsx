import React from 'react'
import FoodTypes from './FoodTypes'
import RestaurantChain from './RestaurantChain'
import { useState,useEffect } from 'react'
import useOnlineStatus from '../utils/useOnlineStatus'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function MainBody() {
  const onlineStatus = useOnlineStatus();
  const [mode, setMode] = useState(onlineStatus ? 'Online' : 'Offline');

  useEffect(() => {
    const notify = () => toast('You Are ' + mode);
    notify();
  }, [mode]);

  useEffect(() => {
    setMode(onlineStatus ? 'Online' : 'Offline');
  }, [onlineStatus]);
  
  console.log(onlineStatus)
  
  return (
    <div className="flex flex-col items-center  w-full md:screen h-full bg-white mt-2">
      <ToastContainer/>
      
      <FoodTypes/>
      {/* <RestaurantChain ch="flex-no-wrap overflow-x-auto"/> */}
      <RestaurantChain ch="flex-wrap" csPro={"min-w-48 max-w-48"}/>
      
    </div>
  )
}

export default MainBody
