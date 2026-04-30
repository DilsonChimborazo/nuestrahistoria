"use client";

export default function Modal({ visible, onClose, contenido, imagen }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4">

      <div className="
        relative
        bg-white/5 backdrop-blur-xl 
        border border-white/10 
        rounded-2xl 
        p-6 sm:p-8
        w-full max-w-3xl 
        max-h-[85vh] overflow-y-auto
        flex flex-col gap-6
        animate-fadeScale
      ">
        <button
          className="absolute top-3 right-4 text-lg text-white/50 hover:text-red-400"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {imagen && (
            <img
              className="rounded-2xl w-full md:w-1/2 max-h-[300px] object-cover"
              src={imagen}
              alt="Imagen"
            />
          )}
          <p className="text-white/80 text-center md:text-left">
            {contenido}
          </p>
        </div>
      </div>
    </div>
  );
}
