"use client";
import data from "@/data/slipgajimbg.json";

export default function SentimentPage() {

  const analyzeHoax = (text) => {
    const t = text.toLowerCase();

    const tidakPercaya = [
      "hoax", "hoaks", "bohong", "editan",
      "ga masuk akal", "gak masuk akal",
      "adu domba", "clickbait", "engagement bait"
    ];

    const percaya = ["bener", "serius", "mungkin"];

    const opini = [
      "guru", "ketimpangan", "pemerintah",
      "kesejahteraan", "program", "gaji", "honorer"
    ];

    if (tidakPercaya.some(word => t.includes(word))) return "Tidak Percaya";
    if (percaya.some(word => t.includes(word))) return "Percaya";
    if (opini.some(word => t.includes(word))) return "Opini Sosial";

    return "Netral";
  };

  const analyzed = data.map(item => ({
    text: item.text,
    status: analyzeHoax(item.text)
  }));

  const tidakPercaya = analyzed.filter(x => x.status === "Tidak Percaya").length;
  const percaya = analyzed.filter(x => x.status === "Percaya").length;
  const opini = analyzed.filter(x => x.status === "Opini Sosial").length;
  const netral = analyzed.filter(x => x.status === "Netral").length;

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Analisis Hoax Gaji Supir MBG
      </h1>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-red-100 p-4 rounded">Tidak Percaya: {tidakPercaya}</div>
        <div className="bg-green-100 p-4 rounded">Percaya: {percaya}</div>
        <div className="bg-yellow-100 p-4 rounded">Opini: {opini}</div>
        <div className="bg-gray-200 p-4 rounded">Netral: {netral}</div>
      </div>

      <div className="space-y-3">
        {analyzed.map((item, i) => (
          <div key={i} className="p-4 bg-white shadow rounded">
            <p>{item.text}</p>
            <p className="text-sm text-gray-500">{item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}