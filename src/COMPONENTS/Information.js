import React, { useState } from "react";
import btnDown from "../image/down.png";
import "../COMPONENTS/information.css";
import fotoPerfil from "../image/profie.png";
import btnSig from "../image/btnSig.png";
import btnAnt from "../image/btnAnt.png";
import bitmoji from "../image/bitmoji.png";
import slide from "../image/slide.png";
// aos es para animar mientras scrolleo
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Information = () => {
 
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
        <div>
          <h1>A little bit about me</h1>
        </div>

        <div className="div-info" data-aos="flip-left" data-aos-duration="1500">
          <div className="foto">
            <h4>JUNIOR </h4>
            <h4>DEVELOPER</h4>
            <img src={fotoPerfil} />
            <h4 id="age">Country: Colombia 🇨🇴</h4>
            <h4 id="age">Age: 22 </h4>
          </div>
          <div className="cont-texto">
            <div className="texto" id="texto1">
              <h1>Nicolas Romero</h1>
              <p>
                System Engineer, currently pursuing a specialization in
                Management of Managerial Information Systems. The program
                includes subjects dedicated to management in the context of
                decision-making with information systems, adapting them to the
                organization's strategy, and responding in real-time to changes
                that may arise within it. In addition
              </p>
              <p>
                I have experience as a software developer in multiple
                programming languages such as Java, JavaScript, C++, Python,
                SQL, PHP, and HTML, as well as in the use of frameworks like
                Angular, React, Spring Boot, among others.
              </p>
              <div className="btnDownload1">
                <a href="https://drive.google.com/drive/folders/1ko8gIhOGz6UFsuYXggM3oTl5LReUXpdT?usp=sharing target="_blank">
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div className="texto" id="texto2">
              <h1>Education</h1>
              <br />
              <br />
              <h4>UNDERGRADUATE – PROFESSIONAL</h4>
              <p> Systems Engineer </p>
              <p>University of Cundinamarca - 2023</p>
              <br />
              <hr />
              <br />
              <h4>POSTGRADUATE – SPECIALIZATION</h4>
              <p> Business Management of Information systems</p>
              <p>University of Cundinamarca - Currently Enrolled</p>
            </div>
            <div className="texto" id="texto3">
              <h1>Additional Education</h1>
              <br />
              <h4>GOOGLE ACTIVATE</h4>
              <ol>
                <li>Introduction to Web Development - 2023</li>
              </ol>
              <br />
              <h4>UDEMY</h4>
              <ol>
                <li>Course from Zero to Expert Angular - 2023</li>
                <li>Course from Zero to Expert JavaScript - 2023</li>
                <li> Front-End Web Developer Web Development Course - 2023</li>
                <li>Postgre SQL Server Database Course - 2023</li>
                <li>SQLite Database Course - 2023</li>
                <li>Visual Studio 2022 C# - 2023</li>
              </ol>
              <br />
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
      </div>

      {/* --------------------------------aqui empieza el responsive----------------------------------- */}

      <div className="contInfoRes" id="secciónInfoRes">
        <h4>A little bit about me</h4>
       <p>(Slide)</p>
     
        
        

        <div className="contInfoScroll">
          <div
            className="infoTextoRes"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 id="age">Country: Colombia 🇨🇴</h4>
            <h4 id="age">Age: 22 </h4>
          </div>
          <div
            className="infoTextoRes"
            id="txt2"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <p>
              System Engineer, currently pursuing a specialization in Management
              of Managerial Information Systems. The program includes subjects
              dedicated to management in the context of decision-making with
              information systems, adapting them to the organization's strategy,
              and responding in real-time to changes that may arise within it.
              In addition
            </p>
          </div>
          <div
            className="infoTextoRes"
            data-aos="zoom-in"
            data-aos-duration="1000" data-aos-offset="300"
          >
            <p>
              I have experience as a software developer in multiple programming
              languages such as Java, JavaScript, C++, Python, SQL, PHP, and
              HTML, as well as in the use of frameworks like Angular, React,
              Spring Boot, among others.
            </p>
          </div>
        </div>


        <div className="btnDownload">
          <a href="https://drive.google.com/drive/folders/1ko8gIhOGz6UFsuYXggM3oTl5LReUXpdT?usp=sharing" target="_blank">
            <button>View CV</button>
          </a>
        </div>
        <div className="infiBtnPagSig">
          <a href="#seccionSkillRes">
            <img src={btnDown} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Information;
