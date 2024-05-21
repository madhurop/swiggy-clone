import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import MenuShimmer from '../ShimmerUI/MenuShimmer';
import Variants from './Variants';
import InstaMart from './InstaMart';
import RestaurantMenuCards from './RestaurantMenuCards';
import { useDispatch, useSelector } from 'react-redux';
import dataSlice from '../utils/dataSlice';
import { addData } from '../utils/dataSlice';

function RestaurantMenu() {
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState({});
    const [resMenu, setResMenu] = useState([]);
    const [resMenuNew, setResMenuNew] = useState([]);
    const [searchMenu, setSearchMenu] = useState("");
    const [sortRes, setSortRes] = useState()
    const [sortResState, setSortResState] = useState(false)
    const selectData = useSelector((store) => store.data.item)

    const dispatch = useDispatch()
    const handleData = () => {
        dispatch(addData())
    }

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
            const N = resP?.data.cards.length;
            const filterResMenu = resP?.data.cards[N - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(e => e.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
            setResInfo(resP?.data.cards[2]?.card?.card?.info);
            console.log("ResMenu", filterResMenu)
            setResMenu(filterResMenu)
            setResMenuNew(filterResMenu)
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

    const handleItemSearch = (mb) => {
        console.log(mb)
        const filteredMenu = resMenuNew
            .map(item =>
                item.card.card.itemCards.filter(sub =>
                    sub.card.info.itemAttribute.vegClassifier == mb
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
        <div className="w-full h-full overflow-hidden overflow-y-auto flex  justify-center bg-white md:w-full m-2">
            <div className="w-full md:w-7/12 min-h-9/12 flex flex-col items-center justify-evenly">
                {/* Restaurant Info Section */}
                <div className="w-full mt-5">
                    {/* Restaurant Name */}
                    <h2 className="text-lg sm:text-2xl font-bold">{resInfo.name}</h2>
                </div>
                {/* Restaurant Details Section */}
                <div className="w-full h-40 bg-white border border-solid border-gray-200 rounded-xl flex flex-row items-center justify-evenly pl-3 shadow-xl mt-5 ">
                    {/* Restaurant Details */}
                    {/* Adjust the grid layout based on screen size */}
                    <div className="h-full w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-x-4 md:gap-y-0">
                        <div className="flex flex-col justify-evenly">
                            <h6 className="font-bold">{resInfo.avgRating} {resInfo.totalRatingString} {resInfo.costForTwoMessage}</h6>
                            <p className="font-bold">{resInfo.cuisines}</p>
                        </div>
                        <div className="flex flex-col justify-evenly">
                            <p className="font-bold">Outlet <span className='font-light'>{resInfo.locality}</span></p>
                            <p className="font-bold">{resInfo.areaName}</p>
                        </div>
                    </div>
                    {/* Restaurant Image */}
                    <img className='w-1/4 h-5/6 rounded-xl hidden md:block' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resInfo.cloudinaryImageId} alt="" />
                </div>
                {/* Menu Section */}
                <div className="w-full flex flex-col items-center mt-5">
                    <h4 className="font-bold text-xl">Menu Card</h4>
                    <input type="text" placeholder='Search For Dishes' className="w-full md:w-6/12 h-10 rounded-xl bg-gray-100 border-2 border-solid border-gray-200 shadow-lg mt-3" value={searchMenu} onInput={(e) => setSearchMenu(e.target.value)} />
                    {!resInfo.veg && (
                        <div className="w-full md:w-6/12 flex justify-between mt-3">
                            <button className="w-20 p-2 h-10 rounded-xl hover:text-white bg-green-500" onClick={() => handleItemSearch("VEG")}>Veg</button>

                            <button className="w-20 p-2 h-10 rounded-xl hover:text-white bg-red-500 text-nowrap" onClick={() => handleItemSearch("NONVEG")}>Non-Veg</button>
                            {/* <button className="w-20 p-2 h-10 rounded-xl bg-gray-300" onClick={handleData}>Bestseller</button> */}
                        </div>
                    )}
                </div>
                {/* Render Menu Cards */}
                <div className="w-full mt-5">
                    {/* Check if sortResState is true, if true render sorted menu, otherwise render default menu */}
                    {sortResState ? (
                        sortRes.map((thali, index) => (
                            thali.map((subThali, index) => (
                                <RestaurantMenuCards menu={subThali.card.info} key={index} imgData={resInfo.cloudinaryImageId} />
                            ))
                        ))
                    ) : (
                        resMenu.map((menu, index) => (
                            <div className="w-full h-auto overflow-hidden justify-evenly mt-5 shadow-xl bg-gray-50 border border-gray rounded-md" key={index}>
                                <div className="w-full mt-5">
                                    <h2 className="font-bold text-lg">{menu.card.card.title}</h2>
                                </div>
                                {menu.card.card.itemCards.map((subMenu, index) => (
                                    <RestaurantMenuCards menu={subMenu.card.info} key={index} imgData={resInfo.cloudinaryImageId} />
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
