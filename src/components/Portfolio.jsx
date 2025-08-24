import React, { useEffect, useState } from "react";

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("portfolio") || "[]");
    setPortfolio(data);
  }, []);

  return (
    <section className="p-10 text-center">
      <h2 className="text-pink-400 text-2xl font-semibold">Портфолио</h2>
      <div className="mt-6">
        {portfolio.length === 0 ? (
          <p>Пока нет работ</p>
        ) : (
          portfolio.map((item, i) => (
            <div key={i} className="my-4">
              <h4>{item.title}</h4>
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl max-w-full"
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
