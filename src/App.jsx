import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Nosotros from './Pages/Nosotros/Nosotros';
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
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
