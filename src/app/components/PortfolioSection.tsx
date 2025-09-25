"use client";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col justify-center items-center bg-white text-black py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
      <div className="flex flex-wrap gap-6 justify-center">

        <div className="bg-gray-100 shadow rounded-lg p-6 w-72">
          <div className="font-bold text-lg mb-2">Web App Project</div>
          <div className="text-gray-600 mb-2">
            A modern web application built with Next.js and Tailwind CSS.
          </div>
          <a href="#" className="text-yellow-500 hover:underline">
            View Case Study
          </a>
        </div>
        <div className="bg-gray-100 shadow rounded-lg p-6 w-72">
          <div className="font-bold text-lg mb-2">UI/UX Design</div>
          <div className="text-gray-600 mb-2">
            A beautiful and intuitive user interface for a SaaS product.
          </div>
          <a href="#" className="text-yellow-500 hover:underline">
            View Case Study
          </a>
        </div>
      </div>
    </section>
  );
}
