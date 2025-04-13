import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase'; 


function MfaSetup() {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const mfaData = JSON.parse(localStorage.getItem('mfaData') || '{}');

    useEffect(() => {
        if (!mfaData.email || !mfaData.qrUrl) {
            navigate('/Registro');
        }
    }, []);

    const handleVerify = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        
        try {
            if (!/^\d{6}$/.test(code)) throw new Error('Código debe tener 6 dígitos');
            
            const response = await axios.post('https://pempem-back2.onrender.com/api/mfa/verify', {
                email: mfaData.email,
                code,
                password: mfaData.password,
                nombre: mfaData.nombre
            });
    
            // 1. Hacer login con Firebase después de la verificación exitosa
            const userCredential = await signInWithEmailAndPassword(
                auth, 
                mfaData.email, 
                mfaData.password
            );
            
            // 2. Guardar token JWT si es necesario
            localStorage.setItem('authToken', response.data.token);
            localStorage.removeItem('mfaData');
            
            // 3. Redirigir
            navigate('/UsuarioTipo');
            
        } catch (err) {
            setError(err.response?.data?.error || 'Error en verificación');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mfa-container">
            <h2>Verificación en Dos Pasos</h2>
            <img src={mfaData.qrUrl} alt="Código QR" style={{ width: '200px' }} />
            <form onSubmit={handleVerify}>
                <input
                    type="text"
                    placeholder="Código de 6 dígitos"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Verificando...' : 'Continuar'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default MfaSetup;