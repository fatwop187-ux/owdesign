import React from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="p-10 text-center">
        <h2 className="text-pink-400 text-2xl">Хотите обновить дизайн?</h2>
        <p className="mt-2">✅ Мы работаем с 2016 года и имеем статус проверенного продавца</p>
        <button
          className="mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600"
          onClick={() => window.location.href = "https://t.me/Ownership187"}
        >
          Заказать в Telegram
        </button>
      </section>
      <Services />
      <Portfolio />
    </div>
  );
}
