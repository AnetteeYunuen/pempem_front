import React from 'react';
import './PlanesContent.css';
import imagen7 from '../../../assets/imagen7.png'; 


function PlanesContent() {
  return (
    <>
      <main className="planes-main">
        {/* Título principal */}
        <header className="planes-header">
          <h1>¡Anímate a probar nuestros planes!</h1>
        </header>

        <section className="planes-container">
          {/* Sección Plan Maestro */}
          <div className="plan">
            <div className="plan-details">
              {/* Mariposa en Plan Maestro */}
              <div className="butterfly-container-planes">
                <img src={imagen7} alt="Mariposaa" className="butterfly-planes" />
              </div>
              <h2>Plan Maestro 300 MXN/mes</h2>
              <h3>Docentes que quieren mejorar el rendimiento académico de sus alumnos.</h3>
              <ul>
                <li>- 4 perfiles</li>
                <li>- Acceso material impreso</li>
                <li>- Videos, Imágenes</li>
                <li>- Conexión con profesionales</li>
                <li>- Seguimiento mensual</li>
                <li>- Actividades organizadas por sesiones con tiempos ajustables</li>
              </ul>
              <button className="plan-button">Adquirir</button>
            </div>
          </div>

          {/* Sección Plan Padres */}
          <div className="plan">
            <div className="plan-details">
              {/* Mariposa en Plan Padres */}
              <div className="butterfly-container-planes">
                <img src={imagen7} alt="Mariposaa" className="butterfly-planes" />
              </div>
              <h2>Plan Padres 200 MXN/mes</h2>
              <h3>Padres que buscan mejorar las habilidades comunicativas de sus hijos de manera efectiva.</h3>
              <ul>
                <li>- 1 perfil</li>
                <li>- Acceso material impreso</li>
                <li>- Videos, Imágenes</li>
                <li>- Conexión con profesionales</li>
                <li>- Seguimiento mensual</li>
                <li>- Actividades organizadas por sesiones con tiempos ajustables</li>
              </ul>
              <button className="plan-button">Adquirir</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default PlanesContent;
