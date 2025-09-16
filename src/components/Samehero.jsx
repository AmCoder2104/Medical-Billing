import Link from "next/link";

export default function Samehero({ text }) {
  return (
    <div
      className="relative bg-[#f8f5ff] overflow-hidden mt-[53px] md:mt-[63px] lg:mt-[73px]"
      style={{ minHeight: "calc(100vh - 73px)" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }} // Replace with your actual image path
      ></div>

      <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-1000"></div>

      {/* Top dark overlay for navbar clarity */}
      {/* <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent z-20"></div> */}

      {/* Background blurred shape */}
      {/* <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#efe8ff] blur-3xl opacity-40"></div> */}

      {/* Content container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Heading */}
        <h1 className="mb-6 text-5xl font-bold text-white">{text}</h1>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center space-x-2 text-lg text-white">
          <Link href="/" className="hover:underline font-semibold">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#d5f2ff] font-semibold">{text}</span>
        </div>
      </div>
    </div>
  );
}
