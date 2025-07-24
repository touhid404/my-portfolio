import React from 'react';
import { Link } from 'react-scroll';
const NavBar = () => {
    return (
         <nav className=" max-w-5xl mx-auto bg-black  text-white rounded-2xl  px-6  py-3 flex justify-between items-center text-sm">
        <div className="flex space-x-6">
          <Link to="hero" smooth duration={600} className="cursor-pointer hover:underline">Home</Link>
          <Link to="about" smooth duration={600} className="cursor-pointer hover:underline">About Me</Link>
          <Link to="projects" smooth duration={600} className="cursor-pointer hover:underline">Projects</Link>
          <Link to="contact" smooth duration={600} className="cursor-pointer hover:underline">Contact</Link>
        </div>
        <button className="bg-white text-black font-bold py-1.5 px-2 rounded-xl">Get Started ↗</button>
      </nav>
    );
};

export default NavBar;