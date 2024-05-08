import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import MenuShimmer from '../ShimmerUI/MenuShimmer';
import Variants from './Variants';
import InstaMart from './InstaMart';
import RestaurantMenuCards from './RestaurantMenuCards';

function RestaurantMenu() {
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState({});
    const [resMenu, setResMenu] = useState([]);
    const [resMenuNew, setResMenuNew] = useState([]);
    const [searchMenu, setSearchMenu] = useState("");
    const [sortRes, setSortRes] = useState()
    const [sortResState, setSortResState] = useState(false)

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const apD = `https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0644917&lng=72.8637579&restaurantId=${resId}`;
            const data = await fetch(apD, {
                headers: {
                    'x-cors-api-key': 'temp_5851881bfc243383ecc5830f30b80393'
                }
            });
            if (!data.ok) {
                throw new Error(`Failed to fetch menu: ${data.status} - ${data.statusText}`);
            }
            const resP = await data.json();
            //console.log(resP)
            const N = resP?.data.cards.length;

            const filterResMenu = resP?.data.cards[N - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(e => e.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
            //console.log(filterResMenu)
            setResInfo(resP?.data.cards[2]?.card?.card?.info);
            //setResMenu(resP?.data.cards[N-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
            //console.log(resP?.data.cards[N - 1]);
            setResMenu(filterResMenu)
            setResMenuNew(filterResMenu)
            //setResMenuNew(resP?.data.cards[N-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        } catch (error) {
            console.error('Error fetching menu:', error);
        }
    };

    const { name, id, avgRating, costForTwoMessage, cuisines, locality, areaName, totalRatingString, sla, cloudinaryImageId } = resInfo;
    const resMenuImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            handleResSearch();
        }, 500); // 500 milliseconds delay

        return () => clearTimeout(delaySearch);
    }, [searchMenu]);

    // const handleResSearch = () => {
    //     const filteredMenu = resMenuNew.filter(item => item.card.info.name.toLowerCase().includes(searchMenu.toLowerCase()));
    // };
    const handleResSearch = () => {
        const filteredMenu = resMenuNew
            .map(item =>
                item.card.card.itemCards.filter(sub =>
                    sub.card.info.name.toLowerCase().includes(searchMenu.toLowerCase())
                )
            )
            .filter(filteredItem => filteredItem.length > 0);

        console.log(filteredMenu);
        if (filteredMenu.length == 0) {
            setSortResState(false)
        } else {
            setSortResState(true)

        }
        setSortRes(filteredMenu)

    };

    //handleResSearch1(); // Call the function to execute it



    const handleVegSearch = () => {
        const filteredVegMenu = resMenuNew.filter(item => item.card.info.itemAttribute.vegClassifier.toLowerCase() === "veg");
        setResMenu(filteredVegMenu);
    };

    const handleNonVegSearch = () => {
        const filteredNonVegMenu = resMenuNew.filter(item => item.card.info.itemAttribute.vegClassifier.toLowerCase() === "nonveg");
        setResMenu(filteredNonVegMenu);
    };
    if (resMenu.length == 0) {
        return (
            <MenuShimmer />
        )
    }

    return (
        <div className='w-full h-full flex justify-center bg-white md:w-full m-2'>
            <div className="w-full md:w-7/12 h-full flex flex-col items-center justify-evenly">
                <div className="w-full mt-5 ">
                    <h2 className="text-lg sm:text-2xl  font-bold">{name}</h2>
                </div>


                <div className="w-full h-40 bg-white border border-solid border-gray-200 rounded-xl flex flex-row items-center justify-evenly pl-3 shadow-xl mt-5 ">
                    <div className="h-full w-3/4 flex flex-col justify-evenly">

                        <h6 className="font-bold"> {avgRating} {totalRatingString}  {costForTwoMessage}</h6>
                        <p className="font-bold ">{cuisines}</p>
                        <p className="font-bold">Outlet <span className='font-light'>{locality}</span></p>
                        <p className="font-bold">{areaName}</p>
                    </div>
                    <img className='w-1/4 h-5/6 rounded-xl' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" />

                </div>
                <div className="w-full flex justify-center mt-5">
                    <h4 className="font-bold text-xl">Menu Card</h4>
                </div>
                <div className="w-full flex justify-center mt-5">
                    <input type="text" placeholder='Search For Dishes' className="w-full h-10 rounded-xl bg-gray-100 border-2 border-solid border-gray-200 shadow-lg" value={searchMenu} onInput={(e) => setSearchMenu(e.target.value)} />
                </div>

                <div className="w-full mt-5">
                    <div className="w-full md:w-6/12 flex justify-evenly">
                        <button className="w-20 p-2 h-10 rounded-xl hover:text-white bg-green-500" onClick={handleVegSearch}>Veg</button>
                        <button className="w-20 p-2 h-10 rounded-xl hover:text-white bg-red-500 text-nowrap" onClick={handleNonVegSearch}>Non-Veg</button>
                        <button className="w-20 p-2 h-10 rounded-xl bg-gray-300">Bestseller</button>
                    </div>
                </div>

                <div className="w-full justify-evenly  mt-5 ">
                    {sortResState ? (
                        sortRes.map((thali,index)=>(
                            thali.map((subThali,index)=>(
                                <RestaurantMenuCards menu={subThali.card.info} key={index} imgData={cloudinaryImageId} />
                            ))
                        ))
                    ) : (
                        resMenu.map((menu, index) => (
                            <div className="w-full h-auto overflow-hidden justify-evenly mt-5 shadow-xl bg-gray-50 border border-gray rounded-md" key={index}>
                                <div className="w-full mt-5">
                                    <h2 className="font-bold text-lg">{menu.card.card.title}</h2>
                                </div>
                                {menu.card.card.itemCards.map((subMenu, index) => (
                                    <RestaurantMenuCards menu={subMenu.card.info} key={index} imgData={cloudinaryImageId} />
                                ))}
                            </div>
                        ))
                    )}
                </div>

            </div>

        </div>
    );
}

export default RestaurantMenu;
