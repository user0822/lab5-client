import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Градієнтний заголовок */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center">
        Task Manager
      </h1>

      {/* Цитата українською */}
      <blockquote className="text-xl md:text-2xl italic text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl border-l-4 border-primary-500 pl-6 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-r-lg">
        "Повірте, що ви <span className="text-primary-600 font-semibold">можете</span> — і ви вже на півдорозі до мети."
        <footer className="text-sm text-gray-500 dark:text-gray-400 mt-3 not-italic font-medium">
          — Теодор Рузвельт
        </footer>
      </blockquote>
      
      {/* Картка з діями */}
      <Card className="p-8 max-w-md w-full text-center shadow-2xl border-0 ring-1 ring-gray-100 dark:ring-gray-700">
        <h2 className="text-2xl font-bold mb-3">Готові почати?</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Керуйте своїми завданнями легко та ефективно.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/register" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full">
              Створити акаунт
            </Button>
          </Link>
          <Link to="/about" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full">
              Дізнатися більше
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default HomePage;