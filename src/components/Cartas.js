"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  Lock,
  Unlock,
  Key,
  Eye,
  EyeOff,
  X,
  HelpCircle,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

// =========================================================================
// CONFIGURACIÓN DEL CÓDIGO SECRETO PARA LA CARTA ESPECIAL
// =========================================================================
export const CODIGO_SECRETO_PRINCIPAL = "budubudu";

const CODIGOS_VALIDOS = [
  CODIGO_SECRETO_PRINCIPAL,
  "budubudu",
];

export default function Carta() {
  // "inicio" | "familia" | "secreta"
  const [cartaSeleccionada, setCartaSeleccionada] = useState("inicio");

  // Estados para la carta secreta con código
  const [solicitandoCodigo, setSolicitandoCodigo] = useState(false);
  const [codigoIngresado, setCodigoIngresado] = useState("");
  const [errorCodigo, setErrorCodigo] = useState(false);
  const [mostrarClave, setMostrarClave] = useState(false);
  const [mostrarPista, setMostrarPista] = useState(false);
  const [desbloqueando, setDesbloqueando] = useState(false);

  // Modales de fotos
  const [mostrarFotoFamilia, setMostrarFotoFamilia] = useState(false);
  const [mostrarFotoSecreta, setMostrarFotoSecreta] = useState(false);

  // Manejador de validación del código secreto
  const manejarDesbloqueo = (e) => {
    e?.preventDefault();
    const codigoLimpio = codigoIngresado.trim().toLowerCase();

    const esValido = CODIGOS_VALIDOS.some(
      (c) => c.toLowerCase() === codigoLimpio
    );

    if (esValido) {
      setErrorCodigo(false);
      setDesbloqueando(true);
      setTimeout(() => {
        setDesbloqueando(false);
        setSolicitandoCodigo(false);
        setCartaSeleccionada("secreta");
      }, 500);
    } else {
      setErrorCodigo(true);
      setTimeout(() => {
        setErrorCodigo(false);
      }, 1500);
    }
  };

  const volverAlInicio = () => {
    setCartaSeleccionada("inicio");
    setSolicitandoCodigo(false);
    setCodigoIngresado("");
    setErrorCodigo(false);
  };

  return (
    <div className="min-h-screen bg-[#0d0d10] overflow-hidden relative text-[#d4d4d8]">
      {/* ======================================================== */}
      {/* VISTA 1: PANTALLA PRINCIPAL CON LAS DOS CARTAS          */}
      {/* ======================================================== */}
      {cartaSeleccionada === "inicio" && (
        <div className="relative z-10 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 sm:px-6 py-10">
          <div className="text-center mb-8 sm:mb-12 space-y-2">
            <p className="text-[#71717a] text-xs sm:text-sm font-mono tracking-[4px] uppercase">
              Palabras que viven en el alma
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#d4d4d8]">
              Nuestras Cartas
            </h1>
            <p className="text-[#52525b] text-xs sm:text-sm font-serif italic max-w-md mx-auto">
              Cada palabra escrita aquí guarda un pedazo de mi corazón
            </p>
          </div>

          {/* CONTENEDOR DE LAS DOS CARTAS */}
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            {/* CARTA 1: LA CARTA FAMILIAR (SIN CÓDIGO) */}
            <div
              onClick={() => setCartaSeleccionada("familia")}
              className="
                group
                relative
                p-7 sm:p-8
                rounded-2xl
                border border-[#252528]
                bg-[#121215]
                hover:border-[#3f3f46]
                transition-colors duration-200
                cursor-pointer
                flex flex-col justify-between
              "
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0d0d10] border border-[#252528] flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[#a1a1aa]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717a] px-3 py-1 rounded-full bg-[#0d0d10] border border-[#252528]">
                    Libre acceso
                  </span>
                </div>

                <p className="text-[#52525b] text-xs tracking-[3px] uppercase font-mono mb-1">
                  Para ustedes
                </p>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#d4d4d8]">
                  Abrir carta ❤️‍🩹
                </h2>
                <p className="text-[#71717a] text-xs sm:text-sm font-serif mt-3 leading-relaxed">
                  Dedicada a mi familia: a ti mi amor y a nuestro hijo, el mayor motivo de mi vida.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#252528] flex items-center justify-between text-xs font-serif text-[#71717a] group-hover:text-[#a1a1aa]">
                <span>Leer carta familiar</span>
                <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* CARTA 2: LA CARTA SECRETA CON CÓDIGO */}
            <div
              onClick={() => setSolicitandoCodigo(true)}
              className="
                group
                relative
                p-7 sm:p-8
                rounded-2xl
                border border-[#252528]
                bg-[#121215]
                hover:border-[#3f3f46]
                transition-colors duration-200
                cursor-pointer
                flex flex-col justify-between
              "
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0d0d10] border border-[#252528] flex items-center justify-center">
                    <Key className="w-6 h-6 text-[#a1a1aa]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717a] px-3 py-1 rounded-full bg-[#0d0d10] border border-[#252528] flex items-center gap-1">
                    <Lock size={10} /> Código secreto
                  </span>
                </div>

                <p className="text-[#52525b] text-xs tracking-[3px] uppercase font-mono mb-1">
                  Solo para tus ojos
                </p>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#d4d4d8] leading-snug">
                  Abre si eres la mujer que dio todo por mí ❤️‍🩹
                </h2>
                <p className="text-[#71717a] text-xs sm:text-sm font-serif mt-3 leading-relaxed">
                  Una carta íntima y secreta escrita exclusivamente para ti y protegida bajo nuestra llave.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#252528] flex items-center justify-between text-xs font-serif text-[#71717a] group-hover:text-[#a1a1aa]">
                <span className="flex items-center gap-1.5">
                  <Lock size={12} /> Desbloquear con código
                </span>
                <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>

          {/* ---------------- MODAL DE CÓDIGO SECRETO ---------------- */}
          {solicitandoCodigo && (
            <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
              <div
                className={`
                  relative
                  w-full
                  max-w-md
                  rounded-2xl
                  border border-[#252528]
                  bg-[#121215]
                  p-6 sm:p-8
                  text-center
                  overflow-hidden
                  ${errorCodigo ? "animate-shake border-red-900/60" : ""}
                `}
              >
                <button
                  onClick={() => {
                    setSolicitandoCodigo(false);
                    setErrorCodigo(false);
                  }}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-[#0d0d10] text-[#71717a] hover:text-[#d4d4d8] transition"
                >
                  <X size={18} />
                </button>

                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#0d0d10] border border-[#252528] flex items-center justify-center text-[#a1a1aa]">
                  {desbloqueando ? (
                    <Unlock className="w-6 h-6" />
                  ) : (
                    <Key className="w-6 h-6" />
                  )}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#d4d4d8] mb-1">
                  Solo tú conoces la llave 🗝️
                </h3>
                <p className="font-serif text-xs sm:text-sm text-[#71717a] mb-6">
                  Ingresa nuestro código especial para desbloquear esta carta:
                </p>

                <form onSubmit={manejarDesbloqueo} className="space-y-4">
                  <div className="relative">
                    <input
                      type={mostrarClave ? "text" : "password"}
                      value={codigoIngresado}
                      onChange={(e) => {
                        setCodigoIngresado(e.target.value);
                        setErrorCodigo(false);
                      }}
                      placeholder="Ingresa el código secreto..."
                      autoFocus
                      className={`
                        w-full
                        px-4 py-3
                        rounded-xl
                        bg-[#0d0d10]
                        border
                        ${
                          errorCodigo
                            ? "border-red-900 text-red-300"
                            : "border-[#252528] focus:border-[#3f3f46]"
                        }
                        text-[#d4d4d8]
                        text-center
                        font-mono
                        text-base
                        tracking-widest
                        placeholder:tracking-normal
                        placeholder:text-[#52525b]
                        placeholder:text-sm
                        focus:outline-none
                        transition
                      `}
                    />

                    <button
                      type="button"
                      onClick={() => setMostrarClave(!mostrarClave)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#52525b] hover:text-[#a1a1aa] transition"
                      title={mostrarClave ? "Ocultar" : "Mostrar"}
                    >
                      {mostrarClave ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {errorCodigo && (
                    <p className="text-red-400/80 text-xs font-serif leading-tight">
                      Código incorrecto... Piensa en algo rico ❤️
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={desbloqueando || !codigoIngresado.trim()}
                    className={`
                      w-full
                      py-3
                      rounded-xl
                      font-serif
                      font-medium
                      text-sm
                      tracking-wide
                      flex items-center justify-center gap-2
                      transition-colors duration-200
                      ${
                        desbloqueando
                          ? "bg-[#252528] text-[#d4d4d8]"
                          : "bg-[#1c1c1f] hover:bg-[#252528] border border-[#3f3f46] text-[#d4d4d8] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      }
                    `}
                  >
                    {desbloqueando ? (
                      <>
                        <ShieldCheck size={18} />
                        <span>Abriendo carta secreta...</span>
                      </>
                    ) : (
                      <>
                        <Heart size={16} />
                        <span>Desbloquear carta</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-5 pt-4 border-t border-[#252528]">
                  <button
                    type="button"
                    onClick={() => setMostrarPista(!mostrarPista)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#71717a] hover:text-[#a1a1aa] transition font-serif"
                  >
                    <HelpCircle size={14} />
                    <span>{mostrarPista ? "Ocultar pista" : "¿Necesitas una pista?"}</span>
                  </button>

                  {mostrarPista && (
                    <p className="mt-2 text-xs font-serif italic text-[#a1a1aa] bg-[#0d0d10] border border-[#252528] rounded-lg p-2.5 leading-relaxed">
                      💡 Pista: Algo que le iba a preguntar a tu proxima pareja.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* VISTA 2: CARTA ORIGINAL PARA LA FAMILIA (EXACTA)         */}
      {/* ======================================================== */}
      {cartaSeleccionada === "familia" && (
        <div className="relative z-10 min-h-screen px-4 py-8 flex justify-center">
          <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-[#252528] bg-[#121215]">
            <div className="relative z-10 border-b border-[#252528] px-6 sm:px-8 py-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-[#52525b] text-xs uppercase tracking-[3px] font-mono">
                    Carta del corazón
                  </p>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#d4d4d8]">
                    Para mi familia ❤️
                  </h2>
                </div>
              </div>

              <button
                onClick={volverAlInicio}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0d0d10] hover:bg-[#1c1c1f] border border-[#252528] text-[#a1a1aa] hover:text-[#d4d4d8] text-xs font-serif transition"
              >
                <ArrowLeft size={14} />
                <span>Volver a cartas</span>
              </button>
            </div>

            <div className="relative z-10 px-6 md:px-14 py-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
              <div className="max-w-4xl mx-auto text-[#a1a1aa] leading-[2] text-base sm:text-lg space-y-7 font-serif">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#d4d4d8] leading-tight">
                  Hoy quiero detener el tiempo un momento...
                </p>

                <p>
                  Hoy quiero tomarme el tiempo de decirles todo lo que muchas veces siento, pero
                  que no siempre logro expresar como debería.
                </p>

                <p>
                  Porque lo que ustedes significan para mí es tan grande, que a veces las palabras
                  se quedan pequeñas.
                </p>

                <p>
                  A ti, mi amor... quiero que sepas que eres una de las cosas más importantes que me
                  ha pasado en la vida.
                </p>

                <p>
                  Hemos pasado momentos buenos, difíciles, días donde parecía fácil y otros donde
                  todo se ponía a prueba... pero aquí seguimos.
                </p>

                <p className="text-[#d4d4d8] font-semibold text-lg sm:text-xl">
                  Porque amar también es elegirnos en los días difíciles.
                </p>

                <p>
                  Eres mi tranquilidad en medio del caos. Mi hogar. Mi persona favorita.
                </p>

                <div className="my-8 rounded-xl text-center p-6 bg-[#0d0d10] border border-[#252528]">
                  <p className="text-xl sm:text-3xl text-center font-serif font-bold text-[#d4d4d8] leading-relaxed">
                    Y a ti, mi hijo…
                    <br />
                    desde el momento en que llegaste,
                    <br />
                    cambiaste mi universo entero.
                  </p>
                </div>

                <p>
                  Eres mi mayor motivación para seguir adelante incluso cuando todo se pone difícil.
                </p>

                <p>
                  Cuando te miro, veo esperanza. Veo futuro. Veo todo lo que quiero proteger para
                  siempre.
                </p>

                <p className="text-[#d4d4d8] font-semibold text-lg sm:text-xl">
                  Siempre voy a estar ahí.
                </p>

                <p>
                  Ustedes dos son mi hogar.
                  <br />
                  Mi motor.
                  <br />
                  Mi razón para seguir adelante.
                </p>

                <div className="text-center py-6">
                  <h3 className="text-2xl md:text-5xl font-serif font-bold text-[#d4d4d8] leading-tight">
                    Todo lo que hago...
                    <br />
                    lo hago por ustedes ❤️
                  </h3>
                </div>

                <p>
                  Gracias por existir.
                  <br />
                  Gracias por enseñarme lo que significa amar de verdad.
                </p>

                <p>
                  Los amo con una fuerza que no se puede medir.
                  <br />
                  Con un amor que no se acaba.
                </p>

                <div className="pt-6 text-center">
                  <button
                    onClick={() => setMostrarFotoFamilia(true)}
                    className="
                      inline-flex
                      items-center gap-3
                      px-7 py-3
                      rounded-xl
                      bg-[#0d0d10] hover:bg-[#1c1c1f]
                      border border-[#252528]
                      text-[#a1a1aa]
                      transition-colors duration-200
                      cursor-pointer
                    "
                  >
                    <Heart className="text-[#71717a] w-4 h-4" />
                    <span className="font-serif text-sm">
                      Para siempre ustedes ❤️
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* VISTA 3: CARTA SECRETA DEDICADA A LA MUJER QUE DIO TODO */}
      {/* ======================================================== */}
      {cartaSeleccionada === "secreta" && (
        <div className="relative z-10 min-h-screen px-4 sm:px-6 py-8 flex justify-center">
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-[#252528] bg-[#121215] flex flex-col">
            <div className="relative z-10 border-b border-[#252528] px-6 sm:px-8 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0d0d10] border border-[#252528] flex items-center justify-center text-[#a1a1aa]">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[#52525b] text-xs uppercase tracking-[3px] font-mono">
                    Carta Secreta & Íntima
                  </p>
                  <h2 className="text-lg sm:text-2xl font-serif font-bold text-[#d4d4d8]">
                    Para la mujer que dio todo por mí ❤️‍🩹
                  </h2>
                </div>
              </div>

              <button
                onClick={volverAlInicio}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0d0d10] hover:bg-[#1c1c1f] border border-[#252528] text-[#a1a1aa] hover:text-[#d4d4d8] text-xs font-serif transition"
              >
                <Lock size={12} />
                <span>Bloquear & Volver</span>
              </button>
            </div>

            <div className="relative z-10 px-6 sm:px-12 md:px-14 py-8 max-h-[75vh] overflow-y-auto custom-scrollbar">
              <div className="max-w-3xl mx-auto text-[#a1a1aa] leading-[2.1] font-serif text-base sm:text-lg space-y-7">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#d4d4d8] leading-tight">
                  Si estás leyendo esto, es porque eres tú...
                </p>

                <p>
                  La única persona que conoce la llave de mi corazón. La mujer que estuvo ahí cuando
                  más difícil fue todo y que nunca me soltó la mano.
                </p>

                <div className="p-5 rounded-xl bg-[#0d0d10] border-l-2 border-[#3f3f46] border border-[#252528] space-y-2">
                  <p className="text-[#d4d4d8] font-semibold text-base sm:text-lg leading-relaxed">
                    "Contigo he vivido de todo: lo bueno, lo malo y lo más duro... pero siempre juntos."
                  </p>
                  <p className="text-[#71717a] text-xs sm:text-sm">
                    Nunca voy a olvidar aquellos días en Villa Garzón, cuando nos enfermamos y la
                    situación no daba tregua. Cuando tú, siendo la única que trabajaba en el restaurante de la ladrillera,
                    te pusiste la armadura y sostuviste a nuestra pequeña familia con un coraje que
                    pocos en este mundo tienen.
                  </p>
                </div>

                <p>
                  Ahí te vi convertida en una verdadera heroína. Sé lo mucho que te costó, sé las
                  noches de desvelo, el cansancio acumulado y las lágrimas que tuviste que tragarte
                  para sonreírle a nuestro hijo y decirme que todo iba a estar bien.
                </p>

                <p>
                  Sé que muchas veces nadie pregunta cómo te sientes tú, ni cuánto te pesa cargar el
                  mundo sobre tus hombros... pero yo sí lo veo. Lo vi en cada plato de comida que
                  compartimos, incluso aquel día inolvidable que solo comimos spaguetitos con sal y
                  color, y aún así sonreímos porque nos teníamos el uno al otro.
                </p>

                <p className="text-lg sm:text-xl font-bold text-[#d4d4d8] italic text-center py-2">
                  Esa eres tú: la mujer que dio todo por mí.
                </p>

                <p>
                  Admiro la mamá tan increíble y amorosa que eres para nuestro hijo. Eres el ejemplo
                  vivo de fortaleza, de entrega pura y de amor sin medidas. Gracias por no rendirte
                  conmigo, por creer en nosotros y por ser el refugio al que siempre quiero volver.
                </p>

                <div className="text-center py-5 sm:py-6 bg-[#0d0d10] rounded-xl border border-[#252528] my-4">
                  <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#d4d4d8] leading-snug">
                    Tú diste todo por mí...
                    <br />
                    y yo prometo dar mi vida entera por ti asi no estes conmigo ❤️‍🩹
                  </h3>
                </div>

                <p>
                  Nuestra historia no ha sido un cuento de hadas fácil; ha sido una historia real,
                  luchada a pulso, construida con caídas y levantadas, pero con un amor que nada ni
                  nadie podrá borrar jamás.
                  aunque la distancia nos haya separado siempre te llevo en mi corazon, mi mente y mi alma, no hay un solo dia que no piense en ti y en como recuperar todo lo que inicie y ahora no puedo contralar
                </p>

                <div className="text-center py-5 sm:py-6 bg-[#0d0d10] rounded-xl border border-[#252528] my-4">
                  <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#d4d4d8] leading-snug">
                    perdoname!
                  </h3>
                    <p className="">
                      por todas la cosas que nunca te cumplí y tuviste que resolver sola, perdoname por ser mal esposo, mal padre y mal hombre, tu fuiste, eres y seras la mujer de mi vida y la madre de mi hijo y eso era todo lo que necesitaba. ❤️‍🩹
                    </p>
                  
                </div>

                <p className="text-base text-center sm:text-lg font-bold text-[#d4d4d8]">
                  Siempre te voy a amar, hoy, mañana y hasta el último día que respire.
                </p>

                <div className="pt-4 text-center">
                  <button
                    onClick={() => setMostrarFotoSecreta(true)}
                    className="
                      inline-flex
                      items-center gap-3
                      px-7 py-3
                      rounded-xl
                      bg-[#0d0d10] hover:bg-[#1c1c1f]
                      border border-[#252528]
                      text-[#a1a1aa]
                      transition-colors duration-200
                      cursor-pointer
                    "
                  >
                    <Heart className="w-4 h-4 text-[#71717a]" />
                    <span className="font-serif text-sm">
                      Un recuerdo especial de nosotros ❤️
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- MODAL FOTO CARTA FAMILIAR ---------------- */}
      {mostrarFotoFamilia && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setMostrarFotoFamilia(false)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-[#252528] bg-[#0d0d10]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3] max-h-[85vh]">
              <Image
                src="/img14.jpeg"
                alt="Nosotros"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <h3 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-[#d4d4d8] leading-tight">
                  Mi lugar favorito siempre será con ustedes ❤️‍🩹🩵
                </h3>
              </div>
            </div>
            <button
              onClick={() => setMostrarFotoFamilia(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black/60 border border-[#252528] text-[#d4d4d8] flex items-center justify-center hover:bg-black transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ---------------- MODAL FOTO CARTA SECRETA ---------------- */}
      {mostrarFotoSecreta && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setMostrarFotoSecreta(false)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-[#252528] bg-[#0d0d10]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3] max-h-[85vh]">
              <Image
                src="/img27.jpeg"
                alt="Para la mujer que dio todo por mí"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <h3 className="text-xl text-center sm:text-3xl md:text-4xl font-serif font-bold text-[#d4d4d8] leading-tight">
                  A tu lado aprendí lo que significa amar de verdad ❤️‍🩹
                </h3>
              </div>
            </div>
            <button
              onClick={() => setMostrarFotoSecreta(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black/60 border border-[#252528] text-[#d4d4d8] flex items-center justify-center hover:bg-black transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}