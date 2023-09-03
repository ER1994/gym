import React from "react";
import yoga from "../assets/yoga_2.jpg";

const Home = () => {
    return (
        <div className={'relative inset-0 bg-no-repeat bg-center bg-cover h-[100vh] w-full z-0'}>
            <div className={'absolute inset-0 bg-no-repeat bg-custom-position bg-cover'}
                 style={{backgroundImage: `url(${yoga})`}}>
                <div
                    className={'flex flex-col gap-3 absolute text-4xl uppercase font-bold right-[6rem] bottom-[10rem] min450:right-[10rem] min450:bottom-[10rem] min540:right-[13rem] min540:bottom-[9rem] min620:right-[20rem] min620:bottom-[8rem] min760:right-[22rem] min760:bottom-[9rem] min800:right-[1rem] min800:bottom-[7rem] min1100px:right-[3rem] min1100px:bottom-[12rem] w-[55%] min620:w-[40%]'}>
                    <h1 className={'text-[0.6rem] min375:text-[0.8rem] min670:text-[1rem] min800:text-2xl xl:text-3xl leading-tight lg:leading-normal'}>
                        Not Muscles – We Sculpt Character. Become Stronger</h1>
                    <a href='/classes' className={'text-[0.5rem] min375:text-[0.6rem] min670:text-[0.8rem] min800:text-xl xl:text-2xl text-center border-2 border-black bg-[#f0f0f2] w-[60%] hover:text-custom-blue'}>Find
                        strength with us</a>

                </div>
            </div>
        </div>
    );
};


export default Home;