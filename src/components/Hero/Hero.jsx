import React from 'react';
import img1 from '../../assets/dp.jpg';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="mt-4 py-20  flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 space-y-6 text-center md:text-left"
      >
        <h2 className="text-gray-700">Hi! I am Touhidul Islam</h2>

        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          <span className="mr-2">I'm a</span>
          <span className="text-blue-600">
            <Typewriter
              words={['Frontend Developer', 'React Developer', 'UI/UX Enthusiast', 'JavaScript Lover']}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="text-gray-600 text-lg">
          I love turning complex ideas into clean, user-friendly designs that people actually enjoy using.
        </p>

        <div className="flex justify-center md:justify-start md:gap-4">
          <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800">
            Download CV
          </button>
          <button className="bg-gray-300 px-6 py-2 rounded-xl hover:bg-gray-200">
            Case Study
          </button>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="md:w-1/2 flex justify-center my-5 md:my-0"
      >
        <img
          src={img1}
          alt="Touhidul Islam"
          className="w-[500px] h-[300px] rounded-2xl shadow-lg object-cover saturate-0 hover:saturate-100 transition duration-300"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
