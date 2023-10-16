import React from "react";
import "../COMPONENTS/information.css";
import fotoPerfil from "../image/profie.png";
// aos es para animar mientras scrolleo
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Information = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="padre-info"  id="seccionInfo">
            {/* este data-aos es para las animaciones de la libreria AOS */}
            
            <div className="cont-info">

                 <div data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500">
                    <h1 >INFORMATION</h1> 
                 </div>


                 <div className="div-info" data-aos="flip-left" data-aos-duration="1500">
                    
                    <div className="foto">
                        <h5>FRONT-END DEVELOPER</h5>
                        <img src={fotoPerfil} />
                        <h5>JUNIOR</h5>
                    </div>
                    <div className="texto">
                        <h1>NICOLAS ROMERO</h1>
                        <p>Systems engineer, studying specialization in business Management of
                            Information systems. With subjects dedicated to management in
                            decision making, adapting them to the strategy of
                            the organization. </p>
                        <p>Knowledge of different programming languages ​​such as
                            Java, JavaScript, C++, C#, HTML, CSS, TypeScript, JXS, Bootstrap, Angular and React frameworks. Values ​​based on
                            commitment, order, efficiency and with great strength in teamwork,
                            problem solving thus achieving results
                            expected business outcomes.</p>
                    </div>
                 </div>



            </div>
          
        </div>
    );
};

export default Information;
