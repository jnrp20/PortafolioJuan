import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';
import "../COMPONENTS/contact.css";




// aos es para animar mientras scrolleo
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contact = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_cmmgr5k', 'template_jthvkhh', form.current, 'jJz_x5XKz2KWU7rZg')
        .then((result) => {
            console.log(result.text);
            console.log("mensaje enviado");
            e.target.reset();
        }, (error) => {
            console.log(error.text);
            console.log("ërror al enviar");
        });
    };

  return (
    <div className="padre-contact"  id="seccionContact">
        {/* este data-aos es para las animaciones de la libreria AOS */}
        
        <div className="cont-contact">

             <div data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500">
                
             </div>

             


              <form ref={form} onSubmit={sendEmail}>
              <h1 >CONTACT ME</h1> 
      
      <input type="text" name="user_name" placeholder='Full name'/>
      
      <input type="email" name="user_email" placeholder='Your Email'/>
      
      <textarea name="message" placeholder='Your Message here...'/>
      <input type="submit" value="SUBMIT ->" id='btnEnviar' />

      <p>or contact me: nicolasromero.dev@gmail.com</p>
    </form>
           
             
        </div>
      
    </div>
  )
}

export default Contact
