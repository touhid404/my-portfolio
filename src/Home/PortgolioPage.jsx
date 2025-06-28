import React, { useRef } from 'react';
import { Link, Element } from 'react-scroll';
import emailjs from 'emailjs-com';
import img1 from '../assets/dp.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Fintech UX Redesign',
    description: 'Redesigned a mobile banking app for better usability and accessibility.',
  },
  {
    title: 'SaaS Analytics Dashboard',
    description: 'Designed an intuitive dashboard with deep data visualization tools.',
  },
  {
    title: 'Healthcare Mobile App',
    description: 'Crafted a telehealth app focused on elderly-friendly UI and flows.',
  },
  {
    title: 'Startup Branding Kit',
    description: 'Built a consistent visual language from logo to pitch decks.',
  },
];

const PortfolioPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert('Message sent successfully!');
      e.target.reset();
    })
    .catch((error) => {
      alert('Failed to send message. Please try again.');
      console.error(error);
    });
  };

  return (
    <div className="font-sans text-black bg-white scroll-smooth">
      <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-2xl z-10 shadow px-6 md:px-16 py-4 flex justify-between items-center text-sm">
        <div className="flex space-x-6">
          <Link to="hero" smooth duration={600} className="cursor-pointer hover:underline">Home</Link>
          <Link to="about" smooth duration={600} className="cursor-pointer hover:underline">About Me</Link>
          <Link to="projects" smooth duration={600} className="cursor-pointer hover:underline">Projects</Link>
          <Link to="contact" smooth duration={600} className="cursor-pointer hover:underline">Contact</Link>
        </div>
        <a href="#" className="hover:underline">Resume ↗</a>
      </nav>

      {/* Hero */}
      <Element name="hero">
        <section className="md:min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-24 md:py-32 gap-12 bg-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left space-y-6"
          >
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
              I’m{' '}
              <span className="text-teal-600">
                <Typewriter
                  words={[
  'a CSE student',
  'a web developer',
  'a database designer',
  'a UI/UX enthusiast',
  'a problem solver',
  'a tech explorer',
  'a lifelong learner',

]}

                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              — I’m Touhidul Islam, a future-focused creative developer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src={img1}
              alt="Touhidul Islam Portrait"
              className="w-72 md:w-96 h-auto object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </section>
      </Element>

      {/* About Section */}
      <Element name="about">
        <motion.section
          className="bg-gray-50 py-24 px-6 md:px-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold mb-4">About Me</h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                I'm Touhidul Islam, a 3rd-year CSE student at UIU in Dhaka. I merge design and tech to build intuitive, elegant digital experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center space-y-4">
              <div className="text-5xl font-bold text-black">120%</div>
              <p className="text-gray-600 text-sm">Boosted client engagement through user-centric design</p>
              <img src={img1} alt="Touhidul Smiling" className="rounded-lg object-cover" />
            </div>
            <div className="space-y-6">
  <div className="flex items-start gap-3">
    <div className="text-xl text-black">✦</div>
    <p className="text-gray-700 text-md text-justify">
      Strong foundation in design/code, solving real-world problems through clean UX/UI and functionality.
    </p>
  </div>
  <div className="flex items-start gap-3">
    <div className="text-xl text-black">✦</div>
    <p className="text-gray-700 text-md text-justify">
      Believer in collaboration, curiosity, and iteration to build great products.
    </p>
  </div>
  <div className="flex items-start gap-3">
    <div className="text-xl text-black">✦</div>
    <p className="text-gray-700 text-md text-justify">
      Experienced in designing efficient, scalable databases and crafting well-structured data models for web applications.
    </p>
  </div>
</div>

          </div>
        </motion.section>
      </Element>

      {/* Projects Section */}
      <Element name="projects">
        <motion.section
          className="py-24 px-6 md:px-16 bg-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-8">Recent Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-100 rounded-xl shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </Element>

      {/* Contact Section */}
      <Element name="contact">
        <motion.section
          className="bg-gray-50 py-24 px-6 md:px-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-12 text-center">Contact Me</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start bg-white p-8 rounded-xl shadow-xl">
            {/* Contact Info */}
            <div className="space-y-6 text-lg text-gray-700">
              <div>
                <h3 className="text-2xl font-semibold text-black mb-2">Let's Talk</h3>
                <p>Feel free to reach out for collaboration, questions, or just a friendly hello.</p>
              </div>
              <div className=''>
                <p><strong>Address:</strong> Dhaka, Bangladesh</p>
                <p><strong>Email:</strong> touhidul.dev5@gmail.com</p>
                <p><strong>Phone:</strong> +8801315486822</p>
              </div>
            </div>

            {/* Contact Form */}
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.section>
      </Element>
    </div>
  );
};

export default PortfolioPage;
