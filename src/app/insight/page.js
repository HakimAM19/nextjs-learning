"use client";

import { useEffect, useState } from "react";
import DataChart from "../../components/DataChart";

export default function InsightsPage() {
  const [regionData, setRegionData] = useState({});

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=population,region")
      .then(res => res.json())
      .then(data => {
        const grouped = {};

        data.forEach(country => {
          const region = country.region || "Other";

          if (!grouped[region]) grouped[region] = 0;

          grouped[region] += country.population;
        });

        setRegionData(grouped);
      });
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Global Population Insights
      </h1>

      {/* CHART */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Visualisasi Populasi per Region
        </h2>

        <DataChart data={regionData} />
      </div>

      {/* INSIGHT */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">
          Insight
        </h2>

        <p className="text-gray-600">
          Wilayah Asia memiliki populasi terbesar dibandingkan region lain.
          Hal ini menunjukkan ketimpangan distribusi penduduk global.
        </p>
      </div>
    </div>
  );
}