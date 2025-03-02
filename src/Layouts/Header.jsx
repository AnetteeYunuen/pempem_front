import React from 'react';
import './styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Header({ user, onLogout }) {
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
        <div className="user-login">
          {user ? (
            <>
              <div className="user-icon-circle">
                <FontAwesomeIcon icon={faUser} className="user-icon" />
              </div>
              <span className="login-text">Bienvenido, {user.email}</span>
              <button onClick={onLogout} className="logout-button">
                Cerrar sesión
              </button>
            </>
          ) : (
            <a href="/login">  {}
              <div className="user-icon-circle">
                <FontAwesomeIcon icon={faUser} className="user-icon" />
              </div>
              <span className="login-text">Sign In</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;