import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import logo from "../../images/logo4.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 px-20">
      <div className="md_flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-64 cursor-pointer" />
      </div>
      <ul className="text-emerald-300 md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <Link to="/" className="mx-4 hover:text-white">
          Home
        </Link>
        <Link to="/SendEth" className="mx-4 hover:text-white">
          Send Cryptocurrency
        </Link>
        <Link to="/News" className="mx-4 hover:text-white">
          News
        </Link>
        <li className="bg-[#3cffe2] py-2 px-7 mx-4 rounded-none cursor-pointer hover:bg-[#45e0b4] text-black hover:text-white">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
           flex flex-col justify-start items-end rounded-md blue-glassmorphism text-emerald-300 animate-slide-in"
          >
            <li className="text-3xl 2-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {/** Add mobile navigation buttons */}
            <li className="bg-[#3cffe2] py-2 px-7 mx-4 rounded-none cursor-pointer hover:bg-[#45e0b4] text-black hover:text-white">
              Login
            </li>
            <Link to="/" className="mx-4 hover:text-white">
              Home
            </Link>
            <Link to="/Swap" className="mx-4 hover:text-white">
              Exchange
            </Link>
            <Link to="/" className="mx-4 hover:text-white">
              Contact
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
