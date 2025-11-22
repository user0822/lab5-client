import React, { useState } from 'react';
import { useAuthStore } from '../stores/authStore';
import api from '../services/api';
import type { Task } from '../types/api.types';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Input from '../components/common/Input';
import toast from 'react-hot-toast';
import { LogOut, Plus } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { user, logout } = useAuthStore();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle) return;
    setLoading(true);
    try {
        const projectId = 1;
        const res = await api.post('/tasks', { title: newTaskTitle, projectId });
        setTasks([...tasks, res.data]);
        setNewTaskTitle('');
        toast.success('Завдання створено!');
    } catch (error) {
        toast.error('Помилка створення.');
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Привіт, {user?.name}</h1>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
          <Button variant="danger" size="sm" onClick={logout} className="flex items-center gap-2">
            <LogOut size={16} /> Вийти
          </Button>
        </header>

        <Card className="p-6 mb-6">
          <form onSubmit={handleCreateTask} className="flex gap-3 items-end">
            <div className="flex-grow">
               <Input 
                 placeholder="Нове завдання..." 
                 value={newTaskTitle} 
                 onChange={(e) => setNewTaskTitle(e.target.value)} 
               />
            </div>
            <Button type="submit" isLoading={loading} className="flex items-center gap-2">
                <Plus size={20} /> Додати
            </Button>
          </form>
        </Card>

        <div className="space-y-3">
          {tasks.length === 0 && <p className="text-center text-gray-500">Список порожній</p>}
          {tasks.map((task) => (
            <Card key={task.id} className="p-4 flex justify-between items-center hover:shadow-md transition">
                <span className="font-medium">{task.title}</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{task.status}</span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;