const news = [
  "Secret Files Leak Revealed",
  "High Level Corruption",
  "Tech Industry Exposed",
];

export default function Latest() {
  return (
    <div className="p-6">
      <h2 className="text-red-500 font-bold mb-4">LATEST NEWS</h2>

      {news.map((n, i) => (
        <div key={i} className="border-b border-gray-700 py-2">
          {n}
        </div>
      ))}
    </div>
  );
}