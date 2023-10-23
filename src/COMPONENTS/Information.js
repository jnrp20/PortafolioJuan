import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../COMPONENTS/information.css";
import fotoPerfil from "../image/profie.png";
import btnSig from "../image/btnSig.png";
import btnAnt from "../image/btnAnt.png";
// aos es para animar mientras scrolleo
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Information = () => {
  // para el Modal, esto lo da bootstrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    Aos.init();
  }, []);

  let numPag = 1;

  function anterior() {
    if (numPag === 3) {
      document.getElementById("texto2").style.display = "block";
      document.getElementById("texto3").style.display = "none";
      numPag--;
      document.getElementById("numeroPag").innerHTML = numPag;
    } else if (numPag === 2) {
      document.getElementById("texto1").style.display = "block";
      document.getElementById("texto2").style.display = "none";
      numPag--;
      document.getElementById("numeroPag").innerHTML = numPag;
    }
  }
  function sig() {
    if (numPag === 1) {
      document.getElementById("texto1").style.display = "none";
      document.getElementById("texto2").style.display = "block";
      numPag++;
      document.getElementById("numeroPag").innerHTML = numPag;
    } else if (numPag === 2) {
      document.getElementById("texto2").style.display = "none";
      document.getElementById("texto3").style.display = "block";
      numPag++;
      document.getElementById("numeroPag").innerHTML = numPag;
    }
  }

  let numPagResponsive = 1;
  function sigResponsive(params) {
    if (numPagResponsive === 1) {
      document.getElementById("eduResponsive").style.display = "block";
      document.getElementById("portadaResponsive").style.display = "none";
      numPagResponsive++;
    }
  }

  return (
    <div className="padre-info" id="seccionInfo">
      {/* este data-aos es para las animaciones de la libreria AOS */}

      <div className="cont-info">
        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1>INFORMATION</h1>
        </div>

        <div className="div-info" data-aos="flip-left" data-aos-duration="1500">
          <div className="foto">
            <h5>JUNIOR FRONT-END </h5>
            <h5>DEVELOPER</h5>
            <img src={fotoPerfil} />
            <h5 id="age">NATIONALITY: COLOMBIAN</h5>
            <h5 id="age">AGE: 22 YEARS</h5>
          </div>
          <div className="cont-texto">
            <div className="texto" id="texto1">
              <h1>NICOLAS ROMERO</h1>
              <p>
                Systems engineer, studying specialization in business Management
                of Information systems. With subjects dedicated to management in
                decision making, adapting them to the strategy of the
                organization.
              </p>
              <p>
                Knowledge of different programming languages ​​such as Java,
                JavaScript, C++, C#, HTML, CSS, TypeScript, JXS, Bootstrap,
                Angular and React frameworks. Values ​​based on commitment,
                order, efficiency and with great strength in teamwork, problem
                solving thus achieving results expected business outcomes.
              </p>
            </div>
            <div className="texto" id="texto2">
              <h1>EDUCATION</h1>
              <h4>UNDERGRADUATE – PROFESSIONAL</h4>
              <p> Systems Engineer </p>
              <p>University of Cundinamarca - 2023</p>
              <hr />
              <br />
              <h4>POSTGRADUATE – SPECIALIZATION</h4>
              <p> Business Management of Information systems</p>
              <p>University of Cundinamarca - Currently Enrolled</p>
            </div>
            <div className="texto" id="texto3">
              <h1>ADDITIONAL EDUCATION</h1>
              <h4>GOOGLE ACTIVATE</h4>
              <ol>
                <li>Introduction to Web Development - 2023</li>
              </ol>

              <h4>UDEMY</h4>
              <ol>
                <li>Course from Zero to Expert Angular - 2023</li>
                <li>Course from Zero to Expert JavaScript - 2023</li>
                <li> Front-End Web Developer Web Development Course - 2023</li>
                <li>Postgre SQL Server Database Course - 2023</li>
                <li>SQLite Database Course - 2023</li>
                <li>Visual Studio 2022 C# - 2023</li>
              </ol>
              <h4>CARLOS SLIM FOUNDATION</h4>
              <ol>
                <li>Programmer Object Oriented - 2022</li>
              </ol>
            </div>

            <div className="btn-sig">
              <img src={btnAnt} alt="" onClick={anterior} />
              <h5 id="numeroPag">1</h5>
              <h5>/</h5>
              <h5>3</h5>
              <img src={btnSig} alt="" onClick={sig} />
            </div>
          </div>
        </div>

        <div
          className="div-info-responsive"
          data-aos="flip-left"
          data-aos-duration="1500"
          id="portadaResponsive"
        >
          <img id="fotoPer" src={fotoPerfil} alt="" />
          <div className="cont-info-texto" id="portadaResponsive">
            <h1>Nicolas Romero</h1>
            <h5>Junior Front-End Developer</h5>

            <div className="div-btn-info">
              <div className="individual-btn-info">
                <h1>22</h1>
                <h5>AGE</h5>
              </div>
              <div className="individual-btn-info">
                <h1>Colombia</h1>

                <h5>CUNTRY</h5>
              </div>
            </div>
            <div className="btn-modal">
              <button variant="primary" onClick={handleShow}>
                ABOUT ME
              </button>

              <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <h1>ABOUT ME</h1>
                </Modal.Header>
                <Modal.Body>
                  
                  <p>
                    Systems engineer, studying specialization in business
                    Management of Information systems. With subjects dedicated
                    to management in decision making, adapting them to the
                    strategy of the organization.
                  </p>
                  <p>
                    Knowledge of different programming languages ​​such as Java,
                    JavaScript, C++, C#, HTML, CSS, TypeScript, JXS, Bootstrap,
                    Angular and React frameworks. Values ​​based on commitment,
                    order, efficiency and with great strength in teamwork,
                    problem solving thus achieving results expected business
                    outcomes.
                  </p>
                </Modal.Body>
                <Modal.Header >
                  <h1>EDUCATION</h1>
                </Modal.Header>
                <Modal.Body>
                  
                <h5>Undergraduate – Proffesional</h5>
              <p> Systems Engineer </p>
              <p>University of Cundinamarca - 2023</p>
              <h5>Postgraduate – Specialization</h5>
              <p> Business Management of Information systems</p>
              <p>University of Cundinamarca - Currently Enrolled</p>
                </Modal.Body>
                <Modal.Header >
                  
                  <h1>ADDITIONAL EDUCATION</h1>
                </Modal.Header>
                <Modal.Body>
                <h4>Google activate</h4>
              <ol>
                <li>Introduction to Web Development - 2023</li>
              </ol>

              <h4>Udemy</h4>
              <ol>
                <li>Course from Zero to Expert Angular - 2023</li>
                <li>Course from Zero to Expert JavaScript - 2023</li>
                <li> Front-End Web Developer Web Development Course - 2023</li>
                <li>Postgre SQL Server Database Course - 2023</li>
                <li>SQLite Database Course - 2023</li>
                <li>Visual Studio 2022 C# - 2023</li>
              </ol>
              <h4>Carlos Slim Foundation</h4>
              <ol>
                <li>Programmer Object Oriented - 2022</li>
              </ol>
             
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
