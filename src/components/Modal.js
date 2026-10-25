"use client";

export default function Modal({ visible, onClose, titulo, contenido, imagen }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4">
      <div className="
        relative
        bg-[#121215]
        border border-[#252528]
        rounded-2xl
        p-6 sm:p-8
        w-full max-w-3xl
        max-h-[85vh] overflow-y-auto custom-scrollbar
        flex flex-col gap-6
      ">
        <button
          className="absolute top-4 right-4 text-[#71717a] hover:text-[#d4d4d8] transition"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {imagen && (
            <img
              className="rounded-xl w-full md:w-1/2 max-h-[320px] object-cover border border-[#252528]"
              src={imagen}
              alt={titulo || "Imagen"}
            />
          )}
          <div className="flex-1 text-left space-y-3">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#d4d4d8]">
              {titulo}
            </h3>
            <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed font-serif whitespace-pre-line">
              {contenido}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
