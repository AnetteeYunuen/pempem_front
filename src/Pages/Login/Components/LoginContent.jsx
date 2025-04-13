import React, { useState } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import imglog from '../../../assets/imglogin.png';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showReset, setShowReset] = useState(false);
    const [resetSent, setResetSent] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const token = await userCredential.user.getIdToken();
            localStorage.setItem('authToken', token);
            onLogin(userCredential.user);
            navigate('/ejercicioTipo');
        } catch (error) {
            setError('Usuario o contraseña incorrectos');
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordReset = async () => {
        if (!email) {
            setError('Por favor ingresa tu correo electrónico');
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            setResetSent(true);
            setError('');
        } catch (error) {
            setError('Error al enviar el correo de recuperación');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <img src={imglog} alt="Imagen de fondo" className="login-image" />
                <h2>Iniciar Sesión</h2>

                {!showReset ? (
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="ejemplo@dominio.com"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>Contraseña:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <button 
                                type="button"
                                onClick={() => navigate('/Registro')}
                                disabled={loading}
                            >
                                Registrarme
                            </button>
                            <button 
                                type="submit" 
                                disabled={loading}
                            >
                                {loading ? 'Cargando...' : 'Ingresar'}
                            </button>
                        </div>

                        <p className="reset-link" onClick={() => setShowReset(true)}>
                            ¿Olvidaste tu contraseña?
                        </p>

                        {error && <p className="error-message">{error}</p>}
                    </form>
                ) : (
                    <div className="reset-password">
                        {resetSent ? (
                            <>
                                <p className="success-message">
                                    ¡Correo enviado! Revisa tu bandeja de entrada.
                                </p>
                                <button 
                                    className="back-to-login"
                                    onClick={() => {
                                        setShowReset(false);
                                        setResetSent(false);
                                    }}
                                >
                                    Volver a inicio de sesión
                                </button>
                            </>
                        ) : (
                            <>
                                <h3>Restablecer contraseña</h3>
                                <p>Ingresa tu correo electrónico para recibir el enlace de recuperación</p>
                                
                                <div className="input-group">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="ejemplo@dominio.com"
                                        required
                                    />
                                </div>

                                <div className="reset-buttons">
                                    <button 
                                        type="button"
                                        onClick={handlePasswordReset}
                                    >
                                        Enviar enlace
                                    </button>
                                    <button 
                                        type="button"
                                        className="cancel-btn"
                                        onClick={() => setShowReset(false)}
                                    >
                                        Cancelar
                                    </button>
                                </div>

                                {error && <p className="error-message">{error}</p>}
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;