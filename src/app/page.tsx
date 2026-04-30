"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import FrasesAmor from "@/components/Dias";

export default function Home() {

  const frases = [
    "Eres lo mejor que me ha pasado 💖",
    "A tu lado todo es más bonito ✨",
    "Gracias por existir en mi vida 💕",
    "Contigo quiero todo, sin miedo 💌",
    "Eres mi lugar favorito ❤️",
    "Cada día contigo es un regalo 🎁",
    "Tu sonrisa ilumina mi mundo 🌟",
    "Siempre te elegiría a ti 💞",
    "Gracias por estar conmigo en cada momento, incluso cuando no ha sido fácil 💖",
    "No solo eres el amor de mi vida, eres mi compañera en todo este camino 💫",
    "Lo que hemos construido juntos vale más que cualquier cosa 💕",
    "Verte con nuestro hijo me hace amarte aún más cada día 🥹❤️",
    "Eres la mujer con la que quiero seguir escribiendo esta historia 💌",
    "Hemos pasado tanto juntos que sé que lo nuestro es real 💞",
    "Gracias por no rendirte con nosotros nunca 💖",
    "Eres el hogar al que siempre quiero volver 🏡",
    "Todo lo que soy hoy también es gracias a ti 💕",
    "No importa lo que venga, mientras esté contigo, todo estará bien 💫",
    "Eres mi fuerza cuando siento que no puedo más 💪❤️",
    "A tu lado aprendí lo que significa amar de verdad 💖",
    "Nuestro hijo tiene la mejor mamá del mundo 🌎💘",
    "Eres el ejemplo de mujer fuerte que admiro cada día 💎",
    "No cambiaría nuestra historia por nada, porque me llevó a ti 💞",
    "Contigo entendí que el amor también es luchar juntos 💪💖",
    "Eres mi paz, incluso en medio de las dificultades 🌙",
    "Gracias por cada momento, por cada risa, por cada esfuerzo 💕",
    "Eres la razón por la que sigo adelante todos los días 💫",
    "Si volviera a empezar, te elegiría a ti mil veces más 💖",
    "Eres más fuerte de lo que crees, y yo siempre estaré contigo 💪💖",
    "Admiro la mujer que eres y todo lo que haces cada día 💫",
    "Nunca dudes de ti, porque yo veo lo increíble que eres 💕",
    "Eres una mamá increíble y una mujer admirable 💎",
    "Todo lo que haces por tu familia vale oro ❤️",
    "Gracias por ser mi compañera, mi amiga y el amor de mi vida 💖",
    "Contigo cada día es una aventura que quiero vivir una y otra vez 💫",
    "Eres la persona con la que quiero envejecer, riendo y amándonos siempre 💕",
    "Nuestro amor es mi lugar seguro, mi refugio en cualquier tormenta 🏡❤️",
    "Gracias por construir conmigo esta historia que es solo nuestra 💌",
    "Eres la pieza que faltaba en mi vida, y ahora todo tiene sentido 🧩💖",
    "Contigo aprendí que el amor verdadero también es paciencia y comprensión 💫",
    "Eres mi motivación para ser cada día una mejor persona 💪❤️",
    "No imagino mi vida sin ti, porque tú eres parte de mi todo 💕",
    "Gracias por cada sacrificio, por cada esfuerzo, por cada muestra de amor 💖",
    "Eres la mujer que siempre soñé, incluso antes de saber que existías 🌟",
    "Contigo el tiempo vuela, pero los recuerdos se quedan para siempre ⏳💕",
    "Eres mi paz, mi alegría y mi razón de sonreír cada mañana ☀️❤️",
    "Gracias por amarme con mis virtudes y mis defectos, así es el amor real 💖",
    "Eres el hogar al que siempre quiero volver, sin importar dónde esté 🏡❤️",
    "Contigo descubrí que el amor también es luchar juntos por nuestros sueños 💫",
    "Eres la mujer más hermosa por dentro y por fuera que he conocido 💕",
    "Gracias por cada momento, por cada risa, por cada abrazo que me das 💖",
    "Eres mi compañera de vida, mi confidente y mi mejor amiga 👯‍♀️❤️",
    "Contigo aprendí que el amor también es perdonar y volver a elegirnos cada día 💫",
    "Eres la razón por la que mi corazón late más fuerte cada día 💓❤️",
    "Gracias por estar a mi lado en los días buenos y en los no tan buenos 💖",
    "Eres el amor de mi vida, mi todo y mi siempre ♾️❤️",
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
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>

      <div className="relative z-10 flex flex-col min-h-screen">

        <Navbar />

        <div className="flex flex-col justify-center flex-1 px-6 md:px-20 text-white max-w-3xl">

          <p className="tracking-[0.3em] text-sm text-white/60 mb-4">
            NUESTRA HISTORIA
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            AMOR
          </h1>

          <p className="mt-6 text-white/70 max-w-md leading-relaxed">
            No es solo una historia...  
            es todo lo que hemos sido, somos y seremos 💫
          </p>
          <button
            onClick={generarFrase}
            className="
              mt-10 relative w-fit px-8 py-3 
              border border-white/20 rounded-full
              text-white/80
              overflow-hidden
              transition-all duration-500
              hover:text-white hover:border-white/40
              hover:scale-105
            "
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-shine"></span>

            <span className="relative z-10">
              Oprime cuando lo necesites 💜
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
                text-white/70
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
