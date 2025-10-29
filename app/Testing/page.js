export default function Test() {
  return (
    <section className="relative w-full h-screen">
      {/* Gambar background */}
      <img
        src="/akmal1.jpg" // ganti sesuai nama file gambarmu
        alt="Hero Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay putih semi transparan */}
      <div className="absolute inset-0 bg-white/60" />

      {/* Teks di atas gambar */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900">
          Brandon Johnson
        </h1>
        <p className="mt-6 text-2xl md:text-3xl text-gray-700">
          I&apos;m{" "}
          <span className="text-indigo-600 font-semibold">Developer</span>
        </p>

        {/* Social Icons */}
        <div className="mt-10 flex items-center justify-center space-x-6">
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.02H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.91h-2.33v7.02C18.34 21.2 22 17.06 22 12.07z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition"
            aria-label="Twitter"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M19.633 7.997c.013.18.013.36.013.54 0 5.49-4.18 11.82-11.82 11.82-2.35 0-4.53-.69-6.36-1.88.33.04.65.05.99.05 1.95 0 3.75-.66 5.18-1.77a4.17 4.17 0 01-3.89-2.89c.26.04.52.06.8.06.38 0 .76-.05 1.11-.15a4.16 4.16 0 01-3.34-4.08v-.05c.56.31 1.2.5 1.88.52a4.16 4.16 0 01-1.85-3.46c0-.77.21-1.48.58-2.1a11.82 11.82 0 008.58 4.35 4.7 4.7 0 01-.1-.95 4.16 4.16 0 017.2-2.84 8.2 8.2 0 002.64-1.01 4.18 4.18 0 01-1.83 2.3 8.32 8.32 0 002.39-.65 8.96 8.96 0 01-2.08 2.16z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M20.447 20.452H17.21v-5.569c0-1.329-.027-3.041-1.853-3.041-1.855 0-2.138 1.45-2.138 2.948v5.662H9.0V9h3.111v1.561h.044c.433-.82 1.492-1.685 3.07-1.685 3.286 0 3.893 2.164 3.893 4.979v6.597zM5.337 7.433a1.81 1.81 0 110-3.62 1.81 1.81 0 010 3.62zM6.963 20.452H3.708V9H6.963v11.452z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
