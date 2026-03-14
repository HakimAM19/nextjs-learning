"use client";

  export default function Contact() {

    const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan berhasil dikirim");
  };
  return (
    <main className="max-w-4xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-8">
        Contact
      </h1>

      <div className="bg-white p-8 rounded-xl shadow">

        <p className="text-gray-600 mb-6">
          Jika ingin berdiskusi mengenai data, teknologi web, atau proyek
          terkait analisis data, Anda dapat menghubungi saya melalui kontak berikut.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>Email : hakim070420@gmail.com</li>
          <li>Github : github.com/HakimAM19</li>
          <li>LinkedIn : linkedin.com/in/hakim-am-918a7b303</li>
        </ul>

      </div>

    </main>
  );
}