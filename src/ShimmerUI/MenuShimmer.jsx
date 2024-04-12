import React from 'react'

function MenuShimmer() {
    const sp = "                   ";
    const sp1 = "                                ";
    const sp2 = "                                          ";
    const sp3 = "                      ";
    return (
        <div className='w-full h-full flex justify-center bg-white '>
            <div className="w-7/12 h-full flex flex-col items-center justify-evenly shimmer">
                <div className="w-full mt-5 bg-gray-200">
                    {/* Use name outside the fetchMenu function */}
                    <h2 className="text-2xl font-bold bg-gray-200">{sp1}</h2>
                </div>

                <div className="w-full h-40 bg-gray-200 border border-solid border-gray-200 rounded-xl flex flex-col justify-evenly pl-3 shadow-xl mt-5 ">
                    <h6 className="font-bold bg-gray-100">{sp}</h6>
                    <p className="font-bold bg-gray-200 ">{sp1}</p>
                    <p className="font-bold bg-gray-200">{sp3}<span className='font-light'></span></p>
                    <p className="font-bold bg-gray-200"></p>
                    {/* <p className="font-bold">{sla.deliveryTime}||</p> */}
                </div>
                <div className="w-full flex justify-center mt-5 border border-solid border-gray-200 rounded-xl  ">
                    <h4 className="font-bold text-xl"></h4>
                </div>
                <div className="w-full flex justify-center mt-5 bg-gray-200 border border-solid border-gray-200 rounded-xl ">
                    <input type="text" placeholder='' className="w-full h-10 rounded-xl bg-gray-100 border border-solid border-gray-200 shadow-lg" />
                </div>

                <div className="w-full mt-5 bg-gray-200 border border-solid border-gray-200 rounded-xl ">
                    <div className="w-6/12 flex justify-evenly">
                        <button className="w-3/12 h-10 rounded-xl hover:text-white bg-gray-100" ></button>
                        <button className="w-3/12 h-10 rounded-xl hover:text-white bg-gray-100 text-nowrap" ></button>
                        <button className="w-3/12 h-10 rounded-xl  bg-gray-100"></button>
                    </div>
                </div>
                <div className="w-full mt-5 border border-solid border-gray-200 rounded-xl ">
                    <h2 className="font-bold text-lg"></h2>
                </div>
                <div className="w-full  justify-evenly mt-5  rounded-xl ">

                    <div className="w-full h-52 flex flex-row justify-between items-center bg-gray-200  border border-solid border-gray-200 rounded-xl pl-3 shadow-xl mt-5 ">
                        <div className="w-8/12 h-48   flex flex-col justify-evenly pb-5  mt-5">
                            <h2 className="bg-gray-100 "></h2>
                            <h1 className="bg-gray-100 font-bold"></h1>
                            <h4 className="bg-gray-100 "></h4>
                            <h4 className="bg-gray-100 "></h4>
                            <p className="bg-gray-100 text-small overflow-hidden"></p>
                        </div>
                        <img alt="" className="w-3/12 h-3/4 rounded-xl p-3 mr-5 shadow-xl border-b-2 bg-gray-100 " />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MenuShimmer
