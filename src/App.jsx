import React, { useEffect, useMemo, useState } from "react";
import productsData from "./data/product";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import FilterPanel from "./components/FilterPanel";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";



function readQuery() {
  const q = new URLSearchParams(window.location.search);
  return {
    page: parseInt(q.get("page")) || 1,
    sort: q.get("sort") || "popularity-desc",
    category: q.get("cat") || null,
    color: q.get("color") || null
  };
}

function writeQuery(state) {
  const q = new URLSearchParams();
  if (state.page && state.page > 1) q.set("page", state.page);
  if (state.sort) q.set("sort", state.sort);
  if (state.category) q.set("cat", state.category);
  if (state.color) q.set("color", state.color);
  const url = `${window.location.pathname}?${q.toString()}`;
  window.history.replaceState({}, "", url);
}

export default function App() {
  
  const start = readQuery();
  const [page, setPage] = useState(start.page);
  const [sort, setSort] = useState(start.sort);
  const [category, setCategory] = useState(start.category);
  const [color, setColor] = useState(start.color);
  const [mobileOpen, setMobileOpen] = useState(false);

 
  const perPage = 9;

  
  const categories = useMemo(() => {
    return Array.from(new Set(productsData.map((p) => p.category))).sort();
  }, []);

  const colors = useMemo(() => {
    const all = productsData.flatMap((p) => p.colors);
    return Array.from(new Set(all)).slice(0, 12);
  }, []);

 
  const filtered = useMemo(() => {
    let list = productsData.slice();

    if (category) {
      list = list.filter((p) => p.category === category);
    }
    if (color) {
      list = list.filter((p) => p.colors.includes(color));
    }

    const [key, dir] = sort.split("-");
    list.sort((a, b) => {
      let res = 0;
      if (key === "name") res = a.name.localeCompare(b.name);
      if (key === "price") res = a.discountPrice - b.discountPrice;
      if (key === "popularity") res = a.popularity - b.popularity;
      if (dir === "desc") res = -res;
      return res;
    });

    return list;
  }, [category, color, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paged = useMemo(() => {
    const startIdx = (page - 1) * perPage;
    return filtered.slice(startIdx, startIdx + perPage);
  }, [filtered, page]);

 
  useEffect(() => {
    writeQuery({ page, sort, category, color });
  }, [page, sort, category, color]);

  
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages]);

  
  const handleWishlist = (p) => {
    alert(`Added "${p.name}" to wishlist (demo)`);
  };
  const handleCompare = (p) => {
    alert(`Added "${p.name}" to compare (demo)`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar onOpenMobileSidebar={() => setMobileOpen(true)} />

      <div className="max-w-7xl mx-auto w-full px-4 py-6 flex gap-6">
    
        {mobileOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-black opacity-40" onClick={() => setMobileOpen(false)} />
            <div className="absolute left-0 top-0 w-72 h-full bg-white p-4 overflow-auto">
              <button className="mb-4" onClick={() => setMobileOpen(false)}>Close</button>
              <Sidebar
                categories={categories}
                selectedCategory={category}
                onSelectCategory={(c) => { setCategory(c); setMobileOpen(false); }}
                onReset={() => { setCategory(null); setColor(null); setPage(1); setMobileOpen(false); }}
              />
            </div>
          </div>
        )}

      
        <Sidebar
          categories={categories}
          selectedCategory={category}
          onSelectCategory={(c) => { setCategory(c); setPage(1); }}
          onReset={() => { setCategory(null); setColor(null); setPage(1); }}
        />

    
        <main className="flex-1">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Products</h1>
              <div className="text-sm text-gray-600">{filtered.length} results</div>
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-600">Sort</label>
              <select
                value={sort}
                onChange={(e) => { setSort(e.target.value); setPage(1); }}
                className="border rounded px-2 py-1 text-sm"
              >
                <option value="popularity-desc">Popularity (High → Low)</option>
                <option value="popularity-asc">Popularity (Low → High)</option>
                <option value="name-asc">Name (A → Z)</option>
                <option value="name-desc">Name (Z → A)</option>
                <option value="price-asc">Price (Low → High)</option>
                <option value="price-desc">Price (High → Low)</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <FilterPanel colors={colors} active={color} onSelect={(c) => { setColor(c); setPage(1); }} />
          </div>

          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {paged.length === 0 ? (
              <div className="col-span-full bg-white border p-6 rounded text-center">
                <p className="text-gray-600">No products found. Try reset filters.</p>
                <button className="mt-3 px-3 py-1 border rounded" onClick={() => { setCategory(null); setColor(null); setSort("popularity-desc"); setPage(1); }}>
                  Reset Filters
                </button>
              </div>
            ) : (
              paged.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  activeColor={color}
                  onWishlist={handleWishlist}
                  onCompare={handleCompare}
                />
              ))
            )}
          </div>

          <Pagination page={page} totalPages={totalPages} onPage={(p) => setPage(p)} />
        </main>
      </div>

      <Footer />
    </div>
  );
}
