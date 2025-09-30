"use client";

const CardIcon = () => (
  <svg
    className="h-8 w-8 text-[#e6cfa7] mb-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
    <path stroke="currentColor" strokeWidth={2} d="M8 12h8" />
  </svg>
);

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
        {/* Card 1 */}
        <div className="bg-[#231406] shadow-lg rounded-xl p-0 w-80 border border-[#6d4c2c] flex flex-col justify-between">
          <div>
            <div className="w-full h-64 rounded-t-xl overflow-hidden">
              <img
                src="/ayayay.jpg"
                alt="Smart Transit Scheduler"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <CardIcon />
              <div className="font-bold text-xl mb-2 text-[#e6cfa7] font-serif">
                Smart Transit Scheduler
              </div>
              <div className="text-[#c2a77c] mb-4 font-serif">
                Built a platform to optimize public transit with real-time
                scheduling, improving daily commuting efficiency.
              </div>
            </div>
            <div className="flex items-center justify-between px-6 py-3 border-t border-[#6d4c2c] bg-[#1a0f0a] text-sm">
              <a
                href="https://example.com/transport"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline flex items-center gap-1"
              >
                Explore Project &rarr;
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

        {/* Card 2 */}
        <div className="bg-[#231406] shadow-lg rounded-xl p-0 w-80 border border-[#6d4c2c] flex flex-col justify-between">
          <div>
            <div className="w-full h-64 rounded-t-xl overflow-hidden">
              <img
                src="/ready.jpg"
                alt="Secure Web Apps"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <CardIcon />
              <div className="font-bold text-xl mb-2 text-[#e6cfa7] font-serif">
                Secure Web Apps
              </div>
              <div className="text-[#c2a77c] mb-4 font-serif">
                Developed full-stack web apps with React and Node.js, ensuring
                fast, secure access across devices.
              </div>
            </div>
            <div className="flex items-center justify-between px-6 py-3 border-t border-[#6d4c2c] bg-[#1a0f0a] text-sm">
              <a
                href="https://example.com/webapps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline flex items-center gap-1"
              >
                Explore Project &rarr;
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

        {/* Card 3 */}
        <div className="bg-[#231406] shadow-lg rounded-xl p-0 w-80 border border-[#6d4c2c] flex flex-col justify-between">
          <div>
            <div className="w-full h-64 rounded-t-xl overflow-hidden">
              <img
                src="/huh.jpg"
                alt="Scalable Software Systems"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <CardIcon />
              <div className="font-bold text-xl mb-2 text-[#e6cfa7] font-serif">
                Scalable Software Systems
              </div>
              <div className="text-[#c2a77c] mb-4 font-serif">
                Optimized backend APIs and databases for scalable apps, boosting
                performance and reliability.
              </div>
              <div className="flex items-center justify-between px-6 py-3 border-t border-[#6d4c2c] bg-[#1a0f0a] text-sm">
                <a
                  href="https://example.com/bouletteproof"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline flex items-center gap-1"
                >
                  Explore Project &rarr;
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
