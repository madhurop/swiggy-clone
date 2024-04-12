import React from 'react'

function FoodCard(props) {
    const { id, imageId } = props.resData
    // const { link } = props.resData.action

    const myImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + imageId;
    
    return (

        <div key={id} className="w-42 min-w-36 h-32 rounded-xl text-center imgShadow">
            
                <img className="rounded-xl boxShad " src={myImg} />
            

        </div>

    )
}

export default FoodCard;
