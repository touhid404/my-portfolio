import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/myP.jpg';

const AboutMe = () => {
  return (
    <motion.section
      className=" md:py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className=" mx-auto">
        {/* Heading */}
        <h1 className="text-center  text-2xl font-semibold  text-black/40 mb-10">
         [ About Myself ]
        </h1>

        {/* Sub heading */}
        <p className=" text-justify md:text-center text-xl text-gray-700 max-w-5xl mx-auto mb-12">
          Hi, I’m <span className="font-bold">Touhidul Islam</span> — someone who believes that great design is part creativity, part empathy, and part coffee-fueled hustle.
        </p>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Left Block */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Transforming Ideas into Digital Experiences
              </h3>
              <p className="text-gray-600 text-justify">
                You bring the vision, I bring the process – together we build a website that works.
              </p>
            </div>
            <button className="bg-black/40  text-white px-6 py-2 rounded-xl hover:bg-gray-800">
              Start Your Project
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={img1}
              alt="Touhidul Islam"
              className="w-[300px] h-[380px] object-cover rounded-2xl rounded-t-[100px] shadow-xl"
            />
          </div>

          {/* Right Block */}
          <div className="space-y-6 text-gray-700 text-justify">
            <p>
              I’m Touhidul Islam – a 3rd-year CSE student at UIU with a passion for frontend development and creating user-friendly digital experiences.
            </p>
            <p>
              I enjoy turning simple ideas into clean, scalable interfaces. Whether it's collaborating on large projects or building solo, I’m driven by creativity and curiosity.
            </p>
            <p>
              Outside of coding, I often recharge by exploring design trends, watching tech content, or playing games.
            </p>
            <a href="#more" className="text-black/40 font-semibold hover:underline">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
