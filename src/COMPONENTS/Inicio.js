import React from "react";
import videoPortada from "../image/videoportada.mp4";
import btnResponsive from "../image/flechaAbajo.png"
import '../COMPONENTS/inicio.css';

const Inicio = (props) => {

    return (
        <div>
            <section className="contenedor" id="seccionInicio">
                <div className="video-container">
                    <video autoPlay loop src={videoPortada}></video>
                </div>
                <div className="contenido-portada">
                    <div className="titulos-portada">
                        <h4>Front-end Developer</h4>
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

                    <div className="btn-responsive">

                    
                        <a href="#seccionInfo"><img src={btnResponsive} alt="" /></a>
                    

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Inicio;
