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
Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni asperiores laudantium dicta nobis sapiente optio impedit, sint est quod provident officia vero excepturi veniam voluptas laborum perferendis dignissimos neque cupiditate. Asperiores impedit ducimus ipsum eius dicta hic nemo quas ullam provident quis dolorem nihil, voluptates autem laudantium animi expedita qui?
<br />
<br />
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae iusto porro beatae blanditiis reiciendis sit laudantium, assumenda tenetur quia delectus ut, reprehenderit pariatur, commodi vel adipisci dicta voluptatum! Velit, quia qui. Inventore, aliquam dolor mollitia possimus dolorem voluptate perferendis debitis culpa omnis ducimus reprehenderit. Fugit esse sapiente dolore modi ratione!                       
                    </div>
                 </div>



            </div>
          
        </div>
    );
};

export default Information;
