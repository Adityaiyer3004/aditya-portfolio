"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-neutral-800 bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-lg font-semibold text-white hover:opacity-90"
        >
          Aditya <span className="text-indigo-400">Iyer</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm text-neutral-300">
          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>

          <Link href="/about" className="hover:text-white">
            About / Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
