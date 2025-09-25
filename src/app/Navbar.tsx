"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1a0f0a] bg-opacity-95 backdrop-blur-sm shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-[#f5e6d6]">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold tracking-wide font-serif text-[#e6cfa7]">
          Grace MUNEZERO
        </h1>
        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-base font-medium">
          <li>
            <Link href="#home" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-yellow-400 transition">
              About Me
            </Link>
          </li>
          <li>
            <Link href="#whatido" className="hover:text-yellow-400 transition">
              What I Do
            </Link>
          </li>
          <li>
            <Link
              href="#portfolio"
              className="hover:text-yellow-400 transition"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
