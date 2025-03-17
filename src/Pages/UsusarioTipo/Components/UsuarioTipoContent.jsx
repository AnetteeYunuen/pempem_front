import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UsuarioTipoContent.css';

function UsuarioTipoContent() {
  const navigate = useNavigate();

  // Maneja la selección del usuario y navega a la página EjerciciosTipo
  const handleUserSelection = (userType) => {
    console.log(`Usuario seleccionado: ${userType}`);
    navigate('/ejercicioTipo', { state: { userType } });
  };

  return (
    <main>
      <div className="container-usuariotipo">
        <button
          className="button-usuario"
          onClick={() => handleUserSelection('Maestro')}
        >
          Maestro
        </button>
        <button
          className="button-usuario"
          onClick={() => handleUserSelection('Padre de familia')}
        >
          Padre de familia
        </button>
      </div>
    </main>
  );
}

export default UsuarioTipoContent;
