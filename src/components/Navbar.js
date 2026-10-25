"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="
      flex justify-center gap-10 p-4
      bg-[#0d0d10]/95 backdrop-blur-sm
      border-b border-[#252528]
      sticky top-0 z-50
      text-sm font-medium
    ">
      <Link href="/" className="text-zinc-500 hover:text-zinc-200 transition-colors">
        Inicio
      </Link>

      <Link href="/timeline" className="text-zinc-500 hover:text-zinc-200 transition-colors">
        Historia
      </Link>

      <Link href="/carta" className="text-zinc-500 hover:text-zinc-200 transition-colors">
        Carta
      </Link>

      <Link href="/razones" className="text-zinc-500 hover:text-zinc-200 transition-colors">
        Álbum
      </Link>
    </nav>
  );
}
