export default function About() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#DDDDDD] to-[#FFFFFF] fixed top-0 relative">
      {" "}
      {/* navbar atas */}{" "}
      <div className="bg-white w-full h-[70px] flex items-center justify-center shadow-xl">
        {" "}
        <ul className="flex items-center font-medium text-lg gap-10">
          {" "}
          <li className="text-[#FF9844] text-[23px] font-bold">
            {" "}
            Akmal Profile{" "}
          </li>{" "}
          <li className="max-md:hidden hover:text-[#FFB173] duration-300">
            {" "}
            About{" "}
          </li>{" "}
          <li className="max-md:hidden hover:text-[#FFB173] duration-300">
            {" "}
            Experiences{" "}
          </li>{" "}
          <li className="max-md:hidden hover:text-[#FFB173] duration-300">
            {" "}
            Contact{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
      {/* foto */}{" "}
      <div className="max-md:hidden">
        {" "}
        <img
          src="/akmal2.jpg"
          alt="akmal"
          className="w-full h-[500px] object-cover opacity-50"
        />{" "}
        <div className="absolute inset-0 flex flex-col justify-center px-20">
          {" "}
          <h1 className="relative font-extrabold text-[white] text-[50px] text-shadow-md">
            {" "}
            Akmal Rafli F.{" "}
          </h1>{" "}
          <p className="bg-[#FF9844] flex justify-center w-[120px] text-[white] p-1 rounded-[15px]">
            {" "}
            I&apos;m Developer{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900">
        {" "}
        Brandon Johnson{" "}
      </h1>{" "}
      <p className="mt-6 text-2xl md:text-3xl text-gray-700">
        {" "}
        I&apos;m{" "}
        <span className="text-indigo-600 font-semibold">Developer</span>{" "}
      </p>{" "}
      {/* navbar bawah */}{" "}
      <div className="min-md:hidden w-full h-[60px] bg-white fixed bottom-0 flex items-center justify-center border-1 border-[grey]">
        {" "}
        <ul className="flex items-center text-sm font-medium gap-10">
          {" "}
          <li className="hover:text-[#FFB173] duration-300">About</li>{" "}
          <li className="hover:text-[#FFB173] duration-300">Projects</li>{" "}
          <li className="hover:text-[#FFB173] duration-300">Contact</li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
}
