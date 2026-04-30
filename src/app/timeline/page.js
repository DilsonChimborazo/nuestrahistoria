"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
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

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(120,90,200,0.08),transparent)] pointer-events-none"></div>
      <Navbar />
      <div className="p-4">
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
          <input
            type="text"
            placeholder="Buscar un recuerdo..."
            className="
              w-full pl-10 pr-4 py-3 
              rounded-full 
              bg-white/5 backdrop-blur-md 
              border border-white/10
              text-white placeholder-white/40
              focus:outline-none 
              focus:border-purple-400/40
              transition-all duration-300
            "
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 pb-10">
        {eventosFiltrados.map((e, i) => (
          <div
            key={i}
            style={{ animationDelay: `${i * 0.08}s` }}
            className="animate-fadeUp"
          >
            <Card
              imagen={e.imagen}
              titulo={e.titulo}
              fecha={e.fecha}
              onClick={() => setModal(e)}
            />
          </div>
        ))}

        {eventosFiltrados.length === 0 && (
          <p className="col-span-full text-center text-white/40 text-lg">
            No se encontró ningún recuerdo 😢
          </p>
        )}
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
