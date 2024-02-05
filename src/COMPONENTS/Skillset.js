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
import LogoCmas from "../image/cmas.png"
import LogoCchar from "../image/cchar.png"
import LogoJava from "../image/java.png"
import LogoPython from "../image/Python.png"
import LogoSpring from "../image/Spring.png"
import LogoExpress from "../image/ex.png"
import LogoScrum from "../image/scrum.png"
import LogoVs from "../image/vs code.webp"
import LogoJira from "../image/jira.png"
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
{/* ------------------------aqui inicia el skill front end------------- */}
      <div className="cont-skill">
        <h1>Front End</h1>
        <div
          className="skill-logos"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="card">
            <div className="front">
              <img src={LogoHtml} alt="" />
            </div>
            <div className="back">
              <h1>Html</h1>
              <h2>Mid Level</h2>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoCss} alt="" />
            </div>
            <div className="back">
              <h1>Css</h1>
              <h2>Mid Level</h2>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoJavaScript} alt="" />
            </div>
            <div className="back">
              <h1>Java Script</h1>
              <h2>Mid Level</h2>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoTypeScript} alt="" />
            </div>
            <div className="back">
              <h1>Type Script</h1>
              <h2>Mid Level</h2>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoReact} alt="" />
            </div>
            <div className="back">
              <h1>React</h1>
              <h2>Mid Level</h2>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoAngular} alt="" />
            </div>
            <div className="back">
              <h1>Angular</h1>
              <h2>Mid Level</h2>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------aqui inicia el skill back end------------------- */}
      <div className="cont-skill">
        <h1>Back End</h1>
        <div
          className="skill-logos"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="card">
            <div className="front">
              <img src={LogoCmas} alt="" />
            </div>
            <div className="back">
              <h1>C++</h1>
              <h2>Mid Level</h2>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoJava} alt="" />
            </div>
            <div className="back">
              <h1>Java</h1>
              <h4>Senior Level</h4>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoPython} alt="" />
            </div>
            <div className="back">
              <h1>Python</h1>
              <h3>Junior Level</h3>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoSpring} alt="" />
            </div>
            <div className="back">
              <h1>Spring Boot</h1>
              <h3>Junior Level</h3>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoExpress} alt="" />
            </div>
            <div className="back">
              <h1>Express</h1>
              <h2>Mid Level</h2>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoCchar} alt="" />
            </div>
            <div className="back">
              <h1>C#</h1>
              <h3>Junior Level</h3>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------desing skills-------------------- */}
      <div className="cont-skill">
        <h1>Desing</h1>
        <div
          className="skill-logos"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="card">
            <div className="front">
              <img src={LogoBootstrap} alt="" />
            </div>
            <div className="back">
              <h1>Bootstrap</h1>
              <h3>Junior Level</h3>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoTailwind} alt="" />
            </div>
            <div className="back">
              <h1>Tailwind</h1>
              <h3>Junior Level</h3>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoPhotoshop} alt="" />
            </div>
            <div className="back">
              <h1>PhotoShop</h1>
              <h4>Senior Level</h4>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoLightRoom} alt="" />
            </div>
            <div className="back">
              <h1>LightRoom</h1>
              <h4>Senior Level</h4>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoPremiere} alt="" />
            </div>
            <div className="back">
              <h1>Premiere</h1>
              <h4>Senior Level</h4>
            </div>
          </div>
          
        </div>
      </div>

      {/* -----------------------aqui empieza skills projects-------------- */}
      <div className="cont-skill">
        <h1>Projects</h1>
        <div
          className="skill-logos"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="card">
            <div className="front">
              <img src={LogoScrum} alt="" />
            </div>
            <div className="back">
              <h1>Scrum</h1>
              <h4>Senior Level</h4>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoGit} alt="" />
            </div>
            <div className="back">
              <h1>Git</h1>
              <h2>Mid Level</h2>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoJira} alt="" />
            </div>
            <div className="back">
              <h1>Jira</h1>
              <h4>Senior Level</h4>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src={LogoVs} alt="" />
            </div>
            <div className="back">
              <h1>Vs Code</h1>
              <h4>Senir Level</h4>
            </div>
          </div>
          
          
        </div>
      </div>
      {/* ---------------------------------------------aqi empieza el responsive------------------------------ */}
<div className="ContainerTemporal">
  <h1  data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-offset="200"id="TituloSkillNoRes">Summary</h1>
</div>
      <div className="contSkillres" id="seccionSkillRes">

      <h2 id="TituloSkillRes">My SkillSet</h2>
      
        <div
          className="contSkillCard"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-offset="200"
          id="azul"
        >
          <h5>Front end</h5>

          <div className="individualSkill">
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
        <div
          className="contSkillCard"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-offset="200"
          id="verde"
        >
          <h5>Back end</h5>

          <div className="individualSkill">
            <p>C++</p>
            <div className="barra barra80"></div>
          </div>
          <div className="individualSkill">
            <p>Java</p>
            <div className="barra barra80"></div>
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
            <p>C#</p>
            <div className="barra barra20"></div>
          </div>
        </div>
        <div
          className="contSkillCard"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-offset="200"
          id="amarillo"
        >
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
        <div
          className="contSkillCard "
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-offset="200"
          id="rojo"
        >
          <h5>Projects</h5>

          <div className="individualSkill">
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
