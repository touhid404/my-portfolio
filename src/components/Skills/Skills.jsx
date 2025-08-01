import {
  FaFigma, FaHtml5, FaCss3Alt,
  FaReact, FaJs, FaPhp, FaPython,
  FaDatabase
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiMongodb, SiMysql,
  SiExpress, SiNextdotjs, SiCanva,
  SiAdobephotoshop, SiAdobexd
} from 'react-icons/si';

const techClass =
  'flex flex-col items-center justify-center gap-1 w-16 h-16 text-sm text-center hover:scale-105 transition-transform rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-3';

const Skills = () => {
  return (
    <section className=" py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-2xl font-semibold mb-10">
          [ My Skills ]
        </h1>

        <div className="flex flex-col gap-16">
          {/* Tools */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <h3 className="text-2xl font-bold">
              <span className="text-sm">01</span> TOOLS
            </h3>
            <div className="flex flex-wrap gap-6">
              <div className={techClass}>
                <FaFigma className="text-4xl text-pink-500" />
                <span className="text-xs">Figma</span>
              </div>
              <div className={techClass}>
                <SiCanva className="text-4xl text-sky-400" />
                <span className="text-xs">Canva</span>
              </div>
              <div className={techClass}>
                <SiAdobexd className="text-4xl text-fuchsia-500" />
                <span className="text-xs">Adobe XD</span>
              </div>
              <div className={techClass}>
                <SiAdobephotoshop className="text-4xl text-blue-400" />
                <span className="text-xs">Photoshop</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-9">
            <h3 className="text-2xl font-bold">
              <span className="text-sm">02</span> TECH STACK
            </h3>
            <div className="flex flex-wrap gap-6">
              <div className={techClass}>
                <FaHtml5 className="text-4xl text-orange-500" />
                <span className="text-xs">HTML5</span>
              </div>
              <div className={techClass}>
                <FaCss3Alt className="text-4xl text-blue-500" />
                <span className="text-xs">CSS3</span>
              </div>
              <div className={techClass}>
                <FaJs className="text-4xl text-yellow-400" />
                <span className="text-xs">JavaScript</span>
              </div>
              <div className={techClass}>
                <FaPhp className="text-4xl text-violet-600" />
                <span className="text-xs">PHP</span>
              </div>
              <div className={techClass}>
                <SiC className="text-4xl text-sky-300" />
                <span className="text-xs">C</span>
              </div>
              <div className={techClass}>
                <SiCplusplus className="text-4xl text-blue-400" />
                <span className="text-xs">C++</span>
              </div>
              <div className={techClass}>
                <FaPython className="text-4xl text-yellow-300" />
                <span className="text-xs">Python</span>
              </div>
              <div className={techClass}>
                <SiExpress className="text-4xl text-white" />
                <span className="text-xs">Express</span>
              </div>
              <div className={techClass}>
                <SiNextdotjs className="text-4xl text-white" />
                <span className="text-xs">Next.js</span>
              </div>
              <div className={techClass}>
                <SiMysql className="text-4xl text-blue-600" />
                <span className="text-xs">MySQL</span>
              </div>
              <div className={techClass}>
                <SiMongodb className="text-4xl text-green-500" />
                <span className="text-xs">MongoDB</span>
              </div>
              <div className={techClass}>
                <FaDatabase className="text-4xl text-gray-400" />
                <span className="text-xs">Database</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
