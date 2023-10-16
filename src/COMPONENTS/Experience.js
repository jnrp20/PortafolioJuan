import React from 'react'
import "../COMPONENTS/experience.css";

// aos es para animar mientras scrolleo
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Experience = () => {
    useEffect(() => {
        Aos.init();
    }, []);
  return (
    <div className="padre-experience"  id="seccionExperience">
        {/* este data-aos es para las animaciones de la libreria AOS */}
        
        <div className="cont-experience">

             <div data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500">
                <h1 >EXPERIENCE</h1> 
             </div>
        </div>
      
    </div>
  )
}

export default Experience
