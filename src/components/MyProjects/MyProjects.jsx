import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import img1 from "../../assets/ProjectsImage/P1.jpg";
import img2 from "../../assets/ProjectsImage/P2.jpg";
import img3 from "../../assets/ProjectsImage/P3.jpg";
import toast, { Toaster } from "react-hot-toast";

const projects = [
  {
    title: "EDU Sphere",
    description:
      "A simple and engaging platform where users can share their ideas, insights, and thoughts through interactive posts.",
    image: img1,
    tech: ["React", "Express.js", "Node.js", "MongoDB", "Tailwind css"],
    live: "https://edusphere-aedc1.web.app",
    github: "https://github.com/touhid404/EduSphere-client",
  },
  {
    title: "Roommate Finder",
    description:
      "A modern, feature-rich platform to help individuals find compatible roommates and shared living spaces based on preferences, location, and lifestyle.",
    image: img2,
    tech: ["Next.js", "Express", "MongoDB", "Firebase", "Express.js"],
    live: "https://roommate-finder-app-4f81c.web.app/",
    github: "https://github.com/touhid404/roommate-finder-client",
  },
  {
    title: "Frontend Collections",
    description:
      "A curated collection of my personal frontend projects built using HTML, CSS, JavaScript, and modern frameworks.",
    image: img3,
    tech: ["HTML", "CSS", "Tailwind CSS"],
    live: "",
    github: "https://github.com/touhid404/Frontend-Website",
  },
];

const handleLinkClick = (url) => {
  if (!url) {
    toast.error("Sorry, This link is not available now.", {
      style: {
        background: "#1f2937",
        color: "#fff",
        borderRadius: "8px",
        padding: "10px 16px",
      },
    });
  } else {
    window.open(url, "_blank");
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const ProjectCard = ({ project }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:scale-[1.02] hover:shadow-lg transition-all duration-300 flex flex-col"
  >
    <div className="h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-300 text-sm mb-4 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-auto">
        <button
          onClick={() => handleLinkClick(project.live)}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-500/20 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-colors"
        >
          <FaExternalLinkAlt /> Live
        </button>
        <button
          onClick={() => handleLinkClick(project.github)}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-500/20 border border-gray-500/30 rounded-lg hover:bg-gray-500/30 transition-colors"
        >
          <FaGithub /> Code
        </button>
      </div>
    </div>
  </motion.div>
);

const MyProjects = () => {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold mb-14"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            My Projects
          </span>
        </motion.h1>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </motion.div>

        <Toaster position="bottom-center" />
      </div>
    </section>
  );
};

export default MyProjects;
