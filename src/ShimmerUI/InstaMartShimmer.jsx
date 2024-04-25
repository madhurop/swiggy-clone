import React from 'react'

function InstaMartShimmer() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    return (
        <div className="w-full flex flex-col items-center">

                <input className='w-8/12 h-10 bg-gray-100 rounded-lg  shadow-lg mt-5 shimmer' type="text"  />
            <div className="w-8/12 mt-5 flex flex-row gap-4 flex-wrap justify-evenly">
                {
                arr.map((a, i) => (
                    <div key={i} className="bg-gray-300 flex flex-col   justify-center   w-36  min-h-40 overflow-hidden rounded-lg shadow-xl border border-gray-300 shimmer  ">
                        <h4 className="text-sm overflow-hidden  text-nowrap text-center bg-gray-100 w-4/6 h-5 border border-gray-200 ml-2 rounded-md"></h4>
                        <img className=" bg-gray-100  w-5/6 h-24 mt-2 ml-2 rounded-lg " />

                    </div>

                ))
            }


            </div>
        </div>

    )
}

export default InstaMartShimmer
