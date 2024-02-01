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
        <h1>MAIN SKILLSET</h1>
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
              <h2>Mid-Level</h2>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoHtml} alt="" />
            </div>
            <div className="back">
              <h1>HTML</h1>
              <h2>Mid-Level</h2>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoCss} alt="" />
            </div>
            <div className="back">
              <h1>CSS</h1>
              <h2>Mid-Level</h2>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoJavaScript} alt="" />
            </div>
            <div className="back">
              <h1>JAVASCRIPT</h1>
              <h2>Mid-Level</h2>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoReact} alt="" />
            </div>
            <div className="back">
              <h1>REACT</h1>
              <h2>Mid-Level</h2>
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
              <h1>BOOTSTRAP</h1>
              <h3>Junior-Level</h3>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoTypeScript} alt="" />
            </div>
            <div className="back">
              <h1>TYPESCRIPT</h1>
              <h2>Mid-Level</h2>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoGit} alt="" />
            </div>
            <div className="back">
              <h1>GIT</h1>
              <h2>Mid-Level</h2>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoRD} alt="" />
            </div>
            <div className="back">
              <h1>RESPONSIVE DESING</h1>
              <h3>Junior-Level</h3>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoTailwind} alt="" />
            </div>
            <div className="back">
              <h1>TAILWIND</h1>
              <h3>Junior-Level</h3>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------OTHER SKILLSETS-------------------- */}
      <div className="cont-skill2">
        <h1>OTHER SKILLSET</h1>
        <div className="skill-logos">
          <div className="card" data-aos="zoom-in" data-aos-duration="1000">
            <div className="front">
              <img src={LogoPhotoshop} alt="" />
            </div>
            <div className="back">
              <h1>ADOBE PHOTOSHOP</h1>
              <h2>Mid-Level</h2>
            </div>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-duration="2000">
            <div className="front">
              <img src={LogoPremiere} alt="" />
            </div>
            <div className="back">
              <h1>ADOBE PREMIERE</h1>
              <h4>Senior-Level</h4>
            </div>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-duration="3000">
            <div className="front">
              <img src={LogoLightRoom} alt="" />
            </div>
            <div className="back">
              <h1>ADOBE LIGHTROOM</h1>
              <h4>Senior-Level</h4>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------aqi empieza el responsive------------------------------ */}

      <div className="contSkillres" id="seccionSkillRes">
        <h2 >My SkillSets</h2>
        <div className="contSkillCard" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="200" id="azul">
          <h5>Front end</h5>

          <div className="individualSkill" >
            <p>HTML</p>
            <div className="barra barra70"></div>
          </div>
          <div className="individualSkill">
            <p>Css</p>
            <div className="barra barra50"></div>
          </div>
          <div className="individualSkill">
            <p>JavaScript</p>
            <div className="barra barra60"></div>
          </div>
          <div className="individualSkill">
            <p>TypeScript</p>
            <div className="barra barra50"></div>
          </div>
          <div className="individualSkill">
            <p>Angular</p>
            <div className="barra barra70"></div>
          </div>
          <div className="individualSkill">
            <p>React</p>
            <div className="barra barra60"></div>
          </div>
          
        </div>
        <div className="contSkillCard" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="200" id="verde">
          <h5>Back end</h5>

          <div className="individualSkill" >
            <p>C++</p>
            <div className="barra barra80"></div>
          </div>
          <div className="individualSkill">
            <p>Java</p>
            <div className="barra barra80" ></div>
          </div>
          <div className="individualSkill">
            <p>Python</p>
            <div className="barra barra30"></div>
          </div>
          <div className="individualSkill">
            <p>Spring Boot</p>
            <div className="barra barra30"></div>
          </div>
          <div className="individualSkill">
            <p>Express</p>
            <div className="barra barra60"></div>
          </div>
          <div className="individualSkill">
            <p>.Net</p>
            <div className="barra barra20"></div>
          </div>
          
        </div>
        <div className="contSkillCard" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="200" id="amarillo">
          <h5>Desing</h5>

          <div className="individualSkill">
            <p>bootstrap</p>
            <div className="barra barra70"></div>
          </div>
          <div className="individualSkill">
            <p>Tailwind</p>
            <div className="barra barra20"></div>
          </div>
          <div className="individualSkill">
            <p>PhotoShop</p>
            <div className="barra barra80"></div>
          </div>
          <div className="individualSkill">
            <p>Premiere</p>
            <div className="barra barra70"></div>
          </div>
          <div className="individualSkill">
            <p>LigthRoom</p>
            <div className="barra barra90"></div>
          </div>
          
        </div>
        <div className="contSkillCard " data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="200" id="rojo">
          <h5>Projects</h5>

          <div className="individualSkill" >
            <p>Scrum</p>
            <div className="barra barra90"></div>
          </div>
          <div className="individualSkill">
            <p>Git</p>
            <div className="barra barra70"></div>
          </div>
          <div className="individualSkill">
            <p>Jira</p>
            <div className="barra barra80"></div>
          </div>
          <div className="individualSkill">
            <p>VS code</p>
            <div className="barra barra80"></div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Skillset;
