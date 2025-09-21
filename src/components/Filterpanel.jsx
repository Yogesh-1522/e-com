import React from "react";

/*
  Color selector + quick active color preview.
  Props:
    colors: array of hex strings
    active: currently selected color (hex or null)
    onSelect: function(hex|null)
*/
export default function FilterPanel({ colors = [], active, onSelect }) {
  return (
    <div className="bg-white border rounded p-3">
      <h4 className="text-sm font-semibold mb-2">Colors</h4>
      <div className="flex gap-2 flex-wrap">
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => onSelect(active === c ? null : c)}
            className={`w-8 h-8 rounded-full ring-2 ${active === c ? "ring-gray-700" : "ring-transparent"} `}
            style={{ background: c }}
            aria-label={`color-${c}`}
            title={c}
          />
        ))}
      </div>
      {active && (
        <div className="mt-3 text-sm text-gray-600">
          Showing color <span className="font-medium">{active}</span>
        </div>
      )}
    </div>
  );
}
