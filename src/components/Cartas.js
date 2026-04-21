"use client";

import { useState } from "react";

export default function Carta() {

  const [abierta, setAbierta] = useState(false);

  return (
    <div className="text-center">
      {!abierta ? (
        <button className="text-4xl mt-20 bg-black/50 rounded-full p-5 hover:bg-black/70 text-4xl" onClick={() => setAbierta(true)}>
          💌 Abrir carta
        </button>
      ) : (
        <div
          className="min-h-screen flex justify-center  bg-center bg-cover"
          style={{ backgroundImage: "url('/paper.jpg')" }}
        >
          <div className="bg-[#fdf6e3]/90 p-7 rounded-lg shadow-2xl border border-yellow-800 text-center ">
                <p className="px-2 sm:px-20 py-10 bg-black text-white rounded-xl">
                  Hoy quiero tomarme el tiempo de decirles todo lo que muchas veces siento, pero que no siempre logro expresar como debería. Porque lo que ustedes significan para mí es tan grande, que a veces las palabras se quedan pequeñas. <br />
                  A ti, mi amor quiero que sepas que eres una de las cosas más importantes que me ha pasado en la vida. No solo por lo que eres, sino por todo lo que hemos construido juntos. Hemos pasado momentos buenos, momentos difíciles, momentos donde todo parecía fácil y otros donde parecía que todo se ponía a prueba… pero aquí seguimos, y eso tiene un valor enorme. Porque amar no es solo estar cuando todo está bien, es quedarse, es luchar, es entender, es perdonar, es volver a elegirnos incluso en los días complicados. <br />

                  Eres mi compañera, mi apoyo, mi tranquilidad en medio del caos. Eres esa persona con la que quiero hablar de todo, con la que quiero compartir mis logros, mis miedos, mis sueños. Me has enseñado a ver la vida de otra forma, a tener paciencia, a valorar lo que realmente importa. Gracias por estar, por no rendirte, por creer en nosotros incluso cuando no todo es perfecto. <br />

                  Y a ti, mi hijo… no existe una forma exacta de explicar lo que siento por ti. Desde el momento en que llegaste a mi vida, todo cambió. Mis prioridades, mis pensamientos, mi forma de ver el mundo… todo empezó a girar alrededor de ti. Eres mi mayor motivación, mi razón para esforzarme cada día, para querer ser mejor persona, mejor hombre, mejor ejemplo. <br />

                  Cuando te miro, veo esperanza. Veo futuro. Veo todo lo que quiero proteger y cuidar. Cada cosa que hago, cada sacrificio, cada decisión lleva tu nombre. Quiero que crezcas con amor, con valores, con fuerza, con la seguridad de que siempre voy a estar para ti. No importa qué pase, no importa el tiempo ni las circunstancias, siempre voy a estar ahí, apoyándote, guiándote, levantándote si te caes.

                  Ustedes dos son lo más importante que tengo. Son mi hogar, mi motor, mi razón de seguir adelante incluso cuando todo se pone difícil. Puede que no siempre tenga las palabras perfectas, puede que a veces falle o me equivoque, pero nunca duden de esto, todo lo que hago es por ustedes, y todo lo hago con amor.

                  Quiero seguir construyendo una vida a su lado, llena de momentos, de recuerdos, de aprendizajes. Quiero vernos crecer juntos, superar obstáculos, celebrar logros, acompañarnos en cada etapa. Porque no hay nada que desee más que verlos felices, tranquilos, y saber que estamos unidos como familia.

                  Gracias por existir, por ser parte de mi vida, por darme tanto sin pedir nada a cambio. Gracias por enseñarme lo que es amar de verdad.

                  Los amo con una fuerza que no se puede medir, con un amor que no se acaba, con todo lo que soy hoy y con todo lo que quiero llegar a ser por ustedes.
                  ❤️‍🩹🩵
                </p>
          </div>
        </div>

      )}
    </div>
  );
}
