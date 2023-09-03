import React from "react";
import bjj from "../assets/bjj_2.jpg";
import crossfit from "../assets/cross-fit_3.jpg";
import meditation from "../assets/bjj.jpg";
import yoga from "../assets/yoga_5.jpg";

const Classes = () => {
    return (
        <div className="my-20">
            <div className="container mx-auto px-6">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-80 w-full bg-cover"
                             style={{backgroundImage: `url(${bjj})`, backgroundPosition: 'left center'}}>
                            <button
                                className="p-2 rounded-full bg-black text-white mx-5 -mb-4 hover:bg-custom-blue focus:outline-none focus:bg-custom-blue">
                                JOIN
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">Brazilian jiu-jitsu</h3>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-80 w-full bg-cover"
                             style={{backgroundImage: `url(${crossfit})`}}>
                            <button
                                className="p-2 rounded-full bg-black text-white mx-5 -mb-4 hover:bg-custom-blue focus:outline-none focus:bg-custom-blue">
                                JOIN
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">CROSSFIT</h3>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-80 w-full bg-cover"
                             style={{backgroundImage: `url(${meditation})`}}>
                            <button
                                className="p-2 rounded-full bg-black text-white mx-5 -mb-4 hover:bg-custom-blue focus:outline-none focus:bg-custom-blue">
                                JOIN
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">MEDITATION</h3>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-80 w-full bg-cover"
                             style={{backgroundImage: `url(${yoga})`}}>
                            <button
                                className="p-2 rounded-full bg-black text-white mx-5 -mb-4 hover:bg-custom-blue focus:outline-none focus:bg-custom-blue">
                                JOIN
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">YOGA</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
};
export default Classes;
