import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './EjercicioTipoContent.css';

// Importa tus imágenes (asegúrate de tenerlas en tu proyecto)
import ejercicioNinos from '../../../assets/ejercicio-ninos.jpg';
import ejercicioAula from '../../../assets/ejercicio-aula.jpg';

function EjercicioTipoContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userType } = location.state || {};

  useEffect(() => {
    if (!localStorage.getItem('authToken')) {
      navigate('/Login');
    }
  }, [navigate]);

  return (
    <div className="ejerciciotipo-container">
      <h1>Bienvenido {userType || 'Usuario'}</h1>
      
      {userType === "Padre de familia" && (
        <div className="ejercicio-card">
          <img 
            src={ejercicioNinos} 
            alt="Ejercicio para niños en casa" 
            className="ejercicio-imagen"
          />
          <div className="ejercicio-contenido">
            <h2>Actividad para hacer en casa</h2>
            <p><strong>Juego de colores y formas:</strong></p>
            <ol>
              <li>Coloca objetos de diferentes colores en una caja</li>
              <li>Pídele a tu hijo que agrupe los objetos por color</li>
              <li>Luego pídele que identifique las formas básicas</li>
              <li>Premia sus aciertos con aplausos o abrazos</li>
            </ol>
            <p>Duración: 15-20 minutos</p>
          </div>
        </div>
      )}

      {userType === "Maestro" && (
        <div className="ejercicio-card">
          <img 
            src={ejercicioAula} 
            alt="Ejercicio para el aula" 
            className="ejercicio-imagen"
          />
          <div className="ejercicio-contenido">
            <h2>Actividad para el aula</h2>
            <p><strong>Circuito psicomotriz:</strong></p>
            <ol>
              <li>Organiza 4 estaciones: gateo, zig-zag, saltos y equilibrio</li>
              <li>Divide a los niños en grupos pequeños</li>
              <li>Rota los grupos por cada estación cada 5 minutos</li>
              <li>Finaliza con una canción de relajación</li>
            </ol>
            <p>Duración: 25-30 minutos</p>
            <p>Materiales: aros, cuerdas, colchonetas</p>
          </div>
        </div>
      )}

      <div className="button-group">
        <button 
          className="primary-button"
          onClick={() => navigate('/ejercicios')}
        >
          Ver más ejercicios
        </button>
      </div>
    </div>
  );
}

export default EjercicioTipoContent;