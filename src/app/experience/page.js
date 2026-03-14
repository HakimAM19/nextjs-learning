export default function Experience() {
  return (
    <main className="max-w-5xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-8">
        Development Journey
      </h1>

      <div className="space-y-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">
            Web Development Fundamentals
          </h3>
          <p className="text-gray-600">
            Mempelajari HTML, CSS, dan JavaScript untuk membangun website
            yang terstruktur dan responsif.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">
            Data Analysis
          </h3>
          <p className="text-gray-600">
            Belajar memahami dataset dan melakukan analisis data sederhana
            menggunakan Python dan spreadsheet.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">
            Data Visualization
          </h3>
          <p className="text-gray-600">
            Membuat grafik dan visualisasi untuk menyajikan data dengan cara
            yang lebih mudah dipahami.
          </p>
        </div>

      </div>

    </main>
  );
}