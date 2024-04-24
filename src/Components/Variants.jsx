import React from 'react'

function Variants() {
  return (
    <div className="w-full h-60 border-2 border-black rounded-lg flex items-center">
        <div className="w-3/4 h-56 border border-black rounded-lg items-center flex flex-col">
            <div className="border border-black w-11/12 h-28 items-center flex flex-col">
                <div className="border border-black items-center flex flex-col">
                    <div className="">Spicy BBq </div>
                    <div className="">Custoised as per your taste</div>
                </div>
            </div>
            <div className="w-3/4 h-56 flex flex-col items-center border border-black">
                <div className="w-3/4 h-10 border border-black"></div>
                <div className="w-3/4 h-10 border border-black flex flex-col">
                    <div className="border border-black w-full h-10"></div>
                    <div className="border border-black w-full h-10"></div>
                    <div className="border border-black w-full h-10"></div>
                </div>

            </div>

        </div>

      
    </div>
  )
}

export default Variants
