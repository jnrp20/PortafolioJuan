import React from "react";
import "../COMPONENTS/information.css";

// aos es para animar mientras scrolleo
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Information = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="padre-info">
            {/* este data-aos es para las animaciones de la libreria AOS */}
            <div
                className="nav-bar"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
            >
                <div className="botones-nav-bar">
                    <button>INFORMATION</button>
                    <button>SKILLSET</button>
                    <button>PROJECTS</button>
                    <button>EXPERIENCE</button>
                    <button>CONTACT ME</button>
                    <hr />
                </div>
            </div>
            <div className="cont-info">

                 <div data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500">
                    <h1 >INFORMATION</h1> 
                 </div>
            </div>
          
        </div>
    );
};

export default Information;
