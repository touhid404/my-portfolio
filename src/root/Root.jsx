import React from 'react';
import DeveloperText from '../components/DevoloperText/DevoloperText';
import Hero from '../components/Hero/Hero';
import MyJourney from '../components/MyJourney/MyJourney';
import AboutMe from '../components/AboutMe/AboutMe';
import NavBar from '../components/Nav/NavBar';
import { Element } from 'react-scroll';
import Skills from '../components/Skills/Skills';

const Root = () => {
    return (
        <div className='' style={{ background: 'linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)' }}>
          

            <header className='sticky md:top-1 z-50 '>
              <NavBar></NavBar>
            </header>
             <Element name="hero" className='max-w-7xl mx-auto'>
                <Hero></Hero>
            </Element>
             <Element>
               <MyJourney></MyJourney>
             </Element>

             <Element name="about" className='max-w-7xl mx-auto'>
               <AboutMe></AboutMe>
             </Element>

             <Element name="skills" className=''>
              <Skills></Skills>
             </Element>

            
        </div>
    );
};

export default Root;