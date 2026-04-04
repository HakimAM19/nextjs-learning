export default function About() {
  return (
    <main className="min-h-screen bg-white text-black flex items-center">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

        <div>
          <h1 className="text-3xl font-bold mb-6">
            Tentang Saya
          </h1>

          <p className="mb-6 leading-relaxed">
            Saya adalah mahasiswa Teknik Informatika yang tertarik pada
            analisis data, visualisasi informasi, dan bagaimana data
            digunakan untuk menjelaskan fenomena masyarakat.
          </p>

          <h2 className="text-xl font-semibold mb-3">
            Minat Profesional
          </h2>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Analisis dataset sederhana</li>
            <li>Visualisasi data</li>
            <li>Pengolahan data menggunakan tools digital</li>
            <li>Penulisan cerita berbasis data</li>
          </ul>

          <h2 className="text-xl font-semibold mb-3">
            Arah Karier
          </h2>

          <p className="leading-relaxed">
            Saya ingin mengembangkan kemampuan dalam analisis data
            dan visualisasi informasi agar dapat menghasilkan insight
            yang mudah dipahami masyarakat.
          </p>
        </div>

        <div className="flex justify-center items-center">
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