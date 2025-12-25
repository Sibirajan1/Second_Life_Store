import React, { useContext } from 'react';
import { User, LogOut } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = ({ onNavigate, onLogout }) => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div 
          className="text-xl font-bold cursor-pointer hover:text-blue-200"
          onClick={() => onNavigate('home')}
        >
          Second Life Store
        </div>
        
        {user && (
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span className="text-sm">{user.name || user.email}</span>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-1 bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded-lg transition"
            >
              <LogOut className="h-4 w-4" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;