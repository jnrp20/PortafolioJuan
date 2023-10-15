import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';



// importantisimo para poder usar boostrap y no olvidar instalar en la consola con "npm install react-bootstrap bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './COMPONENTS/Inicio';
import Information from './COMPONENTS/Information';
import Skillset from './COMPONENTS/Skillset';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
<Inicio/>
<Information/>
{/* <Skillset/> */}
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
