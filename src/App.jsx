export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="bg-white/10 p-10 rounded-2xl shadow-xl text-center max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Ownership Design</h1>
        <p className="text-lg mb-6">Хотите обновить дизайн?</p>
        <a
          href="https://t.me/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Заказать в Telegram
        </a>
      </div>

      {/* Блок с услугами */}
      <div className="grid grid-cols-2 gap-6 mt-12 text-gray-900">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Наши услуги</h2>
          <ul className="text-sm space-y-1">
            <li>Аватарки</li>
            <li>Баннеры</li>
            <li>Веб-Дизайн</li>
            <li>Стикеры</li>
            <li>Логотипы</li>
            <li>Анимации</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Портфолио</h2>
          <p className="text-sm text-gray-600">Пока нет работ</p>
        </div>
      </div>

      {/* Футер */}
      <footer className="mt-12 text-sm text-white/80">
        © 2016–2025 Ownership Design. Все права защищены.
      </footer>
    </div>
  )
}
