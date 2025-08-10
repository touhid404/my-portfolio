import {
  FaFigma, FaHtml5, FaCss3Alt, FaReact, FaJs, FaPhp, FaPython, FaDatabase, FaGitAlt
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiMongodb, SiMysql, SiExpress, SiNextdotjs,
  SiCanva, SiAdobephotoshop, SiAdobexd, SiTailwindcss, SiBootstrap, SiDaisyui
} from 'react-icons/si';
import { motion } from 'framer-motion';

const techClass =
  'flex flex-col items-center justify-center gap-2 w-20 h-20 text-sm text-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // delay between each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const Skills = () => {
  return (
    <section className="py-20 px-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-center text-3xl font-bold mb-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            [ My Skills ]
          </span>
        </motion.h1>

        <div className="space-y-20">
          {/* Tools */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-lg font-semibold text-blue-400">01</span>
              <h3 className="text-2xl font-bold tracking-wide">Tools</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
            <motion.div
              className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {[
                { icon: <SiDaisyui className="text-4xl text-pink-400" />, name: 'DaisyUI' },
                { icon: <FaFigma className="text-4xl text-pink-500" />, name: 'Figma' },
                { icon: <SiTailwindcss className="text-4xl text-cyan-400" />, name: 'Tailwind CSS' },
                { icon: <SiBootstrap className="text-4xl text-purple-500" />, name: 'Bootstrap' },
                { icon: <FaGitAlt className="text-4xl text-orange-500" />, name: 'Git' },
              ].map((tool, idx) => (
                <motion.div key={idx} className={techClass} variants={cardVariants}>
                  {tool.icon}
                  <span>{tool.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-lg font-semibold text-purple-400">02</span>
              <h3 className="text-2xl font-bold tracking-wide">Tech Stack</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
            <motion.div
              className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {[
                { icon: <FaHtml5 className="text-4xl text-orange-500" />, name: 'HTML5' },
                { icon: <FaCss3Alt className="text-4xl text-blue-500" />, name: 'CSS3' },
                { icon: <FaJs className="text-4xl text-yellow-400" />, name: 'JavaScript' },
                { icon: <FaPhp className="text-4xl text-violet-600" />, name: 'PHP' },
                { icon: <SiC className="text-4xl text-sky-300" />, name: 'C' },
                { icon: <SiCplusplus className="text-4xl text-blue-400" />, name: 'C++' },
                { icon: <FaPython className="text-4xl text-yellow-300" />, name: 'Python' },
                { icon: <SiExpress className="text-4xl text-white" />, name: 'Express' },
                { icon: <SiNextdotjs className="text-4xl text-white" />, name: 'Next.js' },
                { icon: <SiMysql className="text-4xl text-blue-600" />, name: 'MySQL' },
                { icon: <SiMongodb className="text-4xl text-green-500" />, name: 'MongoDB' },
                { icon: <FaDatabase className="text-4xl text-gray-400" />, name: 'Database' },
              ].map((tech, idx) => (
                <motion.div key={idx} className={techClass} variants={cardVariants}>
                  {tech.icon}
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
