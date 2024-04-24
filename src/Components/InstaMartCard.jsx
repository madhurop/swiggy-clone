import React from 'react'

function InstaMartCard(props) {
    const list = props.list
  return (
    <div className="bg-red-300 w-36  min-h-40 overflow-hidden rounded-lg shadow-lg hover:bg-red-400  ">
                <h4 className="text-sm overflow-hidden  text-nowrap text-center">{list.name ||list.displayName}</h4>
                <img src={"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/" + list.imageId} alt={list.name || list.displayName} className="p-4 " />
                {/* <h4 className="text-sm overflow-hidden  text-nowrap text-center">{list.displayName}</h4> */}
                {/* {console.log(list.nodes)} */}
              </div>
  )
}

export default InstaMartCard
