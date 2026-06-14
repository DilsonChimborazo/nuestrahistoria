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
    const fechaA = new Date(
      a.fecha.split("/").reverse().join("-")
    );

    const fechaB = new Date(
      b.fecha.split("/").reverse().join("-")
    );

    return fechaB - fechaA;
  });
  const { recuerdoHoy, recuerdoAnoPasado } =
    useMemo(() => {
      const hoy = new Date();
      const diaHoy = hoy.getDate();
      const mesHoy = hoy.getMonth() + 1;
      const anioPasado = hoy.getFullYear() - 1;
      const hoyEvento = eventosOrdenados.find((e) => {
        const [dia, mes] = e.fecha.split("/");

        return (
          Number(dia) === diaHoy &&
          Number(mes) === mesHoy
        );
      });
      const anoPasadoEvento = eventosOrdenados.find(
        (e) => {
          const [dia, mes, anio] =
            e.fecha.split("/");

          return (
            Number(dia) === diaHoy &&
            Number(mes) === mesHoy &&
            Number(anio) === anioPasado
          );
        }
      );

      return {
        recuerdoHoy:
          hoyEvento || eventosOrdenados[0],

        recuerdoAnoPasado: anoPasadoEvento
          ? {
              ...anoPasadoEvento,
              etiqueta: "Hace un año ✨",
            }
          : {
              ...eventosOrdenados[1],
              etiqueta: "Recuerdos recientes 💫",
            },
      };
    }, [eventosOrdenados]);
  const cardsTop = eventosOrdenados.filter(
    (e) =>
      e.titulo !== recuerdoHoy?.titulo &&
      e.titulo !== recuerdoAnoPasado?.titulo
  );
  const cardsBottom = cardsTop.slice(4);

  return (
    <div className="min-h-screen bg-[#070707] text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full"></div>
      </div>
      <Navbar />
      <div className="relative z-10 px-4 md:px-8 py-6">
        <div className="max-w-md mb-10">
          <div
            className="
              flex items-center gap-3
              bg-white/[0.04]
              border border-white/10
              rounded-2xl
              px-5 py-4
              backdrop-blur-xl
            "
          >
            <Search
              size={18}
              className="text-white/40"
            />
            <input
              type="text"
              placeholder="Buscar un recuerdo..."
              className="
                bg-transparent
                outline-none
                w-full
                text-white
                placeholder:text-white/30
              "
              value={busqueda}
              onChange={(e) =>
                setBusqueda(e.target.value)
              }
            />
          </div>
        </div>
        {recuerdoHoy && (
          <section
            className="
              rounded-[40px]
              overflow-hidden
              bg-[#141414]
              border border-white/10
              min-h-[700px]
              grid
              grid-cols-1
              xl:grid-cols-[1.1fr_0.8fr]
            "
          >
            <div className="relative p-6 md:py-25 flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-cyan-500/10"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div
                  className="
                    px-4 py-2
                    rounded-full
                    bg-white/5
                    border border-white/10
                    backdrop-blur-xl
                    flex items-center gap-2
                    w-fit
                  "
                >
                  <Sparkles
                    size={15}
                    className="text-fuchsia-300"
                  />
                  <span className="text-sm">
                    Hoy ❤️
                  </span>
                </div>
                  <p className="text-white/40 text-xl">
                    {new Date().toLocaleDateString("es-CO")}
                  </p>
              </div>
              <div className="relative z-10 mt-8">
                <p
                  className="
                    text-fuchsia-300
                    uppercase
                    tracking-[4px]
                    text-xs
                    mb-3
                  "
                >
                  Nuestra historia
                </p>

                <h1
                  className="
                    text-5xl
                    md:text-7xl
                    font-black
                    leading-[0.95]
                    max-w-3xl
                  "
                >
                  Cada recuerdo
                  <br />
                  cuenta nuestra
                  <br />
                  historia ✨
                </h1>

                <p
                  className="
                    text-white/50
                    mt-5
                    max-w-xl
                    leading-relaxed
                    text-sm md:text-base
                  "
                >
                  Un espacio donde cada foto guarda un
                  momento especial, cada fecha revive un
                  sentimiento y cada recuerdo sigue vivo
                  con nosotros.
                </p>
                <button
                  onClick={() =>
                    setModal(recuerdoHoy)
                  }
                  className="
                    mt-5
                    px-6 py-4
                    rounded-2xl
                    bg-white/70
                    text-black
                    font-semibold
                    flex items-center gap-3
                    hover:scale-105
                    transition-all duration-300
                  "
                >
                  Ver ultimo recuerdo

                  <ArrowRight size={18} />
                </button>
              </div>
            <div
              className="
                relative z-10
                mt-3
                rounded-[30px]
                overflow-hidden
                border border-white/10
                max-w-md
                group
                cursor-pointer
              "
              onClick={() => setModal(recuerdoHoy)}
            >
              <img
                src={recuerdoHoy.imagen}
                alt={recuerdoHoy.titulo}
                className="
                  w-full
                  h-[240px]
                  object-cover
                  group-hover:scale-105
                  transition-all duration-700
                "
              />
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                "
              ></div>
              <div className="absolute bottom-0 p-5">
                <p className="text-white/50 text-xs mb-2">
                  {recuerdoHoy.fecha}
                </p>

                <h3
                  className="
                    text-2xl
                    font-bold
                    leading-tight
                  "
                >
                  {recuerdoHoy.titulo}
                </h3>
              </div>
            </div>
            </div>
            <div
              className="
                bg-[#0d0d0d]
                p-5
                border-l border-white/10
                flex flex-col gap-5
              "
            >
              {recuerdoAnoPasado && (
                <div
                  onClick={() =>
                    setModal(recuerdoAnoPasado)
                  }
                  className="
                    relative
                    rounded-[30px]
                    overflow-hidden
                    flex-1
                    min-h-[300px]
                    cursor-pointer
                    group
                  "
                >
                  <img
                    src={recuerdoAnoPasado.imagen}
                    alt={recuerdoAnoPasado.titulo}
                    className="
                      w-full h-full
                      object-cover
                      group-hover:scale-105
                      transition-all duration-700
                    "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
                  <div className="absolute bottom-0 p-6">
                    <p className="text-white/50 text-sm mb-2">
                      {recuerdoAnoPasado.etiqueta}
                    </p>

                    <h2 className="text-3xl font-bold leading-tight">
                      {recuerdoAnoPasado.titulo}
                    </h2>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-2 gap-4">
                {cardsTop.slice(0, 4).map((e, i) => (
                  <div
                    key={i}
                    onClick={() => setModal(e)}
                    className="
                      relative
                      rounded-[25px]
                      overflow-hidden
                      cursor-pointer
                      group
                      h-[180px]
                    "
                  >
                    <img
                      src={e.imagen}
                      alt={e.titulo}
                      className="
                        w-full h-full
                        object-cover
                        group-hover:scale-110
                        transition-all duration-700
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                    <div className="absolute bottom-0 p-4">
                      <p className="text-[10px] text-white/50 mb-1">
                        {e.fecha}
                      </p>

                      <h3 className="text-sm font-semibold line-clamp-2">
                        {e.titulo}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        <section className="mt-16">
          <div className="mb-8">
            <p className="text-fuchsia-300 text-sm uppercase tracking-[4px]">
              Recuerdos
            </p>

            <h2 className="text-4xl font-black mt-2">
              Nuestra galería ❤️‍🩹​
            </h2>
          </div>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-4
              gap-6
            "
          >
            {cardsBottom.map((e, i) => (
              <div
                key={i}
                onClick={() => setModal(e)}
                className="group cursor-pointer"
              >
                <div
                  className="
                    relative
                    rounded-[30px]
                    overflow-hidden
                    bg-white/[0.03]
                    border border-white/10
                  "
                >
                  <div className="overflow-hidden">
                    <img
                      src={e.imagen}
                      alt={e.titulo}
                      className="
                        w-full
                        h-[320px]
                        object-cover
                        group-hover:scale-110
                        transition-all duration-700
                      "
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-fuchsia-300/70 text-xs mb-2">
                      {e.fecha}
                    </p>

                    <h3 className="text-lg font-semibold leading-snug">
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