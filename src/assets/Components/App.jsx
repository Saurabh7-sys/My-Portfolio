import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="app min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <section id="content">
          <Content />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
