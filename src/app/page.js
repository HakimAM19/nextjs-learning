"use client";

import Image from "next/image";
import DataChart from "../components/DataChart";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">

      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 p-10">

        <img
          src="/FPHAKIM.jpeg"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />

        <div>
          <h1 className="text-4xl text-black font-bold mb-4">
            Hakim Al Munawar
          </h1>


          <p className="text-black-600 mb-6">
            Mahasiswa Teknik Informatika yang tertarik pada analisis data,
            visualisasi informasi, dan data storytelling untuk memahami
            fenomena masyarakat melalui data.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Hello Everyone
            </button>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Download CV
            </button>
          </div>
        </div>

      </section>

      <section className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-black">
          Learning Progress
        </h2>

        <DataChart />

        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-10">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3 text-black">
              What I Do
            </h3>

            <ul className="text-black-600 space-y-2">
              <li>Analisis dataset sederhana</li>
              <li>Membuat visualisasi data</li>
              <li>Mengolah data menjadi insight</li>
              <li>Menjelaskan data melalui tulisan</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3 text-black">
              Why Data Matters
            </h3>

            <p className="text-black-600">
              Data membantu memahami berbagai fenomena sosial secara lebih objektif.
              Dengan analisis dan visualisasi yang tepat, informasi dapat disampaikan
              dengan lebih jelas dan mudah dipahami oleh masyarakat.
            </p>
          </div>

        </section>

      </section>

    </main>
  );
}