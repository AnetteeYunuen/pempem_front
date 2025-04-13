import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Nosotros from './Pages/Nosotros/Nosotros';
import Login from './Pages/Login/Login';
import Registro from './Pages/Registro/Registro';
import UsuarioTipo from './Pages/UsuarioTipo/UsuarioTipo';
import Micuenta from './Pages/Micuenta/Micuenta';
import Planes from './Pages/Planes/Planes';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import MfaSetup from './Pages/Registro/Components/MfaSetup';
import EjercicioTipo from './Pages/EjercicioTipo/EjercicioTipo';
import { auth } from './firebase'; 
import axios from 'axios'; 
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        localStorage.removeItem('authToken');
        setUser(null);
      })
      .catch(error => {
        console.error('Error al cerrar sesión:', error);
      });
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
            {/* Ruta protegida */}
            <Route 
    path="/UsuarioTipo" 
    element={
        user // Usar el estado de usuario de Firebase en lugar de localStorage
            ? <UsuarioTipo /> 
            : <Navigate to="/Registro" replace />
    } 
/>
          <Route path="/Planes" element={<Planes />} />
          <Route 
          path="/Micuenta" 
          element={
            user ? (
              <Micuenta user={user} />
            ) : (
              <Navigate to="/Login" replace />
            )
          } 
        />
          <Route path="/MfaSetup" element={<MfaSetup />} />
          <Route 
            path="/ejercicioTipo" 
            element={
              localStorage.getItem('authToken') 
                ? <EjercicioTipo /> 
                : <Navigate to="/Login" replace />
            } 
          />
          <Route path="/Login" element={<Login onLogin={setUser} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
