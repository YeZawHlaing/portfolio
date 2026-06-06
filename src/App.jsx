import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences"
import MicroserviceProject from "./components/MicroserviceProject";
import DevopsProject from "./components/DevopsProject";
import Services from "./components/Services";
import Certificates from "./components/Certificates";
import Badges from "./components/Badges";
import CloudEssential from "./components/CloudEssential";
import Game from "./components/game";
import Cert from "./components/Cert";


export default function App() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-500">
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
    
      <About />
        {/* <Services/> */}
      {/* <Experiences/> */}
      <Skills />
      <Projects />
      <Game/>
      <MicroserviceProject/>
      <DevopsProject/>
      <Badges/>
      <Cert/>
      <CloudEssential/>
      <Certificates/>
      <Contact />
     
    </div>
  );
}
