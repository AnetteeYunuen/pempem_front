import React from 'react';
import './MainContent.css';
import imagen1 from '../../../assets/imagen1.png';
import imagen2 from '../../../assets/imagen2.png';
import imagen8 from '../../../assets/imagen8.png';
import imagen5 from '../../../assets/imagen5.png';
import imagen6 from '../../../assets/imagen6.png';
import imagen7 from '../../../assets/imagen7.png';



function MainContent() {
  return (
    <>
      <main className="main-content">
        <div className="content-container">
          <div className="right-content">
            <section className="hero">
              <h2></h2>
            </section>
            <section className="images">
              <img src={imagen1} alt="Niña jugando" />
              <img src={imagen2} alt="Actividad infantil" />
            </section>
          </div>

          <div className="hero">
            <div className="hexagons">
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
            </div>
            <div className="hexagons2">
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
            </div>
            <div className="hero">
              <div className="butterfly-container">
                <img src={imagen7} alt="Mariposa" className="butterfly" />
              </div>
              <h3>Pem Pem</h3>
            </div>

            
            <div className="hexagons3">
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
            </div>
            <h2>"La comunicación transforma, la mariposa te guía"</h2>
            <button className="main-content-button">Comienza ahora y permítenos acompañar a tu pequeño</button>
            </div>
        </div>
      </main>

      <section className="additional-info">
        <div className="info-content">
          <h4>Pem Pem</h4>
          <div className="text-image-container">
            <section className="imagess">
              <img src={imagen8} alt="Mariposa" />
            </section>
            <div className="text">
              <p>La palabra "PeM PeM" es originaria del yokótan, lengua indígena que se habla en las zonas rurales de Tabasco. Su significado es MARIPOSA, este hermoso insecto representa la evolución, pues estas están en un cambio constante, al igual que los niños cada día adquieren nuevos conocimientos que transforman su forma de ver el mundo.</p>
            </div>
          </div>
        </div>


        <div className="info-content">
          <h5>Nuestro enfoque y objetivo</h5>
            <div className="text">
              <p> En México existen más de 700 millones de personas, sufren un trastorno que no solo afecta sus habilidades comunicación sino la autoestima y la socialización.
              Debido a esto PEM PEM fue creado como una herramienta para padres y maestros con el deseo de apoyar a niños a partir de los 3 años hasta los 9 con problemas de lenguaje y lectoescritura a mejorar la forma en la que se comunican y poder transmitir sus necesidades y darle voz a lo que piensan, observan y sienten.</p>
          </div>
          <section className="images">
              <img src={imagen6} alt="Niña con madre" />
          </section>
        </div>


        <div className="content-container2">
  <div className="title-image-container">
    <h5>¿Qué es y cómo funciona?</h5>
    <img src={imagen5} alt="Descripción de la imagen" className="imagen-debajo-del-titulo" />
  </div>

  <div className="text-container">
    <p>
      PEM PEM es el sitio web que cuenta con estrategias que ayudará a tus pequeños a desarrollar habilidades lingüísticas mediante ejercicios que agilizan el aprendizaje. Nosotros sabemos que cada niño es diferente, por esto como primer paso te pedimos que contestes un formulario para conocer mejor tu caso y poderte brindar una ayuda más personalizada a tus necesidades. PEM PEM ofrece un amplio catálogo de ejercicios brindados por especialistas, y que se apegan a cada niño, con instrucciones claras para llevarlos a cabo de manera satisfactoria e incluso desde el hogar.
    </p>
  </div>
</div>




        
      </section>


 
    </>
  );
}

export default MainContent;
