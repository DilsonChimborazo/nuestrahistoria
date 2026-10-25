"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Heart,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Grid,
  Shuffle,
  Bookmark,
  Calendar,
  Search,
} from "lucide-react";
import { albumPaginas } from "@/app/razones/albumData";

export default function LibroAlbum() {
  const totalPaginas = albumPaginas.length;
  // 0 = Portada, 1..totalPaginas = Recuerdos, totalPaginas + 1 = Dedicatoria Final
  const [paginaActual, setPaginaActual] = useState(0);
  const [hojaGirando, setHojaGirando] = useState(false);
  const [direccionGiro, setDireccionGiro] = useState("next"); // "next" | "prev"

  const [mostrarIndice, setMostrarIndice] = useState(false);
  const [fotoAmpliada, setFotoAmpliada] = useState(null);
  const [filtroBusqueda, setFiltroBusqueda] = useState("");

  const touchStartXRef = useRef(null);

  // Manejo de giro de página
  const irAPagina = (nuevaPagina, direccion = "next") => {
    if (hojaGirando) return;
    if (nuevaPagina < 0 || nuevaPagina > totalPaginas + 1) return;
    if (nuevaPagina === paginaActual) return;

    setDireccionGiro(direccion);
    setHojaGirando(true);

    setTimeout(() => {
      setPaginaActual(nuevaPagina);
      setHojaGirando(false);
    }, 400);
  };

  const paginaSiguiente = () => {
    if (paginaActual <= totalPaginas) {
      irAPagina(paginaActual + 1, "next");
    }
  };

  const paginaAnterior = () => {
    if (paginaActual > 0) {
      irAPagina(paginaActual - 1, "prev");
    }
  };

  const recuerdoAlAzar = () => {
    const aleatoria = Math.floor(Math.random() * totalPaginas) + 1;
    irAPagina(aleatoria, aleatoria > paginaActual ? "next" : "prev");
  };

  // Teclado (Flechas izquierda y derecha)
  useEffect(() => {
    const manejarTeclado = (e) => {
      if (mostrarIndice || fotoAmpliada) return;
      if (e.key === "ArrowRight") paginaSiguiente();
      if (e.key === "ArrowLeft") paginaAnterior();
    };
    window.addEventListener("keydown", manejarTeclado);
    return () => window.removeEventListener("keydown", manejarTeclado);
  }, [paginaActual, hojaGirando, mostrarIndice, fotoAmpliada]);

  // Touch Swipe para dispositivos móviles
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartXRef.current - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        paginaSiguiente();
      } else {
        paginaAnterior();
      }
    }
    touchStartXRef.current = null;
  };

  // Datos del recuerdo actual
  const datosPagina =
    paginaActual >= 1 && paginaActual <= totalPaginas
      ? albumPaginas[paginaActual - 1]
      : null;

  // Filtrado para el índice
  const paginasFiltradas = albumPaginas.filter((p) => {
    const q = filtroBusqueda.toLowerCase();
    return (
      (p.titulo || "").toLowerCase().includes(q) ||
      (p.contenido || "").toLowerCase().includes(q) ||
      (p.fecha || "").toLowerCase().includes(q)
    );
  });

  return (
    <div
      className="relative min-h-[calc(100vh-75px)] flex flex-col items-center justify-between px-3 sm:px-6 py-4 select-none overflow-hidden bg-[#09090b] text-zinc-100"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Barra Superior Discreta y Oscura */}
      <header className="relative z-30 w-full max-w-4xl flex items-center justify-between mb-3 px-4 py-2.5 rounded-xl bg-[#111114] border border-zinc-800 text-zinc-300 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <Bookmark className="text-zinc-400 w-3.5 h-3.5" />
          <span className="font-serif tracking-wide text-zinc-200">
            {paginaActual === 0
              ? "Portada del Álbum"
              : paginaActual > totalPaginas
              ? "Dedicatoria"
              : `Recuerdo ${paginaActual} de ${totalPaginas}`}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Recuerdo al Azar */}
          <button
            onClick={recuerdoAlAzar}
            title="Ir a un recuerdo al azar"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition"
          >
            <Shuffle size={14} />
            <span className="hidden sm:inline">Al Azar</span>
          </button>

          {/* Índice de Recuerdos */}
          <button
            onClick={() => setMostrarIndice(true)}
            title="Abrir índice de fotos y recuerdos"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-medium transition border border-zinc-800"
          >
            <Grid size={14} />
            <span>Índice</span>
          </button>
        </div>
      </header>

      {/* ======================================================== */}
      {/* EL LIBRO DE FOTOS (CONTENEDOR OSCURO MINIMALISTA)        */}
      {/* ======================================================== */}
      <div className="relative z-20 w-full max-w-4xl flex-1 flex items-center justify-center my-auto perspective-book">
        {/* ---------------- CASO 1: PORTADA CERRADA COMPLETA ---------------- */}
        {paginaActual === 0 && (
          <div
            onClick={paginaSiguiente}
            className="group relative cursor-pointer w-full max-w-[420px] sm:max-w-[450px] rounded-2xl p-6 sm:p-8 flex flex-col justify-between items-center text-center transition-all duration-300 hover:border-zinc-700 border border-zinc-800 bg-[#111114] overflow-hidden"
          >
            {/* Lomo izquierdo sutil */}
            <div className="absolute top-0 left-0 bottom-0 w-4 bg-zinc-900/60 border-r border-zinc-800 pointer-events-none" />

            {/* Encabezado de la portada */}
            <div className="mt-2 z-10">
              <span className="text-[10px] font-mono tracking-[4px] uppercase text-zinc-500 block mb-1">
                Nuestra Historia
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-zinc-100 mt-1 leading-tight tracking-wide">
                Álbum de Recuerdos
              </h1>
              <div className="w-12 h-px bg-zinc-800 mx-auto my-3" />
              <p className="text-zinc-400 font-serif italic text-xs sm:text-sm">
                Nuestra historia de amor en fotografías
              </p>
            </div>

            {/* Foto central compacta y elegante */}
            <div className="relative my-6 z-10">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-zinc-800 border border-zinc-700 transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/img15.jpeg"
                    alt="Portada Álbum"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Pie de la portada y botón visible */}
            <div className="z-10 mt-2 w-full">
              <p className="text-zinc-500 text-[11px] sm:text-xs font-serif mb-3">
                Cada página guarda una historia inolvidable
              </p>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-serif text-xs sm:text-sm tracking-wide transition">
                <span>Abrir álbum</span>
                <ChevronRight size={14} />
              </div>
            </div>
          </div>
        )}

        {/* ---------------- CASO 2: RECUERDOS EN EL LIBRO (DOBLE PÁGINA) ---------------- */}
        {paginaActual >= 1 && paginaActual <= totalPaginas && datosPagina && (
          <div
            className={`relative w-full rounded-2xl overflow-hidden border border-zinc-800 transition-transform duration-400 bg-[#101013] ${
              hojaGirando
                ? direccionGiro === "next"
                  ? "rotate-y-[-3deg] scale-[0.99]"
                  : "rotate-y-[3deg] scale-[0.99]"
                : ""
            }`}
          >
            {/* Lomo central para versión escritorio */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-800 z-30 pointer-events-none" />

            {/* VISTA ESCRITORIO (2 PÁGINAS OSCURAS PROFESIONALES) */}
            <div className="hidden md:grid md:grid-cols-2 min-h-[520px] text-zinc-100">
              {/* PÁGINA IZQUIERDA: FOTO / MARCO */}
              <div
                onClick={paginaAnterior}
                className="relative p-7 flex flex-col justify-between items-center paper-dark-left border-r border-zinc-800 cursor-pointer group"
              >
                {/* Encabezado de la foto */}
                <div className="w-full flex items-center justify-between text-zinc-400 text-xs font-serif">
                  <div className="flex items-center gap-1.5 text-zinc-400 font-mono">
                    <Calendar size={13} />
                    <span>{datosPagina.fecha}</span>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                    Foto #{datosPagina.numero}
                  </span>
                </div>

                {/* Marco de fotografía sobrio y elegante */}
                <div className="relative my-auto w-full max-w-[320px] bg-[#141418] p-3 pb-4 rounded-xl border border-zinc-800 group-hover:border-zinc-700 transition-colors duration-200">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setFotoAmpliada(datosPagina.foto);
                    }}
                    className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-black/60 cursor-zoom-in"
                  >
                    <Image
                      src={datosPagina.foto}
                      alt={datosPagina.titulo}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 bg-zinc-900/90 text-zinc-200 text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 border border-zinc-700">
                        <Maximize2 size={12} /> Ampliar
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <p className="font-serif font-semibold text-zinc-200 text-sm">
                      {datosPagina.titulo}
                    </p>
                  </div>
                </div>

                {/* Pie de foto sutil */}
                <div className="w-full text-center">
                  <p className="font-serif text-xs text-zinc-500">
                    Nuestra historia juntos
                  </p>
                </div>

                {/* Botón flecha izquierda */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    paginaAnterior();
                  }}
                  className="absolute bottom-3 left-3 p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition"
                  title="Página anterior"
                >
                  <ChevronLeft size={18} />
                </button>
              </div>

              {/* PÁGINA DERECHA: HISTORIA Y DATOS DE LA FOTO */}
              <div
                onClick={paginaSiguiente}
                className="relative p-7 flex flex-col justify-between items-stretch paper-dark-right cursor-pointer group overflow-hidden"
              >
                {/* Encabezado */}
                <div className="w-full flex items-center justify-between text-xs text-zinc-400 font-serif pb-2 border-b border-zinc-800/80">
                  <span className="uppercase tracking-widest text-[10px] text-zinc-500 font-mono">
                    Nuestra Historia
                  </span>
                  <div className="flex items-center gap-1 text-zinc-400 font-mono">
                    <span>Recuerdo #{datosPagina.numero}</span>
                  </div>
                </div>

                {/* Contenido central: Título y Datos */}
                <div className="my-auto flex flex-col justify-center py-2 px-1">
                  <div className="flex items-center gap-2 mb-1.5 text-zinc-500 text-xs font-mono">
                    <Calendar size={13} />
                    <span>{datosPagina.fecha}</span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-100 leading-snug">
                    {datosPagina.titulo}
                  </h2>

                  <div className="w-12 h-px bg-zinc-800 my-3" />

                  {/* Texto de la historia / datos de la foto con scroll suave */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="overflow-y-auto max-h-[300px] pr-2.5 custom-scrollbar cursor-text"
                  >
                    <p className="font-serif text-zinc-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line text-left">
                      {datosPagina.contenido}
                    </p>
                  </div>
                </div>

                {/* Barra inferior */}
                <div className="w-full flex items-center justify-between text-xs text-zinc-400 font-serif pt-3 border-t border-zinc-800/80">
                  <span className="text-zinc-500 text-xs font-mono">
                    Recuerdos grabados en el alma
                  </span>

                  <span className="text-zinc-500 text-[11px] font-mono">
                    {datosPagina.numero} de {totalPaginas}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      paginaSiguiente();
                    }}
                    className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition"
                    title="Página siguiente"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* VISTA MÓVIL (PÁGINA VERTICAL COMPACTA Y OSCURA) */}
            <div className="md:hidden flex flex-col p-4 sm:p-5 paper-dark-single text-zinc-100">
              <div className="flex items-center justify-between text-xs text-zinc-400 font-serif mb-3">
                <div className="flex items-center gap-1.5 text-zinc-400 font-mono">
                  <Calendar size={12} />
                  <span>{datosPagina.fecha}</span>
                </div>
                <div className="flex items-center gap-1 text-zinc-400 font-mono text-[11px]">
                  <span>Recuerdo #{datosPagina.numero}</span>
                </div>
              </div>

              {/* Foto en Móvil */}
              <div className="relative w-full max-w-[280px] mx-auto bg-[#141418] p-2.5 pb-3.5 rounded-xl border border-zinc-800">
                <div
                  onClick={() => setFotoAmpliada(datosPagina.foto)}
                  className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-black/60 cursor-zoom-in"
                >
                  <Image
                    src={datosPagina.foto}
                    alt={datosPagina.titulo}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-2 right-2 bg-zinc-900/90 text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1 border border-zinc-700">
                    <Maximize2 size={9} /> Ver
                  </div>
                </div>
                <p className="mt-2 text-center font-serif text-xs font-semibold text-zinc-200">
                  {datosPagina.titulo}
                </p>
              </div>

              {/* Texto en Móvil */}
              <div className="mt-4 px-1">
                <h2 className="font-serif text-base sm:text-lg font-bold text-zinc-100 leading-snug mb-2 text-center">
                  {datosPagina.titulo}
                </h2>
                <div className="max-h-[190px] overflow-y-auto pr-1 text-left custom-scrollbar">
                  <p className="font-serif text-xs text-zinc-300 leading-relaxed whitespace-pre-line">
                    {datosPagina.contenido}
                  </p>
                </div>
              </div>

              {/* Barra inferior en Móvil */}
              <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs">
                <span className="text-[10px] text-zinc-500 font-mono">
                  {datosPagina.numero} de {totalPaginas}
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={paginaAnterior}
                    className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800"
                  >
                    <ChevronLeft size={15} />
                  </button>
                  <button
                    onClick={paginaSiguiente}
                    className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800"
                  >
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- CASO 3: CONTRAPORTADA / DEDICATORIA FINAL ---------------- */}
        {paginaActual > totalPaginas && (
          <div className="w-full max-w-[420px] sm:max-w-[460px] rounded-2xl p-6 sm:p-8 flex flex-col justify-between items-center text-center border border-zinc-800 bg-[#111114] text-zinc-100 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl mb-3">
              ❤️‍🩹
            </div>

            <div className="my-auto space-y-4">
              <span className="text-zinc-500 text-[10px] font-mono tracking-[3px] uppercase">
                Dedicatoria
              </span>

              <p className="font-serif text-xl sm:text-2xl font-bold leading-relaxed text-zinc-200">
                Este es el final,
                <br />
                del album.
              </p>

              <div className="w-10 h-px bg-zinc-800 mx-auto" />

              <p className="font-serif text-xl sm:text-2xl font-bold leading-relaxed text-zinc-300">
                Pero no de nuestra historia,
                <br />
                Y si se acaba nuestra historia,
              </p>

              <p className="font-serif text-2xl sm:text-3xl font-bold text-zinc-100 pt-1">
                Sabes que te amé ❤️‍🩹
              </p>

              <p className="text-zinc-500 text-xs font-serif italic max-w-xs mx-auto">
                Nuestra historia no tiene punto final... cada momento vive en nuestro corazón.
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-2.5 w-full justify-center">
              <button
                onClick={() => irAPagina(0, "prev")}
                className="px-5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-serif flex items-center justify-center gap-1.5 transition"
              >
                <Bookmark size={13} />
                <span>Portada</span>
              </button>

              <button
                onClick={() => irAPagina(1, "prev")}
                className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 text-xs font-serif transition"
              >
                <span>Hojear desde el inicio</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* BARRA INFERIOR DE NAVEGACIÓN Y PROGRESO                  */}
      {/* ======================================================== */}
      <footer className="relative z-30 w-full max-w-xl mt-3 flex flex-col items-center gap-2">
        <div className="w-full flex items-center gap-2.5 px-2">
          <button
            onClick={paginaAnterior}
            disabled={paginaActual === 0}
            className={`p-1.5 rounded-lg border border-zinc-800 transition-all ${
              paginaActual === 0
                ? "opacity-20 cursor-not-allowed text-zinc-600"
                : "bg-zinc-900 hover:bg-zinc-800 text-zinc-300"
            }`}
            title="Página anterior"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex-1 flex flex-col gap-1">
            <input
              type="range"
              min="0"
              max={totalPaginas + 1}
              value={paginaActual}
              onChange={(e) => {
                const val = Number(e.target.value);
                irAPagina(val, val > paginaActual ? "next" : "prev");
              }}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-400 hover:accent-zinc-300 transition"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>Portada</span>
              <span className="text-zinc-400 font-sans">
                {paginaActual > 0 && paginaActual <= totalPaginas
                  ? `Recuerdo ${paginaActual}`
                  : paginaActual === 0
                  ? "Inicio"
                  : "Final"}
              </span>
              <span>Final</span>
            </div>
          </div>

          <button
            onClick={paginaSiguiente}
            disabled={paginaActual > totalPaginas}
            className={`p-1.5 rounded-lg border border-zinc-800 transition-all ${
              paginaActual > totalPaginas
                ? "opacity-20 cursor-not-allowed text-zinc-600"
                : "bg-zinc-900 hover:bg-zinc-800 text-zinc-200"
            }`}
            title="Página siguiente"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </footer>

      {/* ======================================================== */}
      {/* MODAL: ÍNDICE DE RECUERDOS & FOTOGRAFÍAS                 */}
      {/* ======================================================== */}
      {mostrarIndice && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3 sm:p-5">
          <div className="bg-[#111114] border border-zinc-800 w-full max-w-3xl max-h-[85vh] rounded-2xl p-5 sm:p-6 flex flex-col text-zinc-100 overflow-hidden">
            <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Bookmark className="text-zinc-400" size={18} />
                <h3 className="text-lg sm:text-xl font-serif font-bold text-zinc-100">
                  Índice de Fotos & Recuerdos
                </h3>
              </div>
              <button
                onClick={() => setMostrarIndice(false)}
                className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white transition"
              >
                <X size={16} />
              </button>
            </div>

            {/* Buscador */}
            <div className="my-3">
              <div className="relative w-full">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                />
                <input
                  type="text"
                  placeholder="Buscar por recuerdo, título o fecha..."
                  value={filtroBusqueda}
                  onChange={(e) => setFiltroBusqueda(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs focus:outline-none focus:border-zinc-600"
                />
              </div>
            </div>

            {/* Grid de Recuerdos */}
            <div className="flex-1 overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 custom-scrollbar">
              <div
                onClick={() => {
                  irAPagina(0);
                  setMostrarIndice(false);
                }}
                className="cursor-pointer p-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 transition flex items-center gap-2.5 group"
              >
                <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 font-serif text-lg">
                  📖
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 font-mono">Inicio</span>
                  <p className="font-serif font-bold text-xs text-zinc-300 group-hover:text-white">
                    Portada del Álbum
                  </p>
                </div>
              </div>

              {paginasFiltradas.map((item) => (
                <div
                  key={item.numero}
                  onClick={() => {
                    irAPagina(item.numero);
                    setMostrarIndice(false);
                  }}
                  className={`cursor-pointer p-2.5 rounded-xl border transition flex items-center gap-2.5 group ${
                    paginaActual === item.numero
                      ? "bg-zinc-800 border-zinc-600"
                      : "bg-zinc-900/40 hover:bg-zinc-900 border-zinc-800"
                  }`}
                >
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-zinc-800 bg-black">
                    <Image
                      src={item.foto}
                      alt={item.titulo}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] text-zinc-500 font-mono mb-0.5">
                      Recuerdo #{item.numero}
                    </div>
                    <p className="font-serif text-xs font-semibold text-zinc-200 truncate">
                      {item.titulo}
                    </p>
                    <p className="text-[10px] text-zinc-400 truncate font-mono">
                      {item.fecha}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {paginasFiltradas.length === 0 && (
              <div className="py-10 text-center text-zinc-500 font-serif italic text-xs">
                No se encontraron recuerdos con ese filtro.
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL: FOTO AMPLIADA (LIGHTBOX)                          */}
      {/* ======================================================== */}
      {fotoAmpliada && (
        <div
          onClick={() => setFotoAmpliada(null)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-3xl max-h-[88vh] rounded-2xl overflow-hidden border border-zinc-800 p-2 bg-[#0c0c0e]">
            <button
              onClick={() => setFotoAmpliada(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-black/70 border border-zinc-700 text-zinc-300 hover:text-white transition"
            >
              <X size={18} />
            </button>
            <div className="relative w-full aspect-[4/3] max-h-[78vh] min-w-[280px] sm:min-w-[480px]">
              <Image
                src={fotoAmpliada}
                alt="Foto ampliada del recuerdo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
