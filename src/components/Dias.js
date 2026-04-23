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
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      
      <button
        onClick={generarFrase}
        className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full shadow-md transition"
      >
        Oprime Cada Vez que lo Necesites 💌
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
