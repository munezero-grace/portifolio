import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#1a0f0a] min-h-screen text-[#f5e6d6] font-serif">
        <Navbar />
        <main className="pt-24 max-w-7xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
