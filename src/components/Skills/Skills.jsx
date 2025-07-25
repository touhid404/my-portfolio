import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFigma, FaHtml5, FaCss3Alt,
  FaReact, FaJs, FaPhp, FaPython,
  FaDatabase, FaCuttlefish
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiMongodb, SiMysql,
  SiExpress, SiNextdotjs, SiCanva,
  SiAdobephotoshop, SiAdobexd
} from 'react-icons/si';

const Skills = () => {
  return (
    <section className="bg-black/40 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
         <h1 className="text-center  text-2xl font-semibold  text-black/40 mb-10">
         [ My Skills ]
        </h1>
        <motion.div className="flex flex-col gap-12"
        initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Tools */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start ">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-sm">01</span> TOOLS
            </h3>
            <div className="flex flex-wrap gap-6 text-4xl">
              <FaFigma className="text-pink-500" title="Figma" />
              <SiCanva className="text-sky-400" title="Canva" />
              <SiAdobexd className="text-fuchsia-500" title="Adobe XD" />
              <SiAdobephotoshop className="text-blue-400" title="Photoshop" />
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start ">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-sm ">02</span> TECH STACK
            </h3>
            <div className="flex flex-wrap gap-6 text-4xl">
              <FaHtml5 className="text-orange-500" title="HTML5" />
              <FaCss3Alt className="text-blue-500" title="CSS3" />
              <FaJs className="text-yellow-400" title="JavaScript" />
              <FaPhp className="text-violet-600" title="PHP" />
              <SiC className="text-sky-300" title="C" />
              <SiCplusplus className="text-blue-400" title="C++" />
              <FaPython className="text-yellow-300" title="Python" />
              <SiExpress className="text-white" title="Express.js" />
              <SiNextdotjs className="text-white" title="Next.js" />
              <SiMysql className="text-blue-600" title="MySQL" />
              <SiMongodb className="text-green-500" title="MongoDB" />
              <FaDatabase className="text-gray-400" title="Database" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
