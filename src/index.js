import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';



// importantisimo para poder usar boostrap y no olvidar instalar en la consola con "npm install react-bootstrap bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './COMPONENTS/Inicio';
import Information from './COMPONENTS/Information';
import Skillset from './COMPONENTS/Skillset';
import Projects from './COMPONENTS/Projects';
import Experience from './COMPONENTS/Experience';
import Contact from './COMPONENTS/Contact';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}



<Inicio/>


{/* se tuvo que crear este div despues del componente inicio para que el navbar pueda recorrer todos los componentes de forma fija sin desaparecer, ya que se usa la propiedad sticky y eso hace que deje de ser fijo cuando se acaba su div padre */}
<div className='fondo'>

<div 
                className="nav-bar"
                
               
            >
                <div className="botones-nav-bar">
                  {/* se anadio cada classname para que los botons tuvieran la raya inferior con el hover */}
                    <a className='btn-linea' href="#seccionInicio">MAIN</a>
                    <a className='btn-linea' href="#seccionInfo">INFORMATION</a>
                    <a className='btn-linea' href="#seccionSkill">SKILLSET</a>
                    <a className='btn-linea' href="#seccionProjects">PROJECTS</a>
                    <a className='btn-linea' href="#seccionExperience">EXPERIENCE</a>
                    <a className='btn-linea' href="#seccionContact">CONTACT ME</a>
                    <hr />
                </div>
            </div>
<Information/>
<Skillset/>
{/* <Projects/>
<Experience/>
<Contact/> */}

</div>

  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
