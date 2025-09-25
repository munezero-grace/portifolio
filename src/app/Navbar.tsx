"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1a0f0a] bg-opacity-95 backdrop-blur-sm shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-[#f5e6d6]">
        <div className="w-12 h-12 rounded-full bg-[#231406] flex items-center justify-center border-2 border-[#e6cfa7]">
          <span className="text-xl font-bold text-[#e6cfa7] font-serif">
            MG
          </span>
        </div>

        <ul className="hidden md:flex space-x-8 text-base font-medium">
          <li>
            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400 transition">
              About Me
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-yellow-400 transition">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
