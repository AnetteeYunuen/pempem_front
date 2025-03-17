import React from "react";
import "./MicuentaContent.css";

const MicuentaContent = () => {
  return (
    <div className="micuenta-container">
      <div className="form-container">
        <div className="profile-container">
          <div className="profile-picture"></div>
        </div>
        <h2>Datos</h2>
        <div className="input-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" className="input-field" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="input-field" />
        </div>
        <button className="save-button">Guardar</button>
      </div>
    </div>
  );
};

export default MicuentaContent;
