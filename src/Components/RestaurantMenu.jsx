import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function RestaurantMenu() {
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState({});
    const [resMenu, setResMenu] = useState([]);
    const [resMenuNew, setResMenuNew] = useState([]);
    const [searchMenu, setSearchMenu] = useState("");

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const apD = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9351929&lng=73.62448069999999&restaurantId=${resId}`;
        const data = await fetch(apD);
        const resP = await data.json();

        console.log(resP);
        setResInfo(resP?.data.cards[2]?.card?.card?.info);
        setResMenu(resP?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        setResMenuNew(resP?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        console.log(resP?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    // Destructure name and id outside the fetchMenu function
    const { name, id, avgRating, costForTwoMessage, cuisines, locality, areaName, totalRatingString, sla } = resInfo;
    const resMenuImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            handleResSearch();
        }, 500); // 500 milliseconds delay

        return () => clearTimeout(delaySearch);
    }, [searchMenu]);

    const handleResSearch = () => {
        const filteredMenu = resMenuNew.filter(item => item.card.info.name.toLowerCase().includes(searchMenu.toLowerCase()));
        setResMenu(filteredMenu);
    };
    const handleVegSearch = () => {
        const filteredVegMenu = resMenuNew.filter(item => item.card.info.itemAttribute.vegClassifier.toLowerCase()=="veg");
        setResMenu(filteredVegMenu);
    };
    const handleNonVegSearch = () => {
        const filteredNonVegMenu = resMenuNew.filter(item => item.card.info.itemAttribute.vegClassifier.toLowerCase()=="nonveg");
        setResMenu(filteredNonVegMenu);
    };

    return (
        <div className='w-full h-full flex justify-center bg-white '>
            <div className="w-7/12 h-full flex flex-col items-center justify-evenly">
                <div className="w-full mt-5">
                    {/* Use name outside the fetchMenu function */}
                    <h2 className="text-2xl font-bold">{name}</h2>
                </div>

                <div className="w-full h-40 bg-white border border-solid border-gray-200 rounded-xl flex flex-col justify-evenly pl-3 shadow-xl mt-5 ">
                    <h6 className="font-bold"> {avgRating} {totalRatingString}  {costForTwoMessage}</h6>
                    <p className="font-bold ">{cuisines}</p>
                    <p className="font-bold">Outlet <span className='font-light'>{locality}</span></p>
                    <p className="font-bold">{areaName}</p>
                    {/* <p className="font-bold">{sla.deliveryTime}||</p> */}
                </div>
                <div className="w-full flex justify-center mt-5">
                    <h4 className="font-bold text-xl">Menu Card</h4>
                </div>
                <div className="w-full flex justify-center mt-5">
                    <input type="text" placeholder='Search For Dishes' className="w-full h-10 rounded-xl bg-gray-100 border border-solid border-gray-200 shadow-lg" value={searchMenu} onChange={(e) => setSearchMenu(e.target.value)} />
                </div>

                <div className="w-full mt-5">
                    <div className="w-6/12 flex justify-evenly">
                        <button className="w-3/12 h-10 rounded-xl hover:text-white bg-green-500" onClick={handleVegSearch}>Veg</button>
                        <button className="w-3/12 h-10 rounded-xl hover:text-white bg-red-500 text-nowrap" onClick={handleNonVegSearch}>Non-Veg</button>
                        <button className="w-3/12 h-10 rounded-xl  bg-gray-300">Bestseller</button>
                    </div>
                </div>
                <div className="w-full mt-5">
                    <h2 className="font-bold text-lg">Recommended</h2>
                </div>
                <div className="w-full  justify-evenly mt-5">
                    {resMenu.map((menu, index) => (
                        <div key={index} className="w-full h-52 flex flex-row justify-between items-center  border border-solid border-gray-200 rounded-xl pl-3 shadow-xl mt-5 ">
                            <div className="w-8/12 h-48   flex flex-col justify-evenly pb-5  mt-5">
                                <h2 className="">{menu.card.info.itemAttribute.vegClassifier}</h2>
                                <h1 className="font-bold">{menu.card.info.name}</h1>
                                <h4 className="">{menu.card.info.price / 100  || Math.round(menu.card.info.defaultPrice/100)}</h4>
                                <h4 className="">3.0</h4>
                                <p className="text-small overflow-hidden">{menu.card.info.description}</p>
                            </div>
                            <img src={resMenuImg+menu.card.info.imageId} alt="" className="w-3/12 h-3/4 rounded-xl p-3 mr-5 shadow-xl border-b-2" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenu;
