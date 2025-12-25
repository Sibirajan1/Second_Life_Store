import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Orders from './components/pages/Orders';
import Wishlist from './components/pages/Wishlist';
import SellProduct from './components/pages/SellProduct';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = (userData) => {
    setCurrentPage('home');
  };

  const handleRegister = (userData) => {
    setCurrentPage('home');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        {currentPage === 'login' && !isRegistering && (
          <Login 
            onSwitchToRegister={() => setIsRegistering(true)}
            onLogin={handleLogin}
          />
        )}
        
        {currentPage === 'login' && isRegistering && (
          <Register 
            onSwitchToLogin={() => setIsRegistering(false)}
            onRegister={handleRegister}
          />
        )}
        
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'cart' && <Cart onNavigate={handleNavigate} />}
        {currentPage === 'orders' && <Orders onNavigate={handleNavigate} />}
        {currentPage === 'wishlist' && <Wishlist onNavigate={handleNavigate} />}
        {currentPage === 'sell' && <SellProduct onNavigate={handleNavigate} />}
      </div>
    </AuthProvider>
  );
};

export default App;