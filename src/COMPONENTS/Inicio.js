import React from "react";
import videoPortada from "../image/videoportada.mp4";
import '../COMPONENTS/inicio.css';
const Inicio = () => {
    return (
        <div>
            <section className="contenedor">
                <div className="video-container">
                    <video autoPlay loop src={videoPortada}></video>
                </div>

              <div className="contenido-portada">
                <div className="titulos-portada">
                    <h4>Front-end Developer</h4>
                     <h1>PORTAFOLIO</h1>
                     <h4>By Nicolas Romero</h4>
                   
                     <hr />
                </div>
                 
                 <div className="botones-portada">
                    <button>INFORMATION</button>
                    <button>SKILLSET</button>
                    <button>PROJECTS</button>
                    <button>EXPERIENCE</button>
                    <button>CONTACT ME</button>
                 </div>
              </div>
            </section>
        </div>
    );
};

export default Inicio;
