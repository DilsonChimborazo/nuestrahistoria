"use client"

export default function Modal ({visible, onClose, contenido}){
    if(!visible) return null;

return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
    
    <div className="bg-white relative p-6 sm:p-10 rounded-xl shadow-xl w-full max-w-md">
      
      <button
        className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-red-500"
        onClick={onClose}
      >
        ✕
      </button>

      <p className="text-center text-gray-800">
        {contenido}
      </p>
    </div>

  </div>
);

}