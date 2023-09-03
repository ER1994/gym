import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar_Tailwind";
import Home from "./Components/Home";
import {About} from "./Components/About";
import Footer from "./Components/Footer";
import {Gallery} from "./Components/Gallery";
import Schedule from "./Components/Schedule";
import {Pricing} from "./Components/Pricing";
import Classes from "./Components/Classes";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Signin from "./Components/SigningIn";

function App() {
    return (
        <Router>
            <div className="min-w-[350px] flex flex-col min-h-[100vh]" style={{fontFamily: 'Roboto, sans-serif'}}>
                <header className="flex-grow">
                    <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signin" element={<Signin />} />
                </Routes>
                </header>
                <Footer></Footer>
            </div>
        </Router>
    );
}

export default App;
