"use client";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      <img
        src="/me.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-80 contrast-110"
      />
      <div className="absolute inset-0 bg-opacity-60 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center min-h-screen">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
          Hi, I&apos;m Grace
        </h1>
        <p className="text-lg md:text-2xl font-medium mb-6 text-white/80 drop-shadow-lg">
          a{" "}
          <span className="text-cyan-300 font-semibold">
            full-stack developer
          </span>{" "}
          with a strong passion for coding and building simple, effective
          interfaces.
          <br />I enjoy working on{" "}
          <span className="text-cyan-300 font-semibold">
            high-performance projects
          </span>
          , blending creativity with code, and I fit right in with any team.
          <br />
          Let&apos;s build something great together!
        </p>
        <a
          href="#portfolio"
          className="mt-4 px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition shadow-lg"
        >
          View Portfolio
        </a>
      </div>
    </section>
  );
}
