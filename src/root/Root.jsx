import React from "react";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/Nav/NavBar";
import MyJourney from "../components/MyJourney/MyJourney";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import MyCircle from "../components/MyCircle/MyCircle";

const Root = () => {
  return (
    <div
      className="min-h-screen w-full bg-no-repeat bg-fixed bg-cover"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 100%, #ffffff 40%, #3b82f6 100%)",
      }}
    >
      <header className="sticky md:top-1 z-50">
        <NavBar />
      </header>

      <main className="relative z-10 max-w-[1400px] mx-auto">
        <section id="hero">
          <Hero></Hero>
        </section>

        <MyJourney></MyJourney>

        <section id="about">
          <AboutMe></AboutMe>
        </section>

        <section id="skills">
          <Skills></Skills>
        </section>


        <section id="circle">
          <MyCircle></MyCircle>
        </section>

        <section id="projects" className="py-20">
          {/* You can replace this with your actual Projects component */}
          <div className="text-center text-2xl font-semibold text-white">
            Projects Coming Soon...
          </div>
        </section>
      </main>
    </div>
  );
};

export default Root;
