import React, { useContext } from 'react'
import myData from '../utils/UserContext'

function RestaurantMenuCards({ menu, imgData }) {
    const AddMahiti= useContext(myData)
    const resMenuImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"
    return (
        <div className="w-full h-52 sm:min-h-38 flex flex-row justify-between items-center border-2 border-solid border-gray-200 rounded-xl pl-3 shadow-xl mt-5 ">
            <div className="w-3/4 sm:w-full flex flex-col justify-evenly pb-5 mt-5">
                <h2 className="">{menu.itemAttribute.vegClassifier}</h2>
                <h1 className="font-bold">{menu.name}</h1>
                <h4 className="">{menu.price / 100 || Math.round(menu.defaultPrice / 100)}</h4>
                <h4 className="">3.0</h4>
                <p className="text-small overflow-hidden">{menu.description}</p>
                <p>{AddMahiti.name}</p>
            </div>
            <div className="w-1/4 h-5/6 overflow-hidden mr-4 flex justify-center items-center ">
                <img src={resMenuImg + menu.imageId} alt="" className=" object-cover w-auto rounded-xl  mr-5 shadow-xl border-b-2" />
            </div>

        </div>
    )
}

export default RestaurantMenuCards
