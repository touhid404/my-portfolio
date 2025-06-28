import React, { useRef } from 'react';
import { Link, Element } from 'react-scroll';
import emailjs from 'emailjs-com';
import img1 from '../assets/dp.jpg';

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
        <a href="#" className="hover:underline">Book A Call ↗</a>
      </nav>

      {/* Hero */}
      <Element name="hero">
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-28 pt-32">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">Hello</h1>
            <p className="text-xl text-gray-600">— I’m Touhidul Islam, a future-focused creative developer</p>
            
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img src={img1} alt="Touhidul Islam Portrait" className="w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </section>
      </Element>

      {/* About Me */}
      <Element name="about">
        <section className="bg-gray-50 py-24 px-6 md:px-16">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold mb-4">About Me</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
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
                <p className="text-gray-700 text-lg">
                  Strong foundation in design/code, solving real-world problems through clean UX/UI and functionality.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-xl text-black">✦</div>
                <p className="text-gray-700 text-lg">
                  Believer in collaboration, curiosity, and iteration to build great products.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Projects */}
      <Element name="projects">
        <section className="py-24 px-6 md:px-16 bg-white">
          <h2 className="text-4xl font-semibold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-xl shadow">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Element>

      {/* Contact Me */}
      <Element name="contact">
        <section className="bg-gray-50 py-24 px-6 md:px-16">
          <h2 className="text-4xl font-semibold mb-12 text-center">Contact Me</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start bg-white p-8 rounded-xl shadow-xl">
            {/* Contact Info */}
            <div className="space-y-6 text-lg text-gray-700">
              <div>
                <h3 className="text-2xl font-semibold text-black mb-2">Let's Talk</h3>
                <p>Feel free to reach out for collaboration, questions, or just a friendly hello.</p>
              </div>
              <div>
                <p><strong>📍 Address:</strong> Dhaka, Bangladesh</p>
                <p><strong>📧 Email:</strong> touhiduldev@gmail.com</p>
                <p><strong>📞 Phone:</strong> +880123456789</p>
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
        </section>
      </Element>
    </div>
  );
};

export default PortfolioPage;
