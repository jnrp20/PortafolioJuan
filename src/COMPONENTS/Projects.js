import React from "react";
import "../COMPONENTS/projects.css";
import aliBanner from "../image/ali banner.png";
import musicBanner from "../image/musicBanner.jpg";
import albumBanner from "../image/albumBanner.jpg";
import btnDown from "../image/down.png";
// aos es para animar mientras scrolleo
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="padre-projects" id="seccionProjects">
      {/* este data-aos es para las animaciones de la libreria AOS*/}
      <div
        
        
      >
        <h1>My projects</h1>
      </div>
      <div className="cont-projects" data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-offset="200">
        <div className="cardProjects" id="party">
          <div className="imgBanner">
            <img src={aliBanner} alt="" />
          </div>
          <div className="bannerText">
            <h2>Birthday Invitation</h2>

            <p>
              This party invitation was made by me using HTML and CSS, with HTML
              organizing the content and CSS styling the page, resulting in a
              stylish and personalized digital invitation.
            </p>
            <button className="btn btn-danger">
              <a
                href="https://invitacionalison.firebaseapp.com/"
                target="_blank"
              >
                Visit Now
              </a>
            </button>
          </div>
        </div>
        <div className="cardProjects" id="music">
          <div className="imgBanner">
            <img src={musicBanner} alt="" />
          </div>
          <div className="bannerText">
            <h2>Music Academy WebSite</h2>
            <p>Coming soon</p>
          </div>
        </div>
        <div className="cardProjects" id="album">
          <div className="imgBanner">
            <img src={albumBanner} alt="" />
          </div>
          <div className="bannerText">
            <h2>Digital Photo Album</h2>
            <p>Coming Soon</p>
          </div>
        </div>

        
      </div>
      <div className="infiBtnPagSig">
          <a href="#seccionContact">
            <img src={btnDown} alt="" />
          </a>
        </div>

      {/* --------------------------------------------------------aqui empieza el responsive---------------------------------------------------- */}
    </div>
  );
};

export default Projects;
