import yoga from "../assets/yoga_2.jpg";
import React from "react";
// import Navbar_T from "./Navbar_Tailwind";

const Background = () => {
    return (
        <div className={'fixed inset-0  bg-no-repeat bg-center bg-cover'} style={{ backgroundImage: `url(${yoga})`, zIndex: -1 }}></div>
    );
};
export default Background;