"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function DetailCountry() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [gdpData, setGdpData] = useState([]); // 🔥 TAMBAHAN

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(res => res.json())
      .then(data => setCountry(data[0]));


    if (code === "IDN") {
      fetch(`https://api.worldbank.org/v2/country/IDN/indicator/NY.GDP.MKTP.CD?format=json`)
        .then(res => res.json())
        .then(data => {
          if (data[1]) {
            setGdpData(
              data[1]
                .filter(item => item.value !== null)
                .slice(0, 5)
            );
          }
        });
    } else {
      setGdpData([]);
    }

  }, [code]);

  if (!country) return <p className="text-center mt-10">Loading...</p>;

  const getPopulationCategory = (pop) => {
    if (pop > 100000000) return "Sangat Besar";
    if (pop > 50000000) return "Besar";
    if (pop > 10000000) return "Menengah";
    return "Kecil";
  };

  const getEconomyLevel = (pop) => {
    if (pop > 100000000) return "Ekonomi Besar";
    if (pop > 30000000) return "Ekonomi Berkembang";
    return "Ekonomi Kecil";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        {/* HEADER */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          {country.name?.common}
        </h1>

        <div className="flex flex-col md:flex-row gap-8">

          {/* FLAG */}
          <div className="w-72 h-48 overflow-hidden rounded-xl shadow-md">
            <img
              src={country.flags?.png || country.flags?.svg}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300x200";
              }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">

            <p><span className="font-semibold text-gray-600">Nama Resmi:</span><br /> {country.name?.official}</p>
            <p><span className="font-semibold text-gray-600">Region:</span><br /> {country.region}</p>
            <p><span className="font-semibold text-gray-600">Subregion:</span><br /> {country.subregion}</p>
            <p><span className="font-semibold text-gray-600">Ibukota:</span><br /> {country.capital?.[0] || "Tidak ada"}</p>

            <p><span className="font-semibold text-gray-600">Populasi:</span><br /> {country.population?.toLocaleString()}</p>
            <p><span className="font-semibold text-gray-600">Luas:</span><br /> {country.area?.toLocaleString()} km²</p>

            <p className="col-span-2">
              <span className="font-semibold text-gray-600">Bahasa:</span><br />
              {country.languages
                ? Object.values(country.languages).join(", ")
                : "Tidak ada"}
            </p>

            <p className="col-span-2">
              <span className="font-semibold text-gray-600">Mata Uang:</span><br />
              {country.currencies
                ? Object.values(country.currencies)
                  .map(c => `${c.name} (${c.symbol})`)
                  .join(", ")
                : "Tidak ada"}
            </p>

            <p className="col-span-2">
              <span className="font-semibold text-gray-600">Zona Waktu:</span><br />
              {country.timezones?.join(", ")}
            </p>

            <p className="col-span-2">
              <span className="font-semibold text-gray-600">Negara Tetangga:</span><br />
              {country.borders?.join(", ") || "Tidak ada"}
            </p>

          </div>
        </div>

        {/* ANALYSIS */}
        <div className="mt-8 bg-blue-50 p-6 rounded-xl">
          <h2 className="font-bold text-lg text-blue-700 mb-2">Analisis</h2>

          <p><b>Kategori Populasi:</b> {getPopulationCategory(country.population)}</p>
          <p><b>Estimasi Ekonomi:</b> {getEconomyLevel(country.population)}</p>

          <p className="mt-3 text-gray-600 text-sm">
            Negara ini tergolong {getPopulationCategory(country.population)} dengan
            karakter ekonomi {getEconomyLevel(country.population)}.
          </p>
        </div>


        {/* 🔥 GDP SECTION */}
        {code === "IDN" && (
          <div className="mt-8 bg-green-50 p-6 rounded-xl">
            <h2 className="font-bold text-lg text-green-700 mb-2">
              GDP (5 Tahun Terakhir)
            </h2>

            {gdpData.length === 0 ? (
              <p className="text-sm text-gray-500">Data tidak tersedia</p>
            ) : (
              gdpData.map((item, i) => (
                <p key={i}>
                  {item.date} : {(item.value / 1e9).toFixed(2)} Billion USD
                </p>
              ))
            )}

            <p className="text-sm text-gray-600 mt-2">
              GDP menunjukkan total kekuatan ekonomi negara tiap tahun.
            </p>
          </div>
        )}

        {/* INSIGHT */}
        <div className="mt-6 border-l-4 border-blue-500 pl-4">
          <p className="font-semibold">Insight</p>
          <p className="text-sm text-gray-600">
            Negara dengan populasi besar biasanya memiliki tekanan ekonomi lebih kompleks.
          </p>
        </div>

      </div>
    </div>
  );
}