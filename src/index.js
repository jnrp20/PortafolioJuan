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
                    <a href="#seccionInicio">MAIN</a>
                    <a href="#seccionInfo">INFORMATION</a>
                    <a href="#seccionSkill">SKILLSET</a>
                    <a href="#seccionProjects">PROJECTS</a>
                    <a href="#seccionExperience">EXPERIENCE</a>
                    <a href="#seccionContact">CONTACT ME</a>
                    <hr />
                </div>
            </div>
<Information/>
<Skillset/>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae velit nobis blanditiis praesentium quidem culpa. Fugit ipsa dignissimos dicta suscipit dolor blanditiis voluptas dolorum, earum laboriosam. Labore esse minima quod odio harum ducimus voluptatibus quaerat expedita distinctio accusantium necessitatibus dolorum neque adipisci laborum totam cum officia, perspiciatis consectetur aperiam quas impedit sint, voluptatem fuga ipsum! Dolorem fugit eius est officiis magnam quidem ipsam earum, eveniet excepturi assumenda quibusdam, nostrum necessitatibus cumque doloremque? Minus, commodi repudiandae? Quibusdam ducimus commodi, esse, ex fuga ea accusamus reprehenderit consectetur provident sit animi, possimus odit sapiente! Pariatur reiciendis, suscipit eos animi deserunt delectus, temporibus consequuntur distinctio iste beatae rem libero est! Accusamus voluptate a consequuntur! Cumque atque enim ipsam quisquam autem quo at eius possimus deserunt, consequuntur quod animi. Error, omnis est. Dolore placeat magni, repellat expedita dicta voluptatem libero, quaerat excepturi deserunt temporibus in nobis illo at explicabo ullam officia assumenda quo aut vero accusamus sit, architecto non inventore ab. Dignissimos sapiente ipsum vel facere, non, ipsa tempore rem delectus sequi facilis labore sed ratione repellendus consectetur odit ea minima ut recusandae, tempora sint pariatur et odio magnam! Natus non sit est tempora harum impedit, mollitia officia quam molestiae ut ex iure eum rerum illo vel repellendus. Incidunt aperiam explicabo, optio iste aut distinctio totam molestias dignissimos voluptatem modi blanditiis quia quibusdam, est molestiae temporibus eius sint corporis. Cumque, tenetur inventore aspernatur fuga nemo quaerat eligendi, eaque fugit dolorem error dolorum, cum beatae nisi aperiam tempore necessitatibus deserunt est reiciendis quod. Nesciunt inventore deleniti ea nostrum quos dolore ullam debitis impedit officiis excepturi. Corporis repellat in, non adipisci aspernatur quis odio reprehenderit tenetur modi ipsum, esse, aut tempore vitae quasi ea dolores quod? Vel, quidem possimus. Nostrum quia earum, nam iusto reprehenderit illum voluptas molestias nulla? Vel reiciendis suscipit excepturi tempora, dolor blanditiis at minima nisi harum quasi id dolore impedit ratione quos accusantium recusandae consectetur fuga amet itaque natus consequuntur laborum numquam! Dolores possimus provident quisquam, porro culpa atque alias, architecto aliquid, sunt et aut recusandae. Cum quas, soluta officiis nostrum ad libero eius unde, modi harum, delectus at! Illum, sequi. Error laudantium accusantium enim officia animi recusandae deserunt? Pariatur doloribus, amet consectetur dolorem sint optio reprehenderit ea! Asperiores unde cum sequi dignissimos nobis labore quis necessitatibus praesentium perferendis, ipsa reprehenderit temporibus laborum. Aut perferendis voluptatum accusantium voluptates nulla doloremque ea qui earum. Iusto at, fugit odio nobis tempore optio, ea dignissimos, ullam placeat quasi dolorem? Eveniet sapiente quod nisi, repudiandae ea quam possimus pariatur! Nobis adipisci, impedit voluptatem inventore aliquid praesentium, culpa nostrum id enim nesciunt quaerat delectus modi? Ab libero facilis harum, corrupti cupiditate fuga, odio mollitia magnam, debitis perferendis veniam dolores similique maiores commodi. Dolorum quis molestias quibusdam ipsam laborum at ipsa repellendus quidem sed, deserunt praesentium quaerat a tempore suscipit quo tempora facilis aperiam ipsum. Libero blanditiis ex, delectus unde obcaecati eius corporis cumque eum deserunt ullam accusantium veniam molestiae necessitatibus alias ipsam tempora aliquid repellat aliquam illo id ea minus placeat, dolores voluptate! Eaque corrupti aliquam ratione distinctio maxime architecto necessitatibus est. Laboriosam quod laudantium, atque necessitatibus dolor adipisci corrupti vitae architecto, quis quaerat pariatur iusto quas totam! Delectus iste iure quo expedita at veniam ipsum animi ad odit, quis distinctio repellat, necessitatibus deleniti ducimus, nihil aut repudiandae ut. Molestias ullam unde, ex delectus recusandae odio adipisci saepe sunt consectetur laudantium. Fuga error inventore ipsam omnis? Deserunt eaque modi aperiam atque aliquid quis architecto perferendis, sequi tempora sunt error eos voluptatum. Ex maxime ab laborum odit quisquam, corporis hic at eligendi error. Praesentium, culpa voluptatibus qui corporis voluptas possimus vitae! Eaque nobis nam iste sit amet unde hic doloribus voluptate eius libero? Voluptatum iusto facere repudiandae eaque corrupti, libero amet cupiditate, pariatur dolore mollitia nesciunt similique. Quos, quam porro. Nam eum saepe asperiores ut tempora molestias assumenda ipsum voluptates, quis esse vel aut ullam odit tempore voluptatum ipsam accusantium repudiandae veritatis. Iusto inventore, porro eveniet sed ex sunt ipsum labore dolore consectetur mollitia, necessitatibus vitae vel iste laudantium magni sequi minus quis error repudiandae tenetur est explicabo! Ipsam vitae commodi nihil fuga rerum eos dolorem corrupti! Corrupti doloribus itaque distinctio laboriosam dolore, esse rerum nulla ea possimus autem exercitationem incidunt accusantium labore maxime molestias perferendis nobis totam inventore quis est cumque assumenda adipisci doloremque voluptatem. Velit, dolor ratione, possimus reprehenderit, animi delectus modi repellendus expedita aperiam deserunt perspiciatis. Optio tempora numquam sint saepe cupiditate tenetur nobis explicabo ad sequi error commodi nihil laboriosam quae quisquam maxime, facilis praesentium, animi unde, quos eveniet amet aut ipsam? Dolor officia sit, soluta vero illo ducimus optio, aspernatur placeat sint provident mollitia, impedit debitis sapiente. Rerum eaque odio modi optio dicta pariatur, maxime qui hic quis laudantium mollitia voluptatibus sapiente, tempora autem quisquam nulla nostrum. Sapiente beatae vitae, exercitationem reprehenderit enim nemo minus! Placeat accusamus, voluptatibus, repellat earum impedit corporis unde dicta eos quasi ducimus, minima deserunt. Cupiditate facilis impedit iure possimus rem nemo tenetur! Ea asperiores rerum suscipit voluptates, similique molestiae eligendi nihil! Corrupti alias quam molestiae natus minima odit distinctio quasi, necessitatibus rerum voluptatem quae molestias nostrum suscipit facere impedit repellendus quia laboriosam! Ullam corrupti ducimus molestias rerum voluptate. Sint qui recusandae veniam, magnam eum hic necessitatibus quidem iure cumque officiis ab soluta tenetur non repellat error alias, perspiciatis suscipit natus? Architecto alias quae laboriosam autem, tempora doloribus sequi veritatis quas delectus natus blanditiis, corrupti itaque velit maiores qui quis modi vel nostrum dignissimos voluptatum ducimus omnis ea. Architecto ipsam dignissimos distinctio tenetur voluptatibus magnam illum accusantium ratione, veniam tempora in doloribus eum molestiae quis temporibus ea doloremque iusto sit reprehenderit laborum deleniti eos! Vero architecto modi iusto odio aut omnis doloremque mollitia expedita deleniti molestias velit hic veniam delectus odit repudiandae ut culpa ratione cupiditate nemo eligendi itaque, quis ab exercitationem sed. Exercitationem molestias, sapiente esse alias sunt at accusantium sit obcaecati aliquam eius! Ipsam consequatur aliquid non, animi ullam ex adipisci nulla est excepturi saepe suscipit asperiores molestiae maiores vel eveniet autem velit consequuntur, pariatur perferendis voluptas! Voluptate quidem aut minima, magnam deleniti quae incidunt consectetur iusto!
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
