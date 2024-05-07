import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import myData from '../utils/UserContext';

export default function NavBar() {
  const UserMy = useContext(myData)
  console.log(UserMy)
  useEffect(()=>{
    getSwiggy()
  },[])

  async function getSwiggy() {
    try {
      const response = await fetch("/api/items");
      if (response.status === 200) {
        const data = await response.json();
        //setItems(data);
        console.log(data)
      } else if (response.status === 304) {
        console.log("Items data is unchanged.");
      } else {
        console.error('Failed to fetch items. Status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }
  

   
  const st = "hover:text-red-500";
  return (
    <myData.Provider value={UserMy}>
      <div>
      <header className="w-full dropnav">
        <nav className=" w-full flex flex-row justify-evenly sm:justify-between bg-white border border-solid border-gray-200 shadow-2xl">
          <div className="">
            <img className="w-14 ml-10 p-2" src="data:image/png;base64,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" alt=""/>
          </div>
          <ul className=" flex flex-row justify-evenly gap-2 w-2/5 items-center">
            <li><Link className='hover:text-red-500 text-sm sm:text:md' to="/">Home</Link></li>
            <li><Link className='hover:text-red-500 text-sm sm:text:md' to="/instamart">InstaMart</Link></li>
            <li><Link className='hover:text-red-500 text-sm sm:text:md' to="/help">Help</Link></li>
            <li><Link className='hover:text-red-500 text-sm sm:text:md' to="#">Sign In</Link></li>
            <li><Link className='hover:text-red-500 text-sm sm:text:md' to="#">Cart</Link></li>
            
          </ul>
        </nav>
      </header>
      
    </div>

      </myData.Provider>
    
  )
}
