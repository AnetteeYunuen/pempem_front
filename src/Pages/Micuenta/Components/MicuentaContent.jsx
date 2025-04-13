import React, { useState, useEffect } from 'react';
import { 
  updateEmail,
  updateProfile,
  EmailAuthProvider,
  reauthenticateWithCredential,
  sendEmailVerification,
  onAuthStateChanged
} from 'firebase/auth';
import { auth, db } from '../../../firebase';
import { doc, getDoc, updateDoc, serverTimestamp   } from 'firebase/firestore';
import './MicuentaContent.css';

const MicuentaContent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Obtener datos de Authentication
        setName(user.displayName || '');
        setEmail(user.email || '');

        // Obtener datos adicionales de Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setName(userData.displayName || user.displayName || '');
          }
        } catch (error) {
          console.error("Error obteniendo datos de Firestore:", error);
        }
      }
    });

    return unsubscribe;
  }, []);

  const handleUpdate = async () => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("Debes iniciar sesión");
  
      // Reautenticación
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
  
      // Actualizar Auth
      if (name !== user.displayName) {
        await updateProfile(user, { displayName: name });
      }
      if (email !== user.email) {
        await updateEmail(user, email);
        await sendEmailVerification(user);
      }
  
      // Actualizar Firestore
      await updateDoc(doc(db, "users", user.uid), {
        displayName: name,
        email: email,
        lastUpdated: serverTimestamp() // Usando serverTimestamp
      });
  
      setSuccess("Datos actualizados correctamente");
      setIsEditing(false);
      setCurrentPassword('');
    } catch (error) {
      console.error("Error al actualizar:", error);
      setError(error.message.includes('auth/') 
        ? 'Error de autenticación: ' + error.message 
        : 'Error al actualizar: ' + error.message);
    }
  }; 
  
  // Helper para mensajes de error
  const getFirebaseError = (error) => {
    switch (error.code) {
      case "permission-denied":
        return "No tienes permisos para esta acción";
      case "unauthenticated":
        return "Debes iniciar sesión";
      default:
        return error.message;
    }
  }; 

  return (
    <div className="micuenta-container">
      <div className="form-container">
        <div className="profile-picture">
          {name.charAt(0).toUpperCase()}
        </div>
        
        <h2>Mi Cuenta</h2>
        
        <div className="input-group">
          <label>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!isEditing}
          />
        </div>
        
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!isEditing}
          />
        </div>

        {isEditing && (
          <div className="input-group">
            <label>Contraseña actual</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Ingresa tu contraseña para confirmar"
            />
          </div>
        )}

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <div className="button-group">
          {!isEditing ? (
            <button 
              className="edit-button"
              onClick={() => setIsEditing(true)}
            >
              Editar Datos
            </button>
          ) : (
            <>
              <button 
                className="save-button"
                onClick={handleUpdate}
                disabled={!currentPassword}
              >
                Guardar Cambios
              </button>
              <button 
                className="cancel-button"
                onClick={() => {
                  setIsEditing(false);
                  setName(auth.currentUser?.displayName || '');
                  setEmail(auth.currentUser?.email || '');
                  setCurrentPassword('');
                  setError('');
                }}
              >
                Cancelar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MicuentaContent;