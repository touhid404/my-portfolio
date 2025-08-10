import { Link } from "react-scroll";
import img1 from "../../assets/myP.jpg";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="md:py-20 px-4 overflow-hidden md:overflow-visible">
      <div className="mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-center text-3xl font-bold mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            [ About Me ]
          </span>
        </motion.h1>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Left Block */}
          <motion.div
            className="space-y-6 flex flex-col items-center md:items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Transforming Ideas into Digital Experiences
              </h3>
              <p className="text-justify">
                You bring the vision, I bring the process – together we build a
                website that works.
              </p>
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:bg-gray-800 text-white">
              <li>
                <Link
                  to="projects"
                  smooth
                  duration={600}
                  className="cursor-pointer"
                >
                  Start Projects
                </Link>
              </li>
            </button>
          </motion.div>

          {/* Image Block */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <img
              src={img1}
              alt="Touhidul Islam"
              className="w-[300px] h-[380px] object-cover rounded-2xl rounded-t-[100px] shadow-xl"
            />
          </motion.div>

          {/* Right Block */}
          <motion.div
            className="space-y-6 text-justify"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <p>
              I’m Touhidul Islam – a 3rd-year CSE student at UIU with a passion
              for frontend development and creating user-friendly digital
              experiences.
            </p>
            <p>
              I enjoy turning simple ideas into clean, scalable interfaces.
              Whether it's collaborating on large projects or building solo, I’m
              driven by creativity and curiosity.
            </p>
            <p>
              Outside of coding, I often recharge by exploring design trends,
              watching tech content, or playing games.
            </p>
            <a href="#more" className="font-semibold hover:underline">
              Read More →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
