import React from 'react';
import DeveloperText from '../components/DevoloperText/DevoloperText';
import Hero from '../components/Hero/Hero';
import MyJourney from '../components/MyJourney/MyJourney';
import AboutMe from '../components/AboutMe/AboutMe';
import NavBar from '../components/Nav/NavBar';
import { Element } from 'react-scroll';

const Root = () => {
    return (
        <div className=''>

            <header className='sticky top-1 z-50 '>
              <NavBar></NavBar>
            </header>
             <Element name="hero" className='max-w-7xl mx-auto'>
                <Hero></Hero>
            </Element>


      <Element>
        <MyJourney></MyJourney>


      </Element>


      {/* About Section */}
      <Element name="about" className='max-w-7xl mx-auto'>
        <AboutMe></AboutMe>
      </Element>
            
        </div>
    );
};

export default Root;