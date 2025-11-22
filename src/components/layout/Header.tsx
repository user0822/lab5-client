import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  // Функція для стилів активного посилання
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-primary-600 dark:text-primary-400 font-semibold'
      : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Логотип */}
        <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
          TaskMgr
        </Link>
        
        {/* Навігація */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" className={linkClass}>Головна</NavLink>
          <NavLink to="/about" className={linkClass}>Про проєкт</NavLink>
        </nav>

        {/* Кнопки справа */}
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium hover:underline dark:text-gray-200">
            Увійти
          </Link>
          <Link
            to="/register"
            className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
          >
            Реєстрація
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;