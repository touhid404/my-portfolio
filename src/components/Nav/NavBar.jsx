import React from 'react';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';


const NavBar = () => {
  return (
    <nav className="max-w-5xl mx-auto bg-black/30 backdrop-blur-md md:rounded-2xl px-6 py-3 flex justify-between items-center text-sm">
      {/* Left - Brand or Menu */}
      <div className="md:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <FaBars className="text-xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black/40 rounded-box w-52 text-white"
          >
            <li>
              <Link to="hero" smooth duration={600} className="cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth duration={600} className="cursor-pointer">
                About Me
              </Link>
            </li>
            <li>
              <Link to="skills" smooth duration={600} className="cursor-pointer">
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth duration={600} className="cursor-pointer">
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth duration={600} className="cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Center - Full Menu (hidden on small screens) */}
      <div className="hidden md:flex space-x-6">
        <Link to="hero" smooth duration={600} className="cursor-pointer hover:underline">
          Home
        </Link>
        <Link to="about" smooth duration={600} className="cursor-pointer hover:underline">
          About Me
        </Link>
        <Link to="skills" smooth duration={600} className="cursor-pointer hover:underline">
          Skills
        </Link>
        <Link to="circle" smooth duration={600} className="cursor-pointer hover:underline">
          Mycircle
        </Link>
        <Link to="projects" smooth duration={600} className="cursor-pointer hover:underline">
          Projects
        </Link>
      </div>

      <div>
        <button  className="text-white bg-black/40 font-medium py-2 px-4 rounded-xl">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default NavBar;