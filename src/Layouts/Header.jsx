import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './styles/Header.css';


function Header({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Ejecuta la función de cierre de sesión
    navigate('/login'); // Redirige al login
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Pem Pem</h1>
      </div>
      <nav className="menu">
        <a href="/">Inicio</a>
        <a href="/nosotros">Nosotros</a>
        <a href="/planes">Planes</a>
      </nav>
      <div className="login">
        {user ? (
          <div className="user-logged-in">
            <a href="/Micuenta" className="account-link">Mi Cuenta</a>
            <span className="welcome-text">Bienvenido, {user.email}</span>
            <button onClick={handleLogout} className="logout-btn">
              <FontAwesomeIcon icon={faSignOutAlt} /> Cerrar sesión
            </button>
          </div>
        ) : (
          <a href="/login" className="login-link">
            <FontAwesomeIcon icon={faUser} /> Iniciar sesión
          </a>
        )}
      </div>
    </header>
  );
}

export default Header;