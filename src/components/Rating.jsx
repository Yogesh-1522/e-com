import React from "react";

// simple star rating + count, human style
export default function Rating({ value = 0, count = 0 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const total = 5;

  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="flex items-center text-yellow-400">
        {Array.from({ length: total }).map((_, i) => {
          if (i < full) return <span key={i}>★</span>;
          if (i === full && half) return <span key={i}>☆</span>; // rough half look
          return <span key={i} className="text-gray-300">★</span>;
        })}
      </div>
      <div className="text-gray-500">({count})</div>
    </div>
  );
}
