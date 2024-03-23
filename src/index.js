import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import LogoInsta from "../src/image/instagram.png";
import LogoFace from "../src/image/facebook.png";
import LogoTiktok from "../src/image/tik-tok.png";
import LogoLinkIn from "../src/image/linkedin.png";
import LogoTwitter from "../src/image/twiter.png";
import LogoFlotante from "../src/image/btnflotante.png";
// importantisimo para poder usar boostrap y no olvidar instalar en la consola con "npm install react-bootstrap bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./COMPONENTS/Inicio";
import Information from "./COMPONENTS/Information";
import Skillset from "./COMPONENTS/Skillset";
import Projects from "./COMPONENTS/Projects";

import Contact from "./COMPONENTS/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <App /> */}

    <Inicio />

    {/* se tuvo que crear este div despues del componente inicio para que el navbar pueda recorrer todos los componentes de forma fija sin desaparecer, ya que se usa la propiedad sticky y eso hace que deje de ser fijo cuando se acaba su div padre */}
    <div className="fondo">
      <div className="contFlotante">
        <div  className="flotante">
         <a href="#seccionInicioRes">
           <img src={LogoFlotante} alt="" />
         </a >
        </div>
      
      <div className="nav-bar">
        <div className="botones-nav-bar">
          {/* se anadio cada classname para que los botons tuvieran la raya inferior con el hover */}
          <a className="btn-linea" href="#seccionInicio">
            Main
          </a>
          <a className="btn-linea" href="#seccionInfo">
            Information
          </a>
          <a className="btn-linea" href="#seccionSkill">
            Skillset
          </a>
          <a className="btn-linea" href="#seccionProjects">
            Projects
          </a>
          {/* <a className='btn-linea' href="#seccionExperience">EXPERIENCE</a> */}
          <a className="btn-linea" href="#seccionContact">
            CONTACT ME
          </a>
          <hr />
        </div>
      </div>
      <Information />

      <Skillset />

      <Projects />
      <Contact />

      <footer>
        <div className="socialDiv">
          <div className="divImg">
            <a
              href="https://www.facebook.com/jromeropineda20/?locale=es_LA"
              target="_blank"
            >
              <img src={LogoFace} alt="" />
            </a>
          </div>
          <div className="divImg">
            <a href="https://www.instagram.com/jnicolasromero/" target="_blank">
              <img src={LogoInsta} alt="" />
            </a>
          </div>
          <div className="divImg">
            <a href="https://www.tiktok.com/@nicolasromero2214" target="_blank">
              <img src={LogoTiktok} alt="" />
            </a>
          </div>
          <div className="divImg">
            <a href="https://twitter.com/jnicolasromero" target="_blank">
              <img src={LogoTwitter} alt="" />
            </a>
          </div>
          <div className="divImg">
            <a
              href="https://www.linkedin.com/in/jnicolasromero/"
              target="_blank"
            >
              <img src={LogoLinkIn} alt="" />
            </a>
          </div>
        </div>
        <div className="infoFooter">
          <h4>Nicolas Romero</h4>
          <p>Copyright© 2024. All rights reserved</p>
          <p id="p">
            This page was created independently by me using React.
          </p>
          <p id="p">Follow me on my social media.</p>
          {/* <p>Email: nicolasromero.dev@gmail.com</p> */}
        </div>
      </footer>
    </div></div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
