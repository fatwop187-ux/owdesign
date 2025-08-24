import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-4 bg-white/10 backdrop-blur-lg">
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Link to="/admin">Админка</Link>
    </nav>
  );
}
