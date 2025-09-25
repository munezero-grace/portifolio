"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-[#1a0f0a] text-[#f5e6d6] py-20 relative"
    >
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[6rem] font-extrabold text-[#e6cfa7] opacity-20 select-none pointer-events-none z-0">
        contact
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#e6cfa7] mb-2 font-serif">
          Get In Touch
          <span className="block w-16 h-1 bg-[#e6cfa7] mx-auto mt-2 rounded"></span>
        </h2>
      </div>
      <form className="w-full max-w-md bg-[#231406] shadow-lg rounded-lg p-8 flex flex-col gap-4 border border-[#6d4c2c]">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-[#6d4c2c] bg-[#1a0f0a] text-[#f5e6d6] p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-[#6d4c2c] bg-[#1a0f0a] text-[#f5e6d6] p-2 rounded"
          required
        />
        <textarea
          placeholder="Your Message"
          className="border border-[#6d4c2c] bg-[#1a0f0a] text-[#f5e6d6] p-2 rounded"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-[#e6cfa7] text-[#1a0f0a] font-semibold py-2 rounded hover:bg-[#c2a77c] transition font-serif"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center text-[#e6cfa7]">
        <div>
          Email:{" "}
          <a
            href="mailto:grace@email.com"
            className="text-[#e6cfa7] hover:underline"
          >
            grace@email.com
          </a>
        </div>
        <div>
          Phone:{" "}
          <a href="tel:+1234567890" className="text-[#e6cfa7] hover:underline">
            +1 234 567 890
          </a>
        </div>
        <div>Location: Kigali, Rwanda</div>
      </div>
    </section>
  );
}
