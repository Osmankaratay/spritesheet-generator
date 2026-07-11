import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { logout } from '../store/slices/authSlice';
import { RootState } from '../store';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className="border-b-2 border-gray-200 sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-black">Spritesheet Generator</h1>
          {user && (
            <nav className="flex gap-6">
              <a href="/projects" className="text-gray-600 hover:text-black transition-colors">Projects</a>
              <a href="/settings" className="text-gray-600 hover:text-black transition-colors">Settings</a>
              {user.role === 'admin' && (
                <a href="/admin" className="text-gray-600 hover:text-black transition-colors">Admin</a>
              )}
            </nav>
          )}
        </div>
        {user && (
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{user.username}</span>
            <Button variant="secondary" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
