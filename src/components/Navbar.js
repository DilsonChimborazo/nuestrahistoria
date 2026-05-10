"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="
      flex justify-center gap-10 p-5 
      bg-black/20 backdrop-blur-md
      border-b border-white/10
      sticky top-0 z-50
    ">
      <Link href="/" className="text-white/70 hover:text-white transition">
        Inicio
      </Link>

      <Link href="/timeline" className="text-white/70 hover:text-white transition">
        Historia
      </Link>

      <Link href="/carta" className="text-white/70 hover:text-white transition">
        Carta​
      </Link>
    </nav>
  );
}
