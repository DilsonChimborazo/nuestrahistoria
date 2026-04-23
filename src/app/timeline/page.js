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

  // 🔍 Filtrar eventos
  const eventosFiltrados = eventos.filter((e) =>
    `${e.fecha ?? ""} ${e.titulo ?? ""}`
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <div className="relative max-w-md mx-auto mb-6">
          
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

          <input
            type="text"
            placeholder="Buscar un recuerdo..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-3 focus:ring-white focus:border-transparent transition-all duration-300"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        
        {eventosFiltrados.map((e, i) => (
          <Card
            key={i}
            imagen={e.imagen}
            titulo={e.titulo}
            fecha={e.fecha}
            onClick={() => setModal(e)}
          />
        ))}

        {eventosFiltrados.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No se encontró ningún recuerdo 😢
          </p>
        )}

        <Modal
          visible={modal !== null}
          fecha={modal?.fecha}
          contenido={modal?.contenido}
          imagen={modal?.imagen}
          onClose={() => setModal(null)}
        />
      </div>
    </div>
  );
}
