import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-100 flex flex-col min-h-screen">

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}