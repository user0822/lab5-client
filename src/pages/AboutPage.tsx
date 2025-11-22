import React from 'react';
import Card from '../components/common/Card';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Про проєкт</h1>
      
      <Card className="p-8">
        <p className="mb-4 text-lg">
          Цей веб-застосунок розроблено в рамках лабораторних робіт з дисципліни 
          <strong> "Web-технології"</strong>.
        </p>
        
        <div className="my-6 border-l-4 border-primary-500 pl-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-r">
          <p className="italic">
            "Мета роботи — навчитися будувати сучасні frontend-додатки з використанням React, TypeScript та Tailwind CSS."
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-3">Стек технологій:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li> <strong>Frontend:</strong> React 18 + Vite</li>
          <li> <strong>Мова:</strong> TypeScript</li>
          <li> <strong>Стилі:</strong> Tailwind CSS</li>
          <li> <strong>Роутинг:</strong> React Router v6</li>
        </ul>
      </Card>
    </div>
  );
};

export default AboutPage;