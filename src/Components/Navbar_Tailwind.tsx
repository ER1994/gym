import React, {ReactNode, useState} from "react";
import Logo from '../assets/logo.jpg';
import {Link} from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isHoverLog, setHoverLog] = useState(false);
    const [isHoverJoin, setHoverJoin] = useState(false);
    return (
        <header className={`fixed flex items-center w-full bg-white px-14 text-lg z-10`}>
            <div className="container">
                <div className="flex items-center justify-between -mx-4">
                    <div className="max-w-full px-4 w-60">
                        <Link to="/" className="block w-full py-5">
                            <img
                                src={Logo}
                                alt="logo"
                                className="w-full"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center justify-between w-full px-4">
                        <div>
                            <button
                                // click="navbarOpen = !navbarOpen"
                                onClick={() => setOpen(!open)}
                                // :className="navbarOpen && 'navbarTogglerActive' "
                                id="navbarToggler"
                                className={` ${
                                    open && "navbarTogglerActive"
                                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 vw1230px:hidden`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                            </button>
                            <nav
                                // :className="!navbarOpen && 'hidden' "
                                id="navbarCollapse"
                                className={`absolute left-25 top-5 w-full max-w-[250px] rounded-lg bg-white py-5 px-4 shadow vw1230px:block vw1230px:w-auto vw1230px:max-w-full vw1230px:shadow-none z-10 ${
                                    !open && "hidden"
                                } `}
                            >
                                <ul className="block vw1230px:flex" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary font-light text-sm hover:text-custom-blue"
                                        NavLink="/about"
                                    >
                                        O NAS
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary font-light text-sm hover:text-custom-blue"
                                        NavLink="/gallery"
                                    >
                                        GALERIA
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary font-light text-sm hover:text-custom-blue"
                                        NavLink="/schedule"
                                    >
                                        GRAFIK
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary font-light text-sm hover:text-custom-blue"
                                        NavLink="/pricing"
                                    >
                                        CENNIK
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary font-light text-sm hover:text-custom-blue"
                                        NavLink="/classes"
                                    >
                                        ZAJĘCIA
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary font-light text-sm hover:text-custom-blue"
                                        NavLink="/team"
                                    >
                                        ZESPÓŁ
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary font-light text-sm hover:text-custom-blue"
                                        NavLink="/contact"
                                    >
                                        KONTAKT
                                    </ListItem>
                                </ul>
                            </nav>
                        </div>
                        <div className="justify-end hidden pr-16 sm:flex ">
                            <a
                                href="/signin"
                                className="py-3 text-base font-medium px-4 text-dark hover:text-primary flex ali"
                            >
                                <svg className="w-7 h-7 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={() => setHoverLog(true)} onMouseLeave={() => setHoverLog(false)}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke={isHoverLog ? "#048dcd" : "#000000"} strokeWidth="0.8399999999999999" strokeLinejoin="round"></path> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke={isHoverLog ? "#048dcd" : "#000000"} strokeWidth="0.8399999999999999" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </a>

                            <Link
                                to="/contact"
                                className="bg-primary px-2 flex gap-x-2 items-center border-2 border-black rounded-md bg-[#f0f0f2]"
                            >
                                <svg className="w-6 h-6 border-2 border-black rounded-md transition-transform duration-500 hover:rotate-180 hover:border-custom-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={() => setHoverJoin(true)} onMouseLeave={() => setHoverJoin(false)}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke={isHoverJoin ? "#048dcd" : "#000000"} strokeWidth="0.672" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                <p className={"font-light text-xs"} style={{ fontFamily: 'Roboto, sans-serif' }}>JOIN US!</p>
                            </Link>
                            </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
interface ListItemProps {
    children: ReactNode;
    navItemStyles: string;
    NavLink: string;
}

const ListItem = ({ children, navItemStyles, NavLink }: ListItemProps) => {
    return (
        <>
            <li>
                <Link
                    to={NavLink}
                    className={`flex py-2 text-base font-medium lg:ml-8 lg:inline-flex ${navItemStyles}`}
                >
                    {children}
                </Link>
            </li>
        </>
    );
};
