import React from 'react';
import { motion } from 'framer-motion';

const MyJourney = () => {
  return (
    <section className="bg-black/40 backdrop-blur-md  w-full flex items-center justify-center my-3 md:my-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-5xl"
      >
        <p className=" py-7 mx-2 text-justify text-white  leading-relaxed ">
          My journey as a developer began with curiosity and a passion for learning.
          I was fascinated by how websites worked — why users click certain elements,
          how data flows behind the scenes, and what makes a digital experience smooth and intuitive.
          Over time, this curiosity evolved into a mission to build clean, functional, and delightful user interfaces.
        </p>
      </motion.div>
    </section>
  );
};

export default MyJourney;
