"use client"

import Link from "next/link"

export default function Navbar () {
    return(
        <nav className="flex gap-10 p-10 bg-black/30">
            <Link href="/" className="hover:bg-pink-500 rounded-full px-3">Inicio</Link>
            <Link href="/timeline" className="hover:bg-pink-500 rounded-full px-3">Historia</Link>
            <Link href="/carta" className="hover:bg-pink-500 rounded-full px-3">Carta</Link>
        </nav>
    ); 
}
