import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegistroContent.css';
import imglog from '../../../assets/imglogin.png';

function Registro() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Función para manejar el registro
    const handleRegistration = async (e) => {
        e.preventDefault();
        setError('');
        
        // Validaciones
        if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(nombre)) {
            return setError('El nombre solo debe contener letras');
        }
        if (password.length < 8) {
            return setError('La contraseña debe tener al menos 8 caracteres');
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return setError('Ingrese un email válido');
        }

        setLoading(true);
        
        try {
            const response = await axios.post('https://pempem-back2.onrender.com/api/mfa/setup', { email });
            
            // Guardar datos temporales
            localStorage.setItem('mfaData', JSON.stringify({
                email,
                password,
                nombre,
                qrUrl: response.data.qrUrl
            }));

            navigate('/MfaSetup');
            
        } catch (error) {
            setError(error.response?.data?.error || 'Error en el registro');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <img src={imglog} alt="Imagen de fondo" className="login-image" />
                <h2>Registro</h2>
                
                <form onSubmit={handleRegistration}>
                    <div className="input-group">
                        <label>Nombre:</label>
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Ej: Rodrigo Medina"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Correo:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ej: usuario@dominio.com"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mínimo 8 caracteres"
                            required
                        />
                    </div>

                    <div className="input-group">
                    <button 
                            type="button"
                            className="button"
                            onClick={() => navigate('/Login')}
                        >
                            Volver 
                        </button>
                        <button 
                            type="submit" 
                            className="button"
                            disabled={loading}
                        >
                            {loading ? 'Procesando...' : 'Registrarme'}
                        </button>
                        

                    </div>

                    {error && <div className="error-message">{error}</div>}
                </form>
            </div>
        </div>
    );
}

export default Registro;