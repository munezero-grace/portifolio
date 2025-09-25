"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-white text-black py-20 relative"
    >

      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[6rem] font-extrabold text-gray-200 opacity-30 select-none pointer-events-none z-0">
        contact
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#181c3a] mb-2">
          Get In Touch
          <span className="block w-16 h-1 bg-yellow-400 mx-auto mt-2 rounded"></span>
        </h2>
        </div>
      <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Your Message"
          className="border p-2 rounded"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500 transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center text-gray-700">
        <div>
          Email:{" "}
          <a
            href="mailto:grace@email.com"
            className="text-yellow-500 hover:underline"
          >
            grace@email.com
          </a>
        </div>
        <div>
          Phone:{" "}
          <a href="tel:+1234567890" className="text-yellow-500 hover:underline">
            +1 234 567 890
          </a>
        </div>
        <div>Location: Kigali, Rwanda</div>
      </div>
    </section>
  );
}
