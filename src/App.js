import React from 'react';

import NavBar from './components/navBar';
import Summary from './components/summary';
import MyProjects from './components/myProjects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import Typewriter from 'typewriter-effect';

import Banner from './static/images/banner1.jpg';

import './App.css';

function App() {
  return (
    <div className='App' id='home'>
      <NavBar />
      <section
        className='section home-half'
        id='home'
        data-image-src='images/bg-home.jpg'
      >
        <div className='bg-overlay'>
          <div className='bg-image'>
            <img src={Banner} alt='banner' />
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 text-white text-center'>
              <h4 className='home-small-title'>Seth White - Web Developer</h4>
              <h1 className='home-title'>Code, Coffee and Repeat</h1>
              <span className='padding-t-15 home-desc mx-auto'>
                <span id='typewriter'></span>
                <Typewriter
                  options={{
                    strings: [
                      "Hi, I'm Seth. I'm a web developer, specializing in Nodejs and Reactjs. I will help you build your next web application. Have a look below to discover my work!"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      <Summary />
      <MyProjects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
