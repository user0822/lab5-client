import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Компоненти структури
import Layout from './components/layout/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';

// Сторінки
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

// Стан
import { useAuthStore } from './stores/authStore';

const App: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <BrowserRouter>
      {/* Сповіщення (Toaster) будуть поверх всього */}
      <Toaster position="top-right" reverseOrder={false} />
      
      <Routes>
        {/* Публічні маршрути в рамках Layout (з Хедером і Футером) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          
          {/* Логіка входу: якщо юзер вже увійшов — кидаємо його на Dashboard */}
          <Route 
            path="login" 
            element={!isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard" />} 
          />
          
          {/* Сторінка 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Захищений маршрут (Dashboard) */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;