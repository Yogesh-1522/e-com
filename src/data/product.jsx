import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Nike Air Max 270 React",
    price: "$299.43",
    oldPrice: "$534.33",
    image: "https://via.placeholder.com/200",
    badge: "HOT",
  },
  {
    id: 2,
    name: "Adidas Men Running Sneakers",
    price: "$199.99",
    oldPrice: "$299.99",
    image: "https://via.placeholder.com/200",
    badge: "NEW",
  },
  {
    id: 3,
    name: "Puma RS-X Bold Shoes",
    price: "$150.00",
    oldPrice: "$250.00",
    image: "https://via.placeholder.com/200",
    badge: "HOT",
  },
  {
    id: 4,
    name: "Reebok Classic Leather",
    price: "$120.00",
    oldPrice: "$200.00",
    image: "https://via.placeholder.com/200",
  },
];

export default function ProductList() {
  return (
    <main className="flex-1 p-6">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className="px-3 py-1 border rounded hover:bg-blue-500 hover:text-white"
          >
            {num}
          </button>
        ))}
      </div>
    </main>
  );
}
