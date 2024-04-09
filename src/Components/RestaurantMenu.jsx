import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function RestaurantMenu() {
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState({});
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const apD = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9351929&lng=73.62448069999999&restaurantId=${resId}`;
        const data = await fetch(apD);
        const resP = await data.json();
        
        console.log(resP);
        setResInfo(resP?.data.cards[2]?.card?.card?.info);
    }

    // Destructure name and id outside the fetchMenu function
    const { name, id } = resInfo;

    return (
        <div className='w-full h-full flex justify-center '>
            <div className="w-3/4 h-full flex flex-col items-center">
                <div className="w-full">
                    {/* Use name outside the fetchMenu function */}
                    <h2 className="text-2xl font-bold">{name}</h2>
                </div>
                
                <div className="w-full h-56 border border-solid border-black">
                    <h6 className="">For Two</h6>
                    <p className="North,Indian BArbeque"></p>
                    <p className="">Outlet Karjat</p>
                    <p className="">550-55 Min</p>
                </div>
                <div className="w-full flex justify-center">
                    <h4 className="">Menu Card</h4>
                </div>
                <div className="w-full flex justify-center">
                    <h4 className="">Search For Dishes</h4>
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenu;
