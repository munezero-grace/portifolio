"use client";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col justify-center items-center bg-[#1a0f0a] text-[#f5e6d6] py-20"
    >
      <h2 className="text-4xl uppercase tracking-widest text-[#e6cfa7] mb-10 font-serif font-bold">
        Portfolio
      </h2>
      <div className="flex flex-wrap gap-8 justify-center">
        <div className="bg-[#231406] shadow-lg rounded-xl p-0 w-80 border border-[#6d4c2c] flex flex-col justify-between">
          <div>
            <div className="w-full h-64 rounded-t-xl overflow-hidden">
              <img
                src="/ayayay.jpg"
                alt="Smart Public Transport Scheduling Platform"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <div className="text-3xl mb-2 font-serif">🚍</div>
              <div className="font-bold text-xl mb-2 text-[#e6cfa7] font-serif">
                Smart Public Transport Scheduling Platform
              </div>
              <div className="text-[#c2a77c] mb-4 font-serif">
                Designed and developed a platform to optimize Rwanda’s public
                transit system by improving route scheduling and efficiency.
                Focused on real-time data handling, user-centered design, and
                scalability to make daily commuting smoother.
              </div>
            </div>

            <div className="flex items-center justify-between px-6 py-3 border-t border-[#6d4c2c] bg-[#1a0f0a] text-sm">
              <a
                href="https://example.com/transport"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline flex items-center gap-1"
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 3h7v7m0 0L10 21m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#231406] shadow-lg rounded-xl p-0 w-80 border border-[#6d4c2c] flex flex-col justify-between">
          <div>
            <div className="w-full h-64 rounded-t-xl overflow-hidden">
              <img
                src="/ready.jpg"
                alt="Secure & Responsive Web Applications"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <div className="text-3xl mb-2 font-serif">🌐</div>
              <div className="font-bold text-xl mb-2 text-[#e6cfa7] font-serif">
                Secure & Responsive Web Applications
              </div>
              <div className="text-[#c2a77c] mb-4 font-serif">
                Built multiple full-stack web applications using React, Node.js,
                MongoDB, and PostgreSQL. Emphasis was placed on security,
                performance optimization, and responsive design, ensuring
                accessibility across devices.
              </div>
            </div>

            <div className="flex items-center justify-between px-6 py-3 border-t border-[#6d4c2c] bg-[#1a0f0a] text-sm">
              <a
                href="https://example.com/webapps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline flex items-center gap-1"
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 3h7v7m0 0L10 21m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#231406] shadow-lg rounded-xl p-0 w-80 border border-[#6d4c2c] flex flex-col justify-between">
          <div>
            <div className="w-full h-64 rounded-t-xl overflow-hidden">
              <img
                src="/huh.jpg"
                alt="Scalable Software Development at Bouletteproof"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <div className="text-3xl mb-2 font-serif">🔒</div>
              <div className="font-bold text-xl mb-2 text-[#e6cfa7] font-serif">
                Scalable Software Development at Bouletteproof
              </div>
              <div className="text-[#c2a77c] mb-4 font-serif">
                Contributed to the development of secure, scalable applications
                by integrating features with TypeScript, Node.js, and GraphQL.
                Improved backend API efficiency and database performance while
                collaborating with cross-functional teams in an Agile
                environment.
              </div>

              <div className="flex items-center justify-between px-6 py-3 border-t border-[#6d4c2c] bg-[#1a0f0a] text-sm">
                <a
                  href="https://example.com/bouletteproof"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline flex items-center gap-1"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 3h7v7m0 0L10 21m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
