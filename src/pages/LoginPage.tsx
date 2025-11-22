import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, Link } from 'react-router-dom';
import { z } from 'zod';
import { useAuthStore } from '../stores/authStore';
import api from '../services/api';
import toast from 'react-hot-toast';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Card from '../components/common/Card';

const loginSchema = z.object({
  email: z.string().email('Некоректний email'),
  password: z.string().min(6, 'Мінімум 6 символів'),
});

type LoginFormData = z.infer<typeof loginSchema>;


const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await api.post('/auth/login', data);
      login(res.data.user, res.data.tokens.accessToken);
      toast.success(`Вітаємо, ${res.data.user.name}!`);
      navigate('/dashboard');
    } catch (error: any) {
      toast.error('Помилка входу. Перевірте дані.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <Card className="w-full max-w-md p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Вхід</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input 
            label="Email" 
            {...register('email')} 
            error={errors.email?.message} 
          />
          <Input 
            label="Пароль" 
            type="password" 
            {...register('password')} 
            error={errors.password?.message} 
          />
          <Button type="submit" className="w-full" isLoading={isSubmitting}>
            Увійти
          </Button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-600">
          Немає акаунту? <Link to="/register" className="text-blue-600 hover:underline">Зареєструватися</Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;