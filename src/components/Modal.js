"use client"

export default function Modal({ visible, onClose, contenido, imagen }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      
      <div className="bg-white relative p-6 sm:p-10 rounded-xl shadow-xl w-full max-w-3xl max-h-[85vh] overflow-y-auto flex flex-col gap-6">

        <button
          className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row items-center gap-6">

          {imagen && (
            <img
              className="rounded-2xl w-full md:w-1/2 max-h-[300px] object-cover hover:scale-105 transition-transform duration-300"
              src={imagen}
              alt="Imagen del modal"
            />
          )}

          <p className="text-gray-800 text-center md:text-left break-words">
            {contenido}
          </p>

        </div>

      </div>

    </div>
  );
}
