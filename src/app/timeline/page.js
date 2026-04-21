"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Modal from "../../components/Modal";

export default function Timeline() {

  const [modal, setModal] = useState(null);

  const eventos = [
    {
      titulo: "Cuando nos conocimos",
      contenido: "Ese día cambió todo 💖",
      imagen: "/img1.jpeg"
    },
    {
      titulo: "Villa Garzón",
      contenido: "Un recuerdo hermoso juntos 🌄",
      imagen: "/img2.jpeg"
    },
    {
      titulo: "79 meses juntos",
      contenido: "Y seguimos sumando ❤️"
    },
    {
      titulo: "79 meses juntos",
      contenido: "Y seguimos sumando ❤️"
    },
    {
      titulo: "79 meses juntos",
      contenido: "Y seguimos sumando ❤️"
    },
    {
      titulo: "79 meses juntos",
      contenido: "Y seguimos sumando ❤️"
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {eventos.map((e, i) => (
          <Card
            key={i}
            imagen={e.imagen}
            titulo={e.titulo}
            onClick={() => setModal(e.contenido)}
          />
        ))}

        <Modal
          visible={modal !== null}
          contenido={modal}
          onClose={() => setModal(null)}
        />
      </div>
    </div>
  );
}
