import React from 'react';
import { Link, Element } from 'react-scroll';
import img1 from '../assets/dp.jpg';
const HeroSection = () => {
  return (
    <div className="font-sans text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white z-10 shadow-sm px-6 md:px-16 py-4 flex justify-between text-sm">
        <div className="flex space-x-6">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:underline">Home</Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:underline">About Me</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:underline">Projects</Link>
        </div>
        <div>
          <a href="#" className="hover:underline">Book A Call ↗</a>
        </div>
      </nav>

      {/* Hero Section */}
      <Element name="hero">
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-24 pt-32 bg-white">
          {/* Left */}
          <div className="md:w-1/2 space-y-6">
            <div className="text-sm text-gray-400 rotate-[-90deg] absolute left-[-40px] top-[35%] origin-left">
              Product designer
            </div>

            <div className="text-2xl font-medium">
              +200 <span className="text-gray-500 text-base">Project completed</span>
            </div>
            <div className="text-2xl font-medium">
              +50 <span className="text-gray-500 text-base">Startup raised</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold">Hello</h1>
            <p className="text-xl text-gray-600">— It’s D.Nova a design wizard</p>

            <p className="text-sm mt-8 text-gray-500">Scroll down ↓</p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src={img1}
              alt="Profile"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Year on left */}
          <div className="absolute bottom-4 left-6 text-xs text-gray-400">2024</div>
        </div>
      </Element>

      {/* About Me Section */}
      <Element name="about">
        <div className="min-h-screen px-6 md:px-16 py-20 bg-gray-50">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            I’m a passionate product designer with over a decade of experience creating clean,
            functional interfaces for modern brands. I combine design thinking with business strategy
            to deliver impactful digital products. My goal is to bridge the gap between design and
            development through collaboration and creativity.
          </p>
        </div>
      </Element>

      {/* Projects Section */}
      <Element name="projects">
        <div className="min-h-screen px-6 md:px-16 py-20 bg-white">
          <h2 className="text-4xl font-bold mb-6">Projects</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✅ UX Redesign for Fintech App</li>
            <li>✅ Branding & Product Strategy for Health Startup</li>
            <li>✅ Interactive Dashboard for SaaS Analytics</li>
            <li>✅ Mobile App UI/UX for Social Network</li>
          </ul>
        </div>
      </Element>
    </div>
  );
};

export default HeroSection;
