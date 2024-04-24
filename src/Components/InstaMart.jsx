import React from 'react'
import { useState, useEffect } from 'react'
import { instaMart } from './Api'
import { Link } from 'react-router-dom'
import InstaMartCard from './InstaMartCard'

function InstaMart() {
  const [martList, setMartList] = useState([])
  useEffect(() => {

    quickMart()

  }, [])
  const quickMart = async () => {
    const quickApi = await fetch("https://www.swiggy.com/api/instamart/category-listing?categoryName=Fresh+Fruits&custom_back=true&filterId=65706476033ec00001332057&storeId=649837&taxonomyType=All+Listing")
    const response = await quickApi.json()

    setMartList(response.data.categories)
    console.log(response.data.categories)
    console.log(response.data.filters)
  }

  
  return (
    <div className='bg-gray-300 w-full flex  justify-center'>
      <div className="bg-gray-200 w-3/4 flex flex-col justify-center">
        <h1>Madhur</h1>
        <input type="text" placeholder='Search Here' />
        <div className="bg-red-200 flex-wrap w-full flex flex-row gap-2 justify-evenly">
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
