import img1 from '../../assets/myP.jpg';

const AboutMe = () => {
  return (
    <section className="md:py-20 px-4 text-black">
      <div className="mx-auto">
        {/* Heading */}
        <h1 className="text-center text-2xl font-semibold my-10">
          [ About Myself ]
        </h1>

        {/* Sub heading */}
        <p className="text-justify md:text-center text-xl max-w-5xl mx-auto mb-12">
          Hi, I’m <span className="font-bold">Touhidul Islam</span> — someone who believes that great design is part creativity, part empathy, and part coffee-fueled hustle.
        </p>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Left Block */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Transforming Ideas into Digital Experiences
              </h3>
              <p className="text-justify">
                You bring the vision, I bring the process – together we build a website that works.
              </p>
            </div>
            <button className=" px-6 py-2 bg-blue-600 rounded-xl hover:bg-gray-800 text-white">
              Start  Project
            </button>
          </div>

          {/* Image Block */}
          <div className="flex justify-center">
            <img
              src={img1}
              alt="Touhidul Islam"
              className="w-[300px] h-[380px] object-cover rounded-2xl rounded-t-[100px] shadow-xl"
            />
          </div>

          {/* Right Block */}
          <div className="space-y-6 text-justify">
            <p>
              I’m Touhidul Islam – a 3rd-year CSE student at UIU with a passion for frontend development and creating user-friendly digital experiences.
            </p>
            <p>
              I enjoy turning simple ideas into clean, scalable interfaces. Whether it's collaborating on large projects or building solo, I’m driven by creativity and curiosity.
            </p>
            <p>
              Outside of coding, I often recharge by exploring design trends, watching tech content, or playing games.
            </p>
            <a href="#more" className="font-semibold hover:underline">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
