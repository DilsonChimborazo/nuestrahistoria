"use client";

import { useEffect, useState } from "react";
import { Heart, Calendar, Sparkles } from "lucide-react";
import { razones } from "./data";
import Navbar from "@/components/Navbar";

export default function RazonesPage() {
  const FECHA_INICIO = "2026-06-14";

  const [cargado, setCargado] = useState(false);
  const [diaActual, setDiaActual] = useState(1);

  useEffect(() => {
    const inicio = new Date(FECHA_INICIO);
    const hoy = new Date();

    const dias = Math.floor(
      (hoy.getTime() - inicio.getTime()) /
        (1000 * 60 * 60 * 24)
    );

    setDiaActual(Math.max(1, dias + 1));
    setCargado(true);
  }, []);

  if (!cargado) {
    return (
      <div className="min-h-screen bg-[#070707] flex items-center justify-center text-white">
        Cargando...
      </div>
    );
  }

  const terminado = diaActual > 100;

  const progreso = Math.min(diaActual, 100);

  const razonActual =
    razones[
      Math.min(
        diaActual - 1,
        razones.length - 1
      )
    ];

  return (
    <div className="min-h-screen bg-[#070707] text-white overflow-hidden">
    <Navbar />
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {!terminado ? (
          <>
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Calendar size={16} />
                Día {diaActual} de 100
              </div>
            </div>

            <h1 className="text-center text-5xl md:text-7xl font-black mb-6">
              99 razones
              <br />
              para amarte ❤️
            </h1>

            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-10">
              <div
                className="h-full bg-green-500 transition-all duration-700"
                style={{
                  width: `${progreso}%`,
                }}
              />
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-[40px] p-10 backdrop-blur-xl">
              <div className="flex justify-center mb-6">
                <Heart
                  size={50}
                  className="text-white bg-red-500/60 p-3 rounded-full animate-pulse"
                />
              </div>

              <p className="text-center text-2xl md:text-4xl font-bold leading-relaxed">
                {razonActual}
              </p>
            </div>

            <p className="text-center text-white/50 mt-8">
              Regresa mañana para descubrir una nueva razón ❤️
            </p>
          </>
        ) : (
          <div className="bg-white/[0.04] border border-white/10 rounded-[40px] p-10 backdrop-blur-xl text-center">
            <Sparkles
              className="mx-auto text-fuchsia-300 mb-6"
              size={60}
            />

            <h1 className="text-5xl md:text-7xl font-black mb-10">
              ❤️
            </h1>

            <p className="text-2xl md:text-4xl font-bold leading-relaxed">
              Si estás conmigo,
              <br />
              sabes que te amo.
            </p>

            <p className="text-2xl md:text-4xl font-bold leading-relaxed mt-8">
              Y si no estás conmigo,
              <br />
              sabes que te amé.
            </p>

            <p className="text-fuchsia-300 text-3xl md:text-5xl font-black mt-10">
              Y siempre te voy a amar ❤️
            </p>
          </div>
        )}
      </div>
    </div>
  );
}