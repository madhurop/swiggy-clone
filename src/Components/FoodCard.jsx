import React from 'react'

function FoodCard(props) {
    const { id, imageId } = props.resData
    // const { link } = props.resData.action

    const myImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + imageId;
    
    return (

        <div key={id} className="w-28 md:w-32 lg:w-36  h-auto rounded-xl text-center imgShadow dropFoodCard">
            
                <img className="rounded-xl boxShad " src={myImg} />
            

        </div>

    )
}

export default FoodCard;
