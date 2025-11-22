# Task Manager Client (Lab 5) 

##  Опис проєкту
Це клієнтська частина системи управління завданнями (Frontend).
Застосунок реалізує повний цикл взаємодії з Backend API: автентифікацію користувачів, захист маршрутів, управління станом та створення завдань.

## Функціональність
-  **Аутентифікація:** Вхід у систему та вихід (Logout) з використанням JWT.
-  **Protected Routes:** Захист сторінок (Dashboard недоступний без логіну).
-  **Робота з формами:** Валідація даних (Zod) та обробка форм (React Hook Form).
-  **Управління станом:** Глобальний стейт користувача через Zustand.
-  **Сповіщення:** Toast-повідомлення про успішні дії або помилки.
-  **UI/UX:** Адаптивний інтерфейс на Tailwind CSS.

##  Технології
- **Core:** React 18, TypeScript, Vite
- **State Management:** Zustand
- **Forms & Validation:** React Hook Form, Zod
- **Network:** Axios (з Interceptors)
- **UI & Styling:** Tailwind CSS, Lucide React (іконки)
- **Notifications:** React Hot Toast

##  API Endpoints
Фронтенд взаємодіє з розгорнутим бекендом на Render (`https://task-manager-api-o8is.onrender.com/api`):

- `POST /auth/login` — Авторизація користувача.
- `POST /tasks` — Створення нового завдання.

##  Встановлення та запуск

### Вимоги
- Node.js 18+
- npm

### Інструкції
```bash
# Клонування репозиторію
git clone [https://github.com/user0822/lab5-client.git](https://github.com/user0822/lab5-client.git)

# Перехід у папку
cd lab5-client

# Встановлення залежностей
npm install

# Запуск у режимі розробки
npm run dev.

# Структура проєкту
src/
├── components/
│   ├── common/        # Базові UI (Button, Input, Card)
│   ├── layout/        # Header, Footer
│   └── ProtectedRoute.tsx # Компонент захисту сторінок
├── pages/             # Сторінки (Login, Dashboard, Home)
├── services/          # Налаштування Axios (api.ts)
├── stores/            # Zustand store (authStore.ts)
├── schemas/           # Схеми валідації Zod
├── types/             # TypeScript інтерфейси
└── utils/             # Допоміжні функції

# Тестові дані для входу
Email: final@test.com
Password: password123

# Автор
Вадим Венський, група ІПЗ-41
