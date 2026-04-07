const data = [
  { title: "Major Scandal Exposed", tag: "Expose" },
  { title: "Hidden Truths Revealed", tag: "Politics" },
  { title: "Urban Corruption Exposed", tag: "Hidden Reality" },
];

export default function Featured() {
  return (
    <div className="p-6">
      <h2 className="text-red-500 font-bold mb-4">FEATURED</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div key={i} className="bg-[#111827] p-4 rounded-xl">
            <span className="bg-gray-700 px-2 py-1 text-sm rounded">
              {item.tag}
            </span>
            <h3 className="mt-3">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}