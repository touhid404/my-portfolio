import {
  FaFigma, FaHtml5, FaCss3Alt, FaReact, FaJs, FaPhp, FaPython, FaDatabase, FaGitAlt
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiMongodb, SiMysql, SiExpress, SiNextdotjs,
  SiCanva, SiAdobephotoshop, SiAdobexd, SiTailwindcss, SiBootstrap, SiDaisyui
} from 'react-icons/si';

const techClass =
  'flex flex-col items-center justify-center gap-2 w-20 h-20 text-sm text-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300';

const Skills = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-3xl font-bold mb-14">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            My Skills
          </span>
        </h1>

        <div className="space-y-20">
          {/* Tools */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-lg font-semibold text-blue-400">01</span>
              <h3 className="text-2xl font-bold tracking-wide">Tools</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className={techClass}>
                <SiDaisyui className="text-4xl text-pink-400" />
                <span>DaisyUI</span>
              </div>
              <div className={techClass}>
                <FaFigma className="text-4xl text-pink-500" />
                <span>Figma</span>
              </div>
              <div className={techClass}>
                <SiTailwindcss className="text-4xl text-cyan-400" />
                <span>Tailwind CSS</span>
              </div>
              <div className={techClass}>
                <SiBootstrap className="text-4xl text-purple-500" />
                <span>Bootstrap</span>
              </div>
              <div className={techClass}>
                <FaGitAlt className="text-4xl text-orange-500" />
                <span>Git</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-lg font-semibold text-purple-400">02</span>
              <h3 className="text-2xl font-bold tracking-wide">Tech Stack</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className={techClass}>
                <FaHtml5 className="text-4xl text-orange-500" />
                <span>HTML5</span>
              </div>
              <div className={techClass}>
                <FaCss3Alt className="text-4xl text-blue-500" />
                <span>CSS3</span>
              </div>
              <div className={techClass}>
                <FaJs className="text-4xl text-yellow-400" />
                <span>JavaScript</span>
              </div>
              <div className={techClass}>
                <FaPhp className="text-4xl text-violet-600" />
                <span>PHP</span>
              </div>
              <div className={techClass}>
                <SiC className="text-4xl text-sky-300" />
                <span>C</span>
              </div>
              <div className={techClass}>
                <SiCplusplus className="text-4xl text-blue-400" />
                <span>C++</span>
              </div>
              <div className={techClass}>
                <FaPython className="text-4xl text-yellow-300" />
                <span>Python</span>
              </div>
              <div className={techClass}>
                <SiExpress className="text-4xl text-white" />
                <span>Express</span>
              </div>
              <div className={techClass}>
                <SiNextdotjs className="text-4xl text-white" />
                <span>Next.js</span>
              </div>
              <div className={techClass}>
                <SiMysql className="text-4xl text-blue-600" />
                <span>MySQL</span>
              </div>
              <div className={techClass}>
                <SiMongodb className="text-4xl text-green-500" />
                <span>MongoDB</span>
              </div>
              <div className={techClass}>
                <FaDatabase className="text-4xl text-gray-400" />
                <span>Database</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
