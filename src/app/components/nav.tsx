'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown} from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-white   fixed nav">
      <div className="flex">
      <div className="w-[41px] h-[41px] bg-red-500 rounded-full">
       
      <div className="w-5 h-5 relative">
  <div className="w-5 h-5 left-0 top-0 absolute">
  
  </div>
</div>
      </div>
      <div>
        <div className="flex">
        <div className="w-[75.45px] h-6 text-center text-zinc-900 text-[17px] font-bold ">Location</div>
        <FaChevronDown color="black"/>
        </div>
        <div className="w-[182.59px] h-[18.35px] opacity-70 text-zinc-900 text-[13px] font-medium ">Mira Road, Mumbai</div>
      </div>
      </div>



      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>


      <div
      onClick={() => setNav(!nav)}
      className="w-[41px] h-[41px] cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
  >
      {nav ?  <FaTimes size={30} />:<div className="w-[41px] h-[41px] bg-red-500 rounded-full cursor-pointer pr-4 z-10 text-gray-500 md:hidden"/> }
      <div className="w-5 h-5 relative">
  <div className="w-5 h-5 left-0 top-0 absolute">
  
  </div>
</div>
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
