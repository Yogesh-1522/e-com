import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-1/4 bg-white p-6 shadow hidden md:block">
      <h2 className="font-bold mb-4 text-lg">Hot Deals</h2>

      {/* Brand */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Brand</h3>
        <ul className="space-y-2 text-gray-700">
          <li><input type="checkbox" /> Nike</li>
          <li><input type="checkbox" /> Adidas</li>
          <li><input type="checkbox" /> Puma</li>
        </ul>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price</h3>
        <input type="range" min="50" max="500" className="w-full" />
        <p className="text-sm text-gray-600 mt-1">$50 - $500</p>
      </div>

      {/* Colors */}
      <div>
        <h3 className="font-semibold mb-2">Colors</h3>
        <div className="flex gap-2 mt-2">
          <span className="w-6 h-6 bg-red-500 rounded-full"></span>
          <span className="w-6 h-6 bg-blue-500 rounded-full"></span>
          <span className="w-6 h-6 bg-yellow-500 rounded-full"></span>
          <span className="w-6 h-6 bg-green-500 rounded-full"></span>
        </div>
      </div>
    </aside>
  );
}
