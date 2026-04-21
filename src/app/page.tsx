import Navbar from "@/components/Navbar";
import FrasesAmor from "@/components/Dias";

export default function Home() {
  return (
    <div
      className="w-full min-h-screen fixed inset-0 bg-center bg-cover"
      style={{
        backgroundImage: "url('/img1.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10">
        <Navbar/>
        <div className="flex flex-col items-center justify-center py-20 text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Nuestra Historia ❤️‍🩹🩵
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Un pequeño regalo para ti
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <FrasesAmor />
        </div>
      </div>
    </div>
  );
}
