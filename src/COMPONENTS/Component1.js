import "../COMPONENTS/Component1.css";
import React, { createRef, useRef } from "react"; //se tiene que importar esto para que se pueda modificar el DOM haciendo referencias
import ReactDOM from "react-dom";

import bombilla from "../image/bombilla.png";
import bombillaOn from "../image/bombillaOn.png";
import logo from "../image/patitaslogo.png";
import btnMenu from "../image/menu.png";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// las imagenes se tienen que importar no se puede poner la ruta directamente como en un html normal

export default function Component1() {
  /*  estas ref ayudan para poder editar el dom en las funciones de javaScript, se pone la referencia en los tags ej: en los div y eso viene a remplazar el id */
  let estadoBombillo = false;
  // parra saber si modo noche está activo o no
  let estadoOpciones = false;
  // parra saber si ocultar o no el menu opciones en responsive

  let refBombillo = useRef(),
    refbody = useRef(),
    refletras = useRef(),
    refregistrarse = useRef(),
    refdivOpciones = useRef(),
    refbanner=useRef();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="padre" ref={refbody}>
      <header ref={refletras}>
        <div className="logodiv">
          <img id="bombillo" src={logo} alt="" width="10%" />

          <h1>patitas app</h1>
        </div>

        <div className="btn-sesion">
          <img
            className="img-bombillo"
            onClick={prueba}
            id="bombillo"
            src={bombillaOn}
            width="12%"
            ref={refBombillo}
          />

          {/* en este img el id bombillo queda obsoleto y se remplaza con las referencias */}

          <h4>Iniciar sesión</h4>

          <div className="btn-registrarse" ref={refregistrarse} >
            <h4>Registrarse</h4>
          </div>

          <div className="btn-opciones">
            {/* esta imagen ocupa el 100% del espacio del div en donde está alojado */}
            <img className="btn-opciones" onClick={handleShow} src={btnMenu} width="10%"> 
            {/* en el onclick va el activador del menu */}
             
            </img>

            <Offcanvas show={show} onHide={handleClose} placement="end" data-bs-theme="dark">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>MENÚ PATITAS APP</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <div className="tagsbtn">
          <a href="">SERVICIOS</a>
        </div>
        <div className="tagsbtn">
          <a href="">FUNDACIONES</a>
        </div>
        <div className="tagsbtn">
          <a href="">ALERTAS</a>
        </div>
        <div className="tagsbtn">
          <a href="">NOTICIAS</a>
        </div>
        <div className="tagsbtn">
          <a href="">ACERCA DE</a>
        </div>
        <div className="tagsbtn">
          <a href="">PUBLICITA AQUI</a>
        </div>
        <hr />
        <Offcanvas.Title>SIGUENOS EN</Offcanvas.Title>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </header>

      <div className="sub-header" >
        <div className="tags">
          <a href="">SERVICIOS</a>
        </div>
        <div className="tags">
          <a href="">FUNDACIONES</a>
        </div>
        <div className="tags">
          <a href="">ALERTAS</a>
        </div>
        <div className="tags">
          <a href="">NOTICIAS</a>
        </div>
        <div className="tags">
          <a href="">ACERCA DE</a>
        </div>
        <div className="tags">
          <a href="">PUBLICITA AQUI</a>
        </div>
      </div>
    </div>
  );

  function prueba() {
    if (estadoBombillo == false) {
      /* no olvidar el .current */

      refbody.current.style.backgroundColor = "rgb(44, 43, 43)";
      refregistrarse.current.style.backgroundColor = "#917cc5";
      
      refletras.current.style.backgroundColor = "#171f63";

      refBombillo.current.src = bombilla;
      console.log("se apagó el bombillo");
      estadoBombillo = true;
    } else {
      refbody.current.style.backgroundColor = "white";
      refregistrarse.current.style.backgroundColor = "chocolate";
    
      refletras.current.style.color = "white";
      refletras.current.style.backgroundColor = "#034A68";
      refBombillo.current.src = bombillaOn;
      console.log("se prendió el bombillo");
      estadoBombillo = false;
    }
  }

  function aparecerOpciones() {
    if (estadoOpciones == false) {
      refdivOpciones.current.style.display = "block";
      refdivOpciones.current.style.position = "relative";
      // se coloca block para que las opciones salgan unas encima de otras
      estadoOpciones = true;
    } else {
      refdivOpciones.current.style.display = "none";
      // se coloca block para que las opciones salgan unas encima de otras
      estadoOpciones = false;
    }
  }


  function quitarbanner() {

    
  }
}
