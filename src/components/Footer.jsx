import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold">ShopTest</div>
          <div className="text-sm text-gray-600 mt-2">Free-forever product listing demo.</div>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Support</div>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>Help Center</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
