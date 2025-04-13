import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UsuarioTipoContent.css';

function UsuarioTipoContent() {
    const navigate = useNavigate();

    useEffect(() => {
        // Verificar autenticación
        if (!localStorage.getItem('authToken')) {
            navigate('/Login');
        }
    }, []);

    const handleUserSelection = async (userType) => {
        try {
            await axios.post('https://pempem-back2.onrender.com/api/users/update-type', 
                { userType },
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                    }
                }
            );
            
            navigate('/ejercicioTipo', { state: { userType } });
        } catch (error) {
            console.error('Error actualizando tipo de usuario:', error);
        }
    };

    return (
        <main>
            <div className="container-usuariotipo">
                <button className="button-usuario" onClick={() => handleUserSelection('Maestro')}>
                    Maestro
                </button>
                <button className="button-usuario" onClick={() => handleUserSelection('Padre de familia')}>
                    Padre de familia
                </button>
            </div>
        </main>
    );
}

export default UsuarioTipoContent;