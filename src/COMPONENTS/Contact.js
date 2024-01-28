import React from 'react'
import "../COMPONENTS/contact.css";

// aos es para animar mientras scrolleo
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contact = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    
  return (
    <div className="padre-contact"  id="seccionContact">
        {/* este data-aos es para las animaciones de la libreria AOS */}
        
        <div className="cont-contact">

             <div data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500">
                <h1 >CONTACT ME</h1> 
             </div>

             
        </div>
      
    </div>
  )
}

export default Contact
