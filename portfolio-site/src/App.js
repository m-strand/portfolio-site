import React from "react";
import './index.css';
import NavBar from "./components/NavBar.js";
import Intro from "./components/Intro.js";
import Projects from "./components/Projects.js";
import AboutMe from "./components/AboutMe.js";
import Skills from "./components/Skills.js";
import ContactForm from "./components/ContactForm.js";

function App() {
  return (
    <>
    <NavBar />
    <Intro />
    <Projects />
    <AboutMe />
    <Skills />
    <ContactForm /> 
    </>
  );
}

export default App;
