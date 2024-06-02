import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { instaMart } from './Api';
import InstaMartCard from './InstaMartCard';
import CategoryItemCards from './CategoryItemCards';
import { Link } from 'react-router-dom';

function CategoryMartHigh() {
    const [subMart, setSubMart] = useState([]);
    const [cateMart, setCateMart] = useState([]);
    const [dumMart, setDumMart] = useState([]);

    const { resNodes1, instName1 } = useParams();
    const spilName = instName1.split(" ").join("+");
    // console.log(spilName)

    useEffect(() => {
        if (resNodes1 && spilName) {
            //quickMart1();
            subCategory();
        }

        return () => {
            // Any cleanup code if needed
        };
    }, [resNodes1]); // Only call quickMart1 when resNodes or spilName change

    const quickMart1 = async () => {
        try {
            //const quickApi = await fetch(`https://www.swiggy.com/api/instamart/category-listing?categoryName=Fresh+Fruits&custom_back=true&filterId=${resNodes}&storeId=649837&taxonomyType=All+Listing`);
            //const quickApi= await fetch(`https://www.swiggy.com/api/instamart/category-listing?categoryName=Sauces+and+Spreads&custom_back=true&filterId=639febf61555a809f1267dba&storeId=649837&taxonomyType=All+Listing`)
            const quickApi = await fetch(`https://www.swiggy.com/api/instamart/category-listing?categoryName=Dry+Fruits+and+Nuts&custom_back=true&taxonomyType=All+Listing`)
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
    console.log(spilName)
    console.log(resNodes1)
    const subCategory = async () => {
        const cateGoryApi = await fetch(`https://proxy.cors.sh/https://www.swiggy.com/api/instamart/category-listing?categoryName=${spilName}&custom_back=true&filterId=${resNodes1}&storeId=649837&taxonomyType=All+Listing`, {
            headers: {
                'x-cors-api-key': 'temp_5851881bfc243383ecc5830f30b80393'
            }
        })
        const response = await cateGoryApi.json()
        console.log(response)
        setSubMart(response.data.filters);
        setCateMart(response.data.widgets[1].data);
    }
    return (
        <div className='w-full h-screen flex justify-center bg-gray-200'>
            <div className=" w-full sm:w-3/4  flex flex-col bg-gray-300">
                <div className="w-full h-24 bg-gray-400"></div>
                <div className="w-full  h-full flex bg-gray-100 flex-row">
                    <div className="w-1/4 h-full flex flex-col overflow-y-auto overflow-hidden items-center mt-4 gap-4 bg-gray-100 scrollbar-hidden border-r-2 border-r-black ">
                        {subMart.map((martItem, index) => (
                            <Link to={"/instamart/item/" + martItem.id + "/" + spilName} key={index}><InstaMartCard list={martItem} /></Link>
                        ))}
                    </div>
                    <div className="w-3/4 h-full flex flex-row flex-wrap gap-4 justify-evenly bg-gray-100 overflow-y-auto overflow-hidden scrollbar-hidden mt-4">{
                        cateMart.map((category, index) => (
                            <CategoryItemCards key={index} data={category.variations[0]} />

                        ))
                    }

                        {/* Additional content for the right section if needed */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CategoryMartHigh
