"use client";
import Link from "next/link";

export default function ProjectPage() {
  const projects = [
    {
      title: "Data Negara",
      desc: "Menampilkan data negara dari REST Countries API",
      link: "/countries",
      image: "/thumbnail-countries.png",
    },
    {
      title: "GDP Indonesia",
      desc: "Menampilkan GDP 5 tahun terakhir dari World Bank API",
      link: "/countries/IDN",
      image: "/thumbnail-gdp.png",
    },

    {
      title: "Analisis Hoax MBG",
      desc: "Analisis reaksi netizen terhadap hoax gaji supir MBG",
      link: "/sentiment",
      image: "/thumbnail-hoax.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">My Projects</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {projects.map((project, i) => (
            <Link key={i} href={project.link}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden hover:scale-105 flex flex-col h-full">

                {/* THUMBNAIL */}
                <div className="h-40 bg-gray-200 overflow-hidden">
                  <img
                    src={project.image}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x200";
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* INFO */}
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="font-semibold text-lg">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {project.desc}
                  </p>
                </div>

              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}