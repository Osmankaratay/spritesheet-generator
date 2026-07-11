import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from './Button';
import { Input } from './Input';
import { setToken, setUser } from '../store/slices/authSlice';
import { authAPI } from '../services/api';

interface AuthFormProps {
  type: 'login' | 'register';
}

export const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      if (type === 'register') {
        const res = await authAPI.register(
          formData.email,
          formData.password,
          formData.username
        );
        dispatch(setToken(res.data.data.token));
        dispatch(setUser(res.data.data.user));
        navigate('/projects');
      } else {
        const res = await authAPI.login(formData.email, formData.password);
        dispatch(setToken(res.data.data.token));
        dispatch(setUser(res.data.data.user));
        navigate('/projects');
      }
    } catch (error: any) {
      setErrors({ submit: error.response?.data?.error?.message || 'An error occurred' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />
      {type === 'register' && (
        <Input
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
          required
        />
      )}
      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        required
      />
      {type === 'register' && (
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          required
        />
      )}
      {errors.submit && <div className="text-error text-sm">{errors.submit}</div>}
      <Button type="submit" variant="primary" loading={loading} className="w-full">
        {type === 'login' ? 'Login' : 'Register'}
      </Button>
    </form>
  );
};
