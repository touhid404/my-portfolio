import React from "react";
import Hero from "../components/Hero/Hero";
import MyJourney from "../components/MyJourney/MyJourney";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import MyCircle from "../components/MyCircle/MyCircle";
import NavBar from './../components/Nav/NavBar';
import MyProjects from "../components/MyProjects/MyProjects";
import ContactMe from "../components/Contact/ContactMe";

const Root = () => {
  return (
    <div
      className="bg-[#1B3C53] text-[#D2C1B6]"

    >


      <header  className="sticky md:top-1 z-50">
        <NavBar/>
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
          <MyProjects/>
        </section>


        {/* <section id="contact" className="py-20">
          <ContactMe/>
        </section> */}
      </main>
    </div>
  );
};

export default Root;
