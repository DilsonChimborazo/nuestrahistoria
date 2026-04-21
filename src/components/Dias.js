"use client";
import { useState } from "react";

export default function FrasesAmor() {
  const frases = [
    "Eres lo mejor que me ha pasado 💖",
    "A tu lado todo es más bonito ✨",
    "Gracias por existir en mi vida 💕",
    "Contigo quiero todo, sin miedo 💌",
    "Eres mi lugar favorito ❤️",
    "Cada día contigo es un regalo 🎁",
    "Tu sonrisa ilumina mi mundo 🌟",
    "Siempre te elegiría a ti 💞"
  ];

  const [frase, setFrase] = useState("");

  const generarFrase = () => {
    const random = Math.floor(Math.random() * frases.length);
    setFrase(frases[random]);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      
      <button
        onClick={generarFrase}
        className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full shadow-md transition"
      >
        Ver mensaje 💌
      </button>

      {frase && (
        <p className="text-xl text-white animate-fade">
          {frase}
        </p>
      )}

      <style jsx>{`
        @keyframes fade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade {
          animation: fade 0.5s ease;
        }
      `}</style>

    </div>
  );
}
