"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#1a0f0a] text-[#f5e6d6] flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
    
        <div className="flex justify-center">
          <div className="w-80 h-96 rounded-xl overflow-hidden border-4 border-[#6d4c2c] shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Grace Munezero"
              width={320}
              height={384}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        
        <div>
          <h2 className="text-lg uppercase tracking-widest text-[#e6cfa7] mb-2 font-serif">| About Me |</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-serif">
            I’m Grace, <br /> Full-Stack Developer
          </h1>
          <p className="text-lg mb-6 text-[#e6cfa7] leading-relaxed font-serif">
            I am Grace, a passionate web developer and freelancer. I specialize in building
            scalable, user-friendly applications with modern technologies. With experience
            across both front-end and back-end, I enjoy blending creativity with code
            to deliver impactful solutions.
          </p>

        
          <div className="flex gap-12 mt-8">
            <div>
              <h3 className="text-3xl font-bold text-yellow-500 font-serif">3+</h3>
              <p className="text-sm text-[#c2a77c] font-serif">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-yellow-500 font-serif">Full-Stack</h3>
              <p className="text-sm text-[#c2a77c] font-serif">Frontend & Backend</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-yellow-500 font-serif">Team Player</h3>
              <p className="text-sm text-[#c2a77c] font-serif">Adaptable & Creative</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        
            <div className="bg-[#231406] rounded-xl shadow-lg p-6 border border-[#6d4c2c]">
              <h3 className="text-xl font-bold text-[#e6cfa7] mb-2 font-serif">Back-end Developer</h3>
              <p className="text-[#c2a77c] mb-2 text-sm font-serif">Develop business logic and back-end systems to support products, create APIs, and manage version control systems.</p>
              <div className="font-semibold text-[#e6cfa7] mb-1 font-serif">Languages:</div>
              <div className="text-[#f5e6d6] mb-2 text-sm font-serif">PHP, Python, Ruby, Java, Perl</div>
                <div className="font-semibold text-[#e6cfa7] mb-1">My Tools:</div>
                <ul className="text-[#f5e6d6] text-sm list-disc list-inside">
                  <li>Yii</li>
                  <li>Symfony</li>
                  <li>MySQL</li>
                  <li>Node JS</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              {/* Card 2: Front-end Developer */}
              <div className="bg-[#231406] rounded-xl shadow-lg p-6 border border-[#6d4c2c]">
                <h3 className="text-xl font-bold text-[#e6cfa7] mb-2">Front-end Developer</h3>
                <p className="text-[#c2a77c] mb-2 text-sm">I code things from scratch, bringing ideas to life in the browser, with maximal attention to your vision.</p>
                <div className="font-semibold text-[#e6cfa7] mb-1">Technologies Stack:</div>
                <div className="text-[#f5e6d6] mb-2 text-sm">HTML, JavaScript, Slim, CSS, Pug</div>
                <div className="font-semibold text-[#e6cfa7] mb-1">My Tools:</div>
                <ul className="text-[#f5e6d6] text-sm list-disc list-inside">
                  <li>Bootstrap</li>
                  <li>AJAX</li>
                  <li>AngularJS/ReactJS</li>
                  <li>Github</li>
                  <li>Atom</li>
                </ul>
              </div>
          
              <div className="bg-[#231406] rounded-xl shadow-lg p-6 border border-[#6d4c2c]">
                <h3 className="text-xl font-bold text-[#e6cfa7] mb-2">Designer</h3>
                <p className="text-[#c2a77c] mb-2 text-sm">I create both simple and complex prototypes. Simplicity, convenience, and effectiveness at the same time.</p>
                <div className="font-semibold text-[#e6cfa7] mb-1">Things I Do:</div>
                <div className="text-[#f5e6d6] mb-2 text-sm">UX, UI, Web, Mobile, Apps, Logos</div>
                <div className="font-semibold text-[#e6cfa7] mb-1">My Tools:</div>
                <ul className="text-[#f5e6d6] text-sm list-disc list-inside">
                  <li>Figma</li>
                  <li>Sketch</li>
                  <li>InVision</li>
                  <li>Origami</li>
                  <li>Axure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
  )}
