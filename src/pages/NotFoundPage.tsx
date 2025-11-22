import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-9xl font-black text-gray-200 dark:text-gray-800">404</h1>
      <p className="text-2xl font-bold mt-4 mb-2">Упс! Сторінку не знайдено.</p>
      <p className="text-gray-500 mb-8">Можливо, вона була видалена або переміщена.</p>
      <Link to="/">
        <Button size="lg">Повернутися на головну</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;