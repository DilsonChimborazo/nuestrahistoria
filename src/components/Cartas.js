"use client";

import { useState } from "react";
import {
  Heart,
  Sparkles,
  Stars,
} from "lucide-react";

export default function Carta() {
  const [abierta, setAbierta] = useState(false);
  const [mostrarFoto, setMostrarFoto] =
    useState(false);

  return (
    <div className="min-h-screen bg-[#050507] overflow-hidden relative text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/20 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_40%)]"></div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: "10%", left: "15%" },
          { top: "20%", left: "80%" },
          { top: "35%", left: "40%" },
          { top: "50%", left: "70%" },
          { top: "65%", left: "20%" },
          { top: "75%", left: "90%" },
          { top: "85%", left: "45%" },
          { top: "30%", left: "60%" },
          { top: "55%", left: "10%" },
          { top: "12%", left: "50%" },
          { top: "42%", left: "85%" },
          { top: "90%", left: "5%" },
        ].map((p, i) => (
          <div
            key={i}
            className="
              absolute
              w-1 h-1
              bg-white/40
              rounded-full
              animate-pulse
            "
            style={{
              top: p.top,
              left: p.left,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
      {!abierta ? (
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <button
            onClick={() => setAbierta(true)}
            className="
              group
              relative
              overflow-hidden
              px-10 py-6
              rounded-[30px]
              border border-white/10
              bg-white/5
              backdrop-blur-2xl
              hover:scale-105
              transition-all duration-700
            "
          >
            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-fuchsia-500/20
                via-cyan-500/20
                to-fuchsia-500/20
                opacity-0
                group-hover:opacity-100
                transition-all duration-700
              "
            ></div>

            <div className="relative z-10 flex items-center gap-4">
              <div
                className="
                  w-14 h-14
                  rounded-full
                  bg-fuchsia-500/20
                  flex items-center justify-center
                "
              >
                <Heart className="text-fuchsia-300" />
              </div>

              <div className="text-left">
                <p className="text-white/50 text-sm tracking-[4px] uppercase">
                  Para ustedes
                </p>

                <h1 className="text-3xl font-black">
                  Abrir carta 💌
                </h1>
              </div>
            </div>
          </button>
        </div>
      ) : (
        <>
          <div
            className="
              relative z-10
              min-h-screen
              px-4 py-10
              flex justify-center
              animate-fadeIn
            "
          >
            <div
              className="
                relative
                w-full
                max-w-5xl
                rounded-[40px]
                overflow-hidden
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                shadow-[0_0_80px_rgba(217,70,239,0.15)]
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-cyan-500/10"></div>
              <div
                className="
                  relative z-10
                  border-b border-white/10
                  px-8 py-6
                  flex items-center justify-between
                "
              >
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-white/40 text-sm uppercase tracking-[4px]">
                      Carta del corazón
                    </p>

                    <h2 className="text-3xl font-black">
                      Para mi familia ❤️
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="
                  relative z-10
                  px-6 md:px-14
                  py-10
                  max-h-[80vh]
                  overflow-y-auto
                "
              >
                <div
                  className="
                    max-w-4xl
                    mx-auto
                    text-white/80
                    leading-[2]
                    text-lg
                    space-y-8
                  "
                >
                  <p className="text-3xl font-black text-white leading-tight">
                    Hoy quiero detener el tiempo un momento...
                  </p>

                  <p>
                    Hoy quiero tomarme el tiempo de decirles
                    todo lo que muchas veces siento, pero
                    que no siempre logro expresar como
                    debería.
                  </p>

                  <p>
                    Porque lo que ustedes significan para mí
                    es tan grande, que a veces las palabras
                    se quedan pequeñas.
                  </p>

                  <p>
                    A ti, mi amor... quiero que sepas que
                    eres una de las cosas más importantes
                    que me ha pasado en la vida.
                  </p>

                  <p>
                    Hemos pasado momentos buenos,
                    difíciles, días donde parecía fácil y
                    otros donde todo se ponía a prueba...
                    pero aquí seguimos.
                  </p>

                  <p className="text-fuchsia-300 font-semibold text-xl">
                    Porque amar también es elegirnos en los
                    días difíciles.
                  </p>

                  <p>
                    Eres mi tranquilidad en medio del caos.
                    Mi hogar. Mi persona favorita.
                  </p>

                  <div
                    className="
                      my-10
                      rounded-[30px]
                      border border-fuchsia-500/20
                      bg-fuchsia-500/5
                      p-8
                    "
                  >
                    <p className="text-2xl font-bold text-white leading-relaxed">
                      Y a ti, mi hijo…
                      <br />
                      desde el momento en que llegaste,
                      cambiaste mi universo entero.
                    </p>
                  </div>

                  <p>
                    Eres mi mayor motivación para seguir
                    adelante incluso cuando todo se pone
                    difícil.
                  </p>

                  <p>
                    Cuando te miro, veo esperanza. Veo
                    futuro. Veo todo lo que quiero proteger
                    para siempre.
                  </p>

                  <p className="text-cyan-300 font-semibold text-xl">
                    Siempre voy a estar ahí.
                  </p>

                  <p>
                    Ustedes dos son mi hogar.
                    <br />
                    Mi motor.
                    <br />
                    Mi razón para seguir adelante.
                  </p>

                  <div className="text-center py-10">
                    <h3
                      className="
                        text-4xl md:text-6xl
                        font-black
                        bg-gradient-to-r
                        from-fuchsia-300
                        via-white
                        to-cyan-300
                        text-transparent
                        bg-clip-text
                        leading-tight
                      "
                    >
                      Todo lo que hago...
                      <br />
                      lo hago por ustedes ❤️
                    </h3>
                  </div>

                  <p>
                    Gracias por existir.
                    <br />
                    Gracias por enseñarme lo que significa
                    amar de verdad.
                  </p>

                  <p>
                    Los amo con una fuerza que no se puede
                    medir.
                    <br />
                    Con un amor que no se acaba.
                  </p>
                  <div className="pt-10 text-center">
                    <button
                      onClick={() =>
                        setMostrarFoto(true)
                      }
                      className="
                        group
                        relative
                        overflow-hidden
                        inline-flex
                        items-center gap-3
                        px-8 py-4
                        rounded-full
                        bg-white/5
                        border border-white/10
                        hover:scale-105
                        transition-all duration-500
                      "
                    >
                      <div
                        className="
                          absolute inset-0
                          bg-gradient-to-r
                          from-fuchsia-500/20
                          to-cyan-500/20
                          opacity-0
                          group-hover:opacity-100
                          transition-all duration-500
                        "
                      ></div>

                      <div className="relative z-10 flex items-center gap-3">
                        <Heart className="text-fuchsia-300" />

                        <span className="text-white/80 font-medium">
                          Para siempre ustedes ✨
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {mostrarFoto && (
            <div
              className="
                fixed inset-0 z-50
                bg-black/80
                backdrop-blur-xl
                flex items-center justify-center
                p-4
              "
              onClick={() =>
                setMostrarFoto(false)
              }
            >
              <div
                className="
                  relative
                  max-w-4xl
                  w-full
                  rounded-[35px]
                  overflow-hidden
                  border border-white/10
                  bg-white/[0.03]
                  animate-fadeIn
                "
                onClick={(e) =>
                  e.stopPropagation()
                }
              >
                <img
                  src="/img14.jpeg"
                  alt="Nosotros"
                  className="
                    w-full
                    max-h-[85vh]
                    object-cover
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl md:text-6xl font-black leading-tight">
                    Mi lugar favorito siempre será con ustedes ❤️‍🩹​🩵​
                  </h3>
                </div>
                <button
                  onClick={() =>
                    setMostrarFoto(false)
                  }
                  className="
                    absolute top-5 right-5
                    w-12 h-12
                    rounded-full
                    bg-black/50
                    border border-white/10
                    text-white
                    text-xl
                    hover:scale-110
                    transition-all duration-300
                  "
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}