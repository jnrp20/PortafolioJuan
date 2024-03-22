import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import "../COMPONENTS/contact.css";
import { useState } from "react";
// aos es para animar mientras scrolleo
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// el toast es para cuando le den enviar al formulario, salga el mensaje de "enviado". la herramienta está guardada en el firefox, carpeta trabajo juan. hay que importar el "npm i react-toastify" en la terminal
import { Bounce, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

// esta constantex notify, viene con el toast de el formulario linea 13
  const notify = () => toast.success('🎉The email has been sent👌', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    // aqui toca escribir manualmente esto
    transition: Bounce,
    
    });;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cmmgr5k",
        "template_jthvkhh",
        form.current,
        "jJz_x5XKz2KWU7rZg"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("mensaje enviado");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          console.log("ërror al enviar");
        }
      );

      notify();
  };

  const [verfied, setVerifed] = useState(false);
  //  el verified es el nombre de la variable, mientras que el setVerifed se usa para acceder a ella en otras lineas de codigo

  const onChange = () => {
    console.log("usuario verificado");

    // aqui se cambia el estado de false a true para que el boton de enviar se habilite
    setVerifed(true);
  };

  return (
    <div className="padre-contact" id="seccionContact">
      {/* este data-aos es para las animaciones de la libreria AOS */}
    
      <div className="cont-contact">
        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        ></div>
 
        <form ref={form} onSubmit={sendEmail}>
          <h1 id="SendEmail">Send Email</h1>

          <input
            type="text"
            name="user_name"
            placeholder="Full name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message here..."
            required
          />
          <ReCAPTCHA
            sitekey="6LfKMl8pAAAAAMlz-yt7Jc7lzoMNNfyed4RJb15U"
            // en este onChange se ve que hubo un cambio en el checkbox por lo que hace el llamado a la función {onChange} definida en la linea 45
            onChange={onChange}
            id="btnCaptcha"
          />

          <Button 
            // hay que poner type para que el formulario lo reconozca como el boton enviar del formulario
            type="submit"
            // el !verfied es una variable de estado que se definió mas arriba (linea 41) y ayuda a bloquear el boton para que solo se active cuando se verifica el captcha
            disabled={!verfied}
            id="btnEnviar"
            // esta variante es la de bootstrap para el tipo de boton
            variant="secondary"
          >
            SUBMIT{" "}
          </Button>
          <ToastContainer/>
          <p>Email: nicolasromero.dev@gmail.com</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
