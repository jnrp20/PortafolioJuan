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
import LogoTailwind from "../image/tailwind.png";

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
        <h1>SKILLSET</h1>
        <div
          className="skill-logos"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="card">
            <div className="front">
              <img src={LogoAngular} alt="" />
            </div>
            <div className="back">
              <h1>ANGULAR</h1>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoHtml} alt="" />
            </div>
            <div className="back">
              <h1>B</h1>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoCss} alt="" />
            </div>
            <div className="back">
              <h1>B</h1>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoJavaScript} alt="" />
            </div>
            <div className="back">
              <h1>B</h1>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoReact} alt="" />
            </div>
            <div className="back">
              <h1>B</h1>
            </div>
          </div>
        </div>
        {/* ---------------------aqui inicia el skill de abajo------------------- */}
        <div
          className="skill-logos"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="card">
            <div className="front">
              <img src={LogoBootstrap} alt="" />
            </div>
            <div className="back">
              <h1>B</h1>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoTypeScript} alt="" />
            </div>
            <div className="back">
              <h1>B</h1>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoGit} alt="" />
            </div>
            <div className="back">
              <h1>B</h1>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoRD} alt="" />
            </div>
            <div className="back">
              <h1>B</h1>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoTailwind} alt="" />
            </div>
            <div className="back">
              <h1>B</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
