"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#1a0f0a] text-[#f5e6d6] flex flex-col items-center justify-center py-20 px-6"
    >
      <div className="max-w-6xl w-full flex flex-col items-center text-center">
        <h2 className="text-4xl uppercase tracking-widest text-[#e6cfa7] mb-10 font-serif font-bold">
          About Me
        </h2>

        <p className="max-w-3xl text-lg mb-8 text-[#e6cfa7] leading-relaxed font-serif">
          I am Grace, a passionate and certified web developer. I specialize in
          building scalable, user-friendly applications with modern
          technologies. With experience across both front-end and back-end, I
          blend creativity with code to deliver impactful digital solutions.
        </p>
        <div className="flex flex-wrap gap-12 justify-center mb-12">
          <div>
            <h3 className="text-4xl font-bold text-yellow-500 font-serif">
              3+
            </h3>
            <p className="text-sm text-[#c2a77c] font-serif">
              Years of Experience
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow-500 font-serif">
              Full-Stack
            </h3>
            <p className="text-sm text-[#c2a77c] font-serif">
              Frontend & Backend
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow-500 font-serif">
              Team Player
            </h3>
            <p className="text-sm text-[#c2a77c] font-serif">
              Collaborative & Reliable
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full">
          <div className="bg-[#231406] rounded-2xl shadow-xl p-10 border-2 border-[#e6cfa7] flex flex-col items-center min-h-[320px]">
            <h3 className="text-2xl font-bold text-[#e6cfa7] mb-4 font-serif">
              Back-end Developer
            </h3>
            <p className="text-[#c2a77c] mb-4 text-base font-serif">
              Develop business logic and back-end systems to support products,
              create APIs, and manage version control systems.
            </p>
            <div className="font-semibold text-[#e6cfa7] mb-2 font-serif">
              Languages:
            </div>
            <div className="text-[#f5e6d6] mb-2 text-base font-serif">
              PHP, Python, Ruby, Java, Perl
            </div>
            <div className="font-semibold text-[#e6cfa7] mb-2 font-serif">
              My Tools:
            </div>
            <ul className="text-[#f5e6d6] text-base list-disc list-inside">
              <li>Yii</li>
              <li>Symfony</li>
              <li>MySQL</li>
              <li>Node JS</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="bg-[#231406] rounded-2xl shadow-xl p-10 border-2 border-[#e6cfa7] flex flex-col items-center min-h-[320px]">
            <h3 className="text-2xl font-bold text-[#e6cfa7] mb-4 font-serif">
              Front-end Developer
            </h3>
            <p className="text-[#c2a77c] mb-4 text-base font-serif">
              I code things from scratch, bringing ideas to life in the browser,
              with maximal attention to your vision.
            </p>
            <div className="font-semibold text-[#e6cfa7] mb-2 font-serif">
              Technologies Stack:
            </div>
            <div className="text-[#f5e6d6] mb-2 text-base font-serif">
              HTML, JavaScript, Slim, CSS, Pug
            </div>
            <div className="font-semibold text-[#e6cfa7] mb-2 font-serif">
              My Tools:
            </div>
            <ul className="text-[#f5e6d6] text-base list-disc list-inside">
              <li>Bootstrap</li>
              <li>AJAX</li>
              <li>AngularJS/ReactJS</li>
              <li>Github</li>
              <li>Atom</li>
            </ul>
          </div>
          <div className="bg-[#231406] rounded-2xl shadow-xl p-10 border-2 border-[#e6cfa7] flex flex-col items-center min-h-[320px]">
            <h3 className="text-2xl font-bold text-[#e6cfa7] mb-4 font-serif">
              Designer
            </h3>
            <p className="text-[#c2a77c] mb-4 text-base font-serif">
              I create both simple and complex prototypes. Simplicity,
              convenience, and effectiveness at the same time.
            </p>
            <div className="font-semibold text-[#e6cfa7] mb-2 font-serif">
              Things I Do:
            </div>
            <div className="text-[#f5e6d6] mb-2 text-base font-serif">
              UX, UI, Web, Mobile, Apps, Logos
            </div>
            <div className="font-semibold text-[#e6cfa7] mb-2 font-serif">
              My Tools:
            </div>
            <ul className="text-[#f5e6d6] text-base list-disc list-inside">
              <li>Figma</li>
              <li>Sketch</li>
              <li>InVision</li>
              <li>Origami</li>
              <li>Axure</li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-4 mt-12">
          <a
            href="#portfolio"
            className="bg-transparent border-2 border-[#e6cfa7] text-[#e6cfa7] px-8 py-4 rounded-lg font-bold hover:bg-[#e6cfa7] hover:text-[#1a0f0a] transition-colors duration-200 font-serif"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="bg-[#e6cfa7] text-[#1a0f0a] px-8 py-4 rounded-lg font-bold hover:bg-[#c2a77c] transition-colors duration-200 font-serif"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
