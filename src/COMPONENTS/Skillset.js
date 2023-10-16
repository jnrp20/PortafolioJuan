import React from 'react'
import "../COMPONENTS/skillset.css";

// aos es para animar mientras scrolleo
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Skillset = () => {
  useEffect(() => {
    Aos.init();
}, []);

return (
    <div className="padre-skill"  id="seccionSkill">
        {/* este data-aos es para las animaciones de la libreria AOS */}
        
        <div className="cont-skill">

             <div data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500">
                <h1 >SKILLSET</h1> 
             </div>
        </div>
      
    </div>
);
}

export default Skillset
