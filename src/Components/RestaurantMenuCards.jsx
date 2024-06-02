import React, { useState, useContext } from 'react';
import myData from '../utils/UserContext';
import { useDispatch } from 'react-redux';
import { addItems, removeItems } from '../utils/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RestaurantMenuCards({ menu, imgData, toggle }) {
    const [showMore, setShowMore] = useState(false);
    const AddMahiti = useContext(myData);
    const resMenuImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
    const notify = (menu) => toast(`${menu.name} Added To Cart`);

    const dispatch = useDispatch();
    
    const handleAddItems = (menu) => {
        dispatch(addItems(menu));
        notify(menu);
    };

    const handleRemoveItems = (menu) => {
        dispatch(removeItems(menu.id));
    };

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="w-full h-auto flex flex-row justify-between items-center overflow-hidden border-2 border-solid border-gray-200 rounded-xl pl-3 shadow-xl mt-5 ">
            <div className="w-2/4 md:w-3/4 lg:3/4 flex flex-col justify-evenly pb-5 mt-5 overflow-hidden">
                <h2 className="font-bold">{menu.itemAttribute.vegClassifier}</h2>
                <h1 className="font-bold">{menu.name}</h1>
                <h4 className="">Rs {menu.price / 100 || Math.round(menu.defaultPrice / 100)}</h4>
                <h4 className="">3.0</h4>
                <div className="flex items-center">
                    <p className={`text-small overflow-hidden ${!showMore ? 'truncate-text' : ''}`}>
                        {menu.description}
                    </p>
                    {!showMore && (
                        <span className="text-orange-400 ml-2 text-sm" onClick={toggleShowMore}>
                            Show more
                        </span>
                    )}
                    {showMore && (
                        <span className="text-orange-400 ml-2 p-0 text-sm" onClick={toggleShowMore}>
                            Show less
                        </span>
                    )}
                </div>
                
                <p>{AddMahiti.name}</p>
            </div>
            <div className="w-2/4 md:w-1/4 h-5/6 overflow-hidden mr-4 flex flex-col justify-center items-center">
                <div className="w-full overflow-hidden">
                    <img src={resMenuImg + menu.imageId} alt="" className="w-full h-full rounded-xl shadow-xl border-b-2" />
                </div>
                <div className="w-2/6 md:w-2/6 lg:w-1/5 h-2/6 flex justify-center items-center">
                    <ToastContainer position="top-center" />
                    {toggle ? (
                        <button className="bg-orange-400 text-white text-sm p-2 rounded-xl" onClick={() => handleRemoveItems(menu)}>🗑
                            {/* <img src="https://img.icons8.com/color/480/delete-forever.png" alt="delete-forever" className='w-auto' /> */}
                        </button>
                    ) : (
                        <button className="bg-orange-400 text-white text-sm p-2 rounded-xl" onClick={() => handleAddItems(menu)}>
                            Add To Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenuCards;
