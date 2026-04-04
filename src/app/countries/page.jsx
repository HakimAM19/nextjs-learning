"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CountriesPage() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,population,region,flags,cca3")
            .then(res => res.json())
            .then(data => {
                const sorted = data.sort((a, b) =>
                    a.name.common.localeCompare(b.name.common)
                );
                setCountries(sorted);
            });
    }, []);

    // FILTER SEARCH
    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Daftar Negara</h1>

            {/* SEARCH */}
            <input
                type="text"
                placeholder="Cari negara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 rounded w-full mb-6"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {filteredCountries.map((country) => (
                    <Link
                        key={country.cca3}
                        href={`/countries/${country.cca3}`}
                        className="border p-4 rounded hover:shadow cursor-pointer transition hover:scale-105"
                    >
                        <img
                            src={country.flags?.png}
                            className="w-full h-24 object-cover rounded"
                        />
                        <h3 className="mt-2 font-semibold">
                            {country.name.common}
                        </h3>
                        <p className="text-sm">{country.region}</p>
                        <p className="text-xs text-gray-500 mt-1">
                            Klik untuk lihat detail →
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}