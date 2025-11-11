import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition ${scrolled ? "bg-gray-900/80 backdrop-blur shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-blue-400 animate-pulse">FRANCELL</div>
        <nav>
          <ul className={`flex space-x-6 ${menuOpen ? "block" : "hidden md:flex"}`}>
            <li><a href="#services" className="hover:text-blue-400 transition">Servicios</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contacto</a></li>
          </ul>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </button>
        </nav>
      </div>
    </header>
  );
}