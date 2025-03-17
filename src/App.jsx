import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Nosotros from './Pages/Nosotros/Nosotros';
import Login from './Pages/Login/Login';
import Registro from './Pages/Registro/Registro';
import UsuarioTipo from './Pages/UsusarioTipo/UsuarioTipo';
import Micuenta from './Pages/Micuenta/Micuenta';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';

function App() {
  const [user, setUser] = useState(null);
  const handleLogout = () => {
    setUser(null); 
  };

  return (
    <Router>
      <div className="App">
        <Header user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/UsuarioTipo" element={<UsuarioTipo />} />
          <Route path="/Micuenta" element={<Micuenta />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
