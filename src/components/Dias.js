"use client";

export default function FrasesAmor({ frase }) {
  return (
    <div className="flex justify-center text-center px-4">

      {frase && (
        <p className="text-lg md:text-xl text-white/80 animate-fade max-w-xl">
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
