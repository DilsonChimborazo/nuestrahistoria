"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import LibroAlbum from "@/components/LibroAlbum";

export default function RazonesPage() {
  return (
    <div className="min-h-screen bg-[#0d0d10] text-[#d4d4d8] flex flex-col relative overflow-x-hidden">
      {/* Barra de navegación superior */}
      <Navbar />

      {/* Contenido principal: Álbum de Fotos */}
      <main className="relative z-10 flex-1 flex flex-col justify-center">
        <LibroAlbum />
      </main>
    </div>
  );
}