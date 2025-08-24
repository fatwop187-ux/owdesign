import React from "react";

const services = [
  "Аватарки", "Логотипы", "Баннеры", "Оформление темы",
  "Оформление магазина", "Веб-Дизайн", "Анимация",
  "Стикеры", "Эмодзи", "Видеоролики", "Креативы",
  "Полное оформление сервиса"
];

export default function Services() {
  return (
    <section className="p-10 text-center">
      <h2 className="text-pink-400 text-2xl font-semibold">Наши услуги</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition"
          >
            {s}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 m-2"
          onClick={() => window.location.href = "https://t.me/OwnershipReviews"}
        >
          Отзывы
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 m-2"
          onClick={() => window.location.href = "https://t.me/OwnershipForum"}
        >
          Темы на форуме
        </button>
      </div>
    </section>
  );
}
