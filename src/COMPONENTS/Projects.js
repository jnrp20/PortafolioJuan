import React from 'react'
import "../COMPONENTS/projects.css";

// aos es para animar mientras scrolleo
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Projects = () => {
    useEffect(() => {
        Aos.init();
    }, []);
  return (
    <div className="padre-projects"  id="seccionProjects">
        {/* este data-aos es para las animaciones de la libreria AOS */}
        
        <div className="cont-projects">

             <div data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500">
                <h1 >PROJECTS</h1> 
             </div>
        </div>
      
    </div>
  )
}

export default Projects
