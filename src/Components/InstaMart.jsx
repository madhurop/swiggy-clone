import React from 'react'
import { useState, useEffect } from 'react'
import { instaMart } from './Api'
import { Link } from 'react-router-dom'
import InstaMartCard from './InstaMartCard'
import InstaMartShimmer from '../ShimmerUI/InstaMartShimmer'

function InstaMart() {
  const [martList, setMartList] = useState([])
  useEffect(() => {

    quickMart()

  }, [])
  const quickMart = async () => {
    const quickApi = await fetch("https://proxy.cors.sh/https://www.swiggy.com/api/instamart/category-listing?categoryName=Fresh+Fruits&custom_back=true&filterId=65706476033ec00001332057&storeId=649837&taxonomyType=All+Listing",{
      headers: {
        'x-cors-api-key': 'temp_5851881bfc243383ecc5830f30b80393'
        }
    })
    const response = await quickApi.json()

    setMartList(response.data.categories)
    console.log(response.data.categories)
    console.log(response.data.filters)
  }
if(martList.length==0){
  return(
    <InstaMartShimmer/>
  )
}
  
  return (
    <div className='bg-white w-full flex  justify-center'>
      <div className="bg-white w-full lg:w-3/4 flex flex-col items-center">
        <h1 className='font-bold text-xl mb-4 '>Instamart</h1>
        <input className="w-5/6 p-5 h-10 mb-4  border border-gray-200 rounded-lg shadow-lg" type="text" placeholder='Search Here' />
        <div className="bg-white flex-wrap w-full flex flex-row gap-2 gap-y-5 justify-evenly">
          {martList.map((list, index) => (
            <Link key={index} to={"/instamart/categeory/" + list.id+"/"+list.displayName}>
              <InstaMartCard list={list} />

            </Link>



          ))}


        </div>

      </div>

    </div>
  )
}

export default InstaMart
