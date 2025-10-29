export default function About() {
  return (
    <div className="w-full h-screen relative">
      {/* navbar atas */}
      <div className="bg-white w-full h-[70px] flex items-center justify-center shadow-xl fixed top-0 z-50">
        <ul className="flex items-center font-medium text-lg gap-10">
          <li className="text-[#FF9844] text-[23px] font-bold">
            Akmal Profile
          </li>
          <li className="max-md:hidden hover:text-[#FFB173] duration-300">
            About
          </li>
          <li className="max-md:hidden hover:text-[#FFB173] duration-300">
            Experiences
          </li>
          <li className="max-md:hidden hover:text-[#FFB173] duration-300">
            Contact
          </li>
        </ul>
      </div>

      {/* konten */}
      <div className="relative">
        {/* Foto Akmal */}
        <div className="relative">
          <img
            src="/akmal2.jpg"
            alt="akmal"
            className="w-full h-[600px] object-cover opacity-50"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-[8%]">
            <div>
              <h1 className="font-extrabold text-white text-[50px] text-shadow-md">
                Akmal Rafli F.
              </h1>
              <p className="bg-[#FF9844] flex justify-center w-[150px] text-white p-1 mt-2 rounded-[15px] font-medium">
                I&apos;m Developer
              </p>
            </div>
          </div>
        </div>
        {/* About Me */}
        <div className="px-10 py-10">
          <h1 className="text-[30px] font-bold">About Me</h1>
          <p>
            Hello, my name is Akmal. Im currently 20 years old and studying
            Information Engineering at Gadjah Mada University. I live in
            Indonesia, originally from Depok, West Java. I have an interest in
            sport, playing games, design and web development, and I continue to
            develop my skills by practicing continuously, working on various
            projects, and participating in competitions.
          </p>
        </div>
      </div>
      <hr />
      <section className="p-10 px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h2 className="text-[30px] font-bold ">Education</h2>
            <ul className="space-y-4">
              <li>
                <div>
                  <h3 className="text-[20px] font-semibold">
                    Universitas Gadjah Mada
                  </h3>
                  <h4>Yogyakarta, Jawa Tengah | Juli 2024 - Present</h4>
                  <p className="text-[grey]">
                    Undergraduate Student in Information Engineering
                  </p>
                </div>
              </li>

              <li>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">
                    SMA Negeri 3 Yogyakarta
                  </h3>
                  <span className="text-gray-500">2021 - 2024</span>
                </div>
                <p className="text-gray-600">Student of Science Class</p>
              </li>
            </ul>
          </div>

          {/* ===== RIGHT: Technical Skills ===== */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>

            <div className="space-y-6">
              <div className="grid grid-cols-[220px_1fr] gap-4 items-start">
                <span className="font-medium text-gray-800">
                  Programming Languages
                </span>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-white text-sm">
                    JavaScript/TypeScript
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-white text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-white text-sm">
                    C++
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-white text-sm">
                    Solidity
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-white text-sm">
                    Dart
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-white text-sm">
                    C#
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-[220px_1fr] gap-4 items-start">
                <span className="font-medium text-gray-800">
                  App & Web Development
                </span>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-white text-sm">
                    Flutter
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-white text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-white text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-white text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-white text-sm">
                    Express
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-[220px_1fr] gap-4 items-start">
                <span className="font-medium text-gray-800">
                  Game Development
                </span>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-white text-sm">
                    Unity
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-[220px_1fr] gap-4 items-start">
                <span className="font-medium text-gray-800">
                  Machine Learning & Data Science
                </span>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-white text-sm">
                    TensorFlow
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-white text-sm">
                    Scikit-learn
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-white text-sm">
                    Pandas
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-[220px_1fr] gap-4 items-start">
                <span className="font-medium text-gray-800">
                  Database & Cloud
                </span>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-white text-sm">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-white text-sm">
                    Google Firebase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* === CV Section (letakkan DI BAWAH "About Me", SEBELUM navbar bawah) === */}
      <section className="px-10 pb-24">
        <h2 className="text-2xl font-bold text-center mb-6">CV saya</h2>

        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-4 w-[320px]">
            {/* Ganti path gambar di bawah dengan file CV kamu di /public */}
            <img
              src="/akmal1.jpg" // contoh: taruh file di public/cv-akmal.jpg
              alt="CV Akmal"
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* navbar bawah */}
      <div className="min-md:hidden w-full h-[60px] bg-white fixed bottom-0 flex items-center justify-center border-1 border-[grey]">
        <ul className="flex items-center text-sm font-medium gap-10">
          <li className="hover:text-[#FFB173] duration-300">About</li>
          <li className="hover:text-[#FFB173] duration-300">Projects</li>
          <li className="hover:text-[#FFB173] duration-300">Contact</li>
        </ul>
      </div>
    </div>
  );
}
