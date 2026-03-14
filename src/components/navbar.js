"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h2 className="text-xl font-bold text-black">
          Hakim Al Munawar
        </h2>

        <ul className="flex gap-6 text-gray-700">
          <li>
            <Link href="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">About</Link>
          </li>
          <li>
            <Link href="/experience" className="hover:text-blue-600">Experience</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}