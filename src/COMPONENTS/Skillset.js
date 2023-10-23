import React from "react";
import "../COMPONENTS/skillset.css";
import LogoHtml from "../image/html.png";
import LogoCss from "../image/css.png";
import LogoJavaScript from "../image/js.png";
import LogoTypeScript from "../image/Typescript.png";
import LogoAngular from "../image/Angular.png";
import LogoReact from "../image/React.png";
import LogoBootstrap from "../image/Bootstrap.png";
import LogoGit from "../image/Git.png";
import LogoRD from "../image/responsive.png";
import Tailwind from "../image/tailwind.png";

import LogoPhotoshop from "../image/photoshop.png";
import LogoPremiere from "../image/Premiere.png";
import LogoLightRoom from "../image/LIGHTROOM.png";

// aos es para animar mientras scrolleo
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Skillset = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="padre-skill" id="seccionSkill">
      {/* este data-aos es para las animaciones de la libreria AOS */}

      <div className="cont-skill">
        
          <h1 >SKILLSET</h1>
          <div className="skill-logos" data-aos="zoom-out-down" data-aos-duration="1000">
            <div className="card-logo">
                <img src={LogoAngular} alt="" />
                 <h4>ANGULAR</h4>
                
            </div>
            <div className="card-logo">
                <img src={LogoCss} alt="" />
                <h4>CSS</h4>
            </div>
            <div className="card-logo">
                <img src={LogoHtml} alt="" /> 
                <h4>HTML</h4>
            </div>
            <div className="card-logo">
                <img src={LogoJavaScript} alt="" />
                <h4>JAVASCRIPT</h4>
            </div>

            <div className="card-logo">
                <img src={LogoReact} alt="" /> 
                <h4>REACT</h4>
            </div>
            
          </div>
          <div className="skill-logos" data-aos="zoom-out-up" data-aos-duration="1000">
            <div className="card-logo">
                <img src={LogoBootstrap} alt="" />
                 <h4>BOOTSTRAP</h4>
            </div>
            <div className="card-logo">
                <img src={LogoTypeScript} alt="" />
                <h4>TYPESCRIPT</h4>
            </div>
            <div className="card-logo">
                <img src={LogoGit} alt="" /> 
                <h4>GIT</h4>
            </div>
            <div className="card-logo">
                <img src={LogoRD} alt="" />
                <h4>RESPONSIVE</h4>
                <h5>DESING</h5>
            </div>

            <div className="card-logo">
                <img src={Tailwind} alt="" /> 
                <h4>TAILWIND</h4>
            </div>
            
          </div>
       
      </div>
    </div>
  );
};

export default Skillset;
