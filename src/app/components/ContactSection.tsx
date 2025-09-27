"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-[#1a0f0a] text-[#f5e6d6] py-20 relative"
    >
      <h2 className="text-4xl uppercase tracking-widest text-[#e6cfa7] mb-10 font-serif font-bold ">
          contact
        </h2>
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
