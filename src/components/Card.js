"use client"

export default function Card ({titulo, onClick, imagen, fecha}){
    return(
        <div className="bg-white/10 rounded-lg p-3 shadow-lg my-2 cursor-pointer" onClick={onClick}>
            <p className="text-center text-2xl py-2">{fecha}</p>
            <img className="rounded-lg w-full" src={imagen} alt="" />
            <h3 className="text-center text-2xl pt-2">{titulo}</h3>
        </div>
    )
}