"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";


export default function Home() {

  const frases = [
    "Eres la mujer más increíble que he conocido, y cada día me enamoro más de quien eres 💖",
    "Quiero que sepas que tu felicidad es lo más importante para mí, siempre 🌟",
    "Eres fuerte, brillante y hermosa — no lo olvides nunca, porque yo lo veo todo el tiempo ✨",
    "Mereces el mundo entero, y haré todo lo que esté en mis manos para dártelo 💫",
    "Eres mi inspiración más grande; tu fortaleza me enseña a ser mejor cada día 💪❤️",
    "Cuando te veo sonreír, entiendo exactamente para qué existe la vida 🌸",
    "Tú no solo iluminas mi mundo, lo haces más cálido, más real y más hermoso 💕",
    "Que seas feliz no es un deseo, es el propósito más grande de mi vida 💌",
    "Admiro quién eres: una mujer que no se rinde, que lucha y que ama sin medida 💎",
    "Eres lo más valioso que tengo, y lo que daría por verte siempre bien es incalculable 🥹❤️",
    "No hay nada más poderoso en este mundo que una mujer como tú, que da todo sin esperar nada 💞",
    "Cada vez que el mundo te pese, recuerda que yo siempre estaré ahí para sostenerte 🏡",
    "Eres mi razón para ser mejor, para luchar más fuerte y para nunca rendirme 💫",
    "Todo lo que sueñas lo mereces, y yo quiero estar ahí cuando lo alcances 🌠",
    "Eres una mamá extraordinaria y una mujer que merece ser amada sin condiciones ❤️",
    "Nunca dejes que nada apague esa luz que llevas dentro, porque es única y es tuya 💡💕",
    "Eres mi calma cuando todo se desordena y mi alegría en los días grises ☀️",
    "Quiero que siempre recuerdes que tienes a alguien que te admira profundamente 💖",
    "Tu sonrisa es el regalo más bonito que me puedes dar cada día 🎁",
    "Eres digna de todo el amor del universo, no te conformes con menos 🌌💕",
    "Gracias por existir, por ser quien eres y por dejarme amarte de esta manera tan especial 💖",
    "Eres mi lugar favorito en el mundo, no importa dónde estemos 🏡❤️",
    "Tienes una fortaleza que me deja sin palabras; eres mi heroína cada día 💪🌟",
    "Que seas feliz es todo lo que le pido a la vida, siempre 🙏💕",
    "Eres el tipo de mujer que inspira con solo existir; no lo subestimes nunca 💫",
    "El mundo es mejor contigo en él, y mi vida tiene más sentido gracias a ti 💌",
    "Eres capaz de todo lo que te propones, yo lo sé aunque a veces tú lo dudes 💪❤️",
    "No hay tormenta que pueda contra alguien tan valiente y tan bella como tú 🌪️💕",
    "Tu amor transforma todo: lo ordinario en especial, lo difícil en posible 🌸",
    "Eres el amor de mi vida y la razón por la que quiero ser una mejor versión de mí 💞",
    "Mereces despertar cada día sintiéndote amada, valorada y admirada — eso es lo que eres para mí 🌅❤️",
    "Eres mi orgullo más grande, mi paz más profunda y mi amor más verdadero 💖",
    "Cada sacrificio que haces vale oro, y yo quiero que nunca lo olvides 💎",
    "Eres la mujer con la que quiero seguir construyendo sueños, uno a la vez 💫",
    "Tu felicidad es mi misión, hoy, mañana y siempre ♾️❤️",
    "Cuando sientas que no puedes más, recuerda que yo creo en ti más de lo que imaginas 💪💕",
    "Eres mi primer pensamiento cada mañana y mi último suspiro cada noche 🌙💖",
    "Todo lo que eres me tiene enamorado: tu fuerza, tu ternura, tu corazón tan grande 🥹❤️",
    "Que nunca te falte amor, porque el mío es para ti, sin límites ni condiciones 💞",
    "Eres extraordinaria, y que yo lo sepa me hace el hombre más afortunado del mundo 🌟",
    "Siempre quiero que estés bien, que sonrías, que sientas que vales todo lo que vales 💕",
    "Eres mi motivación para seguir cuando todo se pone difícil 💫",
    "El amor que siento por ti crece cada día, y eso nunca va a parar ❤️‍🔥",
    "Eres mi paz, mi hogar, mi todo y mi razón de sonreír siempre 🏡💖",
    "Que esta vida te trate tan bien como tú mereces, y yo haré mi parte con toda mi alma 🙏💕",
    "Eres la prueba de que las cosas más hermosas en la vida no se buscan, se encuentran 🌸✨",
    "Admiro cada parte de ti: la que el mundo ve y la que solo yo conozco 💌",
    "Eres mi mujer favorita en todo el universo, sin dudarlo ni un segundo 💞",
    "Tu felicidad me da paz, y tu sonrisa me da esperanza 🌅❤️",
    "Si hay algo que quiero que sientas siempre es esto: eres amada, profunda e infinitamente 💖",
  ];

  const [frase, setFrase] = useState("");

  const generarFrase = () => {
    const random = Math.floor(Math.random() * frases.length);
    setFrase(frases[random]);
  };

  return (
    <div
      className="w-full min-h-screen relative bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: "url('/img1.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/75"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/30 to-black/90"></div>

      <div className="relative z-10 flex flex-col min-h-screen">

        <Navbar />

        <div className="flex flex-col justify-center flex-1 px-6 md:px-20 text-white max-w-3xl">

          <p className="tracking-[0.3em] text-sm text-white/50 mb-4">
            NUESTRA HISTORIA
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#d4d4d8]">
            AMOR
          </h1>

          <p className="mt-6 text-white/50 max-w-md leading-relaxed">
            No es solo una historia...
            es todo lo que hemos sido, somos y seremos 💫
          </p>
          <button
            onClick={generarFrase}
            className="
              mt-10 relative w-fit px-8 py-3.5
              border border-[#252528] rounded-full
              bg-[#0d0d10]/85 hover:bg-[#121215]/90
              text-[#a1a1aa] hover:text-[#d4d4d8]
              transition-colors duration-300
              cursor-pointer
            "
          >
            <span>
              Oprime cuando lo necesites ❤️‍🩹
            </span>
          </button>
          <div className="
            absolute 
            bottom-10 left-1/2 -translate-x-1/2
            w-full px-6 text-center
            md:top-1/2 md:-translate-y-1/2 
            md:left-auto md:translate-x-0 
            md:right-10 lg:right-16
            md:text-right md:max-w-lg
          ">
            {frase && (
              <p className="
                text-xl sm:text-2xl md:text-3xl lg:text-4xl
                text-white/55
                italic
                leading-relaxed
                tracking-wide
                animate-fadeRight
              ">
                {frase}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
