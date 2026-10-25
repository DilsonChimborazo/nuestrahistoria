"use client";

import { useMemo, useState } from "react";
import {
  Search,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Modal from "../../components/Modal";
import eventos from "./eventos";

export default function Timeline() {
  const [modal, setModal] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const eventosFiltrados = eventos.filter((e) =>
    `${e.fecha ?? ""} ${e.titulo ?? ""}`
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );
  const eventosOrdenados = [...eventosFiltrados].sort((a, b) => {
    const fechaA = new Date(a.fecha.split("/").reverse().join("-"));
    const fechaB = new Date(b.fecha.split("/").reverse().join("-"));
    return fechaB - fechaA;
  });

  const { recuerdoHoy, recuerdoAnoPasado } = useMemo(() => {
    const hoy = new Date();
    const diaHoy = hoy.getDate();
    const mesHoy = hoy.getMonth() + 1;
    const anioPasado = hoy.getFullYear() - 1;
    const hoyEvento = eventosOrdenados.find((e) => {
      const [dia, mes] = e.fecha.split("/");
      return Number(dia) === diaHoy && Number(mes) === mesHoy;
    });
    const anoPasadoEvento = eventosOrdenados.find((e) => {
      const [dia, mes, anio] = e.fecha.split("/");
      return (
        Number(dia) === diaHoy &&
        Number(mes) === mesHoy &&
        Number(anio) === anioPasado
      );
    });

    return {
      recuerdoHoy: hoyEvento || eventosOrdenados[0],
      recuerdoAnoPasado: anoPasadoEvento
        ? { ...anoPasadoEvento, etiqueta: "Hace un año ✨" }
        : { ...eventosOrdenados[1], etiqueta: "Recuerdos recientes 💫" },
    };
  }, [eventosOrdenados]);

  const cardsTop = eventosOrdenados.filter(
    (e) =>
      e.titulo !== recuerdoHoy?.titulo &&
      e.titulo !== recuerdoAnoPasado?.titulo
  );
  const cardsBottom = cardsTop.slice(4);

  return (
    <div className="min-h-screen bg-[#0d0d10] text-[#d4d4d8] overflow-hidden">
      <Navbar />
      <div className="relative z-10 px-4 md:px-8 py-6">
        {/* Buscador */}
        <div className="max-w-md mb-10">
          <div className="
            flex items-center gap-3
            bg-[#121215]
            border border-[#252528]
            rounded-xl
            px-5 py-3.5
          ">
            <Search size={18} className="text-[#52525b]" />
            <input
              type="text"
              placeholder="Buscar un recuerdo..."
              className="
                bg-transparent
                outline-none
                w-full
                text-[#d4d4d8]
                placeholder:text-[#52525b]
              "
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
        </div>

        {/* Hero principal */}
        {recuerdoHoy && (
          <section className="
            rounded-2xl
            overflow-hidden
            bg-[#121215]
            border border-[#252528]
            min-h-[700px]
            grid
            grid-cols-1
            xl:grid-cols-[1.1fr_0.8fr]
          ">
            <div className="relative p-6 md:py-20 flex flex-col justify-between">
              <div className="relative z-10 flex items-center justify-between">
                <div className="
                  px-3.5 py-1.5
                  rounded-full
                  bg-[#0d0d10]
                  border border-[#252528]
                  flex items-center gap-2
                  w-fit
                ">
                  <Sparkles size={14} className="text-[#71717a]" />
                  <span className="text-xs text-[#a1a1aa] font-mono">Hoy ❤️</span>
                </div>
                <p className="text-[#52525b] text-sm font-mono">
                  {new Date().toLocaleDateString("es-CO")}
                </p>
              </div>

              <div className="relative z-10 mt-8">
                <p className="text-[#71717a] uppercase tracking-[3px] text-xs font-mono mb-3">
                  Nuestra historia
                </p>

                <h1 className="
                  text-4xl
                  md:text-6xl
                  font-serif
                  font-bold
                  text-[#d4d4d8]
                  leading-tight
                  max-w-3xl
                ">
                  Cada recuerdo
                  <br />
                  cuenta nuestra
                  <br />
                  historia ❤️‍🩹
                </h1>

                <p className="text-[#71717a] mt-5 max-w-xl leading-relaxed text-sm md:text-base">
                  Un espacio donde cada foto guarda un
                  momento especial, cada fecha revive un
                  sentimiento y cada recuerdo sigue vivo
                  con nosotros.
                </p>

                <button
                  onClick={() => setModal(recuerdoHoy)}
                  className="
                    mt-5
                    px-6 py-3.5
                    rounded-xl
                    bg-[#1c1c1f] hover:bg-[#252528]
                    border border-[#3f3f46]
                    text-[#d4d4d8]
                    text-sm
                    font-medium
                    flex items-center gap-3
                    transition-colors duration-200
                  "
                >
                  Ver último recuerdo
                  <ArrowRight size={16} />
                </button>
              </div>

              <div
                className="
                  relative z-10
                  mt-3
                  rounded-xl
                  overflow-hidden
                  border border-[#252528]
                  max-w-md
                  group
                  cursor-pointer
                "
                onClick={() => setModal(recuerdoHoy)}
              >
                <img
                  src={recuerdoHoy.imagen}
                  alt={recuerdoHoy.titulo}
                  className="w-full h-[240px] object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 p-5">
                  <p className="text-[#71717a] text-xs font-mono mb-1">{recuerdoHoy.fecha}</p>
                  <h3 className="text-xl font-serif font-bold text-[#d4d4d8] leading-tight">
                    {recuerdoHoy.titulo}
                  </h3>
                </div>
              </div>
            </div>

            {/* Panel lateral derecho */}
            <div className="bg-[#0d0d10] p-5 border-l border-[#252528] flex flex-col gap-4">
              {recuerdoAnoPasado && (
                <div
                  onClick={() => setModal(recuerdoAnoPasado)}
                  className="
                    relative
                    rounded-xl
                    overflow-hidden
                    flex-1
                    min-h-[280px]
                    border border-[#252528]
                    cursor-pointer
                    group
                  "
                >
                  <img
                    src={recuerdoAnoPasado.imagen}
                    alt={recuerdoAnoPasado.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 p-5">
                    <p className="text-[#71717a] text-xs font-mono mb-1">
                      {recuerdoAnoPasado.etiqueta}
                    </p>
                    <h2 className="text-2xl font-serif font-bold text-[#d4d4d8] leading-tight">
                      {recuerdoAnoPasado.titulo}
                    </h2>
                  </div>
                </div>
              )}

              {/* Mini cards 2x2 */}
              <div className="grid grid-cols-2 gap-3">
                {cardsTop.slice(0, 4).map((e, i) => (
                  <div
                    key={i}
                    onClick={() => setModal(e)}
                    className="
                      relative
                      rounded-xl
                      overflow-hidden
                      border border-[#252528]
                      cursor-pointer
                      group
                      h-[160px]
                    "
                  >
                    <img
                      src={e.imagen}
                      alt={e.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 p-3">
                      <p className="text-[10px] text-[#71717a] font-mono mb-0.5">{e.fecha}</p>
                      <h3 className="text-xs font-medium text-[#d4d4d8] line-clamp-2">{e.titulo}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Galería inferior */}
        <section className="mt-16">
          <div className="mb-6">
            <p className="text-[#52525b] text-xs uppercase tracking-[3px] font-mono">
              Recuerdos
            </p>
            <h2 className="text-3xl font-serif font-bold text-[#d4d4d8] mt-1">
              Nuestra galería ❤️‍🩹
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {cardsBottom.map((e, i) => (
              <div key={i} onClick={() => setModal(e)} className="group cursor-pointer">
                <div className="
                  relative
                  rounded-xl
                  overflow-hidden
                  bg-[#121215]
                  border border-[#252528]
                  hover:border-[#3f3f46]
                  transition-colors duration-300
                ">
                  <div className="overflow-hidden">
                    <img
                      src={e.imagen}
                      alt={e.titulo}
                      className="w-full h-[300px] object-cover group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[#52525b] font-mono text-xs mb-1">{e.fecha}</p>
                    <h3 className="text-base font-serif font-semibold text-[#d4d4d8] leading-snug">
                      {e.titulo}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Modal
        visible={modal !== null}
        titulo={modal?.titulo}
        contenido={modal?.contenido}
        imagen={modal?.imagen}
        onClose={() => setModal(null)}
      />
    </div>
  );
}