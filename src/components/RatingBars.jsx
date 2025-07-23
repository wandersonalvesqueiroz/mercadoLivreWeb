import React from "react";
import "./RatingBars.css"; // importa o CSS externo

export default function RatingBars({ value }) {
  const baseColors = [
    "#8B0000", // vermelho escuro
    "#FF6347", // vermelho claro
    "#FFD700", // amarelo
    "#90EE90", // verde claro
    "#006400", // verde escuro
  ];

  return (
    <div className="rating-bars-container">
      {baseColors.map((color, index) => {
        const active = value === index + 1;
        return (
          <span
            key={index}
            className="rating-bar"
            style={{
              backgroundColor: color,
              opacity: active ? 1 : 0.2,
              height: active ? "8px" : "6px"
            }}
            title={`Nota ${index + 1}`}
          />
        );
      })}
    </div>
  );
}
