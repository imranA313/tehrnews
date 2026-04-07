export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-700">
      <h1 className="text-2xl font-bold text-red-600">TEHR</h1>
      <div className="space-x-6">
        <a href="#">Home</a>
        <a href="#">Latest</a>
        <a href="#">Expose</a>
        <a href="#">Hidden Reality</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}