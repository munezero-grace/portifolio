"use client";

export default function WhatIDoSection() {
  return (
    <section id="services" className="py-20 px-8 bg-[#1a0f0a] text-[#f5e6d6]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl uppercase tracking-widest text-[#e6cfa7] mb-10 font-serif font-bold ">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {/* Service Card 1 */}
          <div className="p-8 rounded-xl border-2 border-[#e6cfa7] bg-[#231406] shadow-lg flex flex-col items-center transition-transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-md bg-[#6d4c2c]">
                {/* Icon */}
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1-2-1 2-1-2-1 2"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17L14.25 20l-1-2-1 2-1-2-1 2"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4a3 3 0 100 6 3 3 0 000-6z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11l-3 9"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11l3 9"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#e6cfa7] font-serif">
              Full-Stack Web
              <br />
              Development.
            </h3>
            <p className="text-sm text-[#f5e6d6] font-serif">
              Beautiful and elegant designs with interfaces that are intuitive,
              efficient, and pleasant to use for the user.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="p-8 rounded-xl border-2 border-[#e6cfa7] bg-[#231406] shadow-lg flex flex-col items-center transition-transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-md bg-[#6d4c2c]">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10a4 4 0 100-8 4 4 0 000 8z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14v8M8 18h8"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#e6cfa7] font-serif">
              Backend
              <br />
              Development.
            </h3>
            <p className="text-sm text-[#f5e6d6] font-serif">
              Custom backend development tailored to your specifications,
              designed to provide a flawless user experience.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="p-8 rounded-xl border-2 border-[#e6cfa7] bg-[#231406] shadow-lg flex flex-col items-center transition-transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-md bg-[#6d4c2c]">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4a5 5 0 015 5v3m-5-3a5 5 0 01-5-5"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15h.01"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15a5 5 0 100 10 5 5 0 000-10z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#e6cfa7] font-serif">
              iPhone
              <br />
              Applications
              <br />
              Development.
            </h3>
            <p className="text-sm text-[#f5e6d6] font-serif">
              Design iPhone Apps and transform website projects into iPhone apps
              to provide a seamless user experience.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="p-8 rounded-xl border-2 border-[#e6cfa7] bg-[#231406] shadow-lg flex flex-col items-center transition-transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-md bg-[#6d4c2c]">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4a5 5 0 015 5v3m-5-3a5 5 0 01-5-5"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15h.01"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15a5 5 0 100 10 5 5 0 000-10z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#e6cfa7] font-serif">
              Android
              <br />
              Applications
              <br />
              Development.
            </h3>
            <p className="text-sm text-[#f5e6d6] font-serif">
              Design Android and transform website projects into android apps to
              provide a seamless user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
