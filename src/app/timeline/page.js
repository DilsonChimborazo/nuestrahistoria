"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import eventos from "./eventos";

export default function Timeline() {

  const [modal, setModal] = useState(null);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {eventos.map((e, i) => (
          <Card
            key={i}
            imagen={e.imagen}
            titulo={e.titulo}
            onClick={() => setModal(e)}
          />
        ))}

        <Modal
          visible={modal !== null}
          contenido={modal?.contenido}
          imagen={modal?.imagen}
          onClose={() => setModal(null)}
        />
      </div>
    </div>
  );
}
