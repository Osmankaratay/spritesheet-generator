import React, { useState } from 'react';
import { AuthForm } from '../components/AuthForm';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">Spritesheet Generator</h1>
          <p className="text-gray-600">{showRegister ? 'Create an Account' : 'Welcome Back'}</p>
        </div>

        <AuthForm type={showRegister ? 'register' : 'login'} />

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {showRegister ? 'Already have an account?' : 'Don\'t have an account?'}
            <button
              onClick={() => setShowRegister(!showRegister)}
              className="ml-2 text-accent font-medium hover:text-accent-dark"
            >
              {showRegister ? 'Login' : 'Register'}
            </button>
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <Button variant="secondary" className="w-full">
            Sign {showRegister ? 'up' : 'in'} with Google
          </Button>
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};
