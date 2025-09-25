"use client";

import { FaPalette } from "react-icons/fa";

export default function WhatIDoSection() {
  return (
    <section
      id="whatido"
      className="min-h-screen flex flex-col justify-center items-center bg-white text-black py-20 relative"
    >
      <div className="relative z-10 flex flex-col items-center w-full">
        <h1 className="text-[5rem] md:text-[8rem] font-extrabold text-gray-400 opacity-40 select-none pointer-events-none mb-0 leading-none">
          Services
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center text-[#000000] mt-[-4rem]">
          What I Do?
          <span className="block w-16 h-1 bg-yellow-400 mx-auto mt-2 rounded"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full max-w-4xl">
          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center justify-center w-16 h-16 rounded-lg border-2 border-black bg-purple-600">
              <FaPalette className="text-white text-3xl" />
            </div>
            <div>
              <div className="text-xl font-bold mb-1 text-black">
                Graphic Design
              </div>
              <div className="text-gray-600 text-sm">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </div>
            </div>
          </div>
          {/* Web Design */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center justify-center w-16 h-16 rounded-lg border-2 border-black"></div>
            <div>
              <div className="text-xl font-bold mb-1 text-black">
                Web Design
              </div>
              <div className="text-gray-600 text-sm">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </div>
            </div>
          </div>
          {/* UI/UX Design */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center justify-center w-16 h-16 rounded-lg border-2 border-black"></div>
            <div>
              <div className="text-xl font-bold mb-1 text-black">
                UI/UX Design
              </div>
              <div className="text-gray-600 text-sm">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </div>
            </div>
          </div>
          {/* App Design & Development */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center justify-center w-16 h-16 rounded-lg border-2 border-black"></div>
            <div>
              <div className="text-xl font-bold mb-1 text-black">
                App Design & Development
              </div>
              <div className="text-gray-600 text-sm">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </div>
            </div>
          </div>
          {/* Business Analysis */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center justify-center w-16 h-16 rounded-lg border-2 border-black"></div>
            <div>
              <div className="text-xl font-bold mb-1 text-black">
                Business Analysis
              </div>
              <div className="text-gray-600 text-sm">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </div>
            </div>
          </div>
          {/* SEO Marketing */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center justify-center w-16 h-16 rounded-lg border-2 border-black"></div>
            <div>
              <div className="text-xl font-bold mb-1 text-black">
                SEO Marketing
              </div>
              <div className="text-gray-600 text-sm">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
