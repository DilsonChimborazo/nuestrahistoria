"use client"

export default function Card ({titulo, onClick, imagen}){
    return(
        <div className="bg-white/10 rounded-lg p-3 shadow-lg my-2 cursor-pointer" onClick={onClick}>
            <img className="rounded-lg w-full" src={imagen} alt="" />
            <h3 className="text-center text-2xl pt-2">{titulo}</h3>
        </div>
    )
}