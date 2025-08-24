import React, { useState } from "react";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const addWork = () => {
    if (!title || !image) return alert("Заполните все поля!");
    const portfolio = JSON.parse(localStorage.getItem("portfolio") || "[]");
    portfolio.push({ title, image });
    localStorage.setItem("portfolio", JSON.stringify(portfolio));
    setTitle("");
    setImage("");
    alert("Работа добавлена!");
  };

  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl text-pink-400">Админка</h2>
      <input
        className="p-2 m-2 rounded text-black"
        type="text"
        placeholder="Название работы"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="p-2 m-2 rounded text-black"
        type="text"
        placeholder="URL картинки"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600"
        onClick={addWork}
      >
        Добавить
      </button>
    </div>
  );
}
