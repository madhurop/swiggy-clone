import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { instaMart } from './Api';
import InstaMartCard from './InstaMartCard';
import CategoryItemCards from './CategoryItemCards';
import { Link } from 'react-router-dom';

function CategoryMart() {
  const [subMart, setSubMart] = useState([]);
  const [cateMart, setCateMart] = useState([]);
  const [dumMart, setDumMart] = useState([]);

  const { resNodes, instName } = useParams();
  const spilName = instName.split(" ").join("+");
  
  useEffect(() => {
    if (resNodes && spilName) {
      quickMart1();
      subCategory();
    }

   

    // Clean up function
    return () => {
      // Any cleanup code if needed
    };
  }, []); // Only call quickMart1 when resNodes or spilName change
 // useEffect((dumMart)=>{
    //   console.log(dumMart)

    // },[dumMart])
  const quickMart1 = async () => {
    try {
      //const quickApi = await fetch(`https://www.swiggy.com/api/instamart/category-listing?categoryName=Fresh+Fruits&custom_back=true&filterId=${resNodes}&storeId=649837&taxonomyType=All+Listing`);
      //const quickApi= await fetch(`https://www.swiggy.com/api/instamart/category-listing?categoryName=Sauces+and+Spreads&custom_back=true&filterId=639febf61555a809f1267dba&storeId=649837&taxonomyType=All+Listing`)
      const quickApi= await fetch(`https://www.swiggy.com/api/instamart/category-listing?categoryName=${spilName}&custom_back=true&taxonomyType=All+Listing`)
      if (!quickApi.ok) {
        throw new Error('Failed to fetch data');
      }
      const response = await quickApi.json();
      console.log(response);
      setSubMart(response.data.filters);
      setCateMart(response.data.widgets[1].data);
      console.log(response.data.widgets[1].data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state
    }
  };

  const subCategory = async ()=>{
    const cateGoryApi = await fetch("https://www.swiggy.com/api/instamart/category-listing?categoryName=Sauces+and+Spreads&custom_back=true&filterId=639fec124a232c09b574680a&storeId=649837&taxonomyType=All+Listing")
    const catRes = await cateGoryApi.json()
    console.log(catRes)
  }

  return (
    <div className='w-full h-screen flex justify-center bg-gray-200'>
      <div className="w-3/4 flex flex-col bg-gray-300">
        <div className="w-full h-24 bg-gray-400">Madhur</div>
        <div className="w-full h-full flex bg-gray-100 flex-row">
          <div className="w-1/4 h-full flex flex-col overflow-y-auto overflow-hidden items-center mt-2 gap-4 bg-gray-100 scrollbar-hidden">
            {subMart.map((martItem, index) => (
              <Link to={"/instamart/item/"+martItem.id+"/"+spilName} key={index}><InstaMartCard  list={martItem}  /></Link>
              
            ))}
          </div>
          <div className="w-3/4 h-full flex flex-row flex-wrap gap-4 justify-evenly bg-gray-100 overflow-y-auto overflow-hidden scrollbar-hidden">{
            cateMart.map((category,index)=>(
              <CategoryItemCards  key={index} data ={category.variations[0]}/>

            ))
          }
            
            {/* Additional content for the right section if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryMart;
