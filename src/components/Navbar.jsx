export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="font-bold text-xl text-blue-600">E-Comm</div>
      <ul className="flex gap-6">
        <li>HOME</li>
        <li>BAG</li>
        <li>SNEAKERS</li>
        <li>BELT</li>
        <li>CONTACT</li>
      </ul>
      <div className="flex gap-4">
        <span>Items</span>
        <span>$0.00</span>
      </div>
    </nav>
  );
}
