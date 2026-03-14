export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div>

          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Tentang Saya
          </h1>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Saya adalah mahasiswa Teknik Informatika yang tertarik pada
            analisis data, visualisasi informasi, serta bagaimana data dapat
            digunakan untuk menjelaskan berbagai fenomena yang terjadi
            di masyarakat.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Minat Profesional
          </h2>

          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
            <li>Analisis dataset sederhana</li>
            <li>Visualisasi data</li>
            <li>Pengolahan data menggunakan tools digital</li>
            <li>Penulisan cerita berbasis data</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Arah Karier
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Saya ingin mengembangkan kemampuan dalam analisis data
            dan visualisasi informasi untuk menghasilkan insight
            yang dapat membantu masyarakat memahami suatu isu
            secara lebih objektif melalui data.
          </p>

        </div>

        {/* IMAGE */}
        <div className="flex justify-center">

          <img
            src="/FPHAKIM.jpeg"
            alt="Foto Hakim"
            className="w-72 h-72 object-cover rounded-xl shadow-lg"
          />

        </div>

      </div>

    </main>
  );
}