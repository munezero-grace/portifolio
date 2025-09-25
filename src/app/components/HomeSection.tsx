"use client";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-[#1a0f0a] text-[#f5e6d6] font-sans"
    >
      <div className="absolute inset-0 bg-[#1a0f0a] opacity-60 z-0"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen text-center px-4 md:px-20">
        {/* Left Side: Text Content */}
        <div className="flex-1 md:text-left text-white/90 p-4 md:pr-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif leading-tight">
            Hi, I&apos;m Grace,
            <br /> Full-Stack Developer
          </h1>
          <p className="text-lg md:text-xl font-medium mb-6 font-serif leading-relaxed">
            With a strong passion for coding and building simple, effective
            interfaces.
            <br />
            I enjoy working on high-performance projects, blending creativity
            with code, and I fit right in with any team.
            <br />
            Let&apos;s build something great together!
          </p>
          <a
            href="#portfolio"
            className="mt-4 px-8 py-4 bg-[#e6cfa7] text-[#1a0f0a] rounded-lg font-semibold hover:bg-[#c2a77c] transition shadow-lg font-serif inline-block"
          >
            View Portfolio
          </a>
        </div>
        {/* Right Side: Image with Blending */}
        <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
          <div className="relative w-80 h-[28rem] rounded-xl overflow-hidden border-4 border-[#e6cfa7] shadow-lg">
            <img
              src="/me.jpg"
              alt="Grace Munezero"
              className="w-full h-full object-cover object-center"
              style={{ filter: "brightness(0.8) contrast(1.1)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
