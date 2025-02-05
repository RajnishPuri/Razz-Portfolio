import React from 'react';

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react"; // Lucide icons
import "./active.css";
import Mobilelogoicon from "../icons/Mobilelogoicon";
import Desktoplogoicon from "../icons/Desktoplogoicon";
import Socialicons from "../icons/Socialicons";

export default function NavBar({ isMenuOpen, setIsMenuOpen }) {
  const [mode, setMode] = useState(true);
  function modeHandler() {
    setMode(!mode);
  }
  return (
    <>
      <div className="hidden lg:flex w-60 bg-[#07101F] h-screen fixed blink-shadow flex-col justify-between">
        <style>{`
                    @keyframes blink-shadow {
                        0%, 100% { box-shadow: 0px 0px 10px 8px #FFA500; }
                        50% { box-shadow: none; }
                    }
                    .blink-shadow { animation: blink-shadow 3s infinite; }
                `}</style>
        <Desktoplogoicon />
        <div className="w-full">
          <ul className="text-white text-center p-1">
            <hr />
            <NavLink to={"/"}><li className="nav-item">Home</li></NavLink>
            <hr />
            <NavLink to={"/about"}><li className="nav-item">About</li></NavLink>
            <hr />
            <NavLink to={"/work"}><li className="nav-item">My Work</li></NavLink>
            <hr />
            <NavLink to={"/accomplishment"}><li className="nav-item">Accomplishment</li></NavLink>
            <hr />
            <NavLink to={"/contact"}><li className="nav-item">Contact Me</li></NavLink>
            <hr />
          </ul>
        </div>
        <div className="w-full h-16 text-white flex justify-center cursor-pointer" onClick={modeHandler}>
        </div>

        <div className="flex h-14 justify-center">
          <Socialicons />
        </div>
      </div>
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#07101F] p-4 flex justify-between items-center text-white z-50">
        <div>

        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
          <X size={28} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full backdrop-blur-md flex flex-col items-center pt-20 text-white z-50 transition-all duration-300 ease-in-out justify-around">
          <Mobilelogoicon />
          <div className=" w-full flex flex-col items-center z-50">
            <ul className="text-center space-y-2 w-4/5 bg-[#07101F] p-6 rounded-lg ">
              <NavLink to={"/"} onClick={() => setIsMenuOpen(false)}>
                <li className="nav-item text-xl py-3 hover:text-[#FFA500] transition duration-300">
                  Home
                </li>
              </NavLink>
              <hr className="border-[#FFA500]/40" />
              <NavLink to={"/about"} onClick={() => setIsMenuOpen(false)}>
                <li className="nav-item text-xl py-3 hover:text-[#FFA500] transition duration-300">
                  About
                </li>
              </NavLink>
              <hr className="border-[#FFA500]/40" />
              <NavLink to={"/work"} onClick={() => setIsMenuOpen(false)}>
                <li className="nav-item text-xl py-3 hover:text-[#FFA500] transition duration-300">
                  My Work
                </li>
              </NavLink>
              <hr className="border-[#FFA500]/40" />
              <NavLink to={"/accomplishment"} onClick={() => setIsMenuOpen(false)}>
                <li className="nav-item text-xl py-3 hover:text-[#FFA500] transition duration-300">
                  Accomplishment
                </li>
              </NavLink>
              <hr className="border-[#FFA500]/40" />
              <NavLink to={"/contact"} onClick={() => setIsMenuOpen(false)}>
                <li className="nav-item text-xl py-3 hover:text-[#FFA500] transition duration-300">
                  Contact Me
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="flex h-14 justify-center">
            <Socialicons />
          </div>
        </div>
      )}

    </>
  );
}
