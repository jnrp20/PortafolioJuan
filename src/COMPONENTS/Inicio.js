import React from "react";
import videoPortada from "../image/videoportada2.mp4";
import btnResponsive from "../image/flechaAbajo.png";
import "../COMPONENTS/inicio.css";
import fotoPerfil from "../image/profie.png";

const Inicio = (props) => {
  return (
    <div>
      <div className="contenedor" id="seccionInicio">
        <div className="video-container">
          <video autoPlay loop src={videoPortada}></video>
        </div>
        <div className="contenido-portada">
          <div className="titulos-portada">
            <h4>Junior Developer</h4>
            <h1>PORTFOLIO</h1>
            <h4>By Nicolás Romero</h4>
          </div>
          <div className="botones-portada">
            {/* este seccionInfo es el id del div donde está la seccion de información, este seccionInfo se encuentra en el id en el componente Information.js  */}
            {/* el # sirve para que no redireccione a otra pagina web sino en la misma pagina */}

            <a href="#seccionInfo">INFORMATION</a>
            <a href="#seccionSkill">SKILLSET</a>
            <a href="#seccionProjects">PROJECTS</a>
            {/* <a href="#seccionExperience">EXPERIENCE</a> */}
            <a href="#seccionContact">CONTACT ME</a>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------AQUI EMPIEZA EL RESPONSIVE---------------------------------------------------------- */}
      <div className="padre-inicio-res" id="seccionInicioRes">
        
      <div className="video-container">
          <video autoPlay loop src={videoPortada}></video>
        </div>
        <header className="header-inicio-res">
          <h1>My PortFolio</h1>
        </header>

        <div className="container-foto-res">
          <img src={fotoPerfil} alt="" id="imagenPerfil"/>
        </div>

        <div className="txtiniciores">
          <h1>Hi. I am Nicolas,</h1>
          <h1>Junior</h1>
          <h1> Software Developer</h1>
        </div>
        <div className="cont-btn-inicio-res">
          <div className="bnt-inicio-res">
            <button ><a href="#secciónInfoRes">Information</a></button>
            <button ><a href="#seccionSkillRes">SkillSet</a></button>
          </div>
          <div className="bnt-inicio-res">
          <button ><a href="#seccionProjects">Projects</a></button>
          <button ><a href="#seccionContact">Contact Me</a></button>
          </div>
         </div>
         <div className="btnPagSig">

         <a href="#txt2">
           <img src={btnResponsive} alt="" />
         </a>
          </div>
        
      </div>
    </div>
  );
};

export default Inicio;
