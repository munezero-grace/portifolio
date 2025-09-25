"use client";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col justify-center items-center bg-[#1a0f0a] text-[#f5e6d6] py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#e6cfa7] font-serif">
        Portfolio
      </h2>
      <div className="flex flex-wrap gap-8 justify-center">
        <div className="bg-[#231406] shadow-lg rounded-xl p-8 w-80 border border-[#6d4c2c]">
          <div className="font-bold text-xl mb-2 text-[#e6cfa7] font-serif">
            Web App Project
          </div>
          <div className="text-[#c2a77c] mb-4 font-serif">
            A modern web application built with Next.js and Tailwind CSS.
          </div>
          <a href="#" className="text-[#e6cfa7] hover:underline font-serif">
            View Case Study
          </a>
        </div>
        <div className="bg-[#231406] shadow-lg rounded-xl p-8 w-80 border border-[#6d4c2c]">
          <div className="font-bold text-xl mb-2 text-[#e6cfa7] font-serif">
            UI/UX Design
          </div>
          <div className="text-[#c2a77c] mb-4 font-serif">
            A beautiful and intuitive user interface for a SaaS product.
          </div>
          <a href="#" className="text-[#e6cfa7] hover:underline font-serif">
            View Case Study
          </a>
        </div>
      </div>
    </section>
  );
}
