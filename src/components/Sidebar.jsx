import React, { useState } from "react";

/*
  Sidebar with:
   - expandable category list (6 items visible; View more)
   - color filter area is in FilterPanel, but we keep category controls here
*/
export default function Sidebar({ categories = [], selectedCategory, onSelectCategory, onReset }) {
  const [open, setOpen] = useState(true);
  const [showAll, setShowAll] = useState(false);

  // ensure at least 6 items are shown (or placeholders)
  const visible = showAll ? categories : categories.slice(0, 6);
  const placeholdersNeeded = Math.max(0, 6 - categories.length);

  return (
    <aside className="hidden lg:block w-64 p-4">
      <div className="bg-white border rounded p-3">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">Categories</h4>
          <button onClick={() => setOpen(!open)} className="text-sm text-gray-600">
            {open ? "−" : "+"}
          </button>
        </div>

        {open && (
          <div className="mt-3">
            <ul className="space-y-2 text-sm text-gray-700">
              {visible.map((c) => (
                <li key={c}>
                  <button
                    onClick={() => onSelectCategory(c === selectedCategory ? null : c)}
                    className={`w-full text-left px-2 py-1 rounded ${selectedCategory === c ? "bg-gray-100 font-semibold" : ""}`}
                  >
                    {c}
                  </button>
                </li>
              ))}

              {/* placeholders if fewer than 6 */}
              {placeholdersNeeded > 0 &&
                Array.from({ length: placeholdersNeeded }).map((_, idx) => (
                  <li key={"ph-" + idx}>
                    <div className="px-2 py-1 text-gray-300">—</div>
                  </li>
                ))}

            </ul>

            {categories.length > 6 && (
              <div className="mt-2">
                <button className="text-sm text-blue-600" onClick={() => setShowAll(!showAll)}>
                  {showAll ? "View less" : "View more"}
                </button>
              </div>
            )}

            <div className="mt-3">
              <button className="text-sm text-red-600" onClick={onReset}>Reset filters</button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
