"use client";

export default function Card({ titulo, onClick, imagen, fecha }) {
  return (
    <div
      onClick={onClick}
      className="
        bg-white/5 backdrop-blur-md
        border border-white/10
        rounded-2xl 
        p-4 
        flex flex-col justify-between
        transition-all duration-500
        cursor-pointer
        hover:scale-[1.03]
        hover:bg-white/10
      "
    >
      <p className="text-center text-xs text-purple-300/70 mb-2 tracking-wider">
        {fecha}
      </p>

      <img
        className="rounded-xl w-full h-40 object-cover mb-3 transition-transform duration-500 hover:scale-105"
        src={imagen}
        alt={titulo}
      />

      <h3 className="text-center text-base text-white/90 font-medium">
        {titulo}
      </h3>
    </div>
  );
}
